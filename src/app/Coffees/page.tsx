import React from 'react'
import { Coffee as CoffeeIcon } from 'lucide-react'
import Coffee from '@/components/appComponents/Coffee'
import Item from '../types/ItemType'


const page = async () => {
  const result = await fetch('https://fake-coffee-api.vercel.app/api', {
    cache: 'force-cache'
  })
  const data: Item[] = await result.json()
  
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 gap-4  w-full'>
        <h1 className='font-mono text-xl flex gap-2 mt-5'>
          All Coffees <CoffeeIcon/>
        </h1>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            {data.map((item, index) => (
                <Coffee key={index} item = {item} />
            ))}
        </div>
    </div>
  )
}

export default page