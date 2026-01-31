import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

export default function App() {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }, []);

  return (
    <>
      <Header />
      <main className="py-14 px-4 flex justify-center">
        <div className="w-full max-w-5xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
