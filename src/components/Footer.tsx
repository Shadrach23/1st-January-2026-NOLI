import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { churchInfo } from "@/lib/siteInfo";
import SocialLinks from "@/components/SocialLinks";
import logo from "@/assets/logo.jpg";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Visit" },
  { href: "/gallery", label: "Watch" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

// Deep espresso ground with gold reserved for accents — restrained, not a slab of gold.
const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-12 w-12 rounded-full object-cover ring-1 ring-secondary-foreground/15"
              />
              <span className="font-display text-xl font-semibold">{churchInfo.shortName}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-secondary-foreground/65">
              {churchInfo.tagline}
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="md:col-span-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Visit & Connect
            </p>
            <ul className="mt-5 space-y-3.5 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{churchInfo.headquarters}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`tel:${churchInfo.contact.phone}`} className="transition-colors hover:text-primary">
                  {churchInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href={`mailto:${churchInfo.contact.email}`} className="break-all transition-colors hover:text-primary">
                  {churchInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{churchInfo.contact.whatsapp}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Branches strip */}
        <div className="mt-14 flex flex-col gap-2 border-t border-secondary-foreground/10 pt-8 text-sm text-secondary-foreground/55 sm:flex-row sm:items-center sm:gap-x-8">
          <span>
            <span className="text-secondary-foreground/40">Branches</span> {churchInfo.branches.join(" · ")}
          </span>
          <span className="hidden text-secondary-foreground/20 sm:inline">|</span>
          <span>
            <span className="text-secondary-foreground/40">International</span>{" "}
            {churchInfo.internationalFellowships.join(" · ")}
          </span>
        </div>

        <div className="mt-8 text-xs text-secondary-foreground/45">
          © {new Date().getFullYear()} {churchInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
