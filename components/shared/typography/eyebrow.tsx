import { cn } from "@/lib/utils";

import { uiStyles } from "./typography-styles";

type EyebrowProps = React.ComponentPropsWithoutRef<"span">;

function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        uiStyles,
        "block text-xs font-medium uppercase tracking-widest text-muted-foreground md:text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

Eyebrow.displayName = "Eyebrow";

export { Eyebrow };
export type { EyebrowProps };
