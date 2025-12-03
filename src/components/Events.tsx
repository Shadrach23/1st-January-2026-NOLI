import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  const events = [
    {
      title: "Community BBQ",
      date: "Saturday, June 15",
      time: "12:00 PM - 3:00 PM",
      location: "Church Courtyard",
      description: "Join us for food, games, and fellowship with the whole family!",
    },
    {
      title: "Summer Bible Camp",
      date: "July 8-12",
      time: "9:00 AM - 3:00 PM",
      location: "Grace Community Church",
      description: "Week-long adventure for kids ages 5-12 with games, crafts, and Bible stories.",
    },
    {
      title: "Worship Night",
      date: "Friday, June 28",
      time: "7:00 PM",
      location: "Main Sanctuary",
      description: "An evening of powerful worship and prayer for all ages.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these exciting opportunities to connect and grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={event.title}
              className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{event.title}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
