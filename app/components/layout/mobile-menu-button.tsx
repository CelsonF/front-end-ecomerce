"use client";

import { List } from "@phosphor-icons/react";
import { useNavigationStore } from "@/app/stores/navigation-store";

export function MobileMenuButton() {
  const { isDrawerOpen, toggleDrawer } = useNavigationStore();

  return (
    <button
      aria-label={isDrawerOpen ? "Fechar menu" : "Abrir menu"}
      aria-expanded={isDrawerOpen}
      onClick={toggleDrawer}
      className="block md:hidden p-2 text-white hover:bg-white/10 transition-colors rounded-full"
    >
      <List size={24} weight="bold" />
    </button>
  );
}
