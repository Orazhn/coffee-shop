import { useAuth } from "@clerk/nextjs";

const useUserId = () => {
  const { userId } = useAuth();
  return userId;
};

export default useUserId;
