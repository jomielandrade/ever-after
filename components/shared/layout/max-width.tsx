import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const maxWidthVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      prose: "max-w-prose",
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-5xl",
      xl: "max-w-7xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

interface MaxWidthProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof maxWidthVariants> {}

function MaxWidth({ className, size, children, ...props }: MaxWidthProps) {
  return (
    <div className={cn(maxWidthVariants({ size, className }))} {...props}>
      {children}
    </div>
  );
}

MaxWidth.displayName = "MaxWidth";

export { MaxWidth, maxWidthVariants };
export type { MaxWidthProps };
