import Order from "@/types/Order";
import { Redis } from "@upstash/redis";
import { IWholeData } from "@/types/userData";

class OrdersService {
  private redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  getOrders = async (userId: string | undefined | null) => {
    try {
      const data: IWholeData | null = await this.redis.get(`user:${userId}`);
      const newData = data?.orders?.map((item) => item as unknown as Order);
      return newData;
    } catch (error) {
      console.error("Redis error:", error);
      throw new Error("Redis error");
    }
  };

  postOrder = async (userId: string | undefined | null, order: Order) => {
    try {
      let data: IWholeData | null = await this.redis.get(`user:${userId}`);
      if (!data?.orders) {
        data = {
          ...data,
          orders: [order],
        };
      } else {
        data?.orders.push(order);
      }

      await this.redis.set(`user:${userId}`, data);
      console.log("Messages posted successfully", { status: 201 });
    } catch (error) {
      console.error("Redis error while posting:", error);
    }
  };
}

export const ordersService = new OrdersService();
