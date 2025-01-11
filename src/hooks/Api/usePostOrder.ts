import { useMutation } from "@tanstack/react-query";
import { ordersService } from "@/services/orders.service";
import Order from "@/types/Order";
import useGetUserId from "./useGetUserId";

export function usePostOrder() {
  const userId = useGetUserId();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["post order"],
    mutationFn: (order: Order) => ordersService.postOrder(userId, order),
  });

  return { orderFunc: mutate, isOrdering: isPending, isSuccess };
}
