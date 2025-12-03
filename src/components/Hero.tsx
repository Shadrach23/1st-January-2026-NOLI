import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Star } from "lucide-react";
import { churchInfo } from "@/lib/siteInfo";
import ChristmasCard from "@/components/ChristmasCard";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import heroImage from "../assets/church-hero.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/church-hero.jpg"
          alt="Grace Community Church"
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/85 to-foreground/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-sm font-semibold tracking-wide">
            🎄 Christmas Season Welcome ✨
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 bg-gradient-to-br from-background via-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
          Welcome Home
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-background/90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 font-medium">
          Join us as we grow in faith, love, and community together
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button
            size="lg"
            variant="shine"
            className="text-lg px-10 py-7 font-bold tracking-wide group"
            onClick={() => navigate("/services")}
          >
            Plan Your Visit
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-7 border-2 border-background bg-transparent text-background hover:bg-background hover:text-foreground font-bold tracking-wide backdrop-blur-sm"
            onClick={() => navigate("/gallery")}
          >
            Watch Online
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary animate-float cursor-pointer hover:text-secondary transition-colors group"
        aria-label="Scroll to next section"
      >
        <div className="p-3 bg-background/90 backdrop-blur-sm rounded-full shadow-gold group-hover:shadow-gold-lg transition-all">
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
