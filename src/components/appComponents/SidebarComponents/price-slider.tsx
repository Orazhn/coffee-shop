"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import useFilterStore from "@/store/filterStore";

function valuetext(value: number) {
  return `${value} $`;
}

export default function PriceRangeSlider() {
  const { filters, setPriceRange } = useFilterStore();
  const [value, setValue] = React.useState<number[]>(filters.price_range);

  const handleChange = (event: Event, newValue: number | number[]) => {
    const newPriceRange = newValue as number[];
    setValue(newPriceRange);
    setPriceRange(newPriceRange);
  };

  return (
    <div className="flex justify-center bg-black px-3">
      <Box sx={{ width: 200 }}>
        <div className="flex justify-between text-base">
          <p>{value[0]} $</p> <p>{value[1]} $</p>
        </div>
        <Slider
          max={15}
          min={1}
          sx={{ color: "white" }}
          value={value}
          onChange={handleChange}
          getAriaValueText={valuetext}
        />
      </Box>
    </div>
  );
}
