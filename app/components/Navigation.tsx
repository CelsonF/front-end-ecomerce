"use client";

import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";
import { useNavigationStore } from "../stores/navigation-store";

const navItems = ["Coleções", "Novidades", "Ofertas", "Produtos", "Conjuntos", "Trocas", "Squad"];

export default function Navigation() {
  const activeItem = useNavigationStore((state) => state.activeItem);
  const setActiveItem = useNavigationStore((state) => state.setActiveItem);

  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-3 md:flex-row md:justify-center">
        <nav className="flex items-center gap-5 text-xs font-medium tracking-wide text-white/90 lg:gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveItem(item)}
              className={`transition hover:text-shl-lime ${activeItem === item ? "text-shl-lime" : "text-white/90"}`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Buscar"
          className="rounded-full p-2 text-white transition hover:bg-white/10 hover:text-shl-lime"
        >
          <MagnifyingGlassIcon size={18} weight="bold" />
        </button>
        <button
          type="button"
          aria-label="Perfil"
          className="rounded-full p-2 text-white transition hover:bg-white/10 hover:text-shl-lime"
        >
          <UserIcon size={18} weight="duotone" />
        </button>
        <button
          type="button"
          aria-label="Carrinho"
          className="relative rounded-full p-2 text-white transition hover:bg-white/10 hover:text-shl-lime"
        >
          <ShoppingCartIcon size={18} weight="duotone" />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-white" />
        </button>
      </div>
    </>
  );
}
