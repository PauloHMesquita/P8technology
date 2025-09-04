import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configurações do EmailJS
      const serviceId = 'service_eqzvomr'; // Você precisará configurar isso no EmailJS
      const templateId = 'template_9xu9fqj'; // Você precisará configurar isso no EmailJS
      const publicKey = '6XnfzrvBx1YDq59dv'; // Você precisará configurar isso no EmailJS

      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      });

      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo e-mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'paulo_marques_mesquita@hotmail.com',
      link: 'mailto:paulo_marques_mesquita@hotmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      value: '+55 (38) 99992-2756',
      link: 'tel:+5538999922756'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Localização',
      value: 'Montes Claros, MG - Brasil',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/paulohmesquita/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/PauloHMesquita',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Entre em <span className="text-yellow-400">Contato</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Vamos conversar sobre seu próximo projeto? Estou sempre aberto a novas oportunidades e desafios
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato:</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-slate-900">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-slate-300 hover:text-yellow-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-slate-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 ${social.color} transition-colors duration-200`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                <h4 className="text-xl font-bold text-white mb-3">Pronto para começar?</h4>
                <p className="text-slate-300 mb-4">
                  Tenho experiência em transformar ideias em soluções reais. Vamos discutir como posso ajudar seu negócio a crescer.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-400 text-slate-900 text-sm rounded-full font-medium">
                    Power Apps
                  </span>
                  <span className="px-3 py-1 bg-yellow-400 text-slate-900 text-sm rounded-full font-medium">
                    SharePoint
                  </span>
                  <span className="px-3 py-1 bg-yellow-400 text-slate-900 text-sm rounded-full font-medium">
                    Power BI
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="user_name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white focus:border-yellow-400"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-600 text-white focus:border-yellow-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Assunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-800 border-slate-600 text-white focus:border-yellow-400"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-800 border-slate-600 text-white focus:border-yellow-400 resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-slate-900 font-semibold py-3 transition-all duration-300 disabled:opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

