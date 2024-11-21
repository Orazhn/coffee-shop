'use client'
import React from 'react'
import {  useSelector } from "react-redux";
import {  RootState } from "../../state/store";
import Item from '../types/ItemType';
import Coffee from '@/components/appComponents/Coffee';
import DialogComponent from './Dialog';
import { calculateTotal } from '@/state/bag/bagSlice';


const BagItems = () => {
    const bagItems = useSelector((state: RootState) => state.bag);
  return (
        <div className='flex flex-col flex-wrap gap-4 text-white pt-6 '>
            <div className='pl-4 flex items-center gap-4'>  
                <DialogComponent bagItems = {bagItems} total = {calculateTotal(bagItems)}/>
                <h3 className='text-black'>Total: {calculateTotal(bagItems)} $</h3>
            </div>
            <div className='flex flex-wrap list-none px-3 gap-4'>
                {
                    bagItems.map((item: Item, index) => 
                    <Coffee key={index} item={item} favItems={true} />
                )}
            </div>
        </div>
  )
}

export default BagItems