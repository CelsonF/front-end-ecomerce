"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useNavigationStore } from "@/app/stores/navigation-store";

export function SearchBar() {
  const { search, setSearch } = useNavigationStore();

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded hover:bg-white/15 transition-colors">
      <MagnifyingGlass size={20} className="text-white/70" weight="bold" />
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Buscar produtos"
        className="bg-transparent text-white placeholder-white/50 outline-none text-sm flex-1"
      />
    </div>
  );
}
