import { useAuth } from "@clerk/nextjs";

const useUserId = () => {
  const { userId } = useAuth(); // Get userId using Clerk's useAuth hook
  return userId;
};

export default useUserId;
