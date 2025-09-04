import { Award, Users, Lightbulb, Target } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const skills = [
    { name: 'Power Apps', level: 95 },
    { name: 'SharePoint', level: 95 },
    { name: 'Power Automate', level: 88 },
    { name: 'Power BI', level: 80 },
    { name: 'SQL Server', level: 80 },
    { name: 'Azure', level: 75 }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: "9+ Projetos",
      description: "Aplicações e KPIS empresariais desenvolvidos e implementados"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "500+ Usuários",
      description: "Profissionais impactados pelas soluções desenvolvidas"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />,
      title: "Inovação",
      description: "Soluções criativas e personalizadas para desafios complexos de negócio"
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Resultados",
      description: "Otimização de processos e redução de custos operacionais"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre <span className="gradient-primary bg-clip-text text-transparent block animate-gradient min-h-[1.2em] min-w-[1em] force-bg-clip-text">Mim</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Desenvolvedor especializado em criar soluções empresariais que transformam processos de negócio e geram valor real para as organizações
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Profile Image */}
            <div className="lg:col-span-1 flex justify-center animate-fade-in-left">
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -inset-4 gradient-primary rounded-full blur-lg opacity-20 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30 animate-spin-slow"></div>
                
                {/* Profile image */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl hover-lift">
                  <img 
                    src={profileImage} 
                    alt="Foto de perfil profissional" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  Paulo H Mesquita / Desenvolvedor
                </div>
              </div>
            </div>

            {/* Middle Column - Description and Skills */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in-right">
              {/* Description */}
              <div className="space-y-6">
                <div className="prose prose-lg text-slate-300">
                  <p className="text-lg leading-relaxed">
                    Com vasta experiência em suporte e análise de sistemas ERP, atuante no desenvolvimento de aplicações empresariais, especializo-me em criar 
                    <span className="text-blue-400 font-semibold"> soluções robustas e escaláveis</span> utilizando a plataforma Microsoft Power Platform.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Minha abordagem combina <span className="text-cyan-400 font-semibold">conhecimento técnico profundo</span> com uma 
                    compreensão clara das necessidades de negócio, resultando em aplicações que não apenas funcionam perfeitamente, 
                    mas também geram <span className="text-green-400 font-semibold">impacto real</span> nos processos organizacionais.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Cada projeto é desenvolvido com foco na <span className="text-purple-400 font-semibold">experiência do usuário</span>, 
                    facilidade de manutenção e escalabilidade, garantindo soluções duradouras e eficientes.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-1 h-8 gradient-primary rounded-full mr-3"></span>
                  Habilidades Técnicas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-3 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold text-sm bg-slate-900 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className="gradient-primary h-2 rounded-full transition-all duration-1000 ease-out transform origin-left"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mt-16 animate-fade-in-up animation-delay-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover-lift group animate-scale-in"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-colors duration-300">
                      {achievement.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {achievement.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
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

