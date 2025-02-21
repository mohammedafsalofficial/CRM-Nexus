"use server";

import { revalidatePath } from "next/cache";
import { updateUser } from "./db";

export type ProfileUpdateResponse = {
  userId: number;
  success: boolean | null;
  message: string | null;
};

export async function profileUpdate(
  previousState: ProfileUpdateResponse,
  formData: FormData
): Promise<ProfileUpdateResponse> {
  const full_name = formData.get("Full Name") as string;
  const mobile_number = formData.get("Mobile Number") as string;
  const bio = formData.get("Bio") as string;
  const twitter = formData.get("Twitter") as string;
  const instagram = formData.get("Instagram") as string;
  const linkedIn = formData.get("LinkedIn") as string;
  const interests = JSON.parse(formData.get("interests") as string);

  const socials = {
    twitter,
    instagram,
    linkedIn,
  };

  const userId = previousState.userId;

  if (!full_name) {
    return { userId, success: false, message: "Full Name Required!" };
  }

  const updatedUser = await updateUser(previousState.userId, { full_name, mobile_number, bio, interests, socials });

  if (!updatedUser) {
    return { userId, success: false, message: "Failed to update profile." };
  }

  revalidatePath("/users-management/edit-profile");

  return { userId, success: true, message: "Profile updated successfully!" };
}
