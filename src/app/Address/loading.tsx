import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-zinc-950">
      <div className="max-w-[600px] mx-auto">
        <div className="bg-white dark:bg-zinc-800 rounded-lg border dark:border-zinc-700 shadow-sm p-6 space-y-6">
          <Skeleton className="h-8 w-1/2" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-10 w-full" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
