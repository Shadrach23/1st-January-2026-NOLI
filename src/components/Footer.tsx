import { churchInfo } from "@/lib/siteInfo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className="text-lg font-bold mb-2">{churchInfo.name}</p>
            <p className="text-primary-foreground/80 mb-3">{churchInfo.tagline}</p>
            <p className="text-sm text-primary-foreground/70">{churchInfo.scope}</p>
            <p className="text-xs text-primary-foreground/60 mt-1">{churchInfo.headquarters}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/60 mb-2">Branches</p>
            <p className="text-primary-foreground/80">{churchInfo.branches.join(" • ")}</p>
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/60 mt-4 mb-2">International</p>
            <p className="text-primary-foreground/80">{churchInfo.internationalFellowships.join(" • ")}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/60 mb-2">Contact</p>
            <p className="text-primary-foreground/80">Tel: {churchInfo.contact.phone}</p>
            <p className="text-primary-foreground/80">Email: {churchInfo.contact.email}</p>
            <p className="text-primary-foreground/80">WhatsApp: {churchInfo.contact.whatsapp}</p>
          </div>
        </div>
        <div className="text-center mt-10 text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} {churchInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
