import React from 'react';

const projects = [
  {
    title: 'The Blog Spot — Modern Blogging App',
    description: 'A fully responsive blog platform with rich text editor, email notifications, and dynamic content management.',
    technologies: ['React, Tailwind CSS, Appwrite, EmailJS, React Hook Form, Redux-Toolkit'],
    link: 'https://github.com/Aman-001/TheBlogSpot',
    date: 'July 2025',
  },
  {
    title: 'Currency Converter with Charts',
    description: 'A real-time currency converter featuring interactive charts, local storage for recent conversions, and live exchange rates.',
    technologies: ['React, Tailwind CSS, Chart.js, REST API, Local Storage'],
    link: 'https://github.com/Aman-001/CurrencyConvertor',
    date: 'June 2025',
  },
];

export default function Projects() {
  return (
<section id="projects" className="pt-28 pb-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-12 text-center text-gray-900 dark:text-white">
        My Projects
      </h2>

      <div className="relative border-l border-gray-300 dark:border-gray-700">
        {projects.map((project, index) => (
          <div key={index} className="mb-12 ml-12 relative">
            {/* timeline dot */}
            <span className="absolute -left-14 top-2 w-4 h-4 bg-blue-500 rounded-full border  border-white dark:border-gray-800"></span>

            {/* card */}
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow transition-colors duration-300">
              {/* Title block */}
              <div className="flex justify-between items-center px-5 py-3 bg-gray-200 dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {project.date}
                </span>
              </div>

              {/* Content block */}
              <div className="px-5 py-4 bg-gray-50 dark:bg-black/30">
                <hr className="mb-3 border-gray-300 dark:border-gray-700" />
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                <br></br>
                <h3 className="font-dmserif text-lg dark:text-purple-400 italic ">  Technology Used  </h3>


                {/* Technology block */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Repo</a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
