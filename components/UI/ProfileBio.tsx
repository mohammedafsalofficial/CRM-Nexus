import type { ProfileBioInput } from "@/types/userProfile";
import ProfileInput from "./ProfileInput";
import WrapperCard from "./WrapperCard";

export default function ProfileBio({ bio }: ProfileBioInput) {
  return (
    <WrapperCard>
      <h1 className="font-semibold text-secondary text-xl mb-5">Bio</h1>
      <ProfileInput inputType="textArea" labelText="" inputValue={bio} />
    </WrapperCard>
  );
}
