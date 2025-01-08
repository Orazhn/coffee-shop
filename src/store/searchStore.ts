import { create } from "zustand";

interface SearchState {
  search: string;
  updateSearch: (newSearch: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  search: "",

  updateSearch: (newSearch) => {
    set({ search: newSearch });
  },
}));

export default useSearchStore;
