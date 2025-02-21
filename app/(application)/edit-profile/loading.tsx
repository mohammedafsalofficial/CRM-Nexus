import ProfileFormSkeleton from "@/components/loader/ProfileFormSkeleton";

export default function Loading() {
  return (
    <div className="p-5">
      <h1 className="text-4xl mb-5">Edit User Profile</h1>
      <ProfileFormSkeleton />
    </div>
  );
}
