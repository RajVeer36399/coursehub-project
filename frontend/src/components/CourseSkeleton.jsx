function CourseSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow animate-pulse overflow-hidden flex flex-col">
      {/* Image skeleton */}
      <div className="h-40 bg-gray-300"></div>

      {/* Content skeleton */}
      <div className="p-4 flex flex-col flex-grow space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>

        <div className="mt-auto h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
}

export default CourseSkeleton;
