import { Church, Heart, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Church,
      title: "Our Mission",
      description: "Spreading the Gospel and transforming lives through Christ's love in Ghana and beyond.",
      link: "/about",
    },
    {
      icon: Heart,
      title: "Community Care",
      description: "Supporting widows, orphans, and the less privileged in our community.",
      link: "/ministries",
    },
    {
      icon: Users,
      title: "Join a Family",
      description: "Find your spiritual home and connect with brothers and sisters in Christ.",
      link: "/services",
    },
    {
      icon: BookOpen,
      title: "Bible Study",
      description: "Grow deeper in God's Word through our midweek Bible studies and prayer meetings.",
      link: "/services",
    },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Welcome to Grace Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A vibrant Ghanaian church family dedicated to worshiping God, building disciples, and serving our community with excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="hover:shadow-glow transition-all duration-300 cursor-pointer group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(feature.link)}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-block p-4 bg-gradient-gold rounded-full group-hover:animate-float">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="shine"
            size="lg"
            className="text-lg px-8"
            onClick={() => navigate("/about")}
          >
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
