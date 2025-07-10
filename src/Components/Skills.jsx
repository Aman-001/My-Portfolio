import React from 'react';
import { FaReact, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiAppwrite, SiChartdotjs, SiTailwindcss } from 'react-icons/si';
import { IoIosSend } from 'react-icons/io';
import { MdStorage } from 'react-icons/md';
import { BiCodeCurly } from 'react-icons/bi';

const topRowSkills = [
  { name: 'React', icon: <FaReact className="text-blue-500 text-7xl" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500 text-7xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500 text-7xl" /> },
  { name: 'Chart.js', icon: <SiChartdotjs className="text-red-500 text-7xl" /> },
];

const bottomRowSkills = [
  { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-7xl" /> },
  { name: 'Appwrite', icon: <SiAppwrite className="text-pink-500 text-7xl" /> },
  { name: 'EmailJS', icon: <IoIosSend className="text-green-500 text-7xl" /> },
  { name: 'REST APIs', icon: <BiCodeCurly className="text-purple-500 text-7xl" /> },
  { name: 'Local Storage', icon: <MdStorage className="text-gray-500 text-7xl" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-5xl sm:text-4xl font-heading font-bold mb-8 text-center text-gray-900 dark:text-white">
        Skills & Tools
      </h2>

      {/* Top row */}
      <div className="w-1/2 py-3 mx-auto overflow-hidden mb-8">
        <div className="flex w-max animate-marqueeLeft gap-9">
          {topRowSkills.concat(topRowSkills).map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
              {skill.icon}
              <span className="text-xl font-serif">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

     <div className="w-1/2 mx-auto overflow-hidden">
  <div className="flex w-max flex-row  animate-marqueeRight gap-9">
    {bottomRowSkills.concat(bottomRowSkills).map((skill, idx) => (
      <div key={idx} className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
        {skill.icon}
        <span className="text-xl font-serif">{skill.name}</span>
      </div>
    ))}
  </div>
</div>

    </section>
  );
}
