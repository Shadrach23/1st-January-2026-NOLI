import { Sparkles, Star } from 'lucide-react';

const ChristmasBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 text-white py-1 px-4 overflow-hidden relative">
      <div className="flex items-center justify-center space-x-3">
        <Sparkles className="w-4 h-4 text-yellow-300" />
        <span className="text-xs font-semibold">
          🎄 Merry Christmas & Happy New Year 2025! 🎅
        </span>
        <Sparkles className="w-4 h-4 text-yellow-300" />
      </div>
      
      {/* Animated stars - smaller */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex space-x-6">
          {[...Array(3)].map((_, i) => (
            <Star
              key={i}
              className="w-2 h-2 text-yellow-300 animate-spin"
              style={{
                animationDuration: `${2 + i * 0.5}s`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChristmasBanner;
