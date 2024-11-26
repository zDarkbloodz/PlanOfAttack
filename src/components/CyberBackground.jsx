import React from 'react';

export const CyberBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Base layer with grid and gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hex-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-cyan-900/10 to-black/50" />
      </div>
      
      {/* Floating particles layer */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="cyber-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              opacity: 0.3 + Math.random() * 0.5
            }}
          >
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-[2px]" />
          </div>
        ))}
      </div>

      {/* Lightning effects layer */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`lightning-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <div 
              className="h-32 w-[1px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              style={{
                opacity: 0,
                animation: `lightning ${3 + Math.random() * 4}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          </div>
        ))}
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 scanline" />

      {/* Ambient glow layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent" 
             style={{ animationName: 'pulse', animationDuration: '4s', animationIterationCount: 'infinite' }} />
      </div>
    </div>
  );
};

export default CyberBackground;