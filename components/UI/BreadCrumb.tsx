"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumb() {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter(Boolean);
  let formattedUrl = "";

  return (
    <>
      {pathSegments.map((segment, index) => {
        const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);
        formattedUrl += `/${segment}`;

        return (
          <span key={index} className="flex items-center space-x-2">
            {index > 0 && <ChevronRight size={18} />}
            <Link href={formattedUrl}>{formattedSegment}</Link>
          </span>
        );
      })}
    </>
  );
}
