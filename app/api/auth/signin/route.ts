import { checkUserExists } from "@/app/actions/auth";
import { prisma } from "@/app/utils/constants/prisma";
import { generateVerificationToken, validateInput } from "@/app/utils/helper/auth";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { AuthResponse } from "@/app/types/auth";

export async function POST(req: Request): Promise<NextResponse<AuthResponse>> {
  const { email, password } = await req.json();

  console.log(email, password);

  const validationError = validateInput(email, password);
  if (validationError) {
    return NextResponse.json(validationError, { status: 400 });
  }

  if (!(await checkUserExists(email))) {
    return NextResponse.json({ success: false, message: "Email not found! Please Signup" }, { status: 400 });
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
    return NextResponse.json({ success: false, message: "Incorrect Password!" }, { status: 400 });
  }

  if (!isVerified) {
    return NextResponse.json({ success: false, message: "Email not verified!" }, { status: 400 });
  }

  const token = generateVerificationToken(email);

  return NextResponse.json({ success: true, message: "Logged in!", token }, { status: 200 });
}
