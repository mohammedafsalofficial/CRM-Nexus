import { getUser } from "@/app/actions/db";
import ProfileBio from "@/components/UI/ProfileBio";
import ProfileImageCard from "@/components/UI/ProfileImageCard";
import ProfileInformation from "@/components/UI/ProfileInformation";
import ProfileInterests from "@/components/UI/ProfileInterests";
import ProfileSocials from "@/components/UI/ProfileSocials";

type EditProfilePageProps = {
  searchParams: Promise<{ userId: string }>;
};

export default async function EditProfilePage({ searchParams }: EditProfilePageProps) {
  const { userId } = await searchParams;

  const user = await getUser(Number(userId));

  return (
    <div className="p-5">
      <h1 className="text-4xl mb-5">Edit User Profile</h1>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <ProfileImageCard fullName={user.full_name} />
          <ProfileInformation
            fullName={user.full_name}
            email={user.email}
            mobileNumber={user.mobile_number}
            role={user.role}
          />
        </div>
        <div>
          <ProfileBio bio={user.bio} />
          <ProfileInterests />
          <ProfileSocials />
        </div>
      </div>
    </div>
  );
}
