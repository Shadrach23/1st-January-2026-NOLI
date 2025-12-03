import { Sparkles, Music2, Megaphone, Brush, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Ministries = () => {
  const ministries = [
    {
      icon: Sparkles,
      name: "Newness Forces",
      description: "Prayer and intercession warriors standing in the gap for the church, city, and nations.",
      ages: "All intercessors",
    },
    {
      icon: Music2,
      name: "The Levites",
      description: "Our music ministry leading the house in anointed worship and praise.",
      ages: "Musicians & singers",
    },
    {
      icon: Megaphone,
      name: "Evangelism Ministry",
      description: "Visitation and soul-winning teams reaching communities with the Gospel.",
      ages: "All soul winners",
    },
    {
      icon: Brush,
      name: "Cleaning & Sanitation",
      description: "Dedicated stewards keeping God's house excellent, warm, and welcoming.",
      ages: "Facility stewards",
    },
    {
      icon: GraduationCap,
      name: "Jesus Academy",
      description: "Children's ministry raising the next generation in the fear and knowledge of Christ.",
      ages: "Children & teachers",
    },
  ];

  return (
    <section id="ministries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Ministries</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your place to connect, grow, and serve
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ministries.map((ministry, index) => (
            <Card
              key={ministry.name}
              className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <ministry.icon className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">{ministry.name}</h3>
                <p className="text-sm font-semibold text-secondary mb-3">{ministry.ages}</p>
                <p className="text-muted-foreground">{ministry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministries;
