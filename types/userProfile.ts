import { Role } from "@prisma/client";
import { LucideIcon } from "lucide-react";

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
  inputValue: string;
};

export type ProfileBioInput = {
  bio: string;
};
