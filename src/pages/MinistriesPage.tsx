import { Sparkles, Music2, Megaphone, Brush, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MinistriesPage = () => {
  const navigate = useNavigate();
  const ministries = [
    {
      icon: Sparkles,
      name: "NEWNESS FORCES",
      description: "The prayer and intercession ministry standing in the gap for the church, city, and nations.",
      ages: "All intercessors",
      programs: ["Daily Prayer Watches", "Intercession Meetings", "Prayer Conferences"],
    },
    {
      icon: Music2,
      name: "THE LEVITES",
      description: "Music Ministry leading the house in anointed worship and praise.",
      ages: "Musicians & singers",
      programs: ["Choir", "Praise Team", "Instrumentalists", "Worship Workshops"],
    },
    {
      icon: Megaphone,
      name: "EVANGELISM MINISTRY",
      description: "In charge of visitation and soul-winning teams reaching communities with the Gospel.",
      ages: "All soul winners",
      programs: ["Home Visitation", "Community Outreach", "Street Evangelism", "Follow-up Teams"],
    },
    {
      icon: Brush,
      name: "CLEANING & SANITATION",
      description: "Dedicated stewards keeping God's house excellent, warm, and welcoming.",
      ages: "Facility stewards",
      programs: ["Church Cleaning", "Environmental Care", "Facility Management"],
    },
    {
      icon: GraduationCap,
      name: "JESUS ACADEMY",
      description: "Children's ministry raising the next generation in the fear and knowledge of Christ.",
      ages: "Children & teachers",
      programs: ["Sunday School", "Children's Church", "Bible Clubs", "Holiday Programs"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-gold py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Ministries
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover your place to connect, grow, and serve in God's kingdom
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Newness of Life Incorporated, we believe everyone has a place to belong and a role to play. 
              Explore our ministries and find where God is calling you to serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <Card
                key={ministry.name}
                className="hover:shadow-glow transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-block p-4 bg-gradient-gold rounded-full">
                    <ministry.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{ministry.name}</h3>
                  <p className="text-sm font-semibold text-secondary mb-3">{ministry.ages}</p>
                  <p className="text-muted-foreground mb-4">{ministry.description}</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-primary mb-2">Programs:</p>
                    <ul className="space-y-1">
                      {ministry.programs.map((program) => (
                        <li key={program} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="text-secondary">•</span>
                          {program}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're looking to serve, learn, or simply connect with others, 
              there's a place for you at Newness of Life Incorporated. Contact us to learn more about 
              joining any of our ministries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="shine" size="lg" className="text-lg" onClick={() => window.location.href = '/contact'}>
                Contact Ministry Leaders
              </Button>
              <Button variant="outline" size="lg" className="text-lg" onClick={() => navigate("/calendar")}>
                View Event Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinistriesPage;
