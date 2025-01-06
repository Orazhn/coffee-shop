import { useMutation } from "@tanstack/react-query";
import { ordersService } from "@/services/orders.service";
import { Order } from "@/types/DataType";
import useUserId from "./useGetUserId";

export function usePostOrder() {
  const userId = useUserId();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["post order"],
    mutationFn: (order: Order) => ordersService.postOrder(userId, order),
  });

  return { orderFunc: mutate, isOrdering: isPending, isSuccess };
}
