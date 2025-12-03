import { Clock, MapPin, Calendar, Users, Music, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesPage = () => {
  const services = [
    {
      name: "First Service",
      time: "7:00 AM - 9:00 AM",
      description: "Early morning worship for those who prefer to start their day with God",
      icon: Clock,
    },
    {
      name: "Main Service",
      time: "10:00 AM - 12:30 PM",
      description: "Our main worship service with vibrant praise, powerful preaching, and family ministry",
      icon: Music,
    },
    {
      name: "Evening Service",
      time: "5:00 PM - 7:00 PM",
      description: "Intimate worship gathering with prayer and the Word",
      icon: Users,
    },
  ];

  const weeklyPrograms = [
    {
      day: "Tuesday",
      program: "Women's Fellowship",
      time: "10:00 AM",
      description: "Prayer, Bible study, and sisterhood for all women",
    },
    {
      day: "Wednesday",
      program: "Midweek Bible Study",
      time: "6:00 PM",
      description: "Deep dive into God's Word with practical application",
    },
    {
      day: "Thursday",
      program: "Men's Prayer Meeting",
      time: "6:00 AM",
      description: "Building godly men through prayer and fellowship",
    },
    {
      day: "Friday",
      program: "Youth Impact Night",
      time: "7:00 PM",
      description: "Empowering young people for kingdom impact",
    },
    {
      day: "Saturday",
      program: "Choir Rehearsal",
      time: "4:00 PM",
      description: "Preparing hearts and voices for worship",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-gold py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Service Times & Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us for worship, prayer, and fellowship throughout the week
            </p>
          </div>
        </div>
      </section>

      {/* Sunday Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sunday Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three services every Sunday to accommodate your schedule
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={service.name}
                className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <service.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">{service.name}</h3>
                  <p className="text-xl font-semibold text-secondary mb-3">{service.time}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Location Info */}
          <div className="bg-accent rounded-2xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      Grace Community Church
                      <br />
                      123 Liberation Road
                      <br />
                      East Legon, Accra
                      <br />
                      Ghana
                    </p>
                    <Button variant="outline" className="mt-4">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <h3 className="text-2xl font-bold text-primary mb-4">What to Expect</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Warm, welcoming atmosphere with friendly greeters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Spirit-filled worship with live band and choir</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Relevant, life-changing messages from God's Word</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Children's church for ages 2-12</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Free parking and refreshments available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Programs */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Weekly Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect and grow throughout the week
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weeklyPrograms.map((program, index) => (
              <Card
                key={program.program}
                className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-secondary uppercase tracking-wide">
                      {program.day}
                    </span>
                    <span className="text-sm font-semibold text-primary">{program.time}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{program.program}</h3>
                  <p className="text-muted-foreground text-sm">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
