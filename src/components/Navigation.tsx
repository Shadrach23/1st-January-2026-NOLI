import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { churchInfo } from "@/lib/siteInfo";
import SocialLinks from "@/components/SocialLinks";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/ministries", label: "Ministries" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/give", label: "Give" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-gold" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-3 text-primary hover:text-secondary transition-all duration-300 hover:scale-105"
          >
            <img src="/favicon.ico" alt={churchInfo.name} className="h-10 w-10 rounded-full object-cover shadow-gold" />
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-black tracking-tight">{churchInfo.name}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Christ In Humanity</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-foreground/70 hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === link.href ? "text-primary after:w-full" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <SocialLinks />
            <Button variant="shine" size="lg" className="shadow-gold" onClick={() => window.location.href = "/contact"}>
              Visit Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary transition-transform rotate-90" />
            ) : (
              <Menu className="h-6 w-6 text-primary transition-transform" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/98 backdrop-blur-md animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-foreground/80 hover:text-primary hover:bg-accent transition-all px-4 py-3 rounded-lg font-medium animate-in slide-in-from-top-2 duration-300 ${
                    location.pathname === link.href ? "text-primary bg-accent" : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <SocialLinks />
              </div>
              <Button 
                variant="shine" 
                size="lg" 
                className="shadow-gold mx-4" 
                onClick={() => {
                  window.location.href = "/contact";
                  setIsMobileMenuOpen(false);
                }}
              >
                Visit Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
