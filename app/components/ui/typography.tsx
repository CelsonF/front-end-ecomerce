import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7",
      lead: "text-xl text-zinc-600",
      muted: "text-sm text-zinc-500",
      small: "text-sm font-medium leading-none",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type TypographyElement = "h1" | "h2" | "h3" | "h4" | "p" | "span";

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: TypographyElement;
  };

function Typography({ className, variant, as, ...props }: TypographyProps) {
  const defaultTag: Record<NonNullable<TypographyProps["variant"]>, TypographyElement> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    lead: "p",
    muted: "p",
    small: "span",
  };

  const Comp = (as ?? defaultTag[variant ?? "p"]) as keyof React.JSX.IntrinsicElements;
  return <Comp className={cn(typographyVariants({ variant }), className)} {...(props as Record<string, unknown>)} />;
}

export { Typography, typographyVariants };
