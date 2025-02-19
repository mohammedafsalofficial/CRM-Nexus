import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { AuthResponse } from "@/types/auth";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendVerficationOTP(email: string, otp: string, token: string): Promise<AuthResponse> {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",
    text: `Your verification OTP is: ${otp}. It is valid for 2 minutes.`,
    html: `<p>Your verification OTP is: <strong>${otp}</strong></p><p>It is valid for 2 minutes.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Verification OTP sent successfully!", token };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, message: "Error sending verification OTP" };
  }
}
