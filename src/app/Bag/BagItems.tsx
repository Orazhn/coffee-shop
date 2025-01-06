"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Item from "../../types/DataType";
import Coffee from "@/components/appComponents/Coffee";
import DialogComponent from "./Dialog";
import { calculateTotal } from "@/state/bag/bagSlice";

const BagItems = () => {
  const bagItems = useSelector((state: RootState) => state.bag);
  return (
    <div className="flex flex-col flex-wrap gap-4 text-white p-6 ">
      <div className="pl-4 flex items-center gap-4">
        <DialogComponent
          bagItems={bagItems}
          total={calculateTotal(bagItems).toFixed(2)}
        />
        <h3 className="text-black dark:text-white">
          Total: {calculateTotal(bagItems).toFixed(2)} $
        </h3>
      </div>
      <div className="flex flex-wrap list-none px-3 gap-4 justify-center">
        {bagItems.map((item: Item, index) => (
          <Coffee key={index} item={item} favItems={true} />
        ))}
      </div>
    </div>
  );
};

export default BagItems;
