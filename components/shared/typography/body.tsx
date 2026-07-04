import { cn } from "@/lib/utils";

import { bodyStyles } from "./typography-styles";

type BodyProps = React.ComponentPropsWithoutRef<"p">;

function Body({ className, children, ...props }: BodyProps) {
  return (
    <p
      className={cn(bodyStyles, "text-base leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

Body.displayName = "Body";

export { Body };
export type { BodyProps };
