import SigninCard from "@/components/UI/SigninCard";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-primary p-6 md:p-10 space-y-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Login to CRM Nexus</h1>
        <p className="text-lg md:text-xl">Manage Your Business Effortlessly!</p>
        <p className="text-sm md:text-base">
          Sign in to access your dashboard and streamline your business operations. Stay organized, stay ahead! 🚀
        </p>
      </div>

      <div className="flex items-center justify-center bg-gray-200 p-6 md:p-10">
        <SigninCard />
      </div>
    </>
  );
}
