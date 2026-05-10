"use client";

import { CreditCardIcon, LockKeyIcon, SwapIcon, TruckIcon } from "@phosphor-icons/react";

const items = [
  {
    title: "Frete flexível",
    body: "Envio para todo o Brasil com rastreio e prazos combinados.",
    Icon: TruckIcon,
  },
  {
    title: "Trocas simplificadas",
    body: "Política clara de troca para você comprar com confiança.",
    Icon: SwapIcon,
  },
  {
    title: "Compra segura",
    body: "Checkout protegido e dados criptografados.",
    Icon: LockKeyIcon,
  },
  {
    title: "Formas de pagamento",
    body: "Pix, cartão e outras opções no checkout.",
    Icon: CreditCardIcon,
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-6">
        {items.map(({ Icon, title, body }) => (
          <div
            key={title}
            className="flex flex-col items-center border border-shl-dark/15 bg-shl-soft/40 p-6 text-center"
          >
            <Icon className="mb-3 text-shl-dark" size={28} weight="duotone" aria-hidden />
            <h3 className="text-sm font-semibold text-shl-dark">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-shl-dark/75">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
