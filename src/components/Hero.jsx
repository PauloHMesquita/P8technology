import { ArrowDown, Code, Database, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 md:pt-0">
      {/* Background Pattern - Melhorado */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-40 right-40 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM0MTU1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-xs sm:text-sm text-slate-300 mb-6 sm:mb-8 animate-fade-in-up">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-blue-400" />
            <span className="whitespace-nowrap">Desenvolvedor Especialista em Power Platform</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up animation-delay-200 leading-tight">
            Criando
            <span className="gradient-primary bg-clip-text text-transparent block animate-gradient min-h-[1.2em] min-w-[1em] force-bg-clip-text">
              Soluções Empresariais
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-300 block mt-2">
              que Transformam Negócios
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 px-4 sm:px-0">
            Especialista em <span className="text-blue-400 font-semibold">Power Apps</span>, 
            <span className="text-cyan-400 font-semibold"> SharePoint</span> e 
            <span className="text-purple-400 font-semibold"> Power BI</span> - 
            desenvolvendo soluções que otimizam processos e geram resultados reais
          </p>

          {/* Tech Icons - Melhorados */}
          <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-12 mb-8 sm:mb-12 animate-fade-in-up animation-delay-600">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300 hover-lift">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">Power Apps</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:border-cyan-500 group-hover:bg-cyan-500/10 transition-all duration-300 hover-lift">
                <Database className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">SharePoint</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-all duration-300 hover-lift">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">Power BI</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-800 px-4 sm:px-0">
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="gradient-primary hover:opacity-90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover-lift group w-full sm:w-auto"
            >
              Ver Meus Projetos
              <ArrowDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover-lift w-full sm:w-auto"
            >
              Sobre Mim
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 animate-fade-in-up animation-delay-1000 px-4 sm:px-0">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent">9+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent">500+</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">Usuários</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent">100%</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">Satisfação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Melhorado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

