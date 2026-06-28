import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

interface SectionHeadingProps {
  /** Small uppercase kicker above the title. */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  /** Render the title against a dark (ink) background. */
  invert?: boolean;
  className?: string;
}

/**
 * The one heading treatment for every section: an optional eyebrow, a Fraunces
 * display title with a high-contrast hierarchy, and a quiet supporting line.
 * Reveals on scroll. Replaces the dozen bespoke heading blocks scattered across
 * the old pages.
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
  className,
}: SectionHeadingProps) => {
  const ref = useReveal<HTMLDivElement>();
  const centered = align === "center";

  return (
    <div
      ref={ref}
      className={cn(
        "reveal flex flex-col gap-5",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", invert && "text-primary")}>
          <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "font-display text-4xl font-semibold leading-[1.05] md:text-5xl",
          invert ? "text-secondary-foreground" : "text-foreground",
          centered ? "max-w-3xl" : "max-w-2xl",
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-lg leading-relaxed",
            invert ? "text-secondary-foreground/70" : "text-muted-foreground",
            centered ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
