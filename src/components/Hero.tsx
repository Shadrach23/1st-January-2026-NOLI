import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, ChevronDown, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { churchInfo } from "@/lib/siteInfo";
// Imported so Vite fingerprints the asset — a raw "/src/assets/..." path 404s in production.
import heroImage from "@/assets/church-hero.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const sundayService = churchInfo.serviceTimes[0];

  return (
    <section
      id="home"
      aria-label="Welcome"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Background image + warm ink overlays for legible text (WCAG AA) */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full scale-105 object-cover"
        />
        {/* Deep, directional wash — keeps text crisp while letting the image breathe on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-transparent to-secondary/20" />
        {/* Subtle vignette for a refined, photographic finish */}
        <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_hsl(25_28%_16%/0.5)]" />
      </div>

      {/* Content — left-aligned editorial column with a staggered entrance */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28 md:px-8 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex animate-in fade-in slide-in-from-bottom-3 items-center gap-2.5 rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-background/90 backdrop-blur-md duration-700">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            {churchInfo.scope}
          </span>

          <h1 className="mt-7 animate-in fade-in slide-in-from-bottom-4 font-display text-5xl font-semibold leading-[1.02] text-background delay-100 duration-700 md:text-7xl lg:text-[5rem]">
            Welcome home to{" "}
            <span className="italic text-primary">{churchInfo.shortName}</span>
          </h1>

          <p className="mt-7 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-lg font-light leading-relaxed text-background/80 delay-200 duration-700 md:text-xl">
            {churchInfo.about}
          </p>

          {/* Primary newcomer CTAs */}
          <div className="mt-10 flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-3 delay-300 duration-700 sm:flex-row">
            <Button
              size="lg"
              variant="shine"
              className="group"
              onClick={() => navigate("/services")}
            >
              Plan your visit
              <ArrowRight className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/40 text-background backdrop-blur-sm hover:border-background hover:bg-background hover:text-secondary"
              onClick={() => navigate("/gallery")}
            >
              <PlayCircle />
              Watch online
            </Button>
          </div>

          {/* At-a-glance: when & where (reduces friction for first-timers) */}
          <dl className="mt-14 flex animate-in fade-in flex-wrap gap-x-12 gap-y-4 border-t border-background/15 pt-7 text-background/90 delay-500 duration-1000">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-background/55">
                  {sundayService.day}
                </dt>
                <dd className="font-semibold">{sundayService.time}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-background/55">
                  Gather with us
                </dt>
                <dd className="font-semibold">{churchInfo.headquarters}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#main"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-background/20 bg-background/10 p-2.5 text-background/90 backdrop-blur-md transition-all duration-300 ease-out-expo hover:bg-background hover:text-secondary animate-float"
      >
        <ChevronDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default Hero;
