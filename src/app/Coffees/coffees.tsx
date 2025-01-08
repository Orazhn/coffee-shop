"use client";
import React from "react";
import Coffee from "@/components/appComponents/Coffee";
import useGetCoffees from "@/hooks/Api/useGetCoffees";
import LoadingPage from "./loading";
import useSearchStore from "@/store/searchStore";

const Coffees = () => {
  const { search } = useSearchStore();
  const { coffees, isLoading } = useGetCoffees(search);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (!coffees?.length) {
    return (
      <div className=" h-full  flex items-center justify-center text-2xl">
        Not found
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-10 w-screen">
        {coffees?.map((item) => (
          <Coffee key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Coffees;
