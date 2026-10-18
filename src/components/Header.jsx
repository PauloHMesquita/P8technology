import { useState, useEffect } from 'react';
import { Menu, X, LogIn, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoP8 from '../assets/logo-p8.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu do celular aberto: a página atrás não rola, e a tecla Esc fecha.
  // Se a tela for aumentada (virar desktop), o menu fecha sozinho.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const aoTeclar = (e) => e.key === 'Escape' && setIsMenuOpen(false);
    const aoRedimensionar = () => window.innerWidth >= 768 && setIsMenuOpen(false);
    window.addEventListener('keydown', aoTeclar);
    window.addEventListener('resize', aoRedimensionar);
    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener('keydown', aoTeclar);
      window.removeEventListener('resize', aoRedimensionar);
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      // Espera o menu fechar (e a rolagem da página voltar) antes de rolar.
      requestAnimationFrame(() => element.scrollIntoView({ behavior: 'smooth' }));
    }
  };

  // Os "id" continuam os mesmos das seções (portfolio, about) de propósito —
  // só o texto do menu mudou. Assim nada quebra até renomearmos as seções
  // em si (Portfolio.jsx ainda não foi revisado).
  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Quem Somos' },
    { id: 'portfolio', label: 'Soluções' },
    { id: 'contact', label: 'Contato' }
  ];

  // Número comercial já usado no Contato — mesmo dígitos, formato que o
  // WhatsApp espera (código do país + DDD + número, só dígitos).
  const whatsappUrl = 'https://wa.me/5538999922756?text=' + encodeURIComponent(
    'Olá! Vim pelo site da P8 Technology e gostaria de saber mais sobre os sistemas da LJ Sistemas.'
  );

  // Cabeçalho com fundo sólido quando a página rolou OU quando o menu do
  // celular está aberto (antes ficava transparente no topo e o menu se
  // misturava com o texto do site).
  const fundoSolido = isScrolled || isMenuOpen;

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      fundoSolido ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo com contorno claro sutil (classe .logo-contraste, de
              App.css) em vez de um selo branco sólido atrás — o texto
              escuro da logo fica legível no cabeçalho escuro sem parecer
              um adesivo colado. */}
          <div className="flex items-center">
            <img src={logoP8} alt="P8 Technology" className="logo-contraste h-9 sm:h-11 w-auto" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://crm.p8technology.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors duration-200"
            >
              <LogIn className="w-4 h-4" />
              Acessar Sistema
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="menu-celular"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
    </header>

    {/* Menu do celular: tela cheia, fundo sólido, por cima de tudo
        (inclusive do botão do WhatsApp), começando logo abaixo do
        cabeçalho. Tocar fora dos itens não fecha por engano. */}
    {isMenuOpen && (
      <nav
        id="menu-celular"
        className="md:hidden fixed inset-x-0 top-[68px] sm:top-[76px] bottom-0 z-[60] bg-slate-900 border-t border-slate-700 overflow-y-auto"
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left text-lg text-white hover:text-blue-400 active:bg-slate-800 transition-colors duration-200 font-medium py-3 px-2 rounded-lg"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://crm.p8technology.com.br"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors duration-200"
          >
            <LogIn className="w-5 h-5" />
            Acessar Sistema
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BD5C] text-white font-semibold transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5" fill="white" />
            Falar no WhatsApp
          </a>
        </div>
      </nav>
    )}

    {/* Botão flutuante de WhatsApp — escondido enquanto o menu do
        celular está aberto (o próprio menu já tem o botão). */}
    {!isMenuOpen && (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5C] text-white shadow-lg hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7" fill="white" />
      </a>
    )}
    </>
  );
};

export default Header;
