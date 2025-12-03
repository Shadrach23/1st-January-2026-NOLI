import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "+233539368670"; // Updated church WhatsApp number
  const message = "Hello! I would like to know more about Grace Community Church.";
  
  const handleWhatsAppClick = () => {
    // Remove +, spaces, and other non-digit characters for wa.me link
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-gold-lg hover:shadow-gold hover:scale-110 active:scale-95 bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-300 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
