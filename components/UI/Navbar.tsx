import { formatDate } from "@/utils/helper/utils";
import { CalendarCheck } from "lucide-react";
import ProfileIcon from "./ProfileIcon";
import BreadCrumb from "./BreadCrumb";
import { getUser } from "@/app/actions/db";

export default async function Navbar({ userId }: { userId: number }) {
  const user = await getUser(userId);

  return (
    <nav className="w-full pt-5 px-5 text-secondary flex items-center justify-between">
      <p className="flex items-center justify-center space-x-2">
        <BreadCrumb />
      </p>
      <div className="text-zinc-900 flex items-center justify-center space-x-7">
        <div className="flex items-center justify-center space-x-2">
          <CalendarCheck size={18} />
          <p>{formatDate()}</p>
        </div>
        <ProfileIcon userId={user.id} name={user.full_name} role={user.role} />
      </div>
    </nav>
  );
}
