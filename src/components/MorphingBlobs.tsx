import React from 'react';

const MorphingBlobs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large morphing blob */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-primary/20 via-accent/15 to-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/15 via-secondary/20 to-primary/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>
      
      {/* Medium morphing blob */}
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 opacity-25">
        <div className="w-full h-full bg-gradient-to-r from-secondary/25 via-primary/20 to-accent/15 rounded-full blur-3xl animate-bounce-gentle"></div>
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary/20 via-accent/25 to-secondary/15 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>
      
      {/* Small morphing blob */}
      <div className="absolute top-1/2 right-1/6 w-48 h-48 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-accent/30 via-secondary/25 to-primary/20 rounded-full blur-2xl animate-pulse"></div>
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-secondary/25 via-primary/30 to-accent/20 rounded-full blur-xl animate-bounce-gentle"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>
      
      {/* Additional small blobs */}
      <div className="absolute bottom-1/6 left-1/6 w-32 h-32 bg-gradient-to-r from-primary/25 to-accent/20 rounded-full blur-2xl animate-float opacity-15" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/6 right-1/3 w-24 h-24 bg-gradient-to-r from-secondary/30 to-primary/25 rounded-full blur-xl animate-pulse opacity-20" style={{ animationDelay: '5s' }}></div>
    </div>
  );
};

export default MorphingBlobs;