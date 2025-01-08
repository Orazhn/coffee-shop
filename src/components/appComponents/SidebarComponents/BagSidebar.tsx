"use client";
import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import useBagStore from "@/store/bagStore";

const FavItemsSidebar = () => {
  const { emptyBag, removeItem, bag } = useBagStore();
  let itemsLength = 0;
  bag.map((item) => (itemsLength += item.amount));
  return (
    <div className="flex items-center justify-evenly flex-col p-2 bg-slate-200 rounded-md dark:bg-zinc-950">
      <div className="flex items-center justify-between w-full ">
        <h1 className="text-gray-500 pl-2">{itemsLength}</h1>
        <h1 className="p-2 font-mono text-center w-full font-semibold">Bag</h1>
        <Button
          variant={"secondary"}
          onClick={() => emptyBag()}
          disabled={bag.length ? false : true}
          className="dark:bg-black dark:hover:bg-zinc-800"
        >
          {" "}
          empty
        </Button>
      </div>
      <div className="flex flex-wrap flex-col gap-1 w-full">
        {bag.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center px-2 bg-slate-300 rounded-md mt-2 dark:bg-zinc-900"
          >
            <span>{item.amount}</span>
            <div className="flex items-center justify-center">
              <div>
                <Image
                  width={70}
                  height={70}
                  src={item.image_url}
                  alt={item.name}
                />
              </div>
              <h1>{item.name}</h1>
            </div>
            <Button
              onClick={() => removeItem(item)}
              className="bg-slate-400 hover:bg-slate-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-sm"
              size={"sm"}
            >
              <Trash2 strokeWidth={2} size={14} className="dark:text-white" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavItemsSidebar;
