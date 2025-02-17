import Link from "next/link";
import SignupForm from "../auth/SignupForm";
import GoogleIcon from "../svg/GoogleIcon";
import Divider from "./Divider";

export default function SignupCard() {
  return (
    <div className="bg-white w-full max-w-sm md:w-1/2 p-6 md:p-10 z-10 rounded-2xl shadow-lg">
      <h1 className="text-center text-2xl md:text-3xl">Signup</h1>

      <SignupForm />
      <Divider />

      <button className="w-full bg-gray-200 text-sm flex items-center justify-center space-x-1 h-10">
        <GoogleIcon />
        <span>Continue with Google</span>
      </button>

      <p className="text-secondary text-center text-xs mt-5">
        By signing up, you agree to our <span className="text-primary">terms of service</span>
      </p>

      <p className="text-secondary text-center mt-5 md:mt-10">
        Already have an account?{" "}
        <Link href={"/signin"} className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
}
