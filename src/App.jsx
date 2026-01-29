import { useEffect } from 'react';
import Header from './Components/Header';
import Home from './Pages/Home';

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
          <Home />
        </div>
      </main>
    </>
  );
}
