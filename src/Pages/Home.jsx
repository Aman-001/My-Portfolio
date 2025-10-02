import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Projects from './Projects';
import Skills from '../Components/Skills';
import Contact from "./Contact";
import Footer from "../Components/Footer";

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = document.querySelectorAll('.fade-up');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <>
            <section className="fade-up flex flex-col items-center justify-center py-28 text-center px-4 bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
                <h1 className="text-5xl sm:text-5xl md:text-7xl font-heading font-extrabold tracking-tight dark:text-emerald-300">
                    <Typewriter
                        words={['Learn, Build', '100× Curiosity', 'Sleep? Later.']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={3000}
                    />
                </h1>
                <p className="mt-5 font-mono text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                    I’m Aman — a curious developer dedicated to building meaningful web applications. With an eye for clean design and a passion for problem-solving, I bring ideas to life through thoughtful code and modern tools. Always learning, always improving.
                </p>
                <div className="w-1/3 h-1 bg-gray-300 dark:bg-gray-700 my-4 rounded"></div>
                <h3 className="sm:text-lg mt-3 md:text-xl font-mono font-bold text-red-500">
                    <Typewriter
                        words={['Powered by coffee & hope', 'Still debugging...']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={30}
                        deleteSpeed={0}
                        delaySpeed={2000}
                    />
                </h3>
                <div className="flex gap-4 justify-center mt-9 text-3xl text-gray-500 dark:text-gray-400">
                    <span title="Coffee Lover">☕</span>
                    <span title="Always Building">⚙️</span>
                    <span title="Night Owl">🌙</span>
                </div>
            </section>

            <section id="projects" className="fade-up">
                <Projects />
            </section>

            <div className="fade-up">
                <Skills />
            </div>

            <section id="contact" className="fade-up">
                <Contact />
            </section>

            <Footer />
        </>
    );
}
