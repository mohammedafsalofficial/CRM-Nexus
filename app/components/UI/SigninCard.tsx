import SigninForm from "../auth/SigninForm";
import GoogleIcon from "../svg/GoogleIcon";
import Divider from "./Divider";

export default function SigninCard() {
  return (
    <div className="bg-white w-1/2 p-10 z-10 rounded-2xl shadow-lg">
      <h1 className="text-center text-3xl">Login</h1>

      <SigninForm />
      <Divider />
      <button className="w-full bg-gray-200 text-sm flex items-center justify-center space-x-1 h-10">
        <GoogleIcon />
        <span>Continue with Google</span>
      </button>
    </div>
  );
}
