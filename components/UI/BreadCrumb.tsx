"use client";

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BreadCrumb() {
  const pathName = usePathname();
  const pathSegments = pathName.split("/").filter(Boolean);

  return (
    <>
      {pathSegments.map((segment, index) => {
        const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <span key={index} className="flex items-center space-x-2">
            {index > 0 && <ChevronRight size={18} />}
            <span>{formattedSegment}</span>
          </span>
        );
      })}
    </>
  );
}
