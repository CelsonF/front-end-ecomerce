import Image from "next/image";

const leftImage =
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80";
const rightImage =
  "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=900&q=80";

export default function FeaturedCollection() {
  return (
    <section className="border-y border-shl-dark/10 bg-gradient-to-b from-shl-soft via-neutral-100 to-shl-soft/60 py-14 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <div className="relative aspect-[3/5] overflow-hidden rounded-sm lg:aspect-[4/6]">
            <Image src={leftImage} alt="Coleção em destaque" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
          </div>

          <div className="flex justify-center lg:min-w-[160px]">
            <button
              type="button"
              className="rounded-md border border-shl-dark bg-shl-soft px-10 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-shl-dark transition hover:bg-shl-vibrant hover:text-white"
            >
              Shop
            </button>
          </div>

          <div className="relative aspect-[3/5] overflow-hidden rounded-sm lg:aspect-[4/6]">
            <Image src={rightImage} alt="Coleção em destaque" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
