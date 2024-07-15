import { create } from "zustand";

interface Search {
  searchText: string;
  setSearchText: (searchText: string) => void;
}

const useSearch = create<Search>((set) => ({
  searchText: "",
  setSearchText: (searchText: string) => set({ searchText }),
}));

export default useSearch;
