"use client";
import React from "react";
import Coffee from "@/components/appComponents/Coffee";
import useGetCoffees from "@/hooks/Api/useGetCoffees";
import LoadingPage from "./loading";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

const Coffees = () => {
  const search = useSelector((state: RootState) => state.search.search);
  const { coffees, isLoading } = useGetCoffees(search);

  if (isLoading) {
    return <LoadingPage />;
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
