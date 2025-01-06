"use client";

import React from "react";
import CoffeeData from "./CoffeeData";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const productId = parseInt(params.id as string, 10);

  try {
    return (
      <div className="p-6 bg-gray-100 dark:bg-black">
        <CoffeeData id={productId} />
      </div>
    );
  } catch {
    return (
      <div className="bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Unable to load product
          </h1>
          <p className="text-gray-600 mt-4">
            Please check back later or contact support.
          </p>
        </div>
      </div>
    );
  }
}
