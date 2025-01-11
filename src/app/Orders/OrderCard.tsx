import React from "react";
import Image from "next/image";
import { FC } from "react";
import Item from "../../types/DataType";
import { useRouter } from "next/navigation";

interface OrderCardProps {
  item: Item;
}
const OrderCard: FC<OrderCardProps> = ({ item }) => {
  const { push } = useRouter();
  return (
    <div
      className="flex items-center justify-between cursor-pointer w-full"
      onClick={() => push(`/Coffee/${item.id}`)}
    >
      <div className="flex items-center justify-start h-full rounded-md hover:bg-slate-200 hover:dark:bg-zinc-800">
        <div className="relative w-[200px] h-[150px] rounded-md">
          <Image
            src={item.image_url}
            alt={item.name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="w-full">
          <p className="font-medium dark:text-white text-wrap">{item.name}</p>
          <p className="text-sm text-gray-500">
            Quantity: {item.amount} | ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
