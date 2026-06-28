import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  /** Stagger in ms — apply increasing values to siblings for a cascade. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Wraps content in the scroll-reveal treatment. Use `delay` to cascade a row of
 * cards. Keeps the IntersectionObserver wiring out of every call site.
 */
const Reveal = ({ children, delay = 0, as, className }: RevealProps) => {
  const ref = useReveal<HTMLElement>();
  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
