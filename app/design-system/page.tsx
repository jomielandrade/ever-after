import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Body,
  Caption,
  CardFrame,
  Container,
  DecorativeFlourish,
  Divider,
  Eyebrow,
  FadeIn,
  Lead,
  MaxWidth,
  PageTitle,
  Reveal,
  Section,
  SectionTitle,
  Stack,
  Stagger,
} from "@/components/shared";

export const metadata: Metadata = {
  title: "Design System Showcase | Project Ever After",
  description: "Development reference for shared design system components.",
  robots: { index: false, follow: false },
};

const THEME_TOKENS = [
  { name: "Background", className: "bg-background" },
  { name: "Card", className: "bg-card" },
  { name: "Primary", className: "bg-primary" },
  { name: "Secondary", className: "bg-secondary" },
  { name: "Accent", className: "bg-accent" },
  { name: "Muted", className: "bg-muted" },
] as const;

const BUTTON_VARIANTS = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;

const STACK_GAPS = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;

function ShowcaseBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Stack gap="sm">
      <Caption className="font-medium text-foreground">{title}</Caption>
      {children}
    </Stack>
  );
}

function ThemeSwatch({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return (
    <Stack gap="xs" align="center">
      <div
        className={`h-16 w-full rounded-md border border-border sm:h-20 ${className}`}
      />
      <Caption>{name}</Caption>
    </Stack>
  );
}

export default function DesignSystemPage() {
  return (
    <main>
      <Section className="border-b border-border">
        <Container>
          <MaxWidth size="lg">
            <Stack gap="md">
              <Eyebrow>Development Reference</Eyebrow>
              <PageTitle>Design System Showcase</PageTitle>
              <Lead>
                A visual reference for reusable typography, layout, display,
                motion, and theme components. Not part of the public wedding
                experience.
              </Lead>
            </Stack>
          </MaxWidth>
        </Container>
      </Section>

      {/* Typography */}
      <Section id="typography">
        <Container>
          <MaxWidth size="lg">
            <Stack gap="xl">
              <SectionTitle>Typography</SectionTitle>

              <Stack gap="lg">
                <ShowcaseBlock title="PageTitle">
                  <PageTitle>Together Forever</PageTitle>
                </ShowcaseBlock>

                <ShowcaseBlock title="SectionTitle">
                  <SectionTitle>Our Story</SectionTitle>
                </ShowcaseBlock>

                <ShowcaseBlock title="Eyebrow">
                  <Eyebrow>Wedding Details</Eyebrow>
                </ShowcaseBlock>

                <ShowcaseBlock title="Lead">
                  <Lead>
                    A timeless celebration of love, crafted with quiet luxury
                    and editorial elegance.
                  </Lead>
                </ShowcaseBlock>

                <ShowcaseBlock title="Body">
                  <Body>
                    Every detail of this invitation is designed to feel warm,
                    intentional, and refined — guiding guests through the
                    story with generous whitespace and calm typography.
                  </Body>
                </ShowcaseBlock>

                <ShowcaseBlock title="Caption">
                  <Caption>July 15, 2026 · Manila, Philippines</Caption>
                </ShowcaseBlock>
              </Stack>
            </Stack>
          </MaxWidth>
        </Container>
      </Section>

      <Divider spacing="none" />

      {/* Layout */}
      <Section id="layout">
        <Container>
          <MaxWidth size="lg">
            <Stack gap="xl">
              <SectionTitle>Layout</SectionTitle>

              <Stack gap="lg">
                <ShowcaseBlock title="Container">
                  <CardFrame padding="sm" className="bg-muted/30">
                    <Body>
                      Container centers content with responsive horizontal
                      padding (px-4 → px-6 → px-8).
                    </Body>
                  </CardFrame>
                </ShowcaseBlock>

                <ShowcaseBlock title="MaxWidth">
                  <Stack gap="sm">
                    {(["prose", "sm", "md", "lg", "xl"] as const).map(
                      (size) => (
                        <div
                          key={size}
                          className="rounded border border-dashed border-border bg-muted/20 px-3 py-2"
                        >
                          <MaxWidth size={size}>
                            <Caption>max-width: {size}</Caption>
                          </MaxWidth>
                        </div>
                      ),
                    )}
                  </Stack>
                </ShowcaseBlock>

                <ShowcaseBlock title="Section">
                  <CardFrame padding="sm">
                    <Body>
                      Section provides consistent vertical rhythm with responsive
                      padding (py-12 → py-16 → py-24). This entire page is built
                      from Section blocks.
                    </Body>
                  </CardFrame>
                </ShowcaseBlock>

                <ShowcaseBlock title="Stack — vertical spacing">
                  <Stack gap="md" direction="horizontal" className="flex-wrap">
                    {STACK_GAPS.map((gap) => (
                      <Stack key={gap} gap="xs" align="center">
                        <Stack
                          gap={gap}
                          className="rounded border border-dashed border-border p-3"
                        >
                          <div className="h-3 w-12 rounded-sm bg-primary/30" />
                          <div className="h-3 w-12 rounded-sm bg-primary/30" />
                          <div className="h-3 w-12 rounded-sm bg-primary/30" />
                        </Stack>
                        <Caption>gap: {gap}</Caption>
                      </Stack>
                    ))}
                  </Stack>
                </ShowcaseBlock>
              </Stack>
            </Stack>
          </MaxWidth>
        </Container>
      </Section>

      <Divider spacing="none" />

      {/* Display */}
      <Section id="display">
        <Container>
          <MaxWidth size="lg">
            <Stack gap="xl">
              <SectionTitle>Display</SectionTitle>

              <Stack gap="lg">
                <ShowcaseBlock title="CardFrame">
                  <CardFrame>
                    <Stack gap="sm">
                      <SectionTitle className="text-xl">
                        Invitation Card
                      </SectionTitle>
                      <Body>
                        CardFrame wraps content with a soft border, rounded
                        corners, and generous padding.
                      </Body>
                    </Stack>
                  </CardFrame>
                </ShowcaseBlock>

                <ShowcaseBlock title="Divider">
                  <Stack gap="md">
                    <Body>Content above the divider</Body>
                    <Divider spacing="md" />
                    <Body>Content below the divider</Body>
                  </Stack>
                </ShowcaseBlock>

                <ShowcaseBlock title="DecorativeFlourish">
                  <Stack gap="md" align="center">
                    {(["sm", "md", "lg"] as const).map((size) => (
                      <DecorativeFlourish key={size} size={size} />
                    ))}
                  </Stack>
                </ShowcaseBlock>
              </Stack>
            </Stack>
          </MaxWidth>
        </Container>
      </Section>

      <Divider spacing="none" />

      {/* Motion */}
      <Section id="motion">
        <Container>
          <MaxWidth size="lg">
            <Stack gap="xl">
              <SectionTitle>Motion</SectionTitle>
              <Body>
                Subtle entrance animations. Respects{" "}
                <code className="text-sm">prefers-reduced-motion</code>.
              </Body>

              <Stack gap="lg">
                <ShowcaseBlock title="FadeIn">
                  <FadeIn>
                    <CardFrame padding="sm">
                      <Body>Fades in on mount with a gentle transition.</Body>
                    </CardFrame>
                  </FadeIn>
                </ShowcaseBlock>

                <ShowcaseBlock title="Reveal">
                  <Reveal>
                    <CardFrame padding="sm">
                      <Body>
                        Reveals with a soft upward slide and fade.
                      </Body>
                    </CardFrame>
                  </Reveal>
                </ShowcaseBlock>

                <ShowcaseBlock title="Stagger">
                  <Stagger className="grid gap-4 sm:grid-cols-3">
                    <CardFrame key="one" padding="sm">
                      <Caption>First</Caption>
                    </CardFrame>
                    <CardFrame key="two" padding="sm">
                      <Caption>Second</Caption>
                    </CardFrame>
                    <CardFrame key="three" padding="sm">
                      <Caption>Third</Caption>
                    </CardFrame>
                  </Stagger>
                </ShowcaseBlock>
              </Stack>
            </Stack>
          </MaxWidth>
        </Container>
      </Section>

      <Divider spacing="none" />

      {/* Buttons */}
      <Section id="buttons">
        <Container>
          <MaxWidth size="lg">
            <Stack gap="xl">
              <SectionTitle>Buttons</SectionTitle>

              <Stack gap="lg">
                <ShowcaseBlock title="Variants">
                  <Stack
                    direction="horizontal"
                    gap="sm"
                    className="flex-wrap"
                  >
                    {BUTTON_VARIANTS.map((variant) => (
                      <Button key={variant} variant={variant}>
                        {variant}
                      </Button>
                    ))}
                  </Stack>
                </ShowcaseBlock>

                <ShowcaseBlock title="Sizes">
                  <Stack
                    direction="horizontal"
                    gap="sm"
                    align="center"
                    className="flex-wrap"
                  >
                    <Button size="xs">Extra Small</Button>
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </Stack>
                </ShowcaseBlock>
              </Stack>
            </Stack>
          </MaxWidth>
        </Container>
      </Section>

      <Divider spacing="none" />

      {/* Theme */}
      <Section id="theme">
        <Container>
          <MaxWidth size="lg">
            <Stack gap="xl">
              <SectionTitle>Theme</SectionTitle>
              <Body>
                Color swatches use Tailwind theme token classes — no hardcoded
                values.
              </Body>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {THEME_TOKENS.map((token) => (
                  <ThemeSwatch
                    key={token.name}
                    name={token.name}
                    className={token.className}
                  />
                ))}
              </div>
            </Stack>
          </MaxWidth>
        </Container>
      </Section>
    </main>
  );
}
