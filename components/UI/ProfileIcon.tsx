"use client";

import { ChevronDown, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ProfileIconProps = {
  userId: number;
  name: string;
  role: string;
};

export default function ProfileIcon({ userId, name, role }: ProfileIconProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 cursor-pointer">
        <Image
          className="h-10 w-10 md:h-14 md:w-14 rounded-full"
          src="/my-photo.jpg"
          alt="Profile"
          height={100}
          width={100}
        />
        <div className="hidden md:block">
          <p>{name}</p>
          <p className="text-secondary text-xs">{role}</p>
        </div>
        <ChevronDown className="hidden md:block transition-transform duration-200" onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && (
        <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2 z-50">
          <Link
            href={`/user/edit-profile?userId=${userId}`}
            className="w-full text-left px-4 py-2 hover:bg-primary hover:text-white rounded-md flex items-center justify-between transition-all duration-75"
          >
            <span>Edit Profile</span>
            <User />
          </Link>
          <button className="w-full text-left px-4 py-2 hover:bg-primary hover:text-white rounded-md flex items-center justify-between transition-all duration-75">
            <span>Logout</span>
            <LogOut />
          </button>
        </div>
      )}
    </div>
  );
}
