import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = 'Delhi, India';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <footer className="mt-20 border-t border-gray-800 py-8 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-6 text-sm md:text-base text-gray-400">
        {/* Left side - Credit */}
        <p>
          Designed & Developed by <span className="text-white font-semibold">Aman</span> © 2025. All rights reserved
        </p>

        {/* Right side - Location and Time */}
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span>📍 {location}</span>
          <span>{formattedTime.split(',')[1].trim()}</span>
        </div>
      </div>
    </footer>
  );
}
