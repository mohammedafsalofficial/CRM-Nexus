"use client";

import { Plus, X } from "lucide-react";
import WrapperCard from "./WrapperCard";
import { useState } from "react";

export default function ProfileInterests({
  interests,
  setInterests,
}: {
  interests: string[];
  setInterests: (value: string[]) => void;
}) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleAddInterest() {
    if (inputValue.trim() !== "") {
      setInterests([...interests, inputValue.trim()]);
      setInputValue("");
      setInputVisible(false);
    }
  }

  function handleRemoveInterest(index: number) {
    setInterests(interests.filter((_, i) => i !== index));
  }

  return (
    <WrapperCard>
      <h1 className="font-semibold text-secondary text-xl mb-5">Interests</h1>

      <div className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <div key={index} className="flex items-center bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-base">
            {interest}
            <button className="ml-2" type="button" onClick={() => handleRemoveInterest(index)}>
              <X size={14} className="text-violet-800 hover:text-red-500" />
            </button>
          </div>
        ))}
      </div>

      {inputVisible && (
        <input
          type="text"
          className="w-full border border-gray-300 px-3 py-2 rounded-md mt-3 outline-none"
          placeholder="Enter interest..."
          value={inputValue}
          autoFocus
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddInterest()}
        />
      )}

      {!inputVisible && (
        <button
          type="button"
          onClick={() => setInputVisible(true)}
          className="mt-3 text-secondary flex items-center justify-center w-full border border-gray-300 py-2 text-sm rounded-md hover:bg-primary hover:text-white hover:border-primary transition-colors duration-100"
        >
          <Plus size={18} />
          <span>Add More</span>
        </button>
      )}
    </WrapperCard>
  );
}
