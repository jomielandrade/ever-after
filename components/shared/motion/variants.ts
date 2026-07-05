import type { Variants } from "motion/react";

export const DISTANCE = {
  sm: 8,
  md: 16,
  lg: 24,
} as const;

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: DISTANCE.md },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: DISTANCE.sm },
  visible: { opacity: 1, y: 0 },
};

export {
  fade,
  fade as fadeVariants,
  reveal,
  reveal as revealVariants,
  staggerContainer,
  staggerContainer as staggerContainerVariants,
  staggerContainer as staggerVariants,
  staggerItem,
  staggerItem as staggerItemVariants,
};


