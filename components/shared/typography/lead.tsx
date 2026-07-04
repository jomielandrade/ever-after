import { cn } from "@/lib/utils";

import { bodyStyles } from "./typography-styles";

type LeadProps = React.ComponentPropsWithoutRef<"p">;

function Lead({ className, children, ...props }: LeadProps) {
  return (
    <p
      className={cn(
        bodyStyles,
        "text-lg leading-relaxed md:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

Lead.displayName = "Lead";

export { Lead };
export type { LeadProps };
