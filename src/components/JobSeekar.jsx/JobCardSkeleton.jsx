export default function JobCardSkeleton() {
  return (
    <div className="animate-pulse p-6">
      {/* Title */}
      <div className="h-6 w-48 bg-gray-200 rounded mb-6"></div>

      {/* Two skeleton job cards */}
      {[1, 2].map((a) => (
        <div
          key={a}
          className="bg-white shadow rounded-xl p-5 mb-6 border border-gray-200"
        >
          {/* Job Title Row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
            <div className="h-5 w-56 bg-gray-200 rounded"></div>
          </div>

          {/* Salary Row */}
          <div className="h-4 w-40 bg-gray-200 rounded mb-4"></div>

          {/* About section */}
          <div className="h-20 w-full bg-gray-200 rounded mb-4"></div>

          {/* Tags */}
          <div className="flex gap-3">
            <div className="h-6 w-14 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-14 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-14 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
