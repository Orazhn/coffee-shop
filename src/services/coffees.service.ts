import axios from "axios";
import Item from "@/types/DataType";

class CoffeeService {
  private url = process.env.COFFEE_API;
  getCoffees = async () => {
    return await axios.get<Item[]>(`${this.url}`);
  };

  getCoffeeById = async (id: number) => {
    return await axios.get<Item>(`${this.url}/${id}`);
  };
}

export const coffeeService = new CoffeeService();
