import WrapperCard from "../UI/WrapperCard";

export default function ProfileFormSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-5 animate-pulse">
      <div>
        <WrapperCard>
          <div className="relative">
            <div className="w-full h-32 bg-gray-300 rounded-lg"></div>
            <div className="absolute top-1/2 left-5 h-[5.3rem] w-20 bg-gray-300 rounded-3xl border-2 border-white"></div>
          </div>
          <div className="space-y-4 mt-7">
            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="flex space-x-3">
              <div className="h-8 bg-gray-300 rounded-lg w-24"></div>
              <div className="h-8 bg-gray-300 rounded-lg w-24"></div>
            </div>
          </div>
        </WrapperCard>

        <WrapperCard>
          <div className="h-6 bg-gray-300 rounded w-2/3 mb-5"></div>
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-10 bg-gray-300 rounded w-full"></div>
            ))}
          </div>
        </WrapperCard>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="space-y-3">
          <WrapperCard>
            <div className="h-20 bg-gray-300 rounded w-full"></div>
          </WrapperCard>

          <WrapperCard>
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-5"></div>
            <div className="h-10 bg-gray-300 rounded w-full"></div>
          </WrapperCard>

          <WrapperCard>
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-5"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-10 bg-gray-300 rounded w-full"></div>
              ))}
            </div>
          </WrapperCard>
        </div>

        <div className="h-10 bg-gray-300 rounded-lg w-32 self-end"></div>
      </div>
    </div>
  );
}
