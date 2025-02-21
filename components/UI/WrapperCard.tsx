import React from "react";

export default function WrapperCard({ children }: { children: React.ReactNode }) {
  return <div className="bg-gray-100 min-h-10 rounded-xl mt-5 p-7">{children}</div>;
}
