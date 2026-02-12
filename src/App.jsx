import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import LoadingShimmer from './Components/LoadingShimmer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingShimmer onComplete={() => setIsLoading(false)} />;
  }

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
