import { Card, CardContent } from "@/components/ui/card";
import { Gift, TreePine, Snowflake } from "lucide-react";

interface ChristmasCardProps {
  children: React.ReactNode;
  className?: string;
}

const ChristmasCard = ({ children, className = "" }: ChristmasCardProps) => {
  return (
    <Card className={`relative overflow-hidden border-2 border-red-200 bg-gradient-to-br from-red-50 to-green-50 ${className}`}>
      {/* Decorative corners */}
      <div className="absolute top-2 left-2 text-red-500">
        <TreePine className="w-6 h-6" />
      </div>
      <div className="absolute top-2 right-2 text-green-600">
        <Snowflake className="w-6 h-6" />
      </div>
      <div className="absolute bottom-2 left-2 text-green-600">
        <Snowflake className="w-6 h-6" />
      </div>
      <div className="absolute bottom-2 right-2 text-red-500">
        <Gift className="w-6 h-6" />
      </div>
      
      {/* Main content with padding to avoid decorations */}
      <CardContent className="p-8 pt-12 pb-12">
        {children}
      </CardContent>
    </Card>
  );
};

export default ChristmasCard;
