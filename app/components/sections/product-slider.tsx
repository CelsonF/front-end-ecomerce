"use client";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const products = [
  {
    id: "1",
    name: "Top performance verde",
    price: "R$ 119,90",
    imageUrl:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Legging SHL",
    price: "R$ 149,90",
    imageUrl:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Jaqueta leve",
    price: "R$ 289,90",
    imageUrl:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Camiseta essentials",
    price: "R$ 89,90",
    imageUrl:
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "5",
    name: "Conjunto duo",
    price: "R$ 239,90",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    name: "Macaquinho training",
    price: "R$ 169,90",
    imageUrl:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=600&q=80",
  },
];

function useItemsPerPage() {
  const [n, setN] = useState(4);

  useEffect(() => {
    const u = () => {
      const w = window.innerWidth;
      if (w < 640) setN(1);
      else if (w < 1024) setN(2);
      else setN(4);
    };
    u();
    window.addEventListener("resize", u);
    return () => window.removeEventListener("resize", u);
  }, []);

  return n;
}

export default function ProductSlider() {
  const itemsPerPage = useItemsPerPage();

  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage));
  const [page, setPage] = useState(0);

  const effectivePage = Math.min(Math.max(0, page), totalPages - 1);

  const visible = useMemo(() => {
    const start = effectivePage * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  }, [effectivePage, itemsPerPage]);

  const goPrev = useCallback(() => {
    setPage((p) => {
      const e = Math.min(Math.max(0, p), totalPages - 1);
      return Math.max(0, e - 1);
    });
  }, [totalPages]);

  const goNext = useCallback(() => {
    setPage((p) => {
      const e = Math.min(Math.max(0, p), totalPages - 1);
      return Math.min(totalPages - 1, e + 1);
    });
  }, [totalPages]);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            aria-label="Produtos anteriores"
            onClick={goPrev}
            disabled={effectivePage === 0}
            className="shrink-0 bg-neutral-400/70 p-2.5 text-white transition hover:bg-neutral-400 disabled:pointer-events-none disabled:opacity-30"
          >
            <CaretLeftIcon size={18} weight="bold" />
          </button>

          <div className="min-w-0 flex-1">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visible.map((product) => (
                <article
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-sm border border-shl-dark/10 bg-white shadow-sm"
                >
                  <div className="relative aspect-[3/4] bg-neutral-100">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-4">
                    <h3 className="text-sm font-semibold text-shl-dark">{product.name}</h3>
                    <p className="text-shl-vibrant" aria-hidden="true">
                      ★★★★★
                    </p>
                    <p className="text-base font-semibold text-shl-dark">{product.price}</p>
                    <button
                      type="button"
                      className="mt-auto border border-shl-dark bg-shl-vibrant py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-shl-dark hover:text-shl-soft"
                    >
                      Comprar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Próximos produtos"
            onClick={goNext}
            disabled={effectivePage >= totalPages - 1}
            className="shrink-0 bg-neutral-400/70 p-2.5 text-white transition hover:bg-neutral-400 disabled:pointer-events-none disabled:opacity-30"
          >
            <CaretRightIcon size={18} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
