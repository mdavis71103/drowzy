import React from 'react';

export function PendulumIcon({ size = 80 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* String extending upward */}
      <line 
        x1="40" 
        y1="0" 
        x2="40" 
        y2="25" 
        stroke="#C9CCD3" 
        strokeWidth="1.5"
      />
      
      {/* Outer ring */}
      <circle 
        cx="40" 
        cy="40" 
        r="28" 
        stroke="#C9CCD3" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Inner ring */}
      <circle 
        cx="40" 
        cy="40" 
        r="20" 
        stroke="#C9CCD3" 
        strokeWidth="1.5" 
        fill="none"
        opacity="0.6"
      />
      
      {/* Center point */}
      <circle 
        cx="40" 
        cy="40" 
        r="3" 
        fill="#C9CCD3"
      />
    </svg>
  );
}
