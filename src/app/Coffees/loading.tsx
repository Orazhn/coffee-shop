import React from "react";
import { Skeleton } from "../../components/ui/skeleton";

const LoadingPage = () => {
  const array = new Array(20).fill(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-screen p-10">
      {array.map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow hover:shadow-2xl transition w-full"
        >
          <Skeleton className="w-full h-[220px] rounded-lg" />
          <div className="mt-4 flex flex-col gap-2">
            <Skeleton className="h-5 w-3/4 rounded" />
            <Skeleton className="h-4 w-1/3 rounded" />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <Skeleton className="h-5 w-1/4 rounded" />
            <Skeleton className="h-5 w-1/6 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingPage;
