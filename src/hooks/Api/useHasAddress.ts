import { useQuery } from "@tanstack/react-query";
import useGetUserId from "./useGetUserId";
import { userService } from "@/services/user.service";

const UseHasAddress = () => {
  const userId = useGetUserId();
  const { data } = useQuery({
    queryKey: ["has Address"],
    queryFn: () => userService.hasAddress(userId),
  });

  return data;
};

export default UseHasAddress;
