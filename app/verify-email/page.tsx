import { redirect } from "next/navigation";
import OTPCard from "../components/UI/OTPCard";
import { decodeJwtToken } from "../utils/helper/auth";

type OtpPageProps = {
  searchParams: Promise<{ token: string }>;
};

export default async function OtpPage({ searchParams }: OtpPageProps) {
  const { token } = await searchParams;

  const decodedToken = decodeJwtToken(token);

  if (!decodedToken?.email) {
    redirect("/signup");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-900 text-primary">
      <div className="p-6 w-96 bg-gray-800 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-10">Verify Your Email</h1>
        <OTPCard token={token} />
      </div>
    </div>
  );
}
