import { cn } from "@/lib/utils";

import { uiStyles } from "./typography-styles";

type CaptionProps = React.ComponentPropsWithoutRef<"span">;

function Caption({ className, children, ...props }: CaptionProps) {
  return (
    <span
      className={cn(
        uiStyles,
        "block text-sm leading-normal text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

Caption.displayName = "Caption";

export { Caption };
export type { CaptionProps };
