import { cookies } from "next/headers";
import Navbar from "../../components/UI/Navbar";
import Sidebar from "../../components/UI/Sidebar";
import { isAuthencticated } from "../actions/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import NavbarLoader from "@/components/loader/NavbarLoader";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value as string;
  const userId = await isAuthencticated(authToken);

  if (!userId) {
    redirect("/signin");
  }

  return (
    <section className="h-screen flex">
      <div className="fixed left-0 top-0 h-screen w-1/5 p-7 bg-gray-100 text-secondary shadow-lg">
        <Sidebar />
      </div>

      <div className="ml-[20%] w-4/5 h-screen flex flex-col">
        <Suspense fallback={<NavbarLoader />}>
          <Navbar userId={userId} />
        </Suspense>

        <div className="h-[0.15rem] w-full bg-gray-200 my-2"></div>

        <div className="px-5 flex-1 overflow-y-auto">{children}</div>
      </div>
    </section>
  );
}
