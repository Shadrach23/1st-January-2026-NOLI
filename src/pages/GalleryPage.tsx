import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const GalleryPage = () => {
  const galleries = [
    {
      title: "Sunday Worship Services",
      images: ["/src/assets/IMG_8793.jpg", "/src/assets/IMG_8843.jpg", "/src/assets/IMG_8897.jpg", "/src/assets/IMG_8898.jpg", "/src/assets/church-hero.jpg"],
      description: "Moments from our vibrant worship services",
    },
    {
      title: "Community Outreach",
      images: ["/src/assets/IMG_8915.jpg", "/src/assets/IMG_8941.jpg", "/src/assets/IMG_8958.jpg", "/src/assets/community.jpg", "/src/assets/IMG_8793.jpg"],
      description: "Serving our community with love",
    },
    {
      title: "Youth Ministry",
      images: ["/src/assets/IMG_8843.jpg", "/src/assets/IMG_8898.jpg", "/src/assets/IMG_8915.jpg", "/src/assets/IMG_8941.jpg", "/src/assets/church-hero.jpg"],
      description: "Empowering the next generation",
    },
    {
      title: "Special Events",
      images: ["/src/assets/IMG_8897.jpg", "/src/assets/IMG_8898.jpg", "/src/assets/IMG_8958.jpg", "/src/assets/IMG_8915.jpg", "/src/assets/community.jpg"],
      description: "Celebrating special moments and milestones",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-gold py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Glimpses of God's work in our midst - worship, fellowship, and service
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Carousels */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-20">
          {galleries.map((gallery, index) => (
            <div
              key={gallery.title}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                  {gallery.title}
                </h2>
                <p className="text-lg text-muted-foreground">{gallery.description}</p>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="w-full max-w-6xl mx-auto"
              >
                <CarouselContent>
                  {gallery.images.map((image, imgIndex) => (
                    <CarouselItem key={imgIndex} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-105">
                        <CardContent className="p-0">
                          <img
                            src={image}
                            alt={`${gallery.title} ${imgIndex + 1}`}
                            className="w-full h-64 object-cover"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Watch Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Missed a service? Catch up on recent messages and worship experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((video) => (
              <Card key={video} className="overflow-hidden hover:shadow-glow transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-gold flex items-center justify-center">
                    <p className="text-2xl font-bold text-primary-foreground">
                      Video Placeholder {video}
                    </p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Sunday Service - Week {video}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Watch the full service including worship and message
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
