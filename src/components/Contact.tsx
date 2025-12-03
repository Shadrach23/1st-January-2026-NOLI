import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { churchInfo } from "@/lib/siteInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Reach out with questions or prayer requests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Address</p>
                  <p className="text-muted-foreground">{churchInfo.headquarters}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Phone</p>
                  <p className="text-muted-foreground">{churchInfo.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <p className="text-muted-foreground">{churchInfo.contact.email}</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                className="p-3 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com"
                className="p-3 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com"
                className="p-3 bg-accent hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-in fade-in slide-in-from-right duration-1000 delay-200">
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="w-full" />
              </div>
              <div>
                <Input placeholder="Subject" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
