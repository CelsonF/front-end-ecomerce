import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-screen-2xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants>;

function Container({ className, size, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size }), className)} {...props} />;
}

export { Container, containerVariants };
