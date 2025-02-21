import Image from "next/image";
import WrapperCard from "./WrapperCard";
import type { ProfileImageType } from "@/types/userProfile";

export default function ProfileImageCard({ fullName }: ProfileImageType) {
  return (
    <WrapperCard>
      <div className="relative">
        <Image className="w-full rounded-lg h-32" src={"/profile-banner.webp"} alt="banner" height={100} width={100} />
        <Image
          className="rounded-3xl absolute top-1/2 left-5 h-[5.3rem] w-20 border-2 border-white"
          src={"/my-photo.jpg"}
          alt="My photo"
          height={100}
          width={100}
        />
      </div>

      <div className="space-y-4 mt-7">
        <div className="text-secondary">
          <h3 className="font-semibold text-xl">{fullName}</h3>
          <p>This will be displayed on your profile</p>
        </div>

        <div className="space-x-3">
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200 text-secondary font-semibold border border-gray-600 px-3 py-1 rounded-lg"
          >
            Upload New
          </button>
          <button
            type="button"
            className="bg-primary hover:bg-violet-700 text-white font-semibold  px-3 py-1 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </WrapperCard>
  );
}
