"use client";

import {
  Container,
  DecorativeFlourish,
  FadeIn,
  Section,
  Stack,
  Stagger,
} from "@/components/shared";
import { cn } from "@/lib/utils";

import { useEnvelope } from "../hooks/use-envelope";
import type { EnvelopeExperienceProps } from "../types";
import { Envelope } from "./envelope";
import { OpenInstruction } from "./open-instruction";

function EnvelopeExperience({
  className,
  open,
  defaultOpen,
  onOpenChange,
  onOpenComplete,
}: EnvelopeExperienceProps) {
  const { phase, isInteractive, openEnvelope } = useEnvelope({
    open,
    defaultOpen,
    onOpenChange,
    onOpenComplete,
  });

  return (
    <Section
      className={cn(
        "flex min-h-svh items-center bg-background py-16 md:py-24",
        className,
      )}
      aria-label="Invitation envelope"
    >
      <Container className="w-full">
        <FadeIn>
          <Stack gap="xl" align="center" justify="center">
            <Stagger
              className="flex w-full flex-col items-center gap-8"
              staggerDelay={0.12}
              delayChildren={0.08}
            >
              <DecorativeFlourish size="lg" className="text-accent/60" />

              <Envelope phase={phase} onActivate={openEnvelope} />

              <OpenInstruction visible={isInteractive} />
            </Stagger>
          </Stack>
        </FadeIn>
      </Container>
    </Section>
  );
}

EnvelopeExperience.displayName = "EnvelopeExperience";

export { EnvelopeExperience };
