"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import {ShoppingBag} from "lucide-react"

const BagTab = () => {
    const {push} = useRouter()
  return (
    <div>
        <Button className="flex gap-1" onClick={() => push('/Bag')}><ShoppingBag size={20}/> Bag</Button>
    </div>
  )
}

export default BagTab