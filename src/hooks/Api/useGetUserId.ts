import { useAuth } from "@clerk/nextjs";

const useGetUserId = () => {
  const { userId } = useAuth();
  return userId;
};

export default useGetUserId;
