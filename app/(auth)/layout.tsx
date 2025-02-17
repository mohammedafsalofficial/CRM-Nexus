import { ReactNode } from "react";
import CurvyLines from "../components/svg/CurvyLines";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-full grid md:grid-cols-2">
      {children}
      <CurvyLines className="absolute bottom-0 left-0 w-full opacity-50" />
    </div>
  );
}
