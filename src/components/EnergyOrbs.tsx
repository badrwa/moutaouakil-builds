import React from 'react';

const EnergyOrbs = () => {
  const orbs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-7 overflow-hidden">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute animate-energy-orbit opacity-40"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        >
          {/* Main Orb */}
          <div
            className="relative rounded-full bg-gradient-radial from-primary/60 via-accent/40 to-transparent animate-pulse-glow"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
            }}
          >
            {/* Inner Core */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary to-accent opacity-80 animate-rotate-slow"></div>
            
            {/* Energy Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: '2s' }}></div>
            <div className="absolute inset-2 rounded-full border border-accent/40 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
            
            {/* Particle Trail */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full animate-particle-trail"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnergyOrbs;