import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Kwame Mensah",
      role: "Church Member",
      text: "This church has been a blessing to my family. The warmth and love we experience here is truly from God. Pastor's teachings have transformed our lives.",
      location: "Accra",
    },
    {
      name: "Ama Osei",
      role: "Youth Leader",
      text: "The youth ministry here is amazing! We learn practical ways to live out our faith in modern Ghana while staying rooted in Biblical truth.",
      location: "Kumasi",
    },
    {
      name: "Kofi Addo",
      role: "Praise & Worship Leader",
      text: "Being part of the worship team has deepened my relationship with God. The anointing in our services is powerful and life-changing.",
      location: "Tema",
    },
    {
      name: "Abena Owusu",
      role: "Women's Ministry",
      text: "The sisters here have become my family. Through the women's fellowship, I've found support, prayer partners, and lifelong friends.",
      location: "Takoradi",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Testimonies of Faith
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our church family about how God is working in their lives
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-secondary mb-4 opacity-50" />
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-bold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-secondary">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
