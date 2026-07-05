import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const flourishVariants = cva("text-accent/70", {
  variants: {
    size: {
      sm: "h-3 w-16",
      md: "h-4 w-24",
      lg: "h-5 w-32",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface DecorativeFlourishProps
  extends Omit<React.ComponentPropsWithoutRef<"svg">, "children">,
    VariantProps<typeof flourishVariants> {}

function DecorativeFlourish({
  className,
  size,
  ...props
}: DecorativeFlourishProps) {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      viewBox="0 0 96 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(flourishVariants({ size, className }))}
      {...props}
    >
      <path
        d="M0 8h36"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path
        d="M60 8h36"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <circle cx="48" cy="8" r="2" fill="currentColor" fillOpacity="0.6" />
      <path
        d="M42 8c2-3 4-3 6 0s4 3 6 0"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

DecorativeFlourish.displayName = "DecorativeFlourish";

export { DecorativeFlourish, flourishVariants };
export type { DecorativeFlourishProps };
