"use client"
import React from 'react'
import {  useSelector } from "react-redux";
import {  RootState } from "../../state/store";
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { Button } from './button';
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store"
import {
    removeItem,
    emptyBag
  } from "../../state/bag/bagSlice";


const FavItemsSidebar = () => {
    const bagItems = useSelector((state: RootState) => state.bag);
    const dispatch = useDispatch<AppDispatch>();
    let itemsLength = 0 
    bagItems.map(item => itemsLength += item.amount)
  return (
    <div className="flex items-center justify-evenly flex-col p-2 bg-slate-200 rounded-md ">
        <div className='flex items-center justify-between w-full '>
            <h1 className='text-gray-500 pl-2'>{itemsLength}</h1>
            <h1 className='p-2 font-mono text-center w-full font-semibold'>Bag</h1>
            <Button 
                variant={"secondary"} 
                onClick={() => dispatch(emptyBag())}
                disabled = {bagItems.length ? false : true}
            > empty
            </Button>
        </div>
        <div className='flex flex-wrap flex-col gap-1 w-full'>
            {bagItems.map((item, index) => 
            <div key={index} className='flex justify-between items-center px-2 bg-slate-300 rounded-md '>
                <span>{item.amount}</span>
                <div className='flex items-center justify-center'>
                    <div>
                
                        <Image
                            width={70}
                            height={70}
                            src={item.image_url}
                            alt={item.name}
                        />
                    </div>
                    <h1 >
                        {item.name} 
                    </h1>
                    
                </div>
                <Button onClick={() => dispatch(removeItem(item))} className='bg-slate-400 hover:bg-slate-300  text-sm' size={"sm"}>
                    <Trash2 strokeWidth={2}/>
                </Button>                    
            </div>
            )}
        </div>
       
    </div>
  )
}

export default FavItemsSidebar