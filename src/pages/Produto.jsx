import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, ExternalLink, MessageCircle } from 'lucide-react';
import Contact from '../components/Contact';
import { PRODUTOS, produtoPorSlug } from '../data/produtos';
import { IconeSolucao, linkWhatsapp, useSeo } from '../lib/site';
import NaoEncontrada from './NaoEncontrada';

export default function Produto() {
  const { slug } = useParams();
  const p = produtoPorSlug(slug);
  useSeo(
    p ? `${p.nome} — ${p.chamada} | P8 Technology` : 'Página não encontrada | P8 Technology',
    p ? `${p.resumo} Sistema desenvolvido pela P8 Technology, com implantação e suporte.` : ''
  );
  if (!p) return <NaoEncontrada />;
  const zap = linkWhatsapp(`Olá! Vim pelo site e quero agendar uma demonstração do ${p.nome}.`);
  const outros = PRODUTOS.filter((o) => o.slug !== p.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-tinta pt-28 pb-16 text-slate-300 sm:pt-36 sm:pb-20">
        <div className="container-site">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-400" aria-label="Você está em">
            <Link to="/" className="hover:text-white">Início</Link><span>/</span>
            <Link to="/#sistemas-p8" className="hover:text-white">Sistemas P8</Link><span>/</span>
            <span className="font-medium text-white">{p.nome}</span>
          </nav>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/15 text-sky-300"><IconeSolucao nome={p.icone} className="h-7 w-7" /></span>
                <span className="rotulo bg-white/10 text-sky-300">Desenvolvido pela P8</span>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">{p.nome}</h1>
              <p className="mt-2 text-xl font-semibold text-sky-300">{p.chamada}</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">{p.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={zap} target="_blank" rel="noopener noreferrer" className="btn-zap py-3.5"><MessageCircle className="h-5 w-5" /> Agendar demonstração</a>
                {p.acesso && (
                  <a href={p.acesso} target="_blank" rel="noopener noreferrer" className="btn border border-white/20 py-3.5 text-white hover:border-sky-300">
                    Já sou cliente <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
            {p.telas[0] && (
              <figure>
                <img src={p.telas[0].src} alt={p.telas[0].alt} width="1400" height="875" className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10" />
                <figcaption className="mt-3 text-sm text-slate-400">{p.telas[0].legenda} · dados fictícios de demonstração</figcaption>
              </figure>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <h2 className="titulo-secao">O que muda na sua operação</h2>
          <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${p.destaques.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {p.destaques.map((d) => (
              <div key={d.titulo} className="cartao p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-marca-clara text-marca-escura"><Check className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg font-bold">{d.titulo}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {p.telas.length > 1 && (
        <section className="border-y border-slate-200 bg-slate-50/70 py-16 sm:py-20">
          <div className="container-site grid items-start gap-8 md:grid-cols-[1.5fr_1fr]">
            {p.telas.slice(1).map((t) => (
              <figure key={t.alt}>
                <img src={t.src} alt={t.alt} loading="lazy" className="mx-auto max-h-[640px] w-auto rounded-2xl border border-slate-200 bg-white shadow-lg" />
                <figcaption className="mt-3 text-center text-sm text-slate-600">{t.legenda}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {p.modulos.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="container-site">
            <h2 className="titulo-secao">Tudo o que vem no sistema</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {p.modulos.map((m) => (
                <div key={m.titulo} className="cartao p-6">
                  <h3 className="text-base font-bold uppercase tracking-wider text-marca-escura">{m.titulo}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {m.itens.map((i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[15px] text-slate-600"><Check className="mt-0.5 h-4 w-4 shrink-0 text-marca" /> {i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-50/70 py-16">
        <div className="container-site">
          <h2 className="text-2xl font-extrabold">Outros sistemas da P8</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {outros.map((o) => (
              <Link key={o.slug} to={`/sistemas/${o.slug}`} className="cartao group flex items-center gap-4 p-5 transition-colors hover:border-marca/50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-marca-clara text-marca-escura"><IconeSolucao nome={o.icone} className="h-5 w-5" /></span>
                <span className="flex-1"><span className="block font-semibold text-tinta">{o.nome}</span><span className="block text-sm text-slate-600">{o.chamada}</span></span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact key={p.slug} segmentoInicial={`Interesse: ${p.nome}`} />
    </>
  );
}
