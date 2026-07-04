import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const stackVariants = cva("flex", {
  variants: {
    direction: {
      vertical: "flex-col",
      horizontal: "flex-row",
    },
    gap: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-12",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    direction: "vertical",
    gap: "md",
    align: "stretch",
    justify: "start",
  },
});

interface StackProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof stackVariants> {}

function Stack({
  className,
  direction,
  gap,
  align,
  justify,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        stackVariants({ direction, gap, align, justify, className }),
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Stack.displayName = "Stack";

export { Stack, stackVariants };
export type { StackProps };
