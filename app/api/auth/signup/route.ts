import { saveUser } from "@/app/actions/auth";
import { AuthResponse } from "@/app/types/auth";
import { prisma } from "@/app/utils/constants/prisma";
import { generateVerificationToken, hashPassword, validateInput } from "@/app/utils/helper/auth";
import { generateOTP, sendVerficationOTP } from "@/app/utils/helper/otp";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse<AuthResponse>> {
  const { email, password } = await req.json();

  const validationError = validateInput(email, password);
  if (validationError) {
    return NextResponse.json(validationError, { status: 400 });
  }

  const existingUser = await prisma.users.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ success: false, message: "User already exists!" }, { status: 400 });
  }

  const hashedPassword = await hashPassword(password);
  const token = generateVerificationToken(email);
  const { otp, otpExpires } = generateOTP();

  await saveUser(email, hashedPassword, otp, otpExpires);

  const emailResponse = await sendVerficationOTP(email, otp, token);

  return NextResponse.json(emailResponse, { status: emailResponse.success ? 200 : 400 });
}
