"use client";

import { Children, isValidElement } from "react";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

import {
  getMotionSafeTransition,
  getMotionSafeVariants,
  usePrefersReducedMotion,
} from "./prefers-motion";
import { transitions, type TransitionPreset } from "./transitions";
import { staggerContainerVariants, staggerItemVariants } from "./variants";

/**
 * Wraps each direct child in a motion.div
 * to enable staggered entrance animations.
 */

interface StaggerProps
  extends Omit<
    HTMLMotionProps<"div">,
    "initial" | "animate" | "variants" | "transition"
  > {
  children: React.ReactNode;
  className?: string;
  transition?: TransitionPreset;
  staggerDelay?: number;
  delayChildren?: number;
}

function createStaggerContainerVariants(
  staggerDelay: number,
  delayChildren: number,
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

function Stagger({
  children,
  className,
  transition: transitionPreset = "gentle",
  staggerDelay = 0.1,
  delayChildren = 0.1,
  ...props
}: StaggerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const itemTransition = getMotionSafeTransition(
    transitions[transitionPreset],
    prefersReducedMotion,
  );
  const containerVariants = getMotionSafeVariants(
    staggerDelay === 0.1 && delayChildren === 0.1
      ? staggerContainerVariants
      : createStaggerContainerVariants(staggerDelay, delayChildren),
    prefersReducedMotion,
  );
  const itemVariants = getMotionSafeVariants(
    staggerItemVariants,
    prefersReducedMotion,
  );

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      {...props}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return child;
        }

        return (
          <motion.div
            key={child.key}
            variants={itemVariants}
            transition={itemTransition}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}

Stagger.displayName = "Stagger";

export { Stagger };
export type { StaggerProps };
