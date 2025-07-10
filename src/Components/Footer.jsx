import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="mt-12 py-6 text-center">

      {/* Icons row */}
      <div className="flex justify-center gap-6 mb-3 text-gray-600 dark:text-gray-400 text-3xl">
        <a href="https://github.com/Aman-001" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aman-singh-chauhan-4b3baa263/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin />
        </a>
        <a href="https://x.com/amanch6211327" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaTwitter />
        </a>
       <a  href="mailto:amanc228d@gmail.com"  className="hover:text-blue-600">
          <SiGmail />
        </a>

      </div>

      {/* Copy text */}
      <p className="mt-2 text-base md:text-lg font-light tracking-wider text-gray-500 dark:text-gray-400 italic">
        dev by night
        <p className="text-3xl animate-tinker">☆</p>
      </p>
    </footer>
  );
}
