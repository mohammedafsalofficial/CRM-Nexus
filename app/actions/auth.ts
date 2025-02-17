"use server";

import { PrismaClient } from "@prisma/client";
import { generateOTP, generateVerificationToken, hashPassword, validateInput } from "../utils/helper/auth";
import { sendVerficationOTP } from "../utils/helper/otp";

const prisma = new PrismaClient();

export type SignupResponse = {
  success: boolean;
  message: string | null;
  token?: string;
};

async function checkUserExists(email: string): Promise<boolean> {
  const user = await prisma.users.findUnique({ where: { email }, select: { id: true } });
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

export async function signup(previousState: SignupResponse, formData: FormData): Promise<SignupResponse> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validationError = validateInput(email, password);
  if (validationError) return validationError;

  if (await checkUserExists(email)) return { success: false, message: "Email exists!" };

  const hashedPassword = await hashPassword(password);
  const { token } = generateVerificationToken(email);
  const { otp, otpExpires } = generateOTP();

  await saveUser(email, hashedPassword, otp, otpExpires);

  const emailResponse = await sendVerficationOTP(email, otp, token);

  return emailResponse;
}
