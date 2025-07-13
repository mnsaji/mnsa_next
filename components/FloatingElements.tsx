'use client';

import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-cyan-400/30 animate-float transform rotate-45 cyber-border"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 animate-float-delayed rounded-full glow-box"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-green-400/40 animate-float rounded-lg transform rotate-12"></div>
      <div className="absolute top-60 left-1/3 w-8 h-8 bg-cyan-400/30 animate-float-delayed transform rotate-45"></div>
      <div className="absolute bottom-60 right-1/4 w-14 h-14 border border-purple-500/40 animate-float rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-10 h-10 bg-gradient-to-r from-green-400/20 to-cyan-400/20 animate-float transform rotate-45"></div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      {/* Rotating tech circles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-rotate-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-purple-500/20 rounded-full animate-rotate-slow"
        style={{ animationDirection: 'reverse' }}
      ></div>
    </div>
  );
};

export default FloatingElements;
