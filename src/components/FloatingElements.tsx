import React from 'react';
import { Code, Zap, Star, Heart, Trophy, Sparkles, Rocket, Diamond } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { icon: Code, position: 'top-20 left-20', delay: '0s', duration: '6s' },
    { icon: Zap, position: 'top-40 right-32', delay: '1s', duration: '8s' },
    { icon: Star, position: 'top-60 left-1/4', delay: '2s', duration: '7s' },
    { icon: Heart, position: 'bottom-40 right-20', delay: '0.5s', duration: '9s' },
    { icon: Trophy, position: 'bottom-60 left-32', delay: '1.5s', duration: '6s' },
    { icon: Sparkles, position: 'top-1/3 right-1/4', delay: '2.5s', duration: '8s' },
    { icon: Rocket, position: 'bottom-1/3 left-1/5', delay: '3s', duration: '7s' },
    { icon: Diamond, position: 'top-1/2 right-1/5', delay: '0.8s', duration: '9s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} opacity-20 animate-float`}
          style={{
            animationDelay: element.delay,
            animationDuration: element.duration,
          }}
        >
          <div className="relative">
            <element.icon className="w-8 h-8 text-primary animate-pulse" />
            <div className="absolute inset-0 w-8 h-8 bg-primary/20 rounded-full blur-lg animate-ping"></div>
          </div>
        </div>
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-gradient-to-r from-accent to-primary rotate-45 animate-float opacity-30" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-1/4 right-1/6 w-6 h-6 border-2 border-secondary/40 rounded-full animate-bounce opacity-25" style={{ animationDelay: '2.2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-accent/50 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-gradient-to-r from-primary to-secondary rotate-45 animate-bounce opacity-20" style={{ animationDelay: '3.5s' }}></div>
    </div>
  );
};

export default FloatingElements;