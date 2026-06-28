import { Calendar, Clock, HandHeart, Phone, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

const links = [
  {
    icon: Calendar,
    title: "Plan Your Visit",
    description: "Service times & location",
    cta: "View services",
    href: "/services",
  },
  {
    icon: Clock,
    title: "Upcoming Events",
    description: "Join our community gatherings",
    cta: "See events",
    href: "/events",
  },
  {
    icon: HandHeart,
    title: "Give Online",
    description: "Partner with God's work",
    cta: "Give now",
    href: "/give",
  },
  {
    icon: Phone,
    title: "Get in Touch",
    description: "We'd love to hear from you",
    cta: "Contact us",
    href: "/contact",
  },
];

// Espresso band: gold lives only in the icons and the hover accent — a quiet,
// premium contrast against the lighter sections above and below it.
const QuickLinks = () => {
  const navigate = useNavigate();

  return (
    <Section tone="ink" space="sm">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {links.map((link, index) => (
          <Reveal key={link.title} delay={index * 90}>
            <button
              type="button"
              onClick={() => navigate(link.href)}
              className="group flex h-full w-full flex-col items-start rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/[0.03] p-7 text-left transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary-foreground/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <link.icon className="h-9 w-9 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-semibold text-secondary-foreground">
                {link.title}
              </h3>
              <p className="mt-1.5 flex-grow text-sm text-secondary-foreground/60">
                {link.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {link.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default QuickLinks;
