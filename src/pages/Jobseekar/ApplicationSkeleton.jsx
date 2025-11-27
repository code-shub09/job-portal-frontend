
/* ---------------------------- SKELETON LOADER ---------------------------- */

function ApplicationSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex justify-between"
        >
          <div className="flex gap-4">
            <div className="w-14 h-14 bg-gray-300 rounded-md"></div>
            <div>
              <div className="w-40 h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-28 h-3 bg-gray-200 rounded mb-2"></div>
              <div className="w-20 h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="w-20 h-6 bg-gray-300 rounded-full"></div>
        </div>
      ))}
    </div>
  );
}
