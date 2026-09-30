import { Building2, Route, Users, LineChart, ShieldCheck, Headset } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  // Antes eram barras de "habilidade pessoal" (Power Apps 95%, SharePoint
  // 95%...). Pra uma empresa, faz mais sentido mostrar O QUE o sistema
  // oferece do que uma porcentagem de domínio de ferramenta.
  const capacidades = [
    { nome: 'Funil Comercial (Kanban)', icone: <Users className="w-5 h-5" /> },
    { nome: 'Rotas de Prospecção com Mapa', icone: <Route className="w-5 h-5" /> },
    { nome: 'Captação de Novos Clientes', icone: <LineChart className="w-5 h-5" /> },
    { nome: 'Gestão de Usuários e Permissões', icone: <ShieldCheck className="w-5 h-5" /> },
    { nome: 'Dashboards e Indicadores', icone: <Building2 className="w-5 h-5" /> },
    { nome: 'Suporte Direto com Quem Desenvolve', icone: <Headset className="w-5 h-5" /> },
  ];

  // Trocamos "9+ Projetos / 500+ Usuários" (números de portfólio pessoal)
  // por conquistas reais e verificáveis da empresa neste momento.
  const achievements = [
    {
      icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />,
      title: "Sistema Próprio",
      description: "Construído e mantido internamente, sem depender de licença de terceiros"
    },
    {
      icon: <Route className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />,
      title: "Foco Comercial",
      description: "Pensado para quem faz prospecção e vendas em campo no dia a dia"
    },
    {
      icon: <Headset className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />,
      title: "Suporte Direto",
      description: "Quem atende é quem desenvolve — sem central de atendimento terceirizada"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />,
      title: "Em Expansão",
      description: "Sistema em evolução constante, com novas funcionalidades a cada versão"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Quem <span className="gradient-primary bg-clip-text text-transparent">Somos</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4 sm:px-0">
              A P8 Technology desenvolve sistemas de gestão para pequenas e médias empresas — começando pelo
              nosso próprio produto, o LJ Sistemas, usado na gestão comercial da nossa operação em Sete Lagoas, MG
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
                    A <span className="text-blue-400 font-semibold">P8 Technology</span> nasceu para resolver um
                    problema comum em pequenas e médias empresas: gestão comercial espalhada em planilhas,
                    caderninhos e memória de quem vende.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Desenvolvemos o <span className="text-cyan-400 font-semibold">LJ Sistemas</span>, uma
                    plataforma própria de CRM e gestão comercial — do primeiro contato com o cliente até o
                    fechamento, incluindo <span className="text-purple-400 font-semibold">roteirização de
                    visitas em campo</span> e captação de novos clientes.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Por sermos nós mesmos os desenvolvedores e os usuários do sistema no dia a dia, cada
                    funcionalidade nasce de um problema <span className="text-green-400 font-semibold">real, já
                    vivido</span> — não de uma suposição sobre o que o mercado precisa.
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
