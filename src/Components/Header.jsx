import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // hamburger & close icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 py-4 px-6 bg-white/30 dark:bg-black/30 backdrop-blur-md max-w-5xl mx-auto">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-12 w-12 rounded-full object-cover border border-gray-300 shadow-lg" />
          <span className="px-3 text-2xl sm:text-2xl italic text-gray-900 dark:text-white">
            Aman Singh Chauhan
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 list-none">
            <li><a href="#" className="font-sans text-gray-900 dark:text-white hover:text-blue-600">Home</a></li>
            <li><a href="#projects" className="font-sans text-gray-900 dark:text-white hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="font-sans text-gray-900 dark:text-white hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white focus:outline-none">
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden left-0 w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 shadow-md">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            <li><a href="#" onClick={() => setIsOpen(false)} className="font-robotoslab text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 px-3 py-2 rounded">Home</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="font-robotoslab text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 px-3 py-2 rounded">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="font-robotoslab text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 px-3 py-2 rounded">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
