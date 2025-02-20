import type { ProfileInputType } from "@/types/userProfile";

export default function ProfileInput({ labelText = "", inputType, Icon, inputValue }: ProfileInputType) {
  const notEditable = inputType === "email" || labelText === "Role";

  return (
    <div className="flex flex-col w-full space-y-1">
      <label className="font-medium text-gray-700">{labelText}</label>
      <div
        className={`w-full flex items-center border border-gray-300  rounded-md px-3 focus-within:ring-2 focus-within:ring-primary ${
          notEditable ? "bg-gray-400 text-white" : "bg-white text-secondary"
        }`}
      >
        {Icon && <Icon size={20} />}

        {inputType !== "textArea" && (
          <input
            className="outline-none w-full px-3 py-1 bg-transparent"
            type={inputType}
            defaultValue={inputValue}
            disabled={notEditable}
          />
        )}

        {inputType === "textArea" && (
          <textarea className="outline-none w-full px-3 py-1 text-gray-700 bg-transparent" defaultValue={inputValue} />
        )}
      </div>
    </div>
  );
}
