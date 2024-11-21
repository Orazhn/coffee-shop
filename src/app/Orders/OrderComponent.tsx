import React from 'react';
import Item from '../types/ItemType';
import OrderCard from './OrderCard';

interface OrderCardProps {
  orderNumber?: number;
  date: string;
  items: Item[];
  total: number;
}

const OrderComponent: React.FC<OrderCardProps> = ({ orderNumber, date, items, total }) => {
    console.log(items)
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white md:w-5/12 xl:w-3/12 sm:w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="text-lg font-semibold">Order #{orderNumber}</h4>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div>
        {items.map((item) => (
          <OrderCard key={item._id} item={item}/>
        ))}
      </div>

      <div className="border-t mt-4 pt-4 flex justify-between items-center">
        <p className="font-medium text-gray-700">Total:</p>
        <p className="font-bold text-lg">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderComponent;