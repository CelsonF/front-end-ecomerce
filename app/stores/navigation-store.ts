import { create } from "zustand";

type NavigationState = {
  activeItem: string;
  search: string;
  isDrawerOpen: boolean;
  setActiveItem: (item: string) => void;
  setSearch: (value: string) => void;
  toggleDrawer: () => void;
  closeDrawer: () => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
  activeItem: "Home",
  search: "",
  isDrawerOpen: false,
  setActiveItem: (item) => set({ activeItem: item }),
  setSearch: (value) => set({ search: value }),
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  closeDrawer: () => set({ isDrawerOpen: false }),
}));
