"use client";

import { Caption } from "@/components/shared";
import { cn } from "@/lib/utils";

import { OPEN_INSTRUCTION } from "../constants";
import type { OpenInstructionProps } from "../types";

function OpenInstruction({ className, visible }: OpenInstructionProps) {
  if (!visible) {
    return null;
  }

  return (
    <Caption
      className={cn(
        "text-center tracking-[0.2em] uppercase",
        className,
      )}
      aria-hidden="true"
    >
      {OPEN_INSTRUCTION}
    </Caption>
  );
}

OpenInstruction.displayName = "OpenInstruction";

export { OpenInstruction };
