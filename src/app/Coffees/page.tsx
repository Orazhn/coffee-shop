import React from "react";
import { Coffee as CoffeeIcon } from "lucide-react";
import Coffees from "./coffees";

const page = async () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-screen">
      <h1 className="font-mono text-xl flex gap-2 mt-5">
        Coffees <CoffeeIcon />
      </h1>
      <Coffees />
    </div>
  );
};

export default page;
