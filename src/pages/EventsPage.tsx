import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { churchInfo } from "@/lib/siteInfo";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const navigate = useNavigate();
  const upcomingEvents = [
    {
      title: "Harvest Thanksgiving Service",
      date: "Sunday, December 15, 2025",
      time: "10:00 AM",
      location: "Main Sanctuary",
      description: "Join us as we thank God for His abundant blessings and provisions throughout the year. Special thanksgiving offering and potluck lunch to follow.",
      category: "Special Service",
      attendees: "500+",
    },
    {
      title: "Watch Night Service",
      date: "Tuesday, December 31, 2025",
      time: "9:00 PM - 12:30 AM",
      location: "Main Sanctuary",
      description: "Cross over into the New Year with praise, worship, and powerful prayers. Let's welcome 2026 with expectation and thanksgiving.",
      category: "Annual Event",
      attendees: "1000+",
    },
    {
      title: "Youth Camp 2026",
      date: "January 10-17, 2026",
      time: "Full Week",
      location: "Akosombo Retreat Center",
      description: "A transformative week for young people with worship, teaching, team building, and fun activities. Theme: 'Unstoppable Generation'",
      category: "Youth Event",
      attendees: "200+",
    },
    {
      title: "Marriage Enrichment Seminar",
      date: "Saturday, January 25, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "Church Conference Hall",
      description: "Strengthen your marriage with biblical principles and practical tools. For all married couples and engaged partners.",
      category: "Seminar",
      attendees: "100+",
    },
    {
      title: "Community Outreach",
      date: "Saturday, February 8, 2026",
      time: "8:00 AM - 2:00 PM",
      location: "Nima Community",
      description: "Join us in serving our community through medical care, food distribution, and sharing the Gospel with the less privileged.",
      category: "Outreach",
      attendees: "150+",
    },
    {
      title: "Easter Convention",
      date: "April 17-20, 2026",
      time: "Multiple Services",
      location: "Various Locations",
      description: "Four days of powerful worship, teaching, and celebration of Christ's resurrection. Special guest speakers from across Africa.",
      category: "Convention",
      attendees: "2000+",
    },
  ];

  const monthlyEvents = [
    {
      title: "First Friday Prayer Vigil",
      schedule: "First Friday of every month",
      time: "11:00 PM - 3:00 AM",
      description: "Power-packed night of intercession and spiritual warfare",
    },
    {
      title: "Women's Prayer Meeting",
      schedule: "Every Tuesday",
      time: "10:00 AM",
      description: "Sisters gathering for prayer, worship, and fellowship",
    },
    {
      title: "Men's Prayer Breakfast",
      schedule: "Every Thursday",
      time: "6:00 AM",
      description: "Building kingdom men through prayer and the Word",
    },
    {
      title: "Youth Impact Night",
      schedule: "Every Friday",
      time: "7:00 PM",
      description: "Dynamic worship and relevant teaching for young people",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-gold py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Events & Programs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay connected and never miss an opportunity to fellowship, grow, and serve
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar for these exciting opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card
                key={event.title}
                className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {event.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{event.title}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="outline" className="w-full" onClick={() => navigate(`/register-event?event=${encodeURIComponent(event.title)}&date=${encodeURIComponent(event.date)}&time=${encodeURIComponent(event.time)}&location=${encodeURIComponent(event.location)}&description=${encodeURIComponent(event.description)}&category=${encodeURIComponent(event.category)}`)}>
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Programs */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Regular Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for these recurring gatherings throughout the month
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {monthlyEvents.map((event, index) => (
              <Card
                key={event.title}
                className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-sm font-semibold text-secondary mb-2">{event.schedule}</p>
                  <p className="text-sm text-muted-foreground mb-2">{event.time}</p>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Want to receive event updates and reminders directly? Join our WhatsApp broadcast list or follow us on social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="shine" size="lg" className="text-lg" onClick={() => window.location.href = `https://wa.me/${churchInfo.contact.whatsapp.replace(/\D/g, '')}`}>
                Join WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="text-lg" onClick={() => navigate("/calendar")}>
                View Full Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
