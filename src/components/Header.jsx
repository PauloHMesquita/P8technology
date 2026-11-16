import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, MessageCircle } from 'lucide-react';
import logo from '../assets/logo-p8-site.webp';
import { CONTATO, linkWhatsapp } from '../lib/site';

const ITENS = [
  { para: '/#solucoes', rotulo: 'Soluções' },
  { para: '/#como-funciona', rotulo: 'Como funciona' },
  { para: '/#quem-somos', rotulo: 'Quem somos' },
  { para: '/#duvidas', rotulo: 'Dúvidas' },
  { para: '/#contato', rotulo: 'Contato' },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  // Fecha o menu do celular ao navegar.
  useEffect(() => setAberto(false), [pathname, hash]);

  // Menu aberto: página atrás não rola; Esc fecha.
  useEffect(() => {
    if (!aberto) return undefined;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const tecla = (e) => e.key === 'Escape' && setAberto(false);
    window.addEventListener('keydown', tecla);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener('keydown', tecla);
    };
  }, [aberto]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          rolou || aberto ? 'bg-white/90 shadow-[0_1px_0_rgb(15_28_46/0.08)] backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between sm:h-[72px]">
          <Link to="/" aria-label="P8 Technology — página inicial" className="shrink-0">
            <img src={logo} alt="P8 Technology" width="112" height="50" className="h-10 w-auto sm:h-11" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
            {ITENS.map((i) => (
              <Link key={i.para} to={i.para} className="text-[15px] font-medium text-slate-600 transition-colors hover:text-marca">
                {i.rotulo}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href={CONTATO.sistema} target="_blank" rel="noopener noreferrer" className="btn px-3 text-slate-600 hover:text-marca">
              <LogIn className="h-4 w-4" /> Acessar sistema
            </a>
            <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="btn-primario py-2.5">
              Pedir demonstração
            </a>
          </div>

          <button
            type="button"
            className="-mr-2 rounded-lg p-2 text-tinta lg:hidden"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            aria-controls="menu-celular"
          >
            {aberto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {aberto && (
        <nav id="menu-celular" className="fixed inset-x-0 bottom-0 top-16 z-[60] overflow-y-auto bg-white sm:top-[72px] lg:hidden" aria-label="Menu">
          <div className="container-site flex flex-col gap-1 py-6">
            {ITENS.map((i) => (
              <Link key={i.para} to={i.para} className="rounded-xl px-3 py-3.5 text-lg font-semibold text-tinta active:bg-slate-100">
                {i.rotulo}
              </Link>
            ))}
            <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="btn-zap mt-5">
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
            <a href={CONTATO.sistema} target="_blank" rel="noopener noreferrer" className="btn-claro mt-2">
              <LogIn className="h-5 w-5" /> Acessar sistema
            </a>
          </div>
        </nav>
      )}

      {!aberto && (
        <a
          href={linkWhatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-zap text-white shadow-lg shadow-zap/30 transition-transform hover:scale-105"
        >
          <MessageCircle className="h-7 w-7" fill="currentColor" />
        </a>
      )}
    </>
  );
}
