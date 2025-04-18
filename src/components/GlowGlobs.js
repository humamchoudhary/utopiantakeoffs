"use client";
import React, { useEffect, useState } from "react";

const BlurBackground = ({
  blurCount = 4, // Default number of blurs on each side
  minSize = 400, // Minimum size in pixels
  maxSize = 600, // Maximum size in pixels
  colors = ["#972A20", "#444408"], // Your custom colors
}) => {
  // Generate blurs with positions distributed along the height
  const leftBlurs = Array.from({ length: blurCount }, (_, i) => {
    const topPosition = i * (100 / blurCount) + Math.random() * 5;
    const color = colors[i % colors.length]; // Alternate colors
    const size = Math.random() * (maxSize - minSize) + minSize;
    return {
      left: `-${Math.random() * 10 + 5}vw`,
      top: `${topPosition}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: Math.random() * 0.3 + 0.4,
      background: `radial-gradient(circle, ${color}CC 0%, ${color}99 40%, ${color}66 70%, transparent 100%)`,
    };
  });

  const rightBlurs = Array.from({ length: blurCount }, (_, i) => {
    const topPosition = i * (100 / blurCount) + Math.random() * 5;
    const color = colors[(i + 1) % colors.length]; // Offset by 1 to alternate differently from left side
    const size = Math.random() * (maxSize - minSize) + minSize;
    return {
      right: `-${Math.random() * 10 + 5}vw`,
      top: `${topPosition}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: Math.random() * 0.3 + 0.4,
      background: `radial-gradient(circle, ${color}CC 0%, ${color}99 40%, ${color}66 70%, transparent 100%)`,
    };
  });

  return (
    <div className="absolute hidden md:block inset-0 overflow-hidden pointer-events-none z-0">
      {leftBlurs.map((styles, index) => (
        <div
          key={`left-blur-${index}`}
          className="absolute rounded-full blur-3xl animate-pulse"
          style={styles}
        />
      ))}

      {rightBlurs.map((styles, index) => (
        <div
          key={`right-blur-${index}`}
          className="absolute rounded-full blur-3xl animate-pulse"
          style={styles}
        />
      ))}
    </div>
  );
};

export default BlurBackground;
