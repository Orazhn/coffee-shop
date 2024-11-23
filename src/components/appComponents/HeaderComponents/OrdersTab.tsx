"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import {ScrollText} from "lucide-react"

const OrdersTab = () => {
    const {push} = useRouter()
  return (
    <Button className="flex gap-1" onClick={() => push('/Orders')}><ScrollText size={20}/> Orders</Button>
  )
}

export default OrdersTab