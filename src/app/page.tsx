import React from "react";
import HomePageImagesProps, {OrderButton} from "@/components/appComponents/HomePageButtons";
import Item from "./types/DataType";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const Home = async() => {
  const result = await fetch("https://fake-coffee-api.vercel.app/api");
  const resultData: Item[] = await result.json();
 
  return (
    <div className="bg-gradient-to-r from-[#ffe9d5] via-[#fff] to-[#ffe9d5] h-screen flex items-center justify-center px-6 ">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between ">
        <div className="text-center lg:text-left lg:max-w-xl px-4">
          <p className="text-sm text-[#b45f06] font-medium mb-2">Coffee Time...</p>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Enjoy Your Morning <span className="text-[#b45f06]">Coffee</span>.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Boost your productivity and build your mood with a glass of coffee in the morning.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-6">
            <OrderButton/>
          </div>
        </div>
        <div className="md:hidden sm:flex flex-col gap-8 pt-10">
            <div className=" bg-white shadow-lg px-4 py-3 rounded-lg">
              <p className="text-sm font-semibold">12 Years Experience</p>
              <div className="text-yellow-500 flex items-center text-lg gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 py-3 rounded-lg flex items-center space-x-3">
            <div className="flex text-yellow-500 text-lg gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm text-gray-600">2M+ Happy Customers</p>
          </div>
        </div>
        <div className="relative flex-1 flex justify-center px-4 lg:px-0 sm:hidden md:flex">
          <HomePageImagesProps data={resultData.slice(0, 3)}/>
          <div className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-white shadow-lg px-4 py-3 rounded-lg">
            <p className="text-sm font-semibold">12 Years Experience</p>
            <div className="text-yellow-500 flex items-center text-lg gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>
          <div className="absolute bottom-16 left-4 lg:bottom-12 lg:left-8 bg-white shadow-lg px-4 py-3 rounded-lg flex items-center space-x-3">
            <div className="flex text-yellow-500 text-lg gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm text-gray-600">2M+ Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;