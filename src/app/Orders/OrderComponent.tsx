import React from "react";
import Item from "../../types/DataType";
import OrderCard from "./OrderCard";

interface OrderComponentProps {
  orderNumber?: number;
  date: string;
  items: Item[];
  total: number;
}

const OrderComponent: React.FC<OrderComponentProps> = ({
  orderNumber,
  date,
  items,
  total,
}) => {
  return (
    <div className="border p-4 flex flex-col justify-between rounded-lg shadow-md bg-white dark:bg-zinc-900 md:w-5/12 xl:w-3/12 sm:w-full">
      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Order #{orderNumber}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
          </div>
        </div>
        <div className="flex flex-col w-full">
          {items.map((item) => (
            <OrderCard key={item._id} item={item} />
          ))}
        </div>
      </div>

      <div className="border-t mt-4 pt-4 flex justify-between items-center">
        <p className="font-medium text-gray-700 dark:text-gray-300">Total:</p>
        <p className="font-bold text-lg text-gray-900 dark:text-gray-100">
          ${total}
        </p>
      </div>
    </div>
  );
};

export default OrderComponent;
