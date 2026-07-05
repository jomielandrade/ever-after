"use client";

import { motion } from "motion/react";

import {
  getMotionSafeTransition,
  transitions,
  usePrefersReducedMotion,
} from "@/components/shared";
import { cn } from "@/lib/utils";

import { FLAP_OPEN_DELAY } from "../constants";
import type { EnvelopeFlapProps } from "../types";
import { EnvelopeSeal } from "./envelope-seal";

function EnvelopeFlap({ className, isActive }: EnvelopeFlapProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn("absolute inset-x-0 top-0 z-30 h-[52%]", className)}
      initial={false}
      animate={{
        rotateX: isActive ? 180 : 0,
      }}
      transition={getMotionSafeTransition(
        {
          ...transitions.elegant,
          delay: isActive ? FLAP_OPEN_DELAY : 0,
        },
        prefersReducedMotion,
      )}
      style={{
        transformOrigin: "top center",
        transformStyle: "preserve-3d",
      }}
      aria-hidden="true"
    >
      <div
        className="h-full w-full bg-card"
        style={{
          clipPath: "polygon(0 0, 50% 100%, 100% 0)",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
        <EnvelopeSeal />
      </div>
    </motion.div>
  );
}

EnvelopeFlap.displayName = "EnvelopeFlap";

export { EnvelopeFlap };
