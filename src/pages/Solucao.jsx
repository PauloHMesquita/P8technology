import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, MessageCircle, Plug } from 'lucide-react';
import Contact from '../components/Contact';
import { CATEGORIAS, SOLUCOES, solucaoPorSlug } from '../data/solucoes';
import { IconeSolucao, linkWhatsapp, useSeo } from '../lib/site';
import NaoEncontrada from './NaoEncontrada';

export default function Solucao() {
  const { slug } = useParams();
  const s = solucaoPorSlug(slug);
  useSeo(
    s ? `Sistema para ${s.nome} | P8 Technology — Sete Lagoas, MG` : 'Página não encontrada | P8 Technology',
    s ? `${s.resumo} Implantação, treinamento e suporte local da P8 Technology, representante oficial LJ Sistemas.` : ''
  );
  if (!s) return <NaoEncontrada />;

  const categoria = CATEGORIAS.find((c) => c.id === s.categoria);
  const outras = SOLUCOES.filter((o) => o.categoria === s.categoria && o.slug !== s.slug).slice(0, 3);
  const zap = linkWhatsapp(`Olá! Vim pelo site da P8 Technology e quero conhecer o sistema para ${s.nome}.`);

  return (
    <>
      {/* Topo da solução */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div className="fundo-grade absolute inset-0 -z-10" aria-hidden="true" />
        <div className="container-site">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500" aria-label="Você está em">
            <Link to="/" className="hover:text-marca">Início</Link>
            <span>/</span>
            <Link to="/#solucoes" className="hover:text-marca">Soluções</Link>
            <span>/</span>
            <span className="font-medium text-tinta">{s.nome}</span>
          </nav>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-marca text-white shadow-lg shadow-marca/30">
                  <IconeSolucao nome={s.icone} className="h-7 w-7" />
                </span>
                <span className="rotulo">{categoria?.rotulo}</span>
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">Sistema de gestão para {s.nome}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{s.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={zap} target="_blank" rel="noopener noreferrer" className="btn-primario py-3.5">
                  <MessageCircle className="h-5 w-5" /> Quero ver funcionando
                </a>
                <a href="#modulos" className="btn-claro py-3.5">Ver tudo o que inclui</a>
              </div>
            </div>

            <aside className="cartao p-6 shadow-[0_24px_60px_-30px_rgb(15_28_46/0.35)]">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Com a P8 você tem</p>
              <ul className="mt-4 space-y-3 text-[15px] text-tinta">
                {['Implantação configurada para o seu negócio', 'Treinamento da equipe', 'Suporte local em Sete Lagoas e região', 'Sistema oficial LJ Sistemas'].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-marca" /> {t}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Destaques do segmento */}
      <section className="border-y border-slate-200 bg-slate-50/70 py-16 sm:py-20">
        <div className="container-site">
          <h2 className="titulo-secao">Feito para a rotina de {s.nome.toLowerCase()}</h2>
          <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${s.destaques.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {s.destaques.map((d) => (
              <div key={d.titulo} className="cartao p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-marca-clara text-marca"><Check className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg font-bold">{d.titulo}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-500">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section id="modulos" className="py-16 sm:py-20">
        <div className="container-site">
          <h2 className="titulo-secao">Tudo o que vem no sistema</h2>
          <p className="mt-3 max-w-2xl text-slate-500">Os módulos trabalham integrados: a venda baixa o estoque, gera a nota e alimenta o financeiro.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {s.modulos.map((m) => (
              <div key={m.titulo} className="cartao p-6">
                <h3 className="text-base font-bold uppercase tracking-wider text-marca-escura">{m.titulo}</h3>
                <ul className="mt-4 space-y-2.5">
                  {m.itens.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-marca" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {s.perifericos && (
              <div className="cartao border-dashed bg-slate-50/70 p-6">
                <h3 className="flex items-center gap-2 text-base font-bold uppercase tracking-wider text-marca-escura">
                  <Plug className="h-4 w-4" /> Equipamentos compatíveis
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.perifericos.map((p) => (
                    <span key={p} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">{p}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Outras soluções */}
      {outras.length > 0 && (
        <section className="bg-slate-50/70 py-16">
          <div className="container-site">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-extrabold">Outras soluções em {categoria?.rotulo.toLowerCase()}</h2>
              <Link to="/#solucoes" className="hidden items-center gap-1.5 text-sm font-semibold text-marca sm:inline-flex">
                <ArrowLeft className="h-4 w-4" /> Todas as soluções
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {outras.map((o) => (
                <Link key={o.slug} to={`/solucoes/${o.slug}`} className="cartao group flex items-center gap-4 p-5 transition-colors hover:border-marca/50">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-marca-clara text-marca"><IconeSolucao nome={o.icone} className="h-5 w-5" /></span>
                  <span className="flex-1 font-semibold text-tinta">{o.nome}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-marca" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Contact key={s.slug} segmentoInicial={`Interesse: ${s.nome}`} />
    </>
  );
}
