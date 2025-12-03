import { useEffect, useState } from 'react';

const ChristmasAnimations = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; animationDuration: number; delay: number; size: number; opacity: number }>>([]);
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);

  useEffect(() => {
    // Generate enhanced snowflakes with varying opacity
    const flakes = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 15,
      delay: Math.random() * 8,
      size: 1.5 + Math.random() * 5,
      opacity: 0.3 + Math.random() * 0.7
    }));
    setSnowflakes(flakes);

    // Generate sparkles
    const sparkleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setSparkles(sparkleArray);
  }, []);

  return (
    <>
      {/* Enhanced Snowfall with varying sizes and opacity */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute text-white"
            style={{
              left: `${flake.left}%`,
              animation: `fall ${flake.animationDuration}s linear ${flake.delay}s infinite`,
              fontSize: `${flake.size}px`,
              opacity: flake.opacity,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Animated Christmas Lights with glow effect */}
      <div className="fixed top-0 left-0 right-0 h-16 pointer-events-none z-15">
        <div className="flex justify-between items-center h-full px-2 md:px-4">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full animate-pulse shadow-lg ${
                i % 4 === 0 ? 'bg-red-500 shadow-red-500/50' : 
                i % 4 === 1 ? 'bg-green-500 shadow-green-500/50' : 
                i % 4 === 2 ? 'bg-yellow-400 shadow-yellow-400/50' : 
                'bg-blue-400 shadow-blue-400/50'
              }`}
              style={{
                animationDelay: `${i * 0.15}s`,
                boxShadow: `0 0 15px ${
                  i % 4 === 0 ? '#ef4444' : 
                  i % 4 === 1 ? '#10b981' : 
                  i % 4 === 2 ? '#facc15' : 
                  '#60a5fa'
                }`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Decorations with enhanced animations */}
      <div className="fixed bottom-20 left-4 pointer-events-none z-5 animate-bounce">
        <span className="text-5xl opacity-80 drop-shadow-lg">🎄</span>
      </div>
      <div className="fixed bottom-20 right-4 pointer-events-none z-5 animate-bounce" style={{ animationDelay: '1.5s' }}>
        <span className="text-5xl opacity-80 drop-shadow-lg">🎅</span>
      </div>
      <div className="fixed top-32 left-8 pointer-events-none z-5 animate-pulse">
        <span className="text-4xl opacity-70 drop-shadow-md">🔔</span>
      </div>
      <div className="fixed top-32 right-8 pointer-events-none z-5 animate-pulse" style={{ animationDelay: '0.7s' }}>
        <span className="text-4xl opacity-70 drop-shadow-md">🎁</span>
      </div>
      <div className="fixed bottom-40 left-1/2 transform -translate-x-1/2 pointer-events-none z-5 animate-bounce" style={{ animationDelay: '2s' }}>
        <span className="text-3xl opacity-60">🌟</span>
      </div>

      {/* Sparkle effects */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none z-5"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animation: `sparkle 2s ease-in-out ${sparkle.delay}s infinite`,
          }}
        >
          <div className="w-1 h-1 bg-yellow-300 rounded-full shadow-lg shadow-yellow-300/50"></div>
        </div>
      ))}

      {/* CSS animations */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </>
  );
};

export default ChristmasAnimations;
