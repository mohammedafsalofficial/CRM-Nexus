export function generateOTP() {
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const otpExpires = new Date(Date.now() + 2 * 60 * 1000);

  return { otp, otpExpires };
}
