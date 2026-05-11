"use client";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

const categoryCards = [
  {
    name: "Moletom",
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Macaquinho",
    imageUrl:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Jaqueta",
    imageUrl:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Camiseta",
    imageUrl:
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Legging",
    imageUrl:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Top",
    imageUrl:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=700&q=80",
  },
];

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerPage(1);
      else if (w < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return itemsPerPage;
}

export default function CategoriesSlider() {
  const itemsPerPage = useItemsPerPage();

  const totalPages = Math.max(1, Math.ceil(categoryCards.length / itemsPerPage));

  const [page, setPage] = useState(0);

  const effectivePage = Math.min(Math.max(0, page), totalPages - 1);

  const visibleCards = useMemo(() => {
    const start = effectivePage * itemsPerPage;
    return categoryCards.slice(start, start + itemsPerPage);
  }, [itemsPerPage, effectivePage]);

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
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-7xl">
        <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-black md:mb-10 md:text-base">
          Categorias
        </h2>

        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <button
            type="button"
            aria-label="Página anterior"
            onClick={goPrev}
            disabled={effectivePage === 0}
            className="shrink-0 self-center rounded-md bg-neutral-400/70 p-2.5 text-white transition hover:bg-neutral-400 disabled:pointer-events-none disabled:opacity-30"
          >
            <CaretLeftIcon size={18} weight="bold" />
          </button>

          <div
            className="min-w-0 flex-1"
            role="region"
            aria-roledescription="carousel"
            aria-label="Categorias de produtos"
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {visibleCards.map((category) => (
                <article key={category.name} className="flex flex-col">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-neutral-100">
                    <Image
                      src={category.imageUrl}
                      alt={`Mulher usando ${category.name.toLowerCase()}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="pt-3 text-center text-xs font-semibold uppercase tracking-wide text-black md:text-sm">
                    {category.name}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Próxima página"
            onClick={goNext}
            disabled={effectivePage >= totalPages - 1}
            className="shrink-0 self-center rounded-md bg-neutral-400/70 p-2.5 text-white transition hover:bg-neutral-400 disabled:pointer-events-none disabled:opacity-30"
          >
            <CaretRightIcon size={18} weight="bold" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2" aria-label="Indicador de páginas">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={String(i)}
              type="button"
              aria-label={`Ir para página ${i + 1} de ${totalPages}`}
              aria-current={i === effectivePage}
              onClick={() => setPage(i)}
              className={`h-2 w-2 rounded-full transition ${i === effectivePage ? "bg-shl-vibrant" : "bg-neutral-300 hover:bg-shl-dark/35"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
