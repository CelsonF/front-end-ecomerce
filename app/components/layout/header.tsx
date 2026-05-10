"use client";

import Image from "next/image";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <header className="w-full border-b border-white/15 bg-black/35 backdrop-blur-[1px]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-2">
        <div className="flex items-center gap-3">
          <Image src="/shl-fitness-logo.png" alt="logo" width={84} height={42} priority />
        </div>
        <Navigation />
      </div>
    </header>
  );
}
