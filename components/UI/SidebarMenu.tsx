"use client";

import { NAV_MENU_ITEMS } from "@/utils/constants/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenu() {
  const pathName = usePathname();

  return (
    <nav className="space-y-2">
      <h2>Menu</h2>
      <div className="flex flex-col space-y-2">
        {NAV_MENU_ITEMS.map(({ id, navItem, href, icon: Icon }) => (
          <Link
            className={`py-2 px-4 rounded-md transition-all duration-75 flex items-center space-x-2 ${
              pathName === href ? "bg-primary text-gray-100" : "hover:bg-gray-200 "
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
