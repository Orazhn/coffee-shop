import { useQuery } from "@tanstack/react-query";
import useFilterStore from "@/store/filterStore";
import { coffeeService } from "@/services/coffees.service";
import Item from "@/types/DataType";
const useFilteredAndSearchedCoffees = (
  search: string
): { coffees: Item[] | undefined; isLoading: boolean } => {
  const { filters } = useFilterStore();
  const { data, isLoading } = useQuery({
    queryKey: ["coffees", filters, search],
    queryFn: async () => {
      const allCoffees = await coffeeService.getCoffees();

      const filteredCoffees = allCoffees.data.filter((coffee: Item) => {
        const matchesFlavor =
          filters.flavor_profiles.length === 0 ||
          filters.flavor_profiles.some((flavor) =>
            coffee.flavor_profile.includes(flavor)
          );

        const matchesGrind =
          filters.grind_options.length === 0 ||
          filters.grind_options.some((grind) =>
            coffee.grind_option.includes(grind)
          );

        const matchesRegion =
          filters.regions.length === 0 ||
          filters.regions.includes(coffee.region);

        const matchesPrice =
          coffee.price >= filters.price_range[0] &&
          coffee.price <= filters.price_range[1];

        return matchesFlavor && matchesGrind && matchesRegion && matchesPrice; // Include price filter
      });

      return filteredCoffees;
    },
    select: (filteredCoffees) => {
      if (!search?.length) {
        return filteredCoffees;
      }

      return filteredCoffees.filter((coffee) =>
        coffee.name.toLowerCase().includes(search.toLowerCase())
      );
    },
  });

  return { coffees: data, isLoading };
};

export default useFilteredAndSearchedCoffees;
