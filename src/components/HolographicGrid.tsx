import React from 'react';

const HolographicGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-6 opacity-30">
      {/* Laser Grid Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal Lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse"
            style={{
              top: `${(i * 5) + 5}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '3s',
            }}
          />
        ))}
        
        {/* Vertical Lines */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-pulse"
            style={{
              left: `${(i * 6.66) + 3.33}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '4s',
            }}
          />
        ))}
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan-vertical opacity-80"></div>
        <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-accent/50 to-transparent animate-scan-horizontal opacity-70"></div>
      </div>

      {/* Holographic Interference Patterns */}
      <div className="absolute inset-0 bg-interference-pattern animate-drift opacity-20"></div>
    </div>
  );
};

export default HolographicGrid;