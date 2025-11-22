export default function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 w-full md:w-[90%] m-auto animate-pulse">

      {/* Header Skeleton */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
        <div>
          <div className="w-40 h-5 bg-gray-300 rounded mb-2"></div>
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">

        {/* Left Side Skeleton */}
        <div className="flex flex-col w-full md:w-[70%] gap-5">

          <div className="w-full h-28 bg-gray-300 rounded"></div>
          <div className="w-full h-40 bg-gray-300 rounded"></div>
          <div className="w-full h-40 bg-gray-300 rounded"></div>
          <div className="w-full h-32 bg-gray-300 rounded"></div>

        </div>

        {/* Right Side Skeleton */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <div className="w-full h-32 bg-gray-300 rounded"></div>
          <div className="w-full h-24 bg-gray-300 rounded"></div>
        </div>

      </div>
    </div>
  );
}
