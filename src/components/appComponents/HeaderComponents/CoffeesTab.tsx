"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CiCoffeeCup } from "react-icons/ci"

const CoffeesTab = () => {
    const {push} = useRouter()
  return (
    <div>
        <Button className="flex gap-1" onClick={() => push('/Coffees')}><CiCoffeeCup size={20}/> Coffees</Button>
    </div>
  )
}

export default CoffeesTab