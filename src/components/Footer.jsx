import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo-p8-site.webp';
import { SOLUCOES } from '../data/solucoes';
import { CONTATO, linkWhatsapp } from '../lib/site';

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.1fr_2fr_1fr]">
        <div>
          <img src={logo} alt="P8 Technology" width="112" height="50" className="h-11 w-auto" loading="lazy" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            Representante oficial LJ Sistemas. Sistemas de gestão por segmento, com implantação, treinamento e suporte local.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-tinta">Soluções</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
            {SOLUCOES.map((s) => (
              <li key={s.slug}>
                <Link to={`/solucoes/${s.slug}`} className="text-slate-500 hover:text-marca">
                  {s.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-tinta">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-500">
            <li>
              <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-marca">
                <Phone className="h-4 w-4" /> {CONTATO.telefone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTATO.email}`} className="flex items-center gap-2 break-all hover:text-marca">
                <Mail className="h-4 w-4 shrink-0" /> {CONTATO.email}
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${CONTATO.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-marca">
                <Instagram className="h-4 w-4" /> @{CONTATO.instagram}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {CONTATO.cidade}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-400">
        © {ano} P8 Technology. LJ Sistemas é marca de seu respectivo titular.
      </div>
    </footer>
  );
}
