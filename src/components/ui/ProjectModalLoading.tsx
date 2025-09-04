export function ProjectModalLoading() {
  return (
    <div className="-mt-12 pt-4 animate-pulse">
      <div className="flex items-start justify-between mb-6">
        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4"></div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded-md w-1/4"></div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-1/3"></div>
        </div>

        <div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-1/4 mb-3"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-5/6"></div>
          </div>
        </div>

        <div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-1/5 mb-3"></div>
          <div className="flex flex-wrap gap-2">
            <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-20"></div>
            <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-24"></div>
            <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-full w-16"></div>
          </div>
        </div>

        <div className="border-t border-gray-400 dark:border-gray-700 pt-6 space-y-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-1/3 mb-3"></div>
          <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-xl w-full"></div>
          <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-xl w-full"></div>
        </div>
      </div>
    </div>
  );
}
