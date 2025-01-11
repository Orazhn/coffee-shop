import { useQuery } from "@tanstack/react-query";
import useGetUserId from "./useGetUserId";
import { userService } from "@/services/user.service";

const UseGetAddress = () => {
  const userId = useGetUserId();
  const { data, isLoading } = useQuery({
    queryKey: ["get Address"],
    queryFn: () => userService.getAddress(userId),
  });

  return { data, isLoading };
};

export default UseGetAddress;
