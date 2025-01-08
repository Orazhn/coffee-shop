import { useQuery } from "@tanstack/react-query";
import { coffeeService } from "@/services/coffees.service";
import Item from "@/types/DataType";

const useGetCoffeeById = (id: number): { coffee: Item; isLoading: boolean } => {
  const { data, isLoading } = useQuery({
    queryKey: ["coffee", id],
    queryFn: () => coffeeService.getCoffeeById(id),
    select: (data) => {
      if (Array.isArray(data.data) && data.data.length > 0) {
        return data.data[0];
      }
      return null;
    },
  });

  return { coffee: data, isLoading };
};

export default useGetCoffeeById;
