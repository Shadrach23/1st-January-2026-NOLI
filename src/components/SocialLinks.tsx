import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import { churchInfo } from "@/lib/siteInfo";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/${churchInfo.contact.whatsapp.replace(/\D/g, '')}`,
      color: "hover:text-green-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: churchInfo.social.instagram,
      color: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: Youtube,
      href: churchInfo.social.tiktok,
      color: "hover:text-black",
    },
  ].filter(link => link.href); // Filter out empty links

  if (socialLinks.length === 0) return null;

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors duration-300 ${social.color}`}
          aria-label={social.name}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
