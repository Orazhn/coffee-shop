"use client"
import React from 'react'
import Image from 'next/image'
import { FC } from 'react'
import Item from '../types/ItemType'
import { useRouter } from "next/navigation";

interface OrderCardProps {
    item: Item
}
const OrderCard: FC<OrderCardProps> = ({item}) => {
    const {push} = useRouter()
  return (
    <div 
        className="flex items-center justify-between cursor-pointer" 
        onClick={() => push(`/Coffee/${item.id}`)}
    >
        <div className="flex items-center justify-center w-11/12 rounded-md hover:bg-slate-200 ">
              <div className="w-1/2 h-full rounded-md sm:w-full">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  width={200}
                  height={350}
                />
              </div>
              <div className='w-full'>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {item.amount} | ${item.price}
                </p>
              </div>
        </div>
    </div>
  )
}

export default OrderCard