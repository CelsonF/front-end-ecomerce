import { create } from "zustand";

type NavigationState = {
  activeItem: string;
  search: string;
  setActiveItem: (item: string) => void;
  setSearch: (value: string) => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
  activeItem: "Home",
  search: "",
  setActiveItem: (item) => set({ activeItem: item }),
  setSearch: (value) => set({ search: value }),
}));
