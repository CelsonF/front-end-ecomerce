"use client";

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import Header from "../layout/header";

const slides = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000&q=80",
    title: "Sol de Inverno",
    cta: "APROVEITE",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=2000&q=80",
    title: "Nova Colecao",
    cta: "COMPRAR",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=2000&q=80",
    title: "Performance SHL",
    cta: "VER MAIS",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = useMemo(() => slides[activeSlide], [activeSlide]);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative min-h-[78vh] overflow-hidden">
      <Image src={currentSlide.imageUrl} alt={currentSlide.title} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-shl-dark/50 via-black/25 to-shl-dark/40" />

      <div className="relative z-20 flex min-h-[78vh] flex-col text-white">
        <Header />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6 text-center">
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-md bg-white/40 p-3 text-black transition hover:bg-white/70 md:block"
          >
            <CaretLeftIcon size={18} weight="bold" />
          </button>

          <div className="pb-6">
            <h1 className="font-serif text-5xl italic drop-shadow-md md:text-7xl">{currentSlide.title}</h1>
            <button className="mt-4 rounded-md border border-white/70 bg-black/25 px-7 py-1.5 text-sm tracking-widest transition hover:bg-white/15">
              {currentSlide.cta}
            </button>
          </div>

          <button
            type="button"
            aria-label="Próximo slide"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-md bg-white/40 p-3 text-black transition hover:bg-white/70 md:block"
          >
            <CaretRightIcon size={18} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
