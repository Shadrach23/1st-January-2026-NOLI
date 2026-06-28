import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Optional actions (buttons) rendered beneath the subtitle. */
  children?: ReactNode;
  className?: string;
}

/**
 * The single page header used at the top of every interior page. Replaces the
 * old solid-gold hero blocks with a restrained, editorial header: a soft ivory
 * ground, a gold eyebrow + rule as the only accents, and a high-contrast
 * Fraunces title. Top padding clears the fixed navigation.
 */
const PageHeader = ({ eyebrow, title, subtitle, children, className }: PageHeaderProps) => {
  return (
    <header
      className={cn(
        "relative overflow-hidden bg-gradient-gold-subtle pb-16 pt-36 md:pb-24 md:pt-44",
        className,
      )}
    >
      {/* Faint radial glow for depth without clutter */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center md:px-8">
        {eyebrow && (
          <span className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
            {eyebrow}
            <span className="h-px w-6 bg-primary/60" aria-hidden="true" />
          </span>
        )}
        <h1 className="mt-6 animate-in fade-in slide-in-from-bottom-3 font-display text-4xl font-semibold leading-[1.05] text-foreground delay-100 duration-700 md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl animate-in fade-in slide-in-from-bottom-3 text-lg font-light leading-relaxed text-muted-foreground delay-200 duration-700">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-9 flex animate-in fade-in flex-col gap-3 delay-300 duration-700 sm:flex-row">
            {children}
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
