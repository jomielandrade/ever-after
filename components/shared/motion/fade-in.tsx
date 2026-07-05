"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { cn } from "@/lib/utils";

import {
  getMotionSafeTransition,
  getMotionSafeVariants,
  usePrefersReducedMotion,
} from "./prefers-motion";
import { transitions, type TransitionPreset } from "./transitions";
import { fadeVariants } from "./variants";

interface FadeInProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "animate" | "variants" | "transition"
  > {
  children?: React.ReactNode;
  className?: string;
  transition?: TransitionPreset;
  delay?: number;
}

function FadeIn({
  children,
  className,
  transition: transitionPreset = "gentle",
  delay,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const baseTransition = transitions[transitionPreset];
  const transition = getMotionSafeTransition(
    {
      ...baseTransition,
      ...(delay !== undefined ? { delay } : {}),
    },
    prefersReducedMotion,
  );
  const variants = getMotionSafeVariants(fadeVariants, prefersReducedMotion);

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

FadeIn.displayName = "FadeIn";

export { FadeIn };
export type { FadeInProps };
