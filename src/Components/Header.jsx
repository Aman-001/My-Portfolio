import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // hamburger & close icons
import { FaGithub } from 'react-icons/fa'; // GitHub icon

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getLinkClass = (path) => {
    const baseClass = "font-sans text-gray-900 dark:text-white hover:text-blue-600 transition-all duration-300";
    return isActive(path) ? `${baseClass} underline text-blue-600 dark:text-blue-400` : baseClass;
  };

  return (
    <header>
      <nav className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 py-4 px-6 bg-white/30 dark:bg-black/30 backdrop-blur-md max-w-5xl mx-auto">

        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <ul className="flex space-x-6 list-none ml-8">
            <li><Link to="/" className= {getLinkClass("/")}>Home</Link></li>
            <li><Link to="/projects" className={getLinkClass("/projects")}>Projects</Link></li>
          </ul>
          <a href="https://github.com/Aman-001" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:text-blue-600">
            <FaGithub size={28} />
          </a>
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
            <li><Link to="/" onClick={() => setIsOpen(false)} className={`font-robotoslab px-3 py-2 rounded block transition duration-300 ${isActive("/") ? "bg-blue-100 dark:bg-gray-700 underline" : "hover:bg-blue-100 dark:hover:bg-gray-700"} text-gray-900 dark:text-white`}>Home</Link></li>
            <li><Link to="/projects" onClick={() => setIsOpen(false)} className={`font-robotoslab px-3 py-2 rounded block transition duration-300 ${isActive("/projects") ? "bg-blue-100 dark:bg-gray-700 underline" : "hover:bg-blue-100 dark:hover:bg-gray-700"} text-gray-900 dark:text-white`}>Projects</Link></li>
            <li><a href="https://github.com/Aman-001" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="font-robotoslab text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-700 px-3 py-2 rounded flex items-center"><FaGithub size={20} className="mr-2" /> GitHub</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
