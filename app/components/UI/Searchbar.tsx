import SearchIcon from "../svg/SearchIcon";

export default function Searchbar() {
  return (
    <div className="relative w-full">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-5 h-5" />
      <input
        className="w-full py-2 pl-10 pr-3 rounded-md outline-none text-secondary shadow-sm"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
