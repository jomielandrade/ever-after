import type { Transition } from "motion/react";

const DURATION = {
  fast: 0.2,
  standard: 0.4,
  elegant: 0.6,
  slow: 0.8,
} as const;

const EASING = {
  standard: [0.4, 0, 0.2, 1] as const,
  decelerate: [0, 0, 0.2, 1] as const,
  emphasized: [0.2, 0, 0, 1] as const,
} as const;

const transitions = {
  gentle: {
    duration: DURATION.standard,
    ease: EASING.decelerate,
  },
  elegant: {
    duration: DURATION.elegant,
    ease: EASING.decelerate,
  },
  slow: {
    duration: DURATION.slow,
    ease: EASING.decelerate,
  },
  fast: {
    duration: DURATION.fast,
    ease: EASING.standard,
  },
} as const satisfies Record<string, Transition>;

type TransitionPreset = keyof typeof transitions;

export { DURATION, EASING, transitions };
export type { TransitionPreset };
