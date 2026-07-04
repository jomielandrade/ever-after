import { cn } from "@/lib/utils";

import { headingStyles } from "./typography-styles";

type PageTitleProps = React.ComponentPropsWithoutRef<"h1">;

function PageTitle({ className, children, ...props }: PageTitleProps) {
  return (
    <h1
      className={cn(
        headingStyles,
        "text-3xl leading-tight md:text-4xl lg:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

PageTitle.displayName = "PageTitle";

export { PageTitle };
export type { PageTitleProps };
