"use client";
import React, { useEffect, useState } from "react";
import { Order } from "../types/DataType";
import OrderCard from "./OrderComponent";
import LoadingPage from "./loading";

const getOrdersHistory = async () => {
  try {
    const response = await fetch("/api/saveOrder", { method: "GET" });
    if (!response.ok) {
      throw new Error("Error fetching elements: ${response.statusText}");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch elements:", error);
    return null;
  }
};

const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await getOrdersHistory();
        if (orders) {
          setOrders(orders);
        } else {
          setError("Failed to fetch orders");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <LoadingPage />;
  if (!orders.length)
    return (
      <div className="w-screen h-screen flex justify-center items-center text-xl font-mono">
        It looks like you have no orders yet
      </div>
    );

  return (
    <div className="flex justify-center flex-wrap">
      <div className="text-black flex justify-center gap-4 p-6 flex-wrap">
        {orders.map((order, index) => (
          <OrderCard
            key={order.date}
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
