import { forwardRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTone = "default" | "muted" | "accent" | "ink";
type SectionSpace = "default" | "lg" | "sm";

interface SectionProps {
  children: ReactNode;
  /** Background tone. Sections alternate tones to create a quiet vertical rhythm. */
  tone?: SectionTone;
  /** Vertical breathing room. Generous by default — content should breathe. */
  space?: SectionSpace;
  /** Render the inner container at full bleed (no centered max-width). */
  bleed?: boolean;
  as?: ElementType;
  id?: string;
  className?: string;
  containerClassName?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  accent: "bg-accent text-accent-foreground",
  ink: "bg-secondary text-secondary-foreground",
};

// Generous, luxury spacing — sections breathe rather than crowd.
const spaceClasses: Record<SectionSpace, string> = {
  default: "py-24 md:py-32",
  lg: "py-28 md:py-40",
  sm: "py-16 md:py-24",
};

/**
 * The single section wrapper used across the site. Standardizing padding, max
 * width, and background tone keeps the whole experience on one rhythm — the
 * foundation of the "luxury minimalism" feel.
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      tone = "default",
      space = "default",
      bleed = false,
      as,
      className,
      containerClassName,
      ...rest
    },
    ref,
  ) => {
    const Tag = (as ?? "section") as ElementType;
    return (
      <Tag
        ref={ref}
        className={cn(toneClasses[tone], spaceClasses[space], className)}
        {...rest}
      >
        {bleed ? (
          children
        ) : (
          <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", containerClassName)}>
            {children}
          </div>
        )}
      </Tag>
    );
  },
);
Section.displayName = "Section";

export default Section;
