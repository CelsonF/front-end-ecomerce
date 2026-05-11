"use client";

import { User } from "@phosphor-icons/react";

export function UserAccount() {
  return (
    <button
      aria-label="Minha conta"
      className="p-2 text-white hover:bg-white/10 transition-colors rounded-full"
    >
      <User size={20} weight="bold" />
    </button>
  );
}
