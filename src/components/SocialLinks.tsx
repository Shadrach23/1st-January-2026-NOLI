import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { churchInfo } from "@/lib/siteInfo";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/${churchInfo.contact.whatsapp.replace(/\D/g, '')}`,
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: churchInfo.social.instagram,
    },
    {
      name: "TikTok",
      icon: Youtube,
      href: churchInfo.social.tiktok,
    },
  ].filter(link => link.href); // Filter out empty links

  if (socialLinks.length === 0) return null;

  // Uniform, context-agnostic treatment: inherits color, lifts to gold on hover.
  // Works equally well over the dark hero, the light nav, and the espresso footer.
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 opacity-70 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:text-primary hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={social.name}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
