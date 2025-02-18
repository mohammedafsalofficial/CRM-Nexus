import { Role } from "@prisma/client";
import { prisma } from "../utils/constants/prisma";

export async function checkUserExists(email: string): Promise<boolean> {
  const user = await prisma.users.findUnique({ where: { email }, select: { id: true, password_hash: true } });
  return !!user;
}

export async function saveUser(email: string, passwordHash: string, otp: string, otpExpires: Date, role: Role) {
  await prisma.users.create({
    data: {
      email,
      password_hash: passwordHash,
      otp,
      otpExpires,
      role,
    },
  });
}
