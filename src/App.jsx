import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solucao from './pages/Solucao';
import NaoEncontrada from './pages/NaoEncontrada';

// Ao trocar de página volta ao topo; com "#secao" no link, rola até ela.
function Rolagem() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const tentar = (n) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else if (n > 0) setTimeout(() => tentar(n - 1), 50);
      };
      tentar(10);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Rolagem />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes/:slug" element={<Solucao />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
