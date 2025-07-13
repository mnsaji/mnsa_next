'use client';

import React, { useEffect, useRef } from 'react';

const Enhanced3DBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create neural network nodes
    const createNeuralNode = () => {
      const node = document.createElement('div');
      node.className = 'neural-node';
      node.style.left = Math.random() * 100 + '%';
      node.style.top = Math.random() * 100 + '%';
      node.style.animationDelay = Math.random() * 5 + 's';
      node.style.animationDuration = Math.random() * 10 + 8 + 's';
      container.appendChild(node);

      setTimeout(() => node.remove(), 15000);
    };

    // Create AI circuit lines
    const createCircuitLine = () => {
      const line = document.createElement('div');
      line.className = 'circuit-line';
      line.style.left = Math.random() * 100 + '%';
      line.style.top = Math.random() * 100 + '%';
      line.style.width = Math.random() * 200 + 50 + 'px';
      line.style.transform = `rotate(${Math.random() * 360}deg)`;
      line.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(line);

      setTimeout(() => line.remove(), 12000);
    };

    // Create animated data streams
    const createDataStream = () => {
      const stream = document.createElement('div');
      stream.className = 'data-stream';
      stream.style.left = Math.random() * 100 + '%';
      stream.style.animationDuration = Math.random() * 8 + 5 + 's';
      stream.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(stream);

      setTimeout(() => stream.remove(), 10000);
    };

    const nodeInterval = setInterval(createNeuralNode, 2000);
    const circuitInterval = setInterval(createCircuitLine, 3000);
    const streamInterval = setInterval(createDataStream, 1500);

    return () => {
      clearInterval(nodeInterval);
      clearInterval(circuitInterval);
      clearInterval(streamInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default Enhanced3DBackground;
