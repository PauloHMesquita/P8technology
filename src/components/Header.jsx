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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
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

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
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
            {/* Aponta pro subdomínio do CRM — só vai funcionar de verdade
                depois que o sistema estiver publicado lá. Até lá, fica
                visível mas leva a um endereço que ainda não existe. */}
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
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-blue-400 transition-colors duration-200 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://crm.p8technology.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors duration-200 w-fit"
              >
                <LogIn className="w-4 h-4" />
                Acessar Sistema
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>

    {/* Botão flutuante de WhatsApp — fica visível em qualquer parte da
        página, em qualquer seção, já que é posição fixa. Verde
        reconhecível (cor oficial do WhatsApp), sempre no canto inferior
        direito, comum em sites de negócio local por converter melhor
        que formulário de contato. */}
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5C] text-white shadow-lg hover:scale-110 transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
    </a>
    </>
  );
};

export default Header;
