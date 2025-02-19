"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AuthContext = createContext({ role: "USER", setRole: (role: string) => {} });

export function AuthProvider({ userId, children }: { userId: number; children: React.ReactNode }) {
  const [role, setRole] = useState("USER");

  const fetchRole = useCallback(async () => {
    try {
      const response = await fetch(`/api/user/role?userId=${userId}`);

      if (!response.ok) throw new Error("Failed to fetch role.");

      const data = await response.json();
      setRole(data.role);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("An unknown error occured.");
      }
    }
  }, [userId]);

  useEffect(() => {
    fetchRole();
  }, [fetchRole]);

  return <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
