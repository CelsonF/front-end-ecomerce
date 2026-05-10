import Image from "next/image";

const linkGroup = (title: string, links: string[]) => (
  <div>
    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-shl-lime">{title}</p>
    <ul className="space-y-2 text-sm text-shl-soft/85">
      {links.map((label) => (
        <li key={label}>
          <a href="#" className="transition hover:text-shl-lime">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-shl-dark text-shl-soft">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Image src="/shl-fitness-logo.png" alt="SHL Fitness" width={110} height={55} className="mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-shl-soft/75">
              Activewear premium pensado para performance, conforto e estilo no seu dia a dia.
            </p>
            <div className="mt-4 flex gap-3 text-sm">
              <a href="#" className="underline-offset-2 hover:underline" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className="underline-offset-2 hover:underline" aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>
          {linkGroup("Institucional", ["Sobre nós", "Nossas lojas", "Trabalhe conosco", "Sustentabilidade"])}
          {linkGroup("Ajuda", ["Central de ajuda", "Trocas e devoluções", "Prazos de entrega", "Fale conosco"])}
          {linkGroup("Legal", ["Privacidade", "Termos de uso", "Cookies"])}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-shl-soft/65">Formas de pagamento: Visa · Mastercard · Elo · Pix</p>
          <p className="text-xs text-shl-soft/65">Compra segura · Certificados SSL</p>
          <div className="text-xs text-shl-soft/65">
            <p className="mb-2 font-medium text-shl-soft">Baixe nosso app</p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded border border-white/20 px-3 py-1.5">App Store</span>
              <span className="rounded border border-white/20 px-3 py-1.5">Google Play</span>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-shl-soft/55">
          © {new Date().getFullYear()} SHL Fitness. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
