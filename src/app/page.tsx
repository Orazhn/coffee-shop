import React from "react";
import HomePageImages, {
  OrderButton,
} from "@/components/appComponents/HomePageImages";
import Item from "./types/DataType";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import WordPullUp from "@/components/ui/word-pull-up";
import LetterPullup from "@/components/ui/letter-pullup";

const Home = async () => {
  const result = await fetch("https://fake-coffee-api.vercel.app/api");
  const resultData: Item[] = await result.json();

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-r from-[#ffe9d5] via-[#fff] to-[#ffe9d5] dark:from-[#2d2d2d] dark:via-[#1a1a1a] dark:to-[#2d2d2d]">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:max-w-xl px-4">
          <p className="text-sm text-[#b45f06] dark:text-yellow-500 font-medium mb-2">
            Coffee Time...
          </p>
          <div className="flex flex-col  sm:items-center lg:items-start">
            <WordPullUp
              className="text-5xl lg:text-5xl font-bold  dark:text-white"
              words={"Enjoy Your Morning"}
            />
            <LetterPullup
              className="text-5xl lg:text-6xl font-bold  text-[#975b1b] dark:text-[#975b1b]"
              words={"Coffee"}
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Boost your productivity and build your mood with a glass of coffee
            in the morning.
          </p>
          <div className="flex items-center justify-center lg:justify-start space-x-6">
            <OrderButton />
          </div>
        </div>
        <div className="md:hidden sm:flex flex-col gap-8 pt-10">
          <div className="bg-white dark:bg-gray-800 shadow-lg px-4 py-3 rounded-lg">
            <p className="text-sm font-semibold dark:text-white">
              12 Years Experience
            </p>
            <div className="text-yellow-500 dark:text-yellow-400 flex items-center text-lg gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-lg px-4 py-3 rounded-lg flex items-center space-x-3">
            <div className="flex text-yellow-500 dark:text-yellow-400 text-lg gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              2M+ Happy Customers
            </p>
          </div>
        </div>
        <div className="relative flex-1 flex justify-center px-4 lg:px-0 sm:hidden md:flex">
          <HomePageImages data={resultData.slice(0, 3)} />
          <div className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-white dark:bg-gray-800 shadow-lg px-4 py-3 rounded-lg">
            <p className="text-sm font-semibold dark:text-white">
              12 Years Experience
            </p>
            <div className="text-yellow-500 dark:text-yellow-400 flex items-center text-lg gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>
          <div className="absolute bottom-16 left-4 lg:bottom-12 lg:left-8 bg-white dark:bg-gray-800 shadow-lg px-4 py-3 rounded-lg flex items-center space-x-3">
            <div className="flex text-yellow-500 dark:text-yellow-400 text-lg gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              2M+ Happy Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
