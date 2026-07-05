type EnvelopePhase = "closed" | "opening" | "opened";

interface EnvelopeExperienceProps {
  className?: string;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onOpenComplete?: () => void;
}

interface EnvelopeProps {
  className?: string;
  phase: EnvelopePhase;
  onActivate: () => void;
}

interface EnvelopeFlapProps {
  className?: string;
  isActive: boolean;
}

interface EnvelopeSealProps {
  className?: string;
}

interface EnvelopeLetterProps {
  className?: string;
  isActive: boolean;
}

interface OpenInstructionProps {
  className?: string;
  visible: boolean;
}

interface UseEnvelopeOptions {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onOpenComplete?: () => void;
}

interface UseEnvelopeReturn {
  phase: EnvelopePhase;
  isOpen: boolean;
  isInteractive: boolean;
  openEnvelope: () => void;
}

export type {
  EnvelopeExperienceProps,
  EnvelopeFlapProps,
  EnvelopeLetterProps,
  EnvelopePhase,
  EnvelopeProps,
  EnvelopeSealProps,
  OpenInstructionProps,
  UseEnvelopeOptions,
  UseEnvelopeReturn,
};
