import SigninCard from "@/app/components/UI/SigninCard";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-primary p-10 space-y-6">
        <h1 className="text-5xl font-semibold">Login to CRM Nexus</h1>
        <div className="text-center space-y-2">
          <p className="text-2xl my-1">Manage Your Business Effortlessly!</p>
          <p>
            Sign in to access your dashboard and streamline your business operations. Stay organized, stay ahead! 🚀
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-200 p-10">
        <SigninCard />
      </div>
    </>
  );
}
