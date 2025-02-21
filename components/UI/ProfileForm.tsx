"use client";

import type { ProfileFormType } from "@/types/userProfile";
import ProfileBio from "./ProfileBio";
import ProfileImageCard from "./ProfileImageCard";
import ProfileInformation from "./ProfileInformation";
import ProfileInterests from "./ProfileInterests";
import ProfileSocial from "./ProfileSocial";
import { useActionState, useEffect, useState } from "react";
import { profileUpdate } from "@/app/actions/profile";

export default function ProfileForm({ user }: ProfileFormType) {
  const [state, formAction, pending] = useActionState(profileUpdate, {
    userId: user.id,
    success: null,
    message: null,
  });
  const [interests, setInterests] = useState<string[]>(() => user.interests as string[]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (state.success !== null) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }, [state]);

  function handleSubmit(formData: FormData) {
    formData.append("interests", JSON.stringify(interests));
    formAction(formData);
  }

  return (
    <>
      <form action={handleSubmit} className="grid grid-cols-2 gap-5">
        <div>
          <ProfileImageCard fullName={user.full_name} />
          <ProfileInformation
            fullName={user.full_name}
            email={user.email}
            mobileNumber={user.mobile_number}
            role={user.role}
          />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <ProfileBio bio={user.bio} />
            <ProfileInterests interests={interests} setInterests={setInterests} />
            <ProfileSocial socials={user.socials} />
          </div>

          <button
            disabled={pending}
            className="bg-primary hover:bg-violet-700 text-white font-semibold px-5 py-2 rounded-lg self-end mt-5 flex items-center justify-center disabled:opacity-50"
          >
            {pending ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Save Details"
            )}
          </button>
        </div>
      </form>

      {showToast && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg text-white text-center 
          ${state.success ? "bg-green-600" : "bg-red-600"} 
          transition-opacity duration-300 animate-fade-in-out shadow-md`}
        >
          {state.message}
        </div>
      )}
    </>
  );
}
