import { create } from "zustand";
import Item from "@/types/DataType";

interface BagStore {
  bag: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
  emptyBag: () => void;
  calculateTotal: () => number;
}

const useBagStore = create<BagStore>((set) => ({
  bag: JSON.parse(localStorage.getItem("bag") || "[]"),

  addItem: (newItem) =>
    set((state) => {
      const existingItem = state.bag.find((item) => item.id === newItem.id);
      let updatedBag;

      if (existingItem) {
        updatedBag = state.bag.map((item) =>
          item.id === newItem.id
            ? { ...item, amount: (item.amount || 0) + 1 }
            : item
        );
      } else {
        updatedBag = [...state.bag, { ...newItem, amount: 1 }];
      }

      localStorage.setItem("bag", JSON.stringify(updatedBag));
      return { bag: updatedBag };
    }),

  removeItem: (itemToRemove) =>
    set((state) => {
      const updatedBag = state.bag.reduce((result, item) => {
        if (item.id === itemToRemove.id) {
          if (item.amount > 1) {
            result.push({ ...item, amount: item.amount - 1 });
          }
        } else {
          result.push(item);
        }
        return result;
      }, [] as Item[]);

      localStorage.setItem("bag", JSON.stringify(updatedBag));
      return { bag: updatedBag };
    }),

  emptyBag: () =>
    set(() => {
      localStorage.setItem("bag", JSON.stringify([]));
      return { bag: [] };
    }),

  calculateTotal: () =>
    JSON.parse(localStorage.getItem("bag") || "[]").reduce(
      (total: number, item: Item) => total + (item.amount || 0) * item.price,
      0
    ),
}));

export default useBagStore;
