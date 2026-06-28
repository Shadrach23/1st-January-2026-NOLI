import { Church, Heart, Users, BookOpen, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Church,
    title: "Our Mission",
    description: "Training, equipping and developing Christ in humanity — in Ghana and beyond.",
    link: "/about",
  },
  {
    icon: Heart,
    title: "Community Care",
    description: "Walking with widows, orphans, and the less privileged through giving and presence.",
    link: "/ministries",
  },
  {
    icon: Users,
    title: "Join a Family",
    description: "Find your spiritual home and grow alongside brothers and sisters in Christ.",
    link: "/services",
  },
  {
    icon: BookOpen,
    title: "Grow in the Word",
    description: "Go deeper through midweek teaching, prayer, and fasting encounters.",
    link: "/services",
  },
];

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <Section tone="default" aria-labelledby="welcome-heading">
      <SectionHeading
        eyebrow="Welcome Home"
        title="A place to belong, believe, and become"
        subtitle="Newness of Life is a Bible-believing family devoted to worship, discipleship, and serving our community with excellence."
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 90}>
            <button
              type="button"
              onClick={() => navigate(feature.link)}
              className="group flex h-full w-full flex-col items-start bg-card p-8 text-left transition-colors duration-500 ease-out-expo hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 ease-out-expo group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 flex justify-center" delay={120}>
        <Button variant="shine" size="lg" onClick={() => navigate("/about")}>
          Learn more about us
        </Button>
      </Reveal>
    </Section>
  );
};

export default FeaturedSection;
