import { prisma } from "@/app/utils/constants/prisma";
import { generateAuthToken, validateInput } from "@/app/utils/helper/auth";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { AuthResponse } from "@/app/types/auth";
import { cookies } from "next/headers";
import { checkUserExists } from "@/app/lib/db";

export async function POST(req: Request): Promise<NextResponse<AuthResponse>> {
  const { email, password } = await req.json();
  const cookieStore = await cookies();

  const validationError = validateInput(email, password);
  if (validationError) {
    return NextResponse.json(validationError, { status: 400 });
  }

  if (!(await checkUserExists(email))) {
    return NextResponse.json({ success: false, message: "Email not found! Please Signup" }, { status: 400 });
  }

  const {
    id: userId,
    password_hash: userHashedPasswordDB,
    isVerified,
  } = (await prisma.users.findUnique({ where: { email } })) as {
    id: number;
    password_hash: string;
    isVerified: boolean;
  };

  if (!(await bcrypt.compare(password, userHashedPasswordDB))) {
    return NextResponse.json({ success: false, message: "Incorrect Password!" }, { status: 400 });
  }

  if (!isVerified) {
    return NextResponse.json({ success: false, message: "Email not verified!" }, { status: 400 });
  }

  const authToken = generateAuthToken(userId, email);

  cookieStore.set("authToken", authToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 60 * 60,
  });

  return NextResponse.json({ success: true, message: "Logged in!" }, { status: 200 });
}
