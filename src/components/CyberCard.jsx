import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CyberCard = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      className={`relative overflow-hidden cyber-border hologram ${className}`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${(mousePosition.y - 150) / 20}deg) rotateY(${(mousePosition.x - 150) / 20}deg)`,
      }}
    >
      <div className="scanline" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg animate-pulse" />
      <div className="relative z-10 bg-black/50 p-6 rounded-lg backdrop-blur-sm">
        {children}
      </div>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
    </motion.div>
  );
};

export const CyberButton = ({ children, onClick, active, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-4 py-2 rounded-lg font-medium transition-all cyber-border
        ${active ? 'text-white shadow-lg' : 'text-gray-400'}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg animate-pulse" />
      <span className="relative z-10 cyber-text">{children}</span>
    </motion.button>
  );
};

export const CyberTable = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto bg-black/50 rounded-lg border border-cyan-800 cyber-border">
      <table className="w-full">
        <thead className="bg-gray-800/50">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left text-cyan-300 cyber-text">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-cyan-800/30 hover:bg-cyan-900/20"
            >
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-2">
                  {cell}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};