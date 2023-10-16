import React, { useEffect, useState } from 'react';

const CircleProgressBar = ({ progress }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame;
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progressTime = timestamp - start;
      const newOffset = Math.min((progressTime / 10) * progress, progress);
      setOffset(newOffset);
      if (newOffset < progress) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [progress]);

  const radius = 90; // Increase the radius to make the circle bigger
  const circumference = 2 * Math.PI * radius;
  

  return (
    <div className="boom">
    <center>
      
      <svg className="circle-progress" height="200" width="200">
        <circle
          className="circle-progress-bar"
          strokeWidth="20" 
          r={radius}
          cx="100"
          cy="100"
        />
        <circle
          className="circle-progress-indicator"
          strokeWidth="20"
          r={radius}
          cx="100"
          cy="100"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference - (offset / 100) * circumference
          }}
        />
        <text x="50%" y="50%" textAnchor="middle" dy=".1em">
  {progress}%
       <tspan x="50%" dy="1.1em" textAnchor="middle" id='font'>total New</tspan>
       <tspan x="50%" dy="1.2em" textAnchor="middle" id='font'>customers</tspan>

      </text>
       
      </svg>
      
    </center></div>
  );
};

export default CircleProgressBar;
