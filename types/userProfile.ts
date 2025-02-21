import { Role, users } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { LucideIcon } from "lucide-react";

export type ProfileFormType = {
  user: users;
};

export type ProfileImageType = {
  fullName: string;
};

export type ProfileInformationType = {
  fullName: string;
  email: string;
  mobileNumber: string;
  role: Role;
};

export type ProfileInputType = {
  labelText: string;
  inputType: string;
  Icon?: LucideIcon;
  inputValue: string | undefined;
};

export type ProfileBioType = {
  bio: string;
};

export type ProfileSocialType = {
  socials: JsonValue;
};
