import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Item from "@/app/types/DataType";

const initialState: Item[] = [];

const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.amount = (existingItem.amount || 0) + 1;
      } else {
        state.push({
          ...action.payload,
          amount: 1,
        });
      }
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        const item = state[index];
        if (item.amount > 1) {
          item.amount--;
        } else {
          state.splice(index, 1);
        }
      }
    },
    emptyBag: (state) => {
      state.length = 0;
    },
  },
});

export const calculateTotal = (state: Item[]) => {
  return state.reduce((total, item) => {
    const itemTotal = (item.amount || 0) * item.price;
    return total + itemTotal;
  }, 0);
};

export const { addItem, removeItem, emptyBag } = bagSlice.actions;
export default bagSlice.reducer;
