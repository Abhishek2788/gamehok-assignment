export default function Loading() {
  return (
    <div className="p-6 text-white animate-pulse">
      {/* Thumbnail skeleton */}
      <div className="w-full h-[200px] bg-gray-800 rounded-xl"></div>

      {/* Title skeleton */}
      <div className="h-6 w-2/3 bg-gray-700 mt-4 rounded"></div>

      {/* Organizer skeleton */}
      <div className="h-4 w-1/3 bg-gray-700 mt-2 rounded"></div>

      {/* Details skeleton */}
      <div className="h-4 w-1/2 bg-gray-700 mt-2 rounded"></div>
      <div className="h-4 w-1/4 bg-gray-700 mt-2 rounded"></div>
    </div>
  )
}
