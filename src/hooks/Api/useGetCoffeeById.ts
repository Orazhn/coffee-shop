import { useQuery } from "@tanstack/react-query";
import { coffeeService } from "@/services/coffees.service";
import Item from "@/types/DataType";

const useGetCoffeeById = (id: number): { coffee: Item; isLoading: boolean } => {
  const { data, isLoading } = useQuery({
    queryKey: ["coffee", id], // Include `id` in the key for caching
    queryFn: () => coffeeService.getCoffeeById(id),
    select: (data) => {
      // Assume `data.data` is an array and extract the first element
      if (Array.isArray(data.data) && data.data.length > 0) {
        return data.data[0];
      }
      return null; // Return null if data is not valid
    },
  });

  return { coffee: data, isLoading };
};

export default useGetCoffeeById;
