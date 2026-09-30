import { Building2, ShoppingCart, Package, Receipt, LineChart, ShieldCheck, Headset } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  // O que o serviço da P8 Technology cobre como representante LJ Sistemas —
  // não é sobre o CRM interno da empresa, é sobre o que o cliente final recebe.
  const capacidades = [
    { nome: 'PDV / Frente de Caixa', icone: <ShoppingCart className="w-5 h-5" /> },
    { nome: 'Controle de Estoque', icone: <Package className="w-5 h-5" /> },
    { nome: 'Emissão Fiscal (NFC-e/NF-e)', icone: <Receipt className="w-5 h-5" /> },
    { nome: 'Financeiro e Contas a Pagar/Receber', icone: <LineChart className="w-5 h-5" /> },
    { nome: 'Treinamento da Equipe', icone: <Headset className="w-5 h-5" /> },
    { nome: 'Suporte Local Contínuo', icone: <ShieldCheck className="w-5 h-5" /> },
  ];

  // Conquistas da P8 Technology como representante local — não do
  // desenvolvimento do sistema em si, que é da LJ Sistemas.
  const achievements = [
    {
      icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
      title: "Representante Oficial",
      description: "Parceria direta com a LJ Sistemas, marca consolidada em sistemas de gestão"
    },
    {
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />,
      title: "18 Segmentos",
      description: "Sistemas especializados para diferentes tipos de comércio e serviço"
    },
    {
      icon: <Headset className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Suporte Local",
      description: "Atendimento presencial em Sete Lagoas — sem central de atendimento distante"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />,
      title: "Em Expansão",
      description: "Crescendo junto com o comércio local da região"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Quem <span className="gradient-primary bg-clip-text text-transparent force-bg-clip-text">Somos</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4 sm:px-0">
              A P8 Technology é representante oficial da LJ Sistemas em Sete Lagoas, MG — levando sistemas de
              gestão especializados por segmento para o comércio e serviços da região
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 items-start">
            {/* Left Column - Foto do fundador */}
            <div className="lg:col-span-1 flex justify-center animate-fade-in-left">
              <div className="relative">
                <div className="absolute -inset-4 gradient-primary rounded-full blur-lg opacity-20 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 animate-spin-slow"></div>

                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl hover-lift">
                  <img
                    src={profileImage}
                    alt="Fundador da P8 Technology"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>

                {/* Antes dizia "Desenvolvedor" — agora deixa claro que é o
                    fundador da empresa, não um prestador de serviço avulso. */}
                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg animate-bounce">
                  <span className="hidden sm:inline">Paulo H Mesquita / Fundador</span>
                  <span className="sm:hidden">Paulo H Mesquita</span>
                </div>
              </div>
            </div>

            {/* Middle Column - Descrição e capacidades */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8 animate-fade-in-right">
              <div className="space-y-4 sm:space-y-6">
                <div className="prose prose-lg text-slate-300">
                  <p className="text-base sm:text-lg leading-relaxed">
                    A <span className="text-blue-400 font-semibold">P8 Technology</span> é representante oficial
                    da <span className="text-cyan-400 font-semibold">LJ Sistemas</span> na região de Sete Lagoas,
                    MG — levando sistemas de gestão especializados por tipo de negócio para o comércio e
                    serviços locais.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Cuidamos de tudo: <span className="text-purple-400 font-semibold">implantação, treinamento
                    da equipe e suporte contínuo</span> — sempre com atendimento local, sem depender de uma
                    central distante.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Por trabalharmos diretamente com quem vende no balcão todo dia, entendemos as necessidades
                    reais de cada segmento — de um açougue a uma loja de material de construção — e não só a
                    teoria de um manual de sistema.
                  </p>
                </div>
              </div>

              {/* Capacidades do sistema — substitui as barras de habilidade pessoal */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
                  <span className="w-1 h-6 sm:h-8 gradient-primary rounded-full mr-3"></span>
                  O que o sistema oferece
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {capacidades.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-slate-900 px-4 py-3 rounded-lg border border-slate-700 animate-scale-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-blue-400 shrink-0">{item.icone}</span>
                      <span className="text-slate-300 font-medium text-sm sm:text-base">{item.nome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-12 sm:mt-16 animate-fade-in-up animation-delay-600">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-slate-900 p-4 sm:p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover-lift group animate-scale-in"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-2 sm:space-y-4">
                    <div className="p-3 sm:p-4 bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-colors duration-300">
                      {achievement.icon}
                    </div>
                    <h4 className="text-base sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
