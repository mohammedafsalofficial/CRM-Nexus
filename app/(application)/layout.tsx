import { cookies } from "next/headers";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import { decodeJwtToken } from "../utils/helper/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();

  const authToken = cookieStore.get("authToken")?.value as string;
  const user = decodeJwtToken(authToken);

  if (!user) {
    redirect("/signin");
  }

  return (
    <section className="h-screen p-5">
      <div className="h-full flex items-center justify-between">
        <div className="h-full w-1/5 p-7 bg-gray-100 rounded-lg text-secondary">
          <Sidebar />
        </div>

        <div className="h-full w-4/5 flex flex-col items-start space-y-5">
          <Navbar />
          <div className="h-[0.15rem] w-full bg-gray-200"></div>
          <div className="px-5 h-full w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
