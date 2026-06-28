import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    name: "Kwame Mensah",
    role: "Church Member",
    text: "This church has been a blessing to my family. The warmth and love we experience here is truly from God. The teachings have transformed our lives.",
    location: "Accra",
  },
  {
    name: "Ama Osei",
    role: "Youth Leader",
    text: "The youth ministry here is amazing. We learn practical ways to live out our faith in modern Ghana while staying rooted in Biblical truth.",
    location: "Kumasi",
  },
  {
    name: "Kofi Addo",
    role: "Praise & Worship Leader",
    text: "Being part of the worship team has deepened my relationship with God. The presence in our services is powerful and life-changing.",
    location: "Tema",
  },
  {
    name: "Abena Owusu",
    role: "Women's Ministry",
    text: "The sisters here have become my family. Through the women's fellowship I've found support, prayer partners, and lifelong friends.",
    location: "Takoradi",
  },
];

const TestimonialsCarousel = () => {
  return (
    <Section tone="default">
      <SectionHeading
        eyebrow="Voices of the Family"
        title="Testimonies of faith"
        subtitle="Hear from our church family about how God is at work in their lives."
      />

      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
        className="mx-auto mt-16 w-full max-w-5xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft">
                <Quote className="h-9 w-9 text-primary/40" aria-hidden="true" />
                <blockquote className="mt-5 flex-grow font-display text-lg font-medium italic leading-relaxed text-foreground">
                  "{testimonial.text}"
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </Section>
  );
};

export default TestimonialsCarousel;
