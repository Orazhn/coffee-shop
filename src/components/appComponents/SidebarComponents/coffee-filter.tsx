"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useFilterStore from "@/store/filterStore";
import PriceRangeSlider from "./price-slider";

const filterCategories = {
  grind_options: ["Whole Bean", "Cafetiere", "Filter", "Espresso", "Pour Over"],
  flavor_profiles: [
    "Dark Chocolate",
    "Citrus",
    "Cocoa",
    "Hazelnut",
    "Nutty",
    "Caramel",
    "Vanilla",
    "Tropical Fruit",
    "Coconut",
    "Spicy",
    "Earthy",
    "Almond",
    "Toffee",
    "Blueberry",
    "Blackcurrant",
    "Smoke",
    "Molasses",
    "Floral",
    "Honey",
  ],
  regions: [
    "Central America",
    "South America",
    "Africa",
    "Asia Pacific",
    "Middle East",
  ],
};

export default function CoffeeFilter() {
  const { filters, setFilter } = useFilterStore();

  const handleFilterChange = (category: string, item: string) => {
    setFilter(category as keyof typeof filters, item);
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Filter Coffee</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="w-full">
          {Object.entries(filterCategories).map(([category, items]) => (
            <AccordionItem value={category} key={category}>
              <AccordionTrigger className="text-lg capitalize">
                {category.replace("_", " ")}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  {items.map((item) => (
                    <div className="flex items-center space-x-2" key={item}>
                      <Checkbox
                        id={`${category}-${item}`}
                        checked={filters[
                          category as keyof typeof filters
                        ].includes(item)}
                        onCheckedChange={() =>
                          handleFilterChange(category, item)
                        }
                      />
                      <Label
                        htmlFor={`${category}-${item}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem value="price">
            <AccordionTrigger className="text-lg capitalize">
              Price
            </AccordionTrigger>
            <AccordionContent>
              <PriceRangeSlider />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
