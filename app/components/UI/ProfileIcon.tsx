import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ProfileIcon() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Image className="h-14 w-14 rounded-[50%]" src={"/myPhoto.jpeg"} alt="My photo" height={100} width={100} />
      <div>
        <p>Mohammed Afsal</p>
        <p className="text-secondary text-xs">Software Developer</p>
      </div>
      <ChevronDown />
    </div>
  );
}
