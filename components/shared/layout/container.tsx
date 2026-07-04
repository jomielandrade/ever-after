import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Container.displayName = "Container";

export { Container };
export type { ContainerProps };