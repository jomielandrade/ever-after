import { cn } from "@/lib/utils";

import { headingStyles } from "./typography-styles";

type SectionTitleProps = React.ComponentPropsWithoutRef<"h2">;

function SectionTitle({ className, children, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        headingStyles,
        "text-2xl leading-tight md:text-3xl lg:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

SectionTitle.displayName = "SectionTitle";

export { SectionTitle };
export type { SectionTitleProps };
