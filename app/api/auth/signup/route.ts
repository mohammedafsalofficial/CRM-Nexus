import { saveUser } from "@/app/actions/db";
import { sendVerficationOTP } from "@/lib/otp";
import { AuthResponse } from "@/types/auth";
import { prisma } from "@/utils/constants/prisma";
import { generateVerificationToken, hashPassword, validateInput } from "@/utils/helper/auth";
import { generateOTP } from "@/utils/helper/otp";
import { Role } from "@prisma/client";
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

  if (email === "mohammedafsal@finestcoder.com") {
    await saveUser(email, hashedPassword, otp, otpExpires, Role.SUPER_ADMIN);
  } else {
    await saveUser(email, hashedPassword, otp, otpExpires, Role.USER);
  }

  const emailResponse = await sendVerficationOTP(email, otp, token);

  return NextResponse.json(emailResponse, { status: emailResponse.success ? 200 : 400 });
}
