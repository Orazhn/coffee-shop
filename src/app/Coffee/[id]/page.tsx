import Item from "@/app/types/DataType";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import ActionButton from "@/components/appComponents/ActionButton";

async function getProduct(id: number): Promise<Item> {
  try {
    const res = await fetch(`https://fake-coffee-api.vercel.app/api/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }

    const data: Item[] = await res.json();
    return data[0];
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch product data.");
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> {
  const { id } = await params;
  const productId = parseInt(id, 10);

  try {
    const product: Item = await getProduct(productId);

    return (
      <div className="p-6 bg-gray-100 dark:bg-black">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 dark:bg-zinc-900">
          <div className="flex items-center bg-gray-200 justify-center dark:bg-zinc-800 p-4">
            <Image
              src={product.image_url}
              alt={product.name}
              width={700}
              height={700}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-gray-700 mt-4 dark:text-white">
              ${product.price.toFixed(2)}
            </p>
            <ActionButton
              action="add"
              item={product}
              className="mt-6 bg-purple-600 text-white text-lg font-medium px-6 py-6 rounded-md hover:bg-purple-700 transition"
            >
              <ShoppingBag /> Add to Bag
            </ActionButton>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-8">
              Description
            </h2>
            <p className="text-gray-600 mt-2 dark:text-gray-400">
              {product.description}
            </p>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 dark:text-gray-200">
              Flavor Profile
            </h2>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {product.flavor_profile.map((flavor, index) => (
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
              {product.grind_option.map((option, index) => (
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
                    i < product.roast_level ? "bg-purple-600" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mt-8 dark:text-gray-200">
              Details
            </h2>
            <p className="text-gray-600 mt-2 dark:text-gray-300">
              Region: {product.region}
            </p>
            <p className="text-gray-600 mt-1 dark:text-gray-300">
              Weight: {product.weight}g
            </p>
          </div>
        </div>
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
