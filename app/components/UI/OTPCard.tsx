"use client";

import { resendOtp, verifyOtp } from "@/app/actions/otp";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useActionState, useEffect, useState } from "react";

type OTPCardProps = {
  token: string;
};

export default function OTPCard({ token }: OTPCardProps) {
  const [otp, setOtp] = useState<string>("");
  const [state, formAction, pending] = useActionState(verifyOtp, {
    success: false,
    message: null,
  });

  const [resendState, resendAction, resendPending] = useActionState(resendOtp, {
    success: false,
    message: null,
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      setTimeout(() => router.push("/signin"), 2000);
    }
  }, [state, router]);

  function handleOtpChange(e: ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    setOtp(value);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm space-y-5">
      <form action={formAction} className="flex flex-col items-center justify-center space-y-5 w-full">
        <input type="hidden" name="token" value={token} />

        <input
          className="h-12 w-full text-center text-3xl tracking-widest outline-none p-3 bg-gray-900 text-white rounded-lg border border-gray-700 focus:border-violet-500 transition-all duration-200"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Enter OTP"
          onChange={handleOtpChange}
          name="otp"
          value={otp}
          maxLength={4}
        />

        <button
          type="submit"
          className="relative w-full h-12 text-white text-lg font-medium rounded-lg bg-gradient-to-r bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
          disabled={pending}
        >
          {pending ? (
            <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : (
            "Verify Email"
          )}
        </button>

        {state.message && (
          <div
            className={`w-full p-4 rounded-lg text-sm font-medium border shadow-md ${
              state.success ? "bg-green-100 text-green-800 border-green-400" : "bg-red-100 text-red-800 border-red-400"
            }`}
          >
            {state.message}
          </div>
        )}
      </form>

      <div className="flex justify-between w-full">
        <form action={resendAction}>
          <input type="hidden" name="token" value={token} />
          <button
            type="submit"
            className="text-sm text-violet-500 hover:underline disabled:text-gray-400"
            disabled={resendPending}
          >
            {resendPending ? "Resending..." : "Resend Code"}
          </button>
        </form>

        <Link href="/signup" className="text-sm text-gray-400 hover:text-white transition-all">
          Go to Signup
        </Link>
      </div>

      {resendState.message && (
        <div
          className={`w-full p-4 rounded-lg text-sm font-medium border shadow-md ${
            resendState.success
              ? "bg-green-100 text-green-800 border-green-400"
              : "bg-red-100 text-red-800 border-red-400"
          }`}
        >
          {resendState.message}
        </div>
      )}
    </div>
  );
}
