import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  const placeholderArray = new Array(6).fill(null);

  return (
    <div className="flex items-center w-screen p-6">
      <div className="text-black flex flex-wrap w-full gap-4 justify-center">
        {placeholderArray.map((_, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md bg-white dark:bg-zinc-900 w-full md:w-5/12 xl:w-3/12 flex flex-col gap-4"
          >
            {/* Skeleton for Order Header */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-6 w-3/5 rounded-md" />
              <Skeleton className="h-4 w-2/5 rounded-md" />
            </div>

            {/* Skeleton for Order Items */}
            <div className="flex flex-col gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-md" />
                  <div className="flex flex-col gap-2 w-full">
                    <Skeleton className="h-4 w-3/5 rounded-md" />
                    <Skeleton className="h-4 w-2/5 rounded-md" />
                  </div>
                </div>
              ))}
            </div>

            {/* Skeleton for Total Section */}
            <div className="border-t pt-4 flex justify-between items-center">
              <Skeleton className="h-6 w-1/3 rounded-md" />
              <Skeleton className="h-6 w-1/4 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
