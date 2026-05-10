import Image from "next/image";

const bannerSrc =
  "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=2400&q=80";

export default function LifestyleBanner() {
  return (
    <section className="relative min-h-[min(52vh,520px)] w-full">
      <Image
        src={bannerSrc}
        alt="Campanha lifestyle SHL Fitness"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-shl-dark/50 via-transparent to-shl-dark/20" />
    </section>
  );
}
