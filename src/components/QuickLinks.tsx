import { Calendar, Clock, HandHeart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const QuickLinks = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-gold">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105 text-center">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Plan Your Visit</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Service Times & Location
            </p>
            <Button variant="outline" onClick={() => navigate("/services")} className="w-full">
              View Services
            </Button>
          </div>

          <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105 text-center">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Upcoming Events</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Join our community activities
            </p>
            <Button variant="outline" onClick={() => navigate("/events")} className="w-full">
              See Events
            </Button>
          </div>

          <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105 text-center">
            <HandHeart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Give Online</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Support God's work
            </p>
            <Button variant="outline" onClick={() => navigate("/give")} className="w-full">
              Give Now
            </Button>
          </div>

          <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105 text-center">
            <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">Get In Touch</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              We'd love to hear from you
            </p>
            <Button variant="outline" onClick={() => navigate("/contact")} className="w-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
