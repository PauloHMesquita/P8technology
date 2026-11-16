import { useRef, useState } from 'react';
import { Instagram, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SOLUCOES } from '../data/solucoes';
import { CONTATO, linkWhatsapp } from '../lib/site';

// Configuração do EmailJS — a mesma que já estava em uso no site.
const EMAILJS = { servico: 'service_eqzvomr', modelo: 'template_9xu9fqj', chavePublica: '6XnfzrvBx1YDq59dv' };

export default function Contact({ segmentoInicial = '' }) {
  const form = useRef(null);
  const [estado, setEstado] = useState('livre'); // livre | enviando | ok | erro

  const enviar = async (e) => {
    e.preventDefault();
    setEstado('enviando');
    try {
      await emailjs.sendForm(EMAILJS.servico, EMAILJS.modelo, form.current, { publicKey: EMAILJS.chavePublica });
      form.current.reset();
      setEstado('ok');
    } catch (erro) {
      console.error('Falha ao enviar mensagem:', erro);
      setEstado('erro');
    }
  };

  return (
    <section id="contato" className="bg-tinta py-20 text-slate-300 sm:py-24">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <span className="rotulo bg-white/10 text-sky-300">Contato</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Vamos ver o sistema funcionando no seu negócio?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-400">
            Conte o seu segmento e como você trabalha hoje. Mostramos o sistema na prática e montamos uma proposta sob medida.
          </p>

          <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="btn-zap mt-8 w-full py-4 text-base sm:w-auto">
            <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp — {CONTATO.telefone}
          </a>

          <ul className="mt-10 space-y-4 text-[15px]">
            <li>
              <a href={`mailto:${CONTATO.email}`} className="flex items-center gap-3 hover:text-white">
                <Mail className="h-5 w-5 text-sky-400" /> {CONTATO.email}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${CONTATO.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white">
                <Instagram className="h-5 w-5 text-sky-400" /> @{CONTATO.instagram}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-sky-400" /> {CONTATO.cidade} e região
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-6 text-slate-700 shadow-2xl sm:p-8">
          {estado === 'ok' ? (
            <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
              <CheckCircle2 className="h-14 w-14 text-zap" />
              <h3 className="mt-4 text-2xl font-bold">Mensagem enviada!</h3>
              <p className="mt-2 max-w-sm text-slate-500">Recebemos seu contato e retornamos em breve. Se preferir, fale agora pelo WhatsApp.</p>
              <button type="button" onClick={() => setEstado('livre')} className="btn-claro mt-6">Enviar outra mensagem</button>
            </div>
          ) : (
            <form ref={form} onSubmit={enviar} className="space-y-4">
              <h3 className="text-xl font-bold">Prefere que a gente entre em contato?</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-600">Nome</span>
                  <input name="user_name" required autoComplete="name" className="campo" placeholder="Seu nome" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-600">E-mail</span>
                  <input name="user_email" type="email" required autoComplete="email" className="campo" placeholder="voce@empresa.com.br" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-600">Segmento</span>
                <select name="subject" required defaultValue={segmentoInicial} className="campo appearance-none">
                  <option value="" disabled>Selecione o tipo de negócio</option>
                  {SOLUCOES.map((s) => (
                    <option key={s.slug} value={`Interesse: ${s.nome}`}>{s.nome}</option>
                  ))}
                  <option value="Interesse: outro segmento">Outro segmento</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-slate-600">Mensagem</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="campo resize-none"
                  placeholder="Telefone para retorno, quantos caixas/usuários, que sistema usa hoje…"
                />
              </label>
              {estado === 'erro' && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  Não foi possível enviar agora. Tente de novo ou fale conosco pelo WhatsApp.
                </p>
              )}
              <button type="submit" disabled={estado === 'enviando'} className="btn-primario w-full py-3.5 disabled:opacity-60">
                <Send className="h-4 w-4" /> {estado === 'enviando' ? 'Enviando…' : 'Enviar mensagem'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
