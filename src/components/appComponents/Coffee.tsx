"use client";
import React from "react";
import Image from "next/image";
import Item from "@/app/types/DataType";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import ActionButton from "./ActionButton";
import { ShoppingBag } from "lucide-react";

const Coffee: React.FC<{ item: Item; favItems?: boolean }> = ({
  item,
  favItems,
}) => {
  const router = useRouter();

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow hover:shadow-2xl transition dark:hover:shadow-[0_4px_10px_rgba(255,255,255,0.5)]">
      <div className="cursor-pointer">
        <Image
          width={200}
          height={350}
          alt={item.name}
          src={item.image_url}
          className="w-full rounded-lg bg-gray-200 dark:bg-zinc-700"
          onClick={() => router.push(`/Coffee/${item.id}`)}
        />
      </div>
      <div className="mt-4 text-md text-gray-700 dark:text-gray-300 w-full flex justify-between items-center">
        <h1>{item.name}</h1>
        <span className="text-md text-gray-700 dark:text-gray-300">
          {item.amount}
        </span>
      </div>
      <div className="flex justify-between pt-2 sm:flex-col md:flex-row md:items-center">
        {!favItems ? (
          <ActionButton variant={"outline"} item={item} action="add">
            <span className="sm:hidden md:block"> Add to bag </span>
            <span className="md:hidden sm:block text-sm">
              <ShoppingBag />
            </span>
          </ActionButton>
        ) : (
          <ActionButton item={item} action="remove">
            Remove from bag
          </ActionButton>
        )}
        <p className="mt-1 text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-sm">
          {item.price} $
        </p>
      </div>
      <Button
        variant={"link"}
        className="pl-0"
        onClick={() => router.push(`/Coffee/${item.id}`)}
      >
        explore
      </Button>
    </div>
  );
};

export default Coffee;
