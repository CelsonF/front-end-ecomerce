export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: "collections", label: "Coleções", href: "/collections" },
  { id: "new", label: "Novidades", href: "/new" },
  { id: "offers", label: "Ofertas", href: "/offers" },
  { id: "products", label: "Produtos", href: "/products" },
  { id: "sets", label: "Conjuntos", href: "/sets" },
  { id: "exchanges", label: "Trocas", href: "/exchanges" },
  { id: "squad", label: "Squad", href: "/squad" },
];
