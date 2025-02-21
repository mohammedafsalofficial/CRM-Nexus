"use client";

import { NAV_MENU_ITEMS } from "@/utils/constants/navbar";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLinks() {
  const pathName = usePathname();

  return (
    <nav className="space-y-2">
      <Link
        href={"/home"}
        className={`py-2 px-4 rounded-md transition-all duration-75 flex items-center space-x-2 ${
          pathName === "/home" ? "bg-violet-500 text-gray-100 border-r-8 border-r-primary" : "hover:bg-gray-200"
        }`}
      >
        <Home className="w-5 h-5" />
        <h2>Home</h2>
      </Link>

      <div className="flex flex-col space-y-2 ml-4 pl-1 border-l-4 border-gray-300">
        {NAV_MENU_ITEMS.map(({ id, navItem, href, icon: Icon }) => (
          <Link
            className={`py-2 px-4 rounded-md transition-all duration-75 flex items-center space-x-2  ${
              pathName === href ? "bg-violet-500 text-gray-100 border-r-8 border-r-primary" : "hover:bg-gray-200 "
            }`}
            key={id}
            href={href}
          >
            <Icon className="w-5 h-5" />
            <span>{navItem}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
