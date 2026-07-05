import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardFrameVariants = cva(
  "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6 md:p-8",
        lg: "p-8 md:p-10",
      },
    },
    defaultVariants: {
      padding: "md",
    },
  },
);

interface CardFrameProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof cardFrameVariants> {}

function CardFrame({
  className,
  padding,
  children,
  ...props
}: CardFrameProps) {
  return (
    <div
      className={cn(cardFrameVariants({ padding, className }))}
      {...props}
    >
      {children}
    </div>
  );
}

CardFrame.displayName = "CardFrame";

export { CardFrame, cardFrameVariants };
export type { CardFrameProps };
