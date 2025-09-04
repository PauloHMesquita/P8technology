import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="text-xl font-bold text-white">
                <span className="text-yellow-400">P8</span>Technology
              </div>
              <div className="text-slate-400 text-sm">
                © {currentYear} Paulo H Mesquita todos os direitos reservados
              </div>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>e</span>
              <Code className="w-4 h-4 text-yellow-400" />
              <span>usando React + Tailwind CSS</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-slate-700 text-center">
            <p className="text-slate-400 text-sm">
              P8Technology empresa especialista em Power Apps, SharePoint e soluções empresariais personalizadas que transformam negócios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

