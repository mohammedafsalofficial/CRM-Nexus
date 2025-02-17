"use client";

import { signup } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

export default function SignupForm() {
  const [state, formAction, pending] = useActionState(signup, {
    success: false,
    message: null,
  });
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      setTimeout(() => router.push(`/verify-email?token=${state.token}`), 2000);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="flex flex-col text-left mt-5 md:mt-10 w-full">
      {state.message && (
        <div
          className={`p-3 rounded-md text-sm mb-5 border ${
            state.success ? "bg-green-100 text-green-700 border-green-500" : "bg-red-100 text-red-700 border-red-500"
          }`}
        >
          {state.message}
        </div>
      )}

      <label className="text-secondary" htmlFor="email">
        Email
      </label>
      <input
        className="text-secondary outline-none border border-gray-300 px-3 py-2 w-full"
        type="email"
        placeholder="yourname@email.com"
        name="email"
      />

      <label className="text-secondary mt-3" htmlFor="password">
        Password
      </label>
      <input
        className="text-secondary outline-none border border-gray-300 px-3 py-2 w-full"
        type="password"
        placeholder="Password@123"
        name="password"
      />

      <button
        type="submit"
        className="bg-primary text-white text-sm h-10 mt-5 flex items-center justify-center gap-2 w-full"
        disabled={pending}
      >
        {pending && (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        )}
        {!pending && "Sign Up"}
      </button>
    </form>
  );
}
