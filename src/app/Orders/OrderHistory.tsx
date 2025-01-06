"use client";
import React from "react";
import OrderComponent from "./OrderComponent";
import LoadingPage from "./loading";
import useGetOrders from "@/hooks/Api/useGetOrders";

const OrderHistory = () => {
  const { orders, isLoading } = useGetOrders();

  if (isLoading) return <LoadingPage />;
  if (!orders)
    return (
      <div className="w-screen h-screen flex justify-center items-center text-xl font-mono">
        It looks like you have no orders yet
      </div>
    );

  return (
    <div className="flex justify-center flex-wrap">
      <div className="text-black flex justify-center gap-4 p-6 flex-wrap">
        {orders.map((order, index) => (
          <OrderComponent
            key={index}
            orderNumber={index + 1}
            items={order.bagItems}
            total={order.total}
            date={order.date}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
