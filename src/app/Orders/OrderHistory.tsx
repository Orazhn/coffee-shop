"use client"
import React, { useEffect, useState } from 'react';
import { Order } from '../types/ItemType';
import OrderCard from './OrderComponent';

const getOrdersHistory = async () => {
  try {
    const response = await fetch('/api/saveOrder', { method: 'GET' });
    if (!response.ok) {
      throw new Error(`Error fetching elements: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch elements:', error);
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
          console.log(orders);
        } else {
          setError('Failed to fetch orders');
        }
      } catch (err) {
        console.error(err);
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div className='w-screen h-screen flex justify-center items-center text-xl'>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="text-black p-6 flex flex-wrap gap-4">
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
  );
};

export default OrderHistory;