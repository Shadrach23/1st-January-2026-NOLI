import { Heart, Users, BookOpen } from "lucide-react";
import communityImage from "@/assets/community.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We believe in showing Christ's love to everyone through action and service.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building meaningful relationships and supporting one another in faith.",
    },
    {
      icon: BookOpen,
      title: "Biblical Teaching",
      description: "Grounded in Scripture, growing in wisdom and understanding together.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Grace Community
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              For over 40 years, Grace Community has been a beacon of hope and faith in our
              community. We're a diverse family of believers committed to loving God and loving
              others.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're exploring faith for the first time or have been walking with Christ
              for years, you'll find a welcoming home here. Our mission is to help every person
              discover and deepen their relationship with Jesus Christ.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <img
              src={communityImage}
              alt="Our Community"
              className="rounded-2xl shadow-soft w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <value.icon className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
