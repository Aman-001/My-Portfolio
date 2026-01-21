import Header from './Components/Header';
import Home from './Pages/Home';

export default function App() {
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
