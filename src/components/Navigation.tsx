import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { churchInfo } from "@/lib/siteInfo";
import SocialLinks from "@/components/SocialLinks";
import { cn } from "@/lib/utils";
// Fingerprinted by Vite so the asset resolves in production.
import logo from "@/assets/logo.jpg";

// Consolidated from 8 → 6 primary destinations. "Visit" is the newcomer funnel.
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Visit" },
  { href: "/gallery", label: "Watch" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Escape-to-close + body scroll lock while the mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // On the home route the nav sits over the dark hero until scrolled.
  const onDarkHero = location.pathname === "/" && !isScrolled;

  const linkBase =
    "relative font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm";

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
        isScrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="group flex items-center gap-3 rounded-md transition-opacity duration-300 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className={cn(
                "h-11 w-11 rounded-full object-cover ring-1 transition-all duration-500 ease-out-expo",
                onDarkHero ? "ring-background/30" : "ring-border"
              )}
            />
            <span className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-display text-lg font-semibold tracking-tight md:text-xl",
                  onDarkHero ? "text-background" : "text-foreground"
                )}
              >
                {churchInfo.shortName}
              </span>
              <span
                className={cn(
                  "text-[0.65rem] uppercase tracking-[0.2em]",
                  onDarkHero ? "text-background/70" : "text-muted-foreground"
                )}
              >
                Christ in Humanity
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  cn(
                    linkBase,
                    onDarkHero
                      ? "text-background/80 hover:text-background"
                      : "text-foreground/70 hover:text-primary",
                    isActive && "text-primary after:w-full"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <SocialLinks />
            <Button
              variant="shine"
              onClick={() => navigate("/services")}
            >
              Plan Your Visit
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={cn(
              "rounded-lg p-2 transition-transform duration-200 hover:bg-accent active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden",
              onDarkHero ? "text-background" : "text-primary"
            )}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-border bg-background/98 py-4 backdrop-blur-md animate-in slide-in-from-top-2 duration-200 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-lg px-4 py-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-accent text-primary"
                        : "text-foreground/80 hover:bg-accent hover:text-primary"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="px-4 py-3">
                <SocialLinks />
              </div>
              <Button
                variant="shine"
                size="lg"
                className="mx-4 shadow-gold"
                onClick={() => navigate("/services")}
              >
                Plan Your Visit
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
