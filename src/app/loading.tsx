export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100 dark:bg-gray-900">
      <div className="text-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-emerald-500 rounded-full animate-spin mx-auto"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-emerald-300 rounded-full animate-spin mx-auto"
            style={{ animationDelay: "0.15s", animationDuration: "1.5s" }}
          ></div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            잠시만 기다려주세요
          </h2>
          <p className="text-gray-600 dark:text-gray-300 animate-pulse">
            포트폴리오를 준비하고 있습니다...
          </p>
        </div>
      </div>
    </div>
  );
}
