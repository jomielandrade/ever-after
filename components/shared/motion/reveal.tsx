"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

import {
  getMotionSafeTransition,
  getMotionSafeVariants,
  usePrefersReducedMotion,
} from "./prefers-motion";
import { transitions, type TransitionPreset } from "./transitions";
import { revealVariants } from "./variants";

interface RevealProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "animate" | "variants" | "transition"
  > {
  children?: React.ReactNode;
  className?: string;
  transition?: TransitionPreset;
  delay?: number;
  distance?: number;
}

function createRevealVariants(distance: number): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 },
  };
}

function Reveal({
  children,
  className,
  transition: transitionPreset = "elegant",
  delay,
  distance = 16,
  ...props
}: RevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const baseTransition = transitions[transitionPreset];
  const transition = getMotionSafeTransition(
    {
      ...baseTransition,
      ...(delay !== undefined ? { delay } : {}),
    },
    prefersReducedMotion,
  );
  const variants = getMotionSafeVariants(
    distance === 16 ? revealVariants : createRevealVariants(distance),
    prefersReducedMotion,
  );

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}

Reveal.displayName = "Reveal";

export { Reveal };
export type { RevealProps };
