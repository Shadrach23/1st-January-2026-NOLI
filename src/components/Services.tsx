import { Clock, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { churchInfo } from "@/lib/siteInfo";

const Services = () => {
  const services = churchInfo.serviceTimes;

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Service Times</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Worship with {churchInfo.shortName} in Tarkwa and across our global family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.day}
              className="hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="p-8">
                <Clock className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">{service.day}</h3>
                <p className="text-xl font-semibold text-secondary mb-3">{service.time}</p>
                <p className="text-muted-foreground">
                  {service.description ?? "Transformative encounters in God's presence."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">Special Events</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-primary mb-2">CROSS OVER WITH PASTOR DESMOND</h4>
                  <p className="text-xl font-semibold text-secondary mb-2">31ST DECEMBER, 2025</p>
                  <p className="text-lg font-medium text-accent mb-4">7PM</p>
                </div>
                <p className="text-muted-foreground text-center">
                  Join us for this powerful CROSS OVER service as we welcome 2026 in God's presence at Grace Mountain Temple.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-secondary/10 to-accent/20 border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <h4 className="text-2xl font-bold text-primary mb-2">FIRST FRUIT SERVICE</h4>
                  <p className="text-xl font-semibold text-secondary mb-2">4TH JANUARY, 2026</p>
                  <p className="text-lg font-medium text-accent mb-4">Special Thanksgiving Service</p>
                </div>
                <p className="text-muted-foreground text-center">
                  Begin the new year with dedication and thanksgiving as we offer our first fruits to the Lord.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-accent rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Headquarters</h3>
                  <p className="text-muted-foreground">{churchInfo.headquarters}</p>
                  <p className="text-sm text-secondary mt-2">Branches: {churchInfo.branches.join(", ")}</p>
                  <p className="text-sm text-secondary">International: {churchInfo.internationalFellowships.join(", ")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">First Time Visit?</h3>
                  <p className="text-muted-foreground">
                    We can't wait to meet you! Come as you are - casual attire is perfectly fine.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-4">What to Expect</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Warm, welcoming atmosphere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Uplifting contemporary worship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Practical, engaging messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  <span>Children's programs available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
