
import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from './Toggle'; 

function Header() {
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 py-4 px-8 bg-white/30 dark:bg-black/30 backdrop-blur-md">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-14 w-14  rounded-full object-cover border border-gray-300 shadow-lg " />

          <span className="px-5 font-lobster text-3xl text-gray-900 dark:text-white">
            Aman Singh Chauhan
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-8 list-none">
            <li>
               <a href="#" className="font-sans text-gray-900 dark:text-white hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#projects" className="font-sans text-gray-900 dark:text-white hover:text-blue-600">Projects</a>
            </li>
            <li>
              <a href="#contact" className="font-sans text-gray-900 dark:text-white hover:text-blue-600">Contact</a>
            </li>
          </ul>
          <Toggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
