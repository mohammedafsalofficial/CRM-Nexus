import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthResponse } from "@/app/types/auth";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET as string;

export function validateInput(email: string, password: string): AuthResponse | null {
  if (!email && !password) return { success: false, message: "Email and Password cannot be empty" };
  if (!email) return { success: false, message: "Email cannot be empty" };
  if (!password) return { success: false, message: "Password cannot be empty" };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (!isEmailValid) return { success: false, message: "Invalid email format" };
  if (!isPasswordValid) {
    return {
      success: false,
      message: "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
    };
  }

  return null;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export function generateVerificationToken(email: string) {
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
  return token;
}

export function generateAuthToken(userId: number, email: string) {
  const authToken = jwt.sign({ userId, email }, SECRET_KEY, { expiresIn: "1h" });
  return authToken;
}

export function decodeJwtToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY) as JwtPayload;
  } catch (err) {
    console.error(err);
  }
}
