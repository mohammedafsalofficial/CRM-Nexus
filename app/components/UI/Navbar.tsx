"use client";

import { formatDate } from "@/app/utils/helper/utils";
import { CalendarCheck, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import ProfileIcon from "./ProfileIcon";

export default function Navbar() {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter(Boolean);

  const breadcrumb = pathSegments.map((segment, index) => {
    const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);

    return (
      <span key={index} className="flex items-center space-x-2">
        {index > 0 && <ChevronRight size={18} />}
        <span>{formattedSegment}</span>
      </span>
    );
  });

  return (
    <nav className="w-full px-5 pt-5 text-secondary flex items-center justify-between">
      <p className="flex items-center justify-center space-x-2">{breadcrumb}</p>
      <div className="text-zinc-900 flex items-center justify-center space-x-7">
        <div className="flex items-center justify-center space-x-2">
          <CalendarCheck size={18} />
          <p>{formatDate()}</p>
        </div>
        <ProfileIcon />
      </div>
    </nav>
  );
}
