import { Plus } from "lucide-react";
import WrapperCard from "./WrapperCard";

export default function ProfileInterests() {
  return (
    <WrapperCard>
      <h1 className="font-semibold text-secondary text-xl mb-5">Interests</h1>
      <button className="text-secondary flex items-center justify-center w-full border border-gray-300 py-2 text-sm rounded-md hover:bg-primary hover:text-white hover:border-primary transition-colors duration-100">
        <Plus size={18} />
        <span>Add More</span>
      </button>
    </WrapperCard>
  );
}
