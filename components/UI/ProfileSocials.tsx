import { Instagram, Linkedin, Twitter } from "lucide-react";
import ProfileInput from "./ProfileInput";
import WrapperCard from "./WrapperCard";

export default function ProfileSocials() {
  return (
    <WrapperCard>
      <h1 className="font-semibold text-secondary text-xl mb-5">Socials</h1>
      <div className="flex flex-col items-start justify-center space-y-4">
        <ProfileInput type="text" Icon={Twitter} labelText={"Twitter"} />
        <ProfileInput type="text" Icon={Instagram} labelText={"Instagram"} />
        <ProfileInput type="text" Icon={Linkedin} labelText={"LinkedIn"} />
      </div>
    </WrapperCard>
  );
}
