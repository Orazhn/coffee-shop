"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import ActionButton from "@/components/appComponents/ActionButton";
import useGetCoffeeById from "@/hooks/Api/useGetCoffeeById";
import LoadingPage from "./loading";

const CoffeeData = ({ id }: { id: number }) => {
  const { coffee, isLoading } = useGetCoffeeById(id);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!coffee) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 dark:bg-zinc-900">
      <div className="flex items-center bg-gray-200 justify-center dark:bg-zinc-800 p-4">
        <Image
          src={coffee.image_url}
          alt={coffee.name}
          width={700}
          height={700}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {coffee.name}
        </h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4 dark:text-white">
          ${coffee.price.toFixed(2)}
        </p>
        <ActionButton
          action="add"
          item={coffee}
          className="mt-6 bg-purple-600 text-white text-lg font-medium px-6 py-6 rounded-md hover:bg-purple-700 transition"
        >
          <ShoppingBag /> Add to Bag
        </ActionButton>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-8">
          Description
        </h2>
        <p className="text-gray-600 mt-2 dark:text-gray-400">
          {coffee.description}
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mt-8 dark:text-gray-200">
          Flavor Profile
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {coffee.flavor_profile.map((flavor, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              {flavor}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mt-8 dark:text-gray-200">
          Grind Options
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {coffee.grind_option.map((option, index) => (
            <button
              key={index}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm px-4 py-2 rounded-md"
            >
              {option}
            </button>
          ))}
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mt-8 dark:text-gray-200">
          Roast Level
        </h2>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-4 w-4 mx-1 rounded-full ${
                i < coffee.roast_level ? "bg-purple-600" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mt-8 dark:text-gray-200">
          Details
        </h2>
        <p className="text-gray-600 mt-2 dark:text-gray-300">
          Region: {coffee.region}
        </p>
        <p className="text-gray-600 mt-1 dark:text-gray-300">
          Weight: {coffee.weight}g
        </p>
      </div>
    </div>
  );
};

export default CoffeeData;
