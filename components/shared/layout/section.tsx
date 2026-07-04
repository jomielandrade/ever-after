import { cn } from "@/lib/utils";

type SectionProps = React.ComponentPropsWithoutRef<"section">;

function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("w-full py-12 md:py-16 lg:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
}

Section.displayName = "Section";

export { Section };
export type { SectionProps };
