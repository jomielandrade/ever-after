"use client";

import { useReducedMotion, type Transition, type Variants } from "motion/react";

const REDUCED_MOTION_DURATION = 0.01;

function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}

function getMotionSafeTransition(
  transition: Transition,
  prefersReducedMotion: boolean,
): Transition {
  if (!prefersReducedMotion) {
    return transition;
  }

  return {
    ...transition,
    duration: REDUCED_MOTION_DURATION,
    delay: 0,
  };
}

function getMotionSafeVariants(
  variants: Variants,
  prefersReducedMotion: boolean,
): Variants {
  if (!prefersReducedMotion) {
    return variants;
  }

  const visible = variants.visible;

  if (
    typeof visible === "object" &&
    visible !== null &&
    !Array.isArray(visible)
  ) {
    return {
      hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
      visible,
    };
  }

  return {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };
}

export {
  getMotionSafeTransition,
  getMotionSafeVariants,
  REDUCED_MOTION_DURATION,
  usePrefersReducedMotion,
};
