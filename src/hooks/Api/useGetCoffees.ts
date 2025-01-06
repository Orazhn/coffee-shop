import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { coffeeService } from "@/services/coffees.service";
import Item from "@/types/DataType";

const useGetCoffees = (
  search: string
): { coffees: Item[] | undefined; isLoading: boolean } => {
  const { data, isLoading } = useQuery({
    queryKey: ["coffees", search],
    queryFn: () => coffeeService.getCoffees(),
    select: (data) => {
      if (!search?.length) {
        return data.data;
      }
      const newValue = data.data.filter((coffee) =>
        coffee.name.toLowerCase().includes(search.toLowerCase())
      );
      return newValue;
    },
    placeholderData: keepPreviousData,
  });

  return { coffees: data, isLoading };
};

export default useGetCoffees;
