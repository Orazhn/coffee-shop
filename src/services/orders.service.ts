import { Order } from "@/types/DataType";
import { Redis } from "@upstash/redis";

class OrdersService {
  private redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  getOrders = async (userId: string | undefined | null) => {
    try {
      const data = await this.redis.lrange(`user:${userId}`, 0, -1);
      const newData = data.map((item) => item as unknown as Order);
      return newData;
    } catch (error) {
      console.error("Redis error:", error);
      throw new Error("Redis error");
    }
  };

  postOrder = async (userId: string | undefined | null, order: Order) => {
    try {
      await this.redis.rpush(`user:${userId}`, order);
      console.log("Messages posted successfully", { status: 201 });
    } catch (error) {
      console.error("Redis error while posting:", error);
    }
  };
}

export const ordersService = new OrdersService();
