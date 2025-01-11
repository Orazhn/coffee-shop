import { Redis } from "@upstash/redis";
import { IAddress, IWholeData } from "@/types/userData";

class UserService {
  private redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  postAddress = async ({
    address,
    userId,
  }: {
    address: IAddress;
    userId?: string | null;
  }) => {
    try {
      let existingData: IWholeData | null = await this.redis.get(
        `user:${userId}`
      );
      existingData = {
        address,
        orders: existingData?.orders,
      };

      await this.redis.set(`user:${userId}`, existingData);

      console.log("Address updated successfully", { status: 200 });
    } catch (error) {
      console.error("Redis error while updating address:", error);
    }
  };

  getAddress = async (userId?: string | null) => {
    try {
      const data: IWholeData | null = await this.redis.get(`user:${userId}`);
      return data?.address;
      console.log("Address updated successfully", { status: 200 });
    } catch (error) {
      console.error("Redis error while updating address:", error);
    }
  };
  hasAddress = async (userId?: string | null): Promise<boolean> => {
    const existingData: IWholeData | null = await this.redis.get(
      `user:${userId}`
    );
    if (existingData?.address) {
      return true;
    }
    return false;
  };
}

export const userService = new UserService();
