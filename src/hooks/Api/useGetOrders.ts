import { useQuery } from "@tanstack/react-query";
import { ordersService } from "@/services/orders.service";
import useUserId from "./useGetUserId";

const useGetOrders = () => {
  const userId = useUserId();

  const { data, isLoading } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => ordersService.getOrders(userId),
    enabled: !!userId,
  });

  return { orders: data, isLoading };
};

export default useGetOrders;
