"use server";

import { PrismaClient } from "@prisma/client";
import { generateVerificationToken, hashPassword, validateInput } from "../utils/helper/auth";
import { generateOTP, sendVerficationOTP } from "../utils/helper/otp";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export type AuthResponse = {
  success: boolean;
  message: string | null;
  token?: string;
};

async function checkUserExists(email: string): Promise<boolean> {
  const user = await prisma.users.findUnique({ where: { email }, select: { id: true, password_hash: true } });
  return !!user;
}

async function saveUser(email: string, passwordHash: string, otp: string, otpExpires: Date) {
  await prisma.users.create({
    data: {
      email,
      password_hash: passwordHash,
      otp,
      otpExpires,
    },
  });
}

export async function signup(previousState: AuthResponse, formData: FormData): Promise<AuthResponse> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validationError = validateInput(email, password);
  if (validationError) return validationError;

  if (await checkUserExists(email)) {
    return { success: false, message: "Email exists!" };
  }

  const hashedPassword = await hashPassword(password);
  const token = generateVerificationToken(email);
  const { otp, otpExpires } = generateOTP();

  await saveUser(email, hashedPassword, otp, otpExpires);

  const emailResponse = await sendVerficationOTP(email, otp, token);

  return emailResponse;
}

export async function signin(previousState: AuthResponse, formData: FormData): Promise<AuthResponse> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validationError = validateInput(email, password);
  if (validationError) return validationError;

  if (!(await checkUserExists(email))) {
    return { success: false, message: "Email not found! Please Signup" };
  }

  const { password_hash: userHashedPasswordDB, isVerified } = (await prisma.users.findUnique({
    where: {
      email,
    },
    select: {
      password_hash: true,
      isVerified: true,
    },
  })) as { password_hash: string; isVerified: boolean };

  if (!(await bcrypt.compare(password, userHashedPasswordDB))) {
    return { success: false, message: "Incorrect Password!" };
  }

  if (!isVerified) {
    return { success: false, message: "Email not verified!" };
  }

  const token = generateVerificationToken(email);

  return { success: true, message: "Logged in!", token };
}
