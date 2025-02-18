"use server";

import { AuthResponse } from "../types/auth";
import { prisma } from "../utils/constants/prisma";
import { generateVerificationToken, validateInput } from "../utils/helper/auth";
import bcrypt from "bcrypt";

async function checkUserExists(email: string): Promise<boolean> {
  const user = await prisma.users.findUnique({ where: { email }, select: { id: true, password_hash: true } });
  return !!user;
}

export async function saveUser(email: string, passwordHash: string, otp: string, otpExpires: Date) {
  await prisma.users.create({
    data: {
      email,
      password_hash: passwordHash,
      otp,
      otpExpires,
    },
  });
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
