"use client";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { useMemo, useState } from "react";

type ReviewItem = {
  id: string;
  name: string;
  text: string;
};

function ReviewCard({ text, name }: ReviewItem) {
  return (
    <article className="flex flex-col border border-shl-dark/10 bg-white p-6 shadow-sm">
      <p className="mb-3 text-sm text-shl-vibrant" aria-hidden="true">
        ★★★★★
      </p>
      <blockquote className="flex-1 text-sm leading-relaxed text-shl-dark">{`“${text}”`}</blockquote>
      <footer className="mt-4 text-xs font-semibold uppercase tracking-wide text-shl-dark/80">{name}</footer>
    </article>
  );
}

const reviews: ReviewItem[] = [
  {
    id: "1",
    name: "Marina Silva",
    text: "Qualidade incrível e entrega rápida. Os conjuntos combinam super bem no dia a dia e no treino.",
  },
  {
    id: "2",
    name: "Paula Oliveira",
    text: "Já comprei leggings e tops — tecido confortável e cores fiéis às fotos. Recomendo demais!",
  },
  {
    id: "3",
    name: "Ana Costa",
    text: "Atendimento atencioso e troca facilitada. A SHL virou minha marca favorita de activewear.",
  },
  {
    id: "4",
    name: "Juliana Rocha",
    text: "Caimento ótimo, secagem rápida e acabamento premium. Voltarei a comprar sem dúvida.",
  },
];

export default function ReviewsSlider() {
  const [rotation, setRotation] = useState(0);

  const visibleDesktop = useMemo(() => [0, 1, 2].map((off) => reviews[(rotation + off) % reviews.length]), [rotation]);

  const activeMobile = rotation % reviews.length;

  const next = () => setRotation((r) => r + 1);
  const prev = () => setRotation((r) => r - 1);

  return (
    <section className="border-y border-shl-dark/10 bg-shl-soft py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-shl-dark md:text-3xl">Nossas avaliações</h2>

        <div className="flex items-stretch gap-2 sm:gap-4 md:gap-6">
          <button
            type="button"
            aria-label="Avaliações anteriores"
            onClick={prev}
            className="shrink-0 self-center bg-neutral-400/70 p-2.5 text-white transition hover:bg-neutral-400"
          >
            <CaretLeftIcon size={18} weight="bold" />
          </button>

          <div className="min-w-0 flex-1">
            <div className="hidden gap-6 md:grid md:grid-cols-3">
              {visibleDesktop.map((r) => (
                <ReviewCard key={`${r.id}-${rotation}`} text={r.text} name={r.name} />
              ))}
            </div>
            <div className="md:hidden">
              <ReviewCard
                key={reviews[activeMobile].id}
                text={reviews[activeMobile].text}
                name={reviews[activeMobile].name}
              />
            </div>
          </div>

          <button
            type="button"
            aria-label="Próximas avaliações"
            onClick={next}
            className="shrink-0 self-center bg-neutral-400/70 p-2.5 text-white transition hover:bg-neutral-400"
          >
            <CaretRightIcon size={18} weight="bold" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2" aria-label="Posição do carrossel">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              type="button"
              aria-label={`Ir para avaliação ${i + 1}`}
              onClick={() => setRotation(i)}
              className={`h-2 w-2 rounded-full transition ${i === activeMobile ? "bg-shl-vibrant" : "bg-shl-dark/25 hover:bg-shl-dark/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
