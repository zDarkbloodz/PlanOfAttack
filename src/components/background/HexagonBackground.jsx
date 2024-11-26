import React from 'react';

const HexagonBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 hex-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-cyan-900/10 to-black/50" />
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="cyber-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      <div className="scanline" />
    </div>
  );
};

export default HexagonBackground;