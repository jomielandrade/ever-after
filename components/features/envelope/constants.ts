const OPEN_INSTRUCTION = "Tap to Open";

const ENVELOPE_ARIA_LABEL = "Open wedding invitation envelope";

/** Total duration of the opening sequence before `onOpenComplete` fires. */
const OPENING_SEQUENCE_DURATION_MS = 1400;

/** Delay before the flap begins rotating open. */
const FLAP_OPEN_DELAY = 0.2;

/** Delay before the letter begins sliding upward. */
const LETTER_REVEAL_DELAY = 0.45;

/** Subtle vertical float distance for the closed-state idle animation. */
const IDLE_FLOAT_DISTANCE = 3;

/** Peak scale for the closed-state idle animation. */
const IDLE_SCALE_PEAK = 1.008;

/** Duration of one idle animation cycle in seconds. */
const IDLE_ANIMATION_DURATION = 3.5;

export {
  ENVELOPE_ARIA_LABEL,
  FLAP_OPEN_DELAY,
  IDLE_ANIMATION_DURATION,
  IDLE_FLOAT_DISTANCE,
  IDLE_SCALE_PEAK,
  LETTER_REVEAL_DELAY,
  OPEN_INSTRUCTION,
  OPENING_SEQUENCE_DURATION_MS,
};
