import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const dividerVariants = cva("shrink-0 border-0 bg-accent/50", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-auto min-h-4 w-px self-stretch",
    },
    spacing: {
      none: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
  },
  compoundVariants: [
    { orientation: "horizontal", spacing: "sm", className: "my-4" },
    { orientation: "horizontal", spacing: "md", className: "my-6" },
    { orientation: "horizontal", spacing: "lg", className: "my-8" },
    { orientation: "horizontal", spacing: "xl", className: "my-12" },
    { orientation: "vertical", spacing: "sm", className: "mx-4" },
    { orientation: "vertical", spacing: "md", className: "mx-6" },
    { orientation: "vertical", spacing: "lg", className: "mx-8" },
    { orientation: "vertical", spacing: "xl", className: "mx-12" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    spacing: "md",
  },
});

interface DividerProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "children">,
    VariantProps<typeof dividerVariants> {}

function Divider({
  className,
  orientation,
  spacing,
  ...props
}: DividerProps) {
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={cn(dividerVariants({ orientation, spacing, className }))}
      {...props}
    />
  );
}

Divider.displayName = "Divider";

export { Divider, dividerVariants };
export type { DividerProps };
