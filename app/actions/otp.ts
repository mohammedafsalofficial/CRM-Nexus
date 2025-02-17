"use server";

import { PrismaClient } from "@prisma/client";
import { SignupResponse } from "./auth";
import { decodeJwtToken, generateOTP } from "../utils/helper/auth";
import { sendVerficationOTP } from "../utils/helper/otp";

const prisma = new PrismaClient();

export async function verifyOtp(previousState: SignupResponse, formData: FormData): Promise<SignupResponse> {
  const otp = formData.get("otp") as string;
  const token = formData.get("token") as string;

  if (!otp || otp.length !== 4) {
    return { success: false, message: "Invalid OTP. Must be 4 digits." };
  }

  const decoded = decodeJwtToken(token);
  if (!decoded?.email) {
    return { success: false, message: "Invalid or Expired token. Please Signup again." };
  }

  const { email } = decoded;

  const user = await prisma.users.findUnique({
    where: { email },
    select: { otp: true, otpExpires: true },
  });

  if (!user) {
    return { success: false, message: "Invalid token." };
  }
  if (!user.otpExpires || new Date(user.otpExpires) < new Date()) {
    return { success: false, message: "OTP has expired. Please request a new one." };
  }
  if (user.otp !== otp) {
    return { success: false, message: "Invalid OTP. Please try again." };
  }

  await prisma.users.update({
    where: { email },
    data: {
      isVerified: true,
    },
  });

  return { success: true, message: "OTP verified successfully" };
}

export async function resendOtp(previousState: SignupResponse, formData: FormData): Promise<SignupResponse> {
  const token = formData.get("token") as string;
  const decoded = decodeJwtToken(token);
  if (!decoded?.email) {
    return { success: false, message: "Invalid or Expired token. Please Signup again." };
  }

  const { email } = decoded;
  const { otp, otpExpires } = generateOTP();

  await prisma.users.update({
    where: { email },
    data: {
      otp,
      otpExpires,
    },
  });

  const emailResponse = await sendVerficationOTP(email, otp, token);

  return emailResponse;
}
