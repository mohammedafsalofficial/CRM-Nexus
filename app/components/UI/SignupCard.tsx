import SignupForm from "../auth/SignupForm";
import GoogleIcon from "../svg/GoogleIcon";
import Divider from "./Divider";

export default function SignupCard() {
  return (
    <div className="bg-white w-1/2 p-10 z-10 rounded-2xl shadow-lg">
      <h1 className="text-center text-3xl">Signup</h1>

      <SignupForm />
      <Divider />
      <button className="w-full bg-gray-200 text-sm flex items-center justify-center space-x-1 h-10">
        <GoogleIcon />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}
