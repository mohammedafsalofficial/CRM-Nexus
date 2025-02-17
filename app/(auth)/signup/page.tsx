import SignupCard from "@/app/components/UI/SignupCard";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-primary p-10 space-y-6">
        <h1 className="text-5xl font-semibold">Welcome to CRM Nexus</h1>
        <div className="text-center space-y-2">
          <p className="text-2xl my-1">Simplify Your Business Operations!</p>
          <p>Sign up now and take control of your business with ease! 🚀</p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-200 p-10">
        <SignupCard />
      </div>
    </>
  );
}
