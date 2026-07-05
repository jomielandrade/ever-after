"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { OPENING_SEQUENCE_DURATION_MS } from "../constants";
import type {
  EnvelopePhase,
  UseEnvelopeOptions,
  UseEnvelopeReturn,
} from "../types";

function resolveInitialPhase(isOpen: boolean): EnvelopePhase {
  return isOpen ? "opened" : "closed";
}

function useEnvelope({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  onOpenComplete,
}: UseEnvelopeOptions = {}): UseEnvelopeReturn {
  const isControlled = controlledOpen !== undefined;
  const initialOpen = isControlled ? controlledOpen : defaultOpen;

  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [phase, setPhase] = useState<EnvelopePhase>(() =>
    resolveInitialPhase(initialOpen ?? false),
  );

  const hasCompletedRef = useRef(initialOpen ?? false);
  const controlledOpenRef = useRef(controlledOpen);
  const onOpenCompleteRef = useRef(onOpenComplete);

  const isOpen = isControlled ? controlledOpen : internalOpen;

  useEffect(() => {
    onOpenCompleteRef.current = onOpenComplete;
  }, [onOpenComplete]);

  useEffect(() => {
    if (!isControlled) {
      return;
    }

    const previousOpen = controlledOpenRef.current;
    if (previousOpen === controlledOpen) {
      return;
    }

    controlledOpenRef.current = controlledOpen;

    if (controlledOpen) {
      // Synchronize animation phase when the controlled `open` prop changes.
      setPhase((current) => (current === "closed" ? "opening" : current));
    } else {
      setPhase("closed");
      hasCompletedRef.current = false;
    }
  }, [controlledOpen, isControlled]);

  const setOpen = useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setInternalOpen(next);
      }
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange],
  );

  const openEnvelope = useCallback(() => {
    let didOpen = false;

    setPhase((current) => {
      if (current !== "closed") {
        return current;
      }

      didOpen = true;
      return "opening";
    });

    if (didOpen) {
      setOpen(true);
    }
  }, [setOpen]);

  useEffect(() => {
    if (phase !== "opening") {
      return;
    }

    const timer = window.setTimeout(() => {
      setPhase("opened");

      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        onOpenCompleteRef.current?.();
      }
    }, OPENING_SEQUENCE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [phase]);

  return {
    phase,
    isOpen,
    isInteractive: phase === "closed",
    openEnvelope,
  };
}

export { useEnvelope };
