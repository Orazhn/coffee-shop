import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state for search
interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

// Create the search slice
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      console.log(state.search);
    },
  },
});

// Export the action to update the search
export const { updateSearch } = searchSlice.actions;

// Export the reducer to be used in the store
export default searchSlice.reducer;
