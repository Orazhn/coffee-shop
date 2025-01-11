import { useQuery } from "@tanstack/react-query";
import { ordersService } from "@/services/orders.service";
import useGetUserId from "./useGetUserId";

const useGetOrders = () => {
  const userId = useGetUserId();

  const { data, isLoading } = useQuery({
    queryKey: ["orders", userId],
    queryFn: () => ordersService.getOrders(userId),
    enabled: !!userId,
  });

  return { orders: data, isLoading };
};

export default useGetOrders;
