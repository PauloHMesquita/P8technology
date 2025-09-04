import { useState } from 'react';
import { ExternalLink, Code, Database, Zap, Shield, Package, FileText, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import projectsData from '../data/projects.json';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['Todos', 'Gestão de Recursos', 'Controle de Acesso', 'Logística', 'Gestão Financeira', 'Manutenção', 'Gestão de Contratos', 'Comércio Internacional'];

  const getCategoryIcon = (category) => {
    const icons = {
      'Gestão de Recursos': <Package className="w-5 h-5" />,
      'Controle de Acesso': <Shield className="w-5 h-5" />,
      'Logística': <Database className="w-5 h-5" />,
      'Gestão Financeira': <FileText className="w-5 h-5" />,
      'Manutenção': <Zap className="w-5 h-5" />,
      'Gestão de Contratos': <Users className="w-5 h-5" />,
      'Comércio Internacional': <Globe className="w-5 h-5" />
    };
    return icons[category] || <Code className="w-5 h-5" />;
  };

  const filteredProjects = selectedCategory === 'Todos' 
    ? projectsData.projects 
    : projectsData.projects.filter(project => project.category === selectedCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portifólio <span className="text-yellow-400">de Projetos</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Soluções empresariais desenvolvidas com foco em eficiência, usabilidade e resultados mensuráveis
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-500'
                    : 'border-slate-600 text-slate-300 hover:border-yellow-400 hover:text-yellow-400'
                } transition-all duration-200`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                  <div className="text-center">
                    {getCategoryIcon(project.category)}
                    <p className="text-slate-400 text-sm mt-2">{project.category}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-yellow-400 text-slate-900">
                      {project.status}
                    </Badge>
                    <ExternalLink className="w-5 h-5 text-slate-400 hover:text-yellow-400 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <Badge className="bg-yellow-400 text-slate-900">{selectedProject.category}</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeProjectModal}
                  className="text-slate-400 hover:text-white"
                >
                  ×
                </Button>
              </div>

              {/* Project Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  {getCategoryIcon(selectedProject.category)}
                  <p className="text-slate-400 text-sm mt-2">{selectedProject.category}</p>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Descrição do Projeto</h4>
                <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Principais Funcionalidades</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Tecnologias Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-slate-600 text-slate-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

