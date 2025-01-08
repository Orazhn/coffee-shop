"use client";
import React from "react";
import Item from "../../types/DataType";
import Coffee from "@/components/appComponents/Coffee";
import DialogComponent from "./Dialog";
import useBagStore from "@/store/bagStore";
import { Button } from "@/components/ui/button";

const BagItems = () => {
  const { bag, calculateTotal, emptyBag } = useBagStore();
  return (
    <div className="flex flex-col flex-wrap gap-4 text-white p-6 ">
      <div className="pl-4 flex items-center gap-4">
        <DialogComponent bag={bag} total={calculateTotal().toFixed(2)} />
        <Button
          onClick={emptyBag}
          variant={"destructive"}
          disabled={bag.length ? false : true}
        >
          Empty Bag
        </Button>
        <h3 className="text-black dark:text-white">
          Total: {calculateTotal().toFixed(2)} $
        </h3>
      </div>
      <div className="flex flex-wrap list-none px-3 gap-4 justify-center">
        {bag.map((item: Item, index) => (
          <Coffee key={index} item={item} favItems={true} />
        ))}
      </div>
    </div>
  );
};

export default BagItems;
