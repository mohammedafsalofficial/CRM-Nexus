"use server";

import type { Prisma, Role, users } from "@prisma/client";
import { prisma } from "../../utils/constants/prisma";

export async function checkUserExists(email: string): Promise<boolean> {
  const user = await prisma.users.findUnique({ where: { email }, select: { id: true, password_hash: true } });
  return !!user;
}

export async function saveUser(email: string, passwordHash: string, otp: string, otpExpires: Date, role: Role) {
  console.log(email.split("@").at(0));
  await prisma.users.create({
    data: {
      email,
      password_hash: passwordHash,
      full_name: email.split("@").at(0),
      otp,
      otpExpires,
      role,
    },
  });
}

export async function getUser(userId: number): Promise<users> {
  await new Promise((resolve) => setInterval(() => resolve("Hello"), 1000));
  return (await prisma.users.findUnique({ where: { id: userId } }))!;
}

export async function getUserRole(userId: number) {
  const user = (await prisma.users.findUnique({ where: { id: userId }, select: { role: true } })) as { role: Role };
  return user.role;
}

export async function updateUser(userId: number, user: Prisma.usersUpdateInput) {
  const updatedUser = await prisma.users.update({
    where: { id: userId },
    data: user,
  });

  return updatedUser;
}
