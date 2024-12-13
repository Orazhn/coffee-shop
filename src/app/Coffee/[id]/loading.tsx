import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div className="p-6 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 dark:bg-zinc-900">
        <div className="flex items-center bg-gray-200 justify-center dark:bg-zinc-800 p-4">
          <Skeleton className="w-96 h-96 rounded-lg" />
        </div>

        <div className="p-8">
          <Skeleton className="h-8 w-2/3 mb-6" />
          <Skeleton className="h-6 w-1/4 mb-4" />
          <Skeleton className="h-12 w-1/2 mb-6" />
          <Skeleton className="h-6 w-1/3 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-4/5 mb-2" />
          <Skeleton className="h-4 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/3 mb-4" />

          <div className="flex flex-wrap gap-2 mt-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-16 rounded-full" />
            ))}
          </div>

          <Skeleton className="h-6 w-1/3 mt-8 mb-4" />

          <div className="flex flex-wrap gap-2 mt-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 rounded-md" />
            ))}
          </div>
          <Skeleton className="h-6 w-1/3 mt-8 mb-4" />

          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-6 rounded-full mx-1" />
            ))}
          </div>

          <Skeleton className="h-6 w-1/3 mt-8 mb-4" />

          <Skeleton className="h-4 w-1/2 mb-2" />
          <Skeleton className="h-4 w-1/4 mb-2" />
        </div>
      </div>
    </div>
  );
}
