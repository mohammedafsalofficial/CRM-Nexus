import type { ProfileBioType } from "@/types/userProfile";
import ProfileInput from "./ProfileInput";
import WrapperCard from "./WrapperCard";

export default function ProfileBio({ bio }: ProfileBioType) {
  return (
    <WrapperCard>
      <ProfileInput inputType="textArea" labelText="Bio" inputValue={bio} />
    </WrapperCard>
  );
}
