import { useMutation } from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import { IAddress } from "@/types/userData";
import useGetUserId from "./useGetUserId";

export function usePostAddress() {
  const userId = useGetUserId();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["post address"],
    mutationFn: (address: IAddress) =>
      userService.postAddress({ userId, address }),
  });

  return { postAddress: mutate, isPending, isSuccess };
}
