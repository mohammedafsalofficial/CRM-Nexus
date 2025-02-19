"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProfileIconProps = {
  name: string | undefined;
  role: string | undefined;
};

export default function ProfileIcon({ name, role }: ProfileIconProps) {
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
          src="/myPhoto.jpeg"
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
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">Edit Profile</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">Logout</button>
        </div>
      )}
    </div>
  );
}
