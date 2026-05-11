"use client";

import { X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigationStore } from "@/app/stores/navigation-store";
import { navItems } from "./navigation-menu";
import { SearchBar } from "./search-bar";
import { UserAccount } from "./user-account";
import { useEffect } from "react";

export function NavigationDrawer() {
  const { isDrawerOpen, closeDrawer } = useNavigationStore();

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.nav
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-0 top-0 h-full w-64 bg-shl-dark z-50 md:hidden flex flex-col overflow-y-auto"
            aria-label="Menu mobile"
          >
            {/* Header com close button */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-white font-medium">Menu</h2>
              <button
                onClick={closeDrawer}
                aria-label="Fechar menu"
                className="p-2 text-white hover:bg-white/10 transition-colors rounded-md"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            {/* Navigation items */}
            <div className="flex-1 flex flex-col gap-1 p-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={closeDrawer}
                      className="block px-4 py-3 text-white hover:bg-shl-vibrant hover:text-shl-dark transition-colors rounded-md text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer with search and account */}
            <div className="border-t border-white/10 p-4 space-y-3">
              <SearchBar />
              <UserAccount />
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
