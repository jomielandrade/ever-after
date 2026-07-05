"use client";

import { motion, type Transition } from "motion/react";

import {
  getMotionSafeTransition,
  transitions,
  usePrefersReducedMotion,
} from "@/components/shared";
import { cn } from "@/lib/utils";

import {
  ENVELOPE_ARIA_LABEL,
  IDLE_ANIMATION_DURATION,
  IDLE_FLOAT_DISTANCE,
  IDLE_SCALE_PEAK,
} from "../constants";
import type { EnvelopeProps } from "../types";
import { EnvelopeFlap } from "./envelope-flap";
import { EnvelopeLetter } from "./envelope-letter";

function Envelope({ className, phase, onActivate }: EnvelopeProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isActive = phase === "opening" || phase === "opened";
  const isInteractive = phase === "closed";
  const isIdle = isInteractive && !prefersReducedMotion;

  const envelopeAnimation = isActive
    ? { y: -12, scale: 1.02 }
    : isIdle
      ? {
          y: [0, -IDLE_FLOAT_DISTANCE, 0],
          scale: [1, IDLE_SCALE_PEAK, 1],
        }
      : { y: 0, scale: 1 };

  const idleTransition: Transition = {
    duration: IDLE_ANIMATION_DURATION,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  };

  const envelopeTransition = isActive
    ? getMotionSafeTransition(transitions.elegant, prefersReducedMotion)
    : isIdle
      ? getMotionSafeTransition(idleTransition, prefersReducedMotion)
      : getMotionSafeTransition(transitions.gentle, prefersReducedMotion);

  return (
    <button
      type="button"
      className={cn(
        "relative mx-auto block w-[min(280px,80vw)] outline-none",
        "rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isInteractive ? "cursor-pointer" : "cursor-default",
        className,
      )}
      onClick={onActivate}
      disabled={!isInteractive}
      aria-label={ENVELOPE_ARIA_LABEL}
      aria-expanded={isActive}
    >
      <motion.div
        className="relative aspect-[7/5] w-full"
        style={{ perspective: 1200 }}
        initial={false}
        animate={envelopeAnimation}
        transition={envelopeTransition}
      >
        <EnvelopeLetter isActive={isActive} />

        <div
          className="absolute inset-0 z-10 rounded-md border border-border bg-secondary/15"
          aria-hidden="true"
        />

        <div
          className="absolute inset-x-0 bottom-0 z-20 h-[62%] rounded-b-md border-x border-b border-border bg-card"
          aria-hidden="true"
        >
          <div
            className="absolute inset-x-0 top-0 h-[45%] bg-card"
            style={{
              clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
            }}
          />
        </div>

        <EnvelopeFlap isActive={isActive} />
      </motion.div>
    </button>
  );
}

Envelope.displayName = "Envelope";

export { Envelope };
