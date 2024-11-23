"use client";
import React, { useState } from "react";
import Item from "@/app/types/DataType";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {Truck} from "lucide-react"

export function OrderButton() {
    const { push } = useRouter()
    return (
        <Button 
            onClick={() => push('/Coffees')} 
            className="px-8 py-4 bg-[#b45f06] text-white text-lg rounded-lg shadow-lg hover:bg-[#9e4f04] transition"
            variant="expandIcon" Icon={Truck} iconPlacement="right"
        >
            Order Now
        </Button>
    )
}

interface HomePageImagesProps {
    data: Item[]
}

const HomePageImages: React.FC<HomePageImagesProps> = ({data}) => {
  const [activeImage, setActiveImage] = useState<Item>(data[0]);

  const handleImageChange = (item: Item) => {
    if (activeImage && activeImage.id === item.id) return; 
    setActiveImage(item); 
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-xl lg:max-w-2xl relative overflow-hidden h-96">
        {activeImage && (
            <div
                className={`w-full h-full motion-translate-y-in-100 `}
                key={activeImage.id} 
            >
            <Image
                src={activeImage.image_url}
                alt={activeImage.name}
                width={800}
                height={800}
                className="object-contain w-full h-full"
            />
            </div>
        )}
      </div>
      <div className="flex gap-4 mt-4">
        {data.map(item => (
          <Button
            key={item.id}
            className={`bg-yellow-700 hover:bg-yellow-800 ${
              activeImage?.id === item.id ? "opacity-70" : "opacity-100"
            }`}
            onClick={() => handleImageChange(item)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};


export default HomePageImages;