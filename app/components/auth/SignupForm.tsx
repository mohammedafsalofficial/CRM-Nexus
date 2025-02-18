"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthResponse } from "@/app/types/auth";

export default function SignupForm() {
  const [authResponse, setAuthResponse] = useState<AuthResponse>({
    success: false,
    message: null,
    token: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const currentTarget = e.currentTarget;

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data: AuthResponse = await response.json();

    setAuthResponse(data);
    setLoading(false);

    if (data.success) {
      currentTarget.reset();
      setTimeout(() => {
        router.push(`/verify-email?token=${data.token}`);
      }, 2000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-left mt-5 md:mt-10 w-full">
      {authResponse.message && (
        <div
          className={`p-3 rounded-md text-sm mb-5 border ${
            authResponse.success
              ? "bg-green-100 text-green-700 border-green-500"
              : "bg-red-100 text-red-700 border-red-500"
          }`}
        >
          {authResponse.message}
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
        disabled={loading}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        )}
        {!loading && "Sign Up"}
      </button>
    </form>
  );
}
