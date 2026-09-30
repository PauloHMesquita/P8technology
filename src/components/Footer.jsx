import { Heart, Code } from 'lucide-react';
import logoP8 from '../assets/logo-p8.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              {/* Mesmo selo claro do cabeçalho — necessário porque o texto
                  da logo é escuro, feito pra fundo claro. */}
              <div className="bg-white rounded-lg px-2.5 py-1 shadow-sm">
                <img src={logoP8} alt="P8 Technology" className="h-6 w-auto" />
              </div>
              <div className="text-slate-400 text-sm">
                © {currentYear} P8 Technology — todos os direitos reservados
              </div>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>e</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>usando React + Tailwind CSS</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-slate-700 text-center">
            <p className="text-slate-400 text-sm">
              P8 Technology — representante oficial LJ Sistemas em Sete Lagoas, MG. Sistemas de gestão especializados por segmento, com implantação, treinamento e suporte local.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
