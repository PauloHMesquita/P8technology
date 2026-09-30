import {
  ShoppingBasket, Truck, Car, Activity, Stethoscope, Smile, Pill, Bed,
  Bike, Sofa, Shirt, TreePine, HardHat, Wrench, Glasses, PawPrint,
  ShoppingCart, Route as RouteIcon
} from 'lucide-react';

const Portfolio = () => {
  // Catálogo real de segmentos da LJ Sistemas (conferido em
  // ljsistemas.com.br/produtos) — a P8 Technology é representante oficial
  // e pode implantar qualquer um deles na região de Sete Lagoas.
  const segmentos = [
    { nome: 'Açougues / Sacolões', icone: <ShoppingBasket className="w-7 h-7" /> },
    { nome: 'Atacadistas e Distribuidoras', icone: <Truck className="w-7 h-7" /> },
    { nome: 'Auto Peças', icone: <Car className="w-7 h-7" /> },
    { nome: 'Clínicas de Fisioterapia', icone: <Activity className="w-7 h-7" /> },
    { nome: 'Clínicas Médicas', icone: <Stethoscope className="w-7 h-7" /> },
    { nome: 'Clínicas Odontológicas', icone: <Smile className="w-7 h-7" /> },
    { nome: 'Farmácias', icone: <Pill className="w-7 h-7" /> },
    { nome: 'Hotéis', icone: <Bed className="w-7 h-7" /> },
    { nome: 'Loja de Bicicletas', icone: <Bike className="w-7 h-7" /> },
    { nome: 'Móveis / Eletrodomésticos', icone: <Sofa className="w-7 h-7" /> },
    { nome: 'Roupas / Calçados', icone: <Shirt className="w-7 h-7" /> },
    { nome: 'Madeireiras', icone: <TreePine className="w-7 h-7" /> },
    { nome: 'Material de Construção', icone: <HardHat className="w-7 h-7" /> },
    { nome: 'Oficinas Mecânicas', icone: <Wrench className="w-7 h-7" /> },
    { nome: 'Óticas', icone: <Glasses className="w-7 h-7" /> },
    { nome: 'PetShop', icone: <PawPrint className="w-7 h-7" /> },
    { nome: 'Supermercados / Mercearias', icone: <ShoppingCart className="w-7 h-7" /> },
    { nome: 'Transportadoras', icone: <RouteIcon className="w-7 h-7" /> },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Nossas <span className="gradient-primary bg-clip-text text-transparent">Soluções</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4 sm:px-0">
              Sistemas de gestão LJ Sistemas, especializados por tipo de negócio — implantação, treinamento e
              suporte local em Sete Lagoas, MG
            </p>
          </div>

          {/* Grid de segmentos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
            {segmentos.map((segmento, index) => (
              <button
                key={segmento.nome}
                onClick={scrollToContact}
                className="flex flex-col items-center text-center gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 rounded-xl p-4 sm:p-5 transition-all duration-300 hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-3 bg-slate-900 rounded-xl text-blue-400 group-hover:text-cyan-400 group-hover:bg-slate-800 transition-colors duration-300">
                  {segmento.icone}
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  {segmento.nome}
                </span>
              </button>
            ))}
          </div>

          {/* Não encontrou o segmento? */}
          <div className="text-center mt-10 sm:mt-12">
            <p className="text-slate-400 mb-4">
              Não encontrou o seu segmento? A LJ Sistemas atende outros tipos de negócio também.
            </p>
            <button
              onClick={scrollToContact}
              className="px-6 py-3 rounded-xl gradient-primary text-white font-semibold hover:opacity-90 transition-all duration-300 hover-lift"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
