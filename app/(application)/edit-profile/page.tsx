import { getUser } from "@/app/actions/db";
import ProfileForm from "@/components/UI/ProfileForm";

type EditProfilePageProps = {
  searchParams: Promise<{ userId: string }>;
};

export default async function EditProfilePage({ searchParams }: EditProfilePageProps) {
  const { userId } = await searchParams;

  const user = await getUser(Number(userId));

  return (
    <div className="p-5">
      <h1 className="text-4xl">Edit User Profile</h1>
      <ProfileForm user={user} />
    </div>
  );
}
