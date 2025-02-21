import { Instagram, Linkedin, Twitter } from "lucide-react";
import ProfileInput from "./ProfileInput";
import WrapperCard from "./WrapperCard";
import { ProfileSocialType } from "@/types/userProfile";

export default function ProfileSocial({ socials }: ProfileSocialType) {
  const { twitter, instagram, linkedIn } = socials as { twitter?: string; instagram?: string; linkedIn?: string };

  return (
    <WrapperCard>
      <h1 className="font-semibold text-secondary text-xl mb-5">Socials</h1>
      <div className="flex flex-col items-start justify-center space-y-4">
        <ProfileInput labelText={"Twitter"} inputType="text" Icon={Twitter} inputValue={twitter} />
        <ProfileInput labelText={"Instagram"} inputType="text" Icon={Instagram} inputValue={instagram} />
        <ProfileInput labelText={"LinkedIn"} inputType="text" Icon={Linkedin} inputValue={linkedIn} />
      </div>
    </WrapperCard>
  );
}
