import { cn } from "@/lib/utils";

import type { EnvelopeSealProps } from "../types";

function EnvelopeSeal({ className }: EnvelopeSealProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-[38%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40 bg-accent/80 shadow-sm",
        className,
      )}
      aria-hidden="true"
    />
  );
}

EnvelopeSeal.displayName = "EnvelopeSeal";

export { EnvelopeSeal };
