export default function NavbarLoader() {
  return (
    <nav className="w-full px-5 text-secondary flex items-center justify-between animate-pulse">
      <div className="flex items-center space-x-2">
        <div className="h-4 w-20 bg-gray-300 rounded-md"></div>
        <div className="h-4 w-16 bg-gray-300 rounded-md"></div>
      </div>

      <div className="flex items-center space-x-7">
        <div className="flex items-center space-x-2">
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
          <div>
            <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
            <div className="h-3 w-16 bg-gray-200 rounded-md mt-1"></div>
          </div>
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
}
