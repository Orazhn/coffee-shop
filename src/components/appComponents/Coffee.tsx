"use client"
import React from 'react'
import Image from 'next/image'
import Item  from '@/app/types/ItemType'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import ActionButton from './ActionButton'

const Coffee: React.FC<{ item: Item, favItems?: boolean }> = ({ item, favItems }) => {
    const router = useRouter()

  return (
    <div className='bg-white p-4 rounded-lg shadow hover:shadow-2xl transition' >
        <Image
            width={200}
            height={350}
            alt={item.name}
            src={item.image_url}
            className=" w-full rounded-lg bg-gray-200"
            onClick={() => router.push(`/Coffee/${item.id}`)}
        />
        <div className="mt-4 text-md text-gray-700 w-full flex justify-between items-center">
            <h1>{item.name}</h1>
            <span className="text-md text-gray-700">{item.amount}</span>
        </div>
        <div className='flex justify-between pt-2'>
            {!favItems ? 
                 <ActionButton 
                    variant={"outline"}
                    item={item}
                    action='add'
                >
                    Add to bag
                </ActionButton> 
                :
                <ActionButton 
                    item={item}
                    action='remove'
                >
                    Remove from bag
                </ActionButton> 
            }
            <p className="mt-1 text-lg font-medium text-gray-500">{item.price}</p>
        </div>
        <Button variant={"link"} onClick={() => router.push(`/Coffee/${item.id}`)}>explore</Button>
    </div>
  )
}

export default Coffee
