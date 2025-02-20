import { AtSign, Phone, ShieldCheck, User } from "lucide-react";
import ProfileInput from "./ProfileInput";
import WrapperCard from "./WrapperCard";
import type { ProfileInformationType } from "@/types/userProfile";

export default function ProfileInformation({ fullName, email, mobileNumber, role }: ProfileInformationType) {
  return (
    <WrapperCard>
      <h1 className="font-semibold text-secondary text-xl mb-5">Personal Information</h1>
      <div className="flex flex-col items-start justify-center space-y-4">
        <ProfileInput inputType="text" Icon={User} labelText={"Full Name"} inputValue={fullName} />
        <ProfileInput inputType="email" Icon={AtSign} labelText={"Email"} inputValue={email} />
        <ProfileInput inputType="tel" Icon={Phone} labelText={"Mobile Number"} inputValue={mobileNumber} />
        <ProfileInput inputType="text" Icon={ShieldCheck} labelText={"Role"} inputValue={role} />
      </div>
    </WrapperCard>
  );
}
