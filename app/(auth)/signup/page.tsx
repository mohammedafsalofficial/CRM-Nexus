import SignupCard from "@/app/components/UI/SignupCard";

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white bg-primary p-6 md:p-10 space-y-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">Welcome to CRM Nexus</h1>
        <p className="text-lg md:text-xl">Simplify Your Business Operations!</p>
        <p className="text-sm md:text-base">Sign up now and take control of your business with ease! 🚀</p>
      </div>

      <div className="flex items-center justify-center bg-gray-200 p-6 md:p-10">
        <SignupCard />
      </div>
    </>
  );
}
