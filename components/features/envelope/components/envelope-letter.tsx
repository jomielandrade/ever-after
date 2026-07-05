"use client";

import { motion } from "motion/react";

import {
  CardFrame,
  DecorativeFlourish,
  getMotionSafeTransition,
  transitions,
  usePrefersReducedMotion,
} from "@/components/shared";
import { cn } from "@/lib/utils";

import { LETTER_REVEAL_DELAY } from "../constants";
import type { EnvelopeLetterProps } from "../types";

function EnvelopeLetter({ className, isActive }: EnvelopeLetterProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn(
        "absolute inset-x-4 top-3 z-0 flex justify-center",
        className,
      )}
      initial={false}
      animate={{
        y: isActive ? -48 : 8,
        opacity: isActive ? 1 : 0.85,
      }}
      transition={getMotionSafeTransition(
        {
          ...transitions.elegant,
          delay: isActive ? LETTER_REVEAL_DELAY : 0,
        },
        prefersReducedMotion,
      )}
      aria-hidden="true"
    >
      <CardFrame
        padding="sm"
        className="flex h-28 w-full max-w-[200px] items-center justify-center border-accent/20 bg-background shadow-sm"
      >
        <DecorativeFlourish size="sm" className="text-accent/50" />
      </CardFrame>
    </motion.div>
  );
}

EnvelopeLetter.displayName = "EnvelopeLetter";

export { EnvelopeLetter };
