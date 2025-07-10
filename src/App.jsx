import Header from './Components/Header';
import Home from './Pages/Home';

export default function App() {
  return (
    <>
      <Header />
      <main className="py-14">
        <Home />
      </main>
    </>
  );
}
