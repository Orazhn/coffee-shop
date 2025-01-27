import { create } from "zustand";

type FilterCategory = "grind_options" | "flavor_profiles" | "regions";

type FilterState = {
  grind_options: string[];
  flavor_profiles: string[];
  regions: string[];
  price_range: number[];
};

type FilterStore = {
  filters: FilterState;
  setFilter: (category: FilterCategory, item: string) => void;
  clearFilters: () => void;
  setPriceRange: (newPriceRange: number[]) => void;
};

const useFilterStore = create<FilterStore>((set) => ({
  filters: {
    grind_options: [],
    flavor_profiles: [],
    regions: [],
    price_range: [1, 15],
  },
  setFilter: (category, item) =>
    set((state) => {
      const categoryFilters = state.filters[category];
      const updatedFilters = categoryFilters.includes(item)
        ? categoryFilters.filter((i) => i !== item)
        : [...categoryFilters, item];

      return {
        filters: {
          ...state.filters,
          [category]: updatedFilters,
        },
      };
    }),
  clearFilters: () =>
    set({
      filters: {
        grind_options: [],
        flavor_profiles: [],
        regions: [],
        price_range: [1, 15],
      },
    }),
  setPriceRange: (newPriceRange: number[]) =>
    set((state) => ({
      filters: {
        ...state.filters,
        price_range: newPriceRange,
      },
    })),
}));

export default useFilterStore;
