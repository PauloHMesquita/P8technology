import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, ChevronDown, ClipboardList, FileCheck2, GraduationCap, Handshake,
  Headset, MessageCircle, PackageCheck, ScanBarcode, Wallet,
} from 'lucide-react';
import Contact from '../components/Contact';
import { CATEGORIAS, SOLUCOES } from '../data/solucoes';
import { PRODUTOS } from '../data/produtos';
import { IconeSolucao, linkWhatsapp, rolarPara, useSeo } from '../lib/site';
import fotoFundador from '../assets/fundador.webp';
import logoLJ from '../assets/logo-lj-sistemas.png';

export default function Home() {
  useSeo(
    'P8 Technology | Representante Oficial LJ Sistemas em Sete Lagoas, MG',
    'Sistemas de gestão LJ Sistemas para 18 segmentos: caixa, estoque, financeiro e notas fiscais. Implantação, treinamento e suporte local da P8 Technology em Sete Lagoas e região.'
  );
  return (
    <>
      <Hero />
      <Beneficios />
      <Solucoes />
      <SistemasP8 />
      <ComoFunciona />
      <QuemSomos />
      <Duvidas />
      <Contact />
    </>
  );
}

/* ---------------- Topo ---------------- */
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="fundo-grade absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-marca/10 blur-3xl" aria-hidden="true" />

      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="rotulo surgir">Representante oficial LJ Sistemas</span>
          <h1 className="surgir-2 mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            O sistema de gestão feito para o <span className="text-marca">seu tipo de negócio</span>.
          </h1>
          <p className="surgir-3 mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Caixa, estoque, financeiro e notas fiscais em um só lugar — com a P8 cuidando da implantação, do treinamento da sua equipe e do suporte, aqui em Sete Lagoas.
          </p>
          <div className="surgir-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" className="btn-primario py-3.5">
              <MessageCircle className="h-5 w-5" /> Pedir uma demonstração
            </a>
            <button type="button" onClick={() => rolarPara('solucoes')} className="btn-claro py-3.5">
              Encontrar meu segmento <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <ul className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-sm">
            <li><strong className="block text-2xl font-extrabold text-tinta">18</strong>segmentos atendidos</li>
            <li><strong className="block text-2xl font-extrabold text-tinta">NF-e</strong>NFC-e, NFS-e e SPED</li>
            <li><strong className="block text-2xl font-extrabold text-tinta">Local</strong>suporte presencial</li>
          </ul>
        </div>
        <PainelIlustrativo />
      </div>
    </section>
  );
}

// Ilustração do sistema feita em código (sem print de tela de terceiros).
function PainelIlustrativo() {
  const barras = [42, 58, 49, 72, 64, 88, 79];
  return (
    <div className="surgir-3 relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="cartao relative z-10 p-5 shadow-[0_30px_80px_-30px_rgb(15_28_46/0.35)] sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Vendas de hoje</p>
            <p className="mt-1 text-3xl font-extrabold text-tinta">R$ 8.430,90</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">+12%</span>
        </div>
        <div className="mt-6 flex h-32 items-end gap-2.5">
          {barras.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md bg-marca/15" style={{ height: `${h}%` }}>
              <div className="h-full rounded-t-md bg-marca" style={{ opacity: i === barras.length - 1 ? 1 : 0.35 + i * 0.07 }} />
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
          {[
            ['NFC-e', '134 emitidas'],
            ['Estoque', '6 a repor'],
            ['A receber', 'R$ 3.210'],
          ].map(([t, v]) => (
            <div key={t} className="rounded-xl bg-slate-50 px-2 py-3">
              <p className="font-semibold text-tinta">{t}</p>
              <p className="mt-0.5 text-slate-600">{v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="cartao absolute -bottom-6 -left-4 z-20 hidden items-center gap-3 px-4 py-3 shadow-xl sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-5 w-5" /></span>
        <div className="text-sm"><p className="font-semibold text-tinta">Nota autorizada</p><p className="text-slate-600">enviada ao cliente</p></div>
      </div>
      <div className="absolute -right-3 -top-5 z-0 h-full w-full rounded-2xl bg-marca/10" />
    </div>
  );
}

/* ---------------- Benefícios ---------------- */
function Beneficios() {
  const itens = [
    { icone: ScanBarcode, titulo: 'Caixa que não trava a fila', texto: 'Código de barras, balança e ajuste de preço na hora da venda.' },
    { icone: PackageCheck, titulo: 'Estoque que bate', texto: 'Entradas por nota, sugestão de compras e curva ABC do que vende.' },
    { icone: FileCheck2, titulo: 'Nota fiscal sem dor de cabeça', texto: 'NF-e, NFC-e, NFS-e e arquivos do SPED gerados pelo sistema.' },
    { icone: Wallet, titulo: 'Financeiro claro', texto: 'Contas, boletos, fluxo de caixa e DRE para decidir com números.' },
  ];
  return (
    <section className="border-y border-slate-200 bg-slate-50/70 py-16 sm:py-20">
      <div className="container-site">
        <h2 className="titulo-secao max-w-2xl">Menos planilha e retrabalho. Mais controle do que entra e do que sai.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map(({ icone: Icone, titulo, texto }) => (
            <div key={titulo} className="cartao p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-marca-clara text-marca"><Icone className="h-6 w-6" /></span>
              <h3 className="mt-5 text-lg font-bold">{titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Soluções ---------------- */
function Solucoes() {
  const [categoria, setCategoria] = useState('todas');
  const lista = useMemo(
    () => (categoria === 'todas' ? SOLUCOES : SOLUCOES.filter((s) => s.categoria === categoria)),
    [categoria]
  );
  const chips = [{ id: 'todas', rotulo: 'Todos' }, ...CATEGORIAS];

  return (
    <section id="solucoes" className="py-20 sm:py-24">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="rotulo">Nossas soluções</span>
            <h2 className="titulo-secao mt-4">Escolha o seu segmento e veja o que o sistema faz por você</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar por área">
            {chips.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={categoria === c.id}
                onClick={() => setCategoria(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  categoria === c.id ? 'bg-tinta text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.rotulo}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((s) => (
            <Link
              key={s.slug}
              to={`/solucoes/${s.slug}`}
              className="cartao group flex flex-col p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-marca/50 hover:shadow-[0_18px_40px_-20px_rgb(10_143_230/0.45)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-marca-clara text-marca transition-colors group-hover:bg-marca group-hover:text-white">
                  <IconeSolucao nome={s.icone} />
                </span>
                <h3 className="text-lg font-bold leading-snug">{s.nome}</h3>
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">{s.resumo}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-marca-escura">
                Ver solução <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-600">
          Seu segmento não está na lista?{' '}
          <a href={linkWhatsapp('Olá! Quero saber se o sistema atende o meu segmento.')} target="_blank" rel="noopener noreferrer" className="font-semibold text-marca-escura underline-offset-2 hover:underline">
            Fale com a gente
          </a>{' '}
          — avaliamos o seu caso.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Sistemas próprios da P8 ---------------- */
function SistemasP8() {
  return (
    <section id="sistemas-p8" className="bg-tinta py-20 text-slate-300 sm:py-24">
      <div className="container-site">
        <div className="max-w-2xl">
          <span className="rotulo bg-white/10 text-sky-300">Sistemas P8</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">Plataformas desenvolvidas pela P8</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">Tecnologia própria para operações que pedem mais do que um sistema de prateleira, com implantação e suporte feitos pela nossa equipe.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PRODUTOS.map((p) => (
            <Link key={p.slug} to={`/sistemas/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-sky-400/60 hover:bg-white/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300"><IconeSolucao nome={p.icone} /></span>
              <h3 className="mt-5 text-xl font-bold text-white">{p.nome}</h3>
              <p className="mt-1 text-sm font-semibold text-sky-300">{p.chamada}</p>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-400">{p.resumo}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Conhecer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Como funciona ---------------- */
function ComoFunciona() {
  const passos = [
    { icone: ClipboardList, titulo: 'Diagnóstico', texto: 'Conhecemos sua rotina, seus pontos de venda e o que precisa melhorar.' },
    { icone: Handshake, titulo: 'Implantação', texto: 'Configuramos o sistema, cadastros e emissão fiscal para o seu segmento.' },
    { icone: GraduationCap, titulo: 'Treinamento', texto: 'Sua equipe aprende no próprio sistema, com o seu dia a dia como exemplo.' },
    { icone: Headset, titulo: 'Suporte local', texto: 'Atendimento próximo, por WhatsApp ou presencial, quando precisar.' },
  ];
  return (
    <section id="como-funciona" className="bg-slate-50/70 py-20 sm:py-24">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rotulo">Como funciona</span>
          <h2 className="titulo-secao mt-4">Do primeiro contato ao sistema rodando, a P8 está junto</h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {passos.map(({ icone: Icone, titulo, texto }, i) => (
            <li key={titulo} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tinta text-white"><Icone className="h-6 w-6" /></span>
                <span className="text-sm font-bold text-marca-escura">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Quem somos ---------------- */
function QuemSomos() {
  const pontos = [
    'Representante oficial da LJ Sistemas na região',
    'Sistemas especializados por tipo de negócio',
    'Atendimento direto com quem implanta, sem central distante',
  ];
  return (
    <section id="quem-somos" className="overflow-hidden py-20 sm:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 -z-10 rotate-3 rounded-3xl bg-marca/10" aria-hidden="true" />
          <img
            src={fotoFundador}
            alt="Paulo H. Mesquita, fundador da P8 Technology"
            width="427"
            height="640"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-xl"
          />
          <div className="cartao absolute -bottom-5 left-5 right-5 px-5 py-3 shadow-lg">
            <p className="font-bold text-tinta">Paulo H. Mesquita</p>
            <p className="text-sm text-slate-600">Fundador da P8 Technology</p>
          </div>
        </div>

        <div>
          <span className="rotulo">Quem somos</span>
          <h2 className="titulo-secao mt-4">Tecnologia de quem conhece o balcão</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A P8 Technology leva sistemas de gestão especializados para o comércio e os serviços de Sete Lagoas e região. Escolhemos a solução certa para o seu segmento, colocamos para funcionar e ficamos por perto depois da implantação.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Trabalhamos com a LJ Sistemas, empresa dedicada ao desenvolvimento, implantação, treinamento e suporte de sistemas de gestão — e somos o seu contato local.
          </p>
          <ul className="mt-7 space-y-3">
            {pontos.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] font-medium text-tinta">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-marca text-white"><Check className="h-3.5 w-3.5" /></span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col items-start gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:gap-7 sm:p-6">
            <img src={logoLJ} alt="LJ Sistemas" width="200" height="90" loading="lazy" className="h-16 w-auto sm:h-20" />
            <div className="sm:border-l sm:border-slate-200 sm:pl-7">
              <p className="text-xs font-bold uppercase tracking-wider text-marca-escura">Parceria oficial</p>
              <p className="mt-1 text-lg font-bold leading-snug text-tinta">Representante LJ Sistemas</p>
              <p className="text-[15px] text-slate-600">Sete Lagoas e região</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Dúvidas ---------------- */
function Duvidas() {
  const perguntas = [
    ['O sistema emite nota fiscal?', 'Sim. Conforme o segmento, emite NF-e, NFC-e e NFS-e, e gera SPED Fiscal, SPED Contribuições e Sintegra. Transportadoras contam com CT-e, CT-e OS e MDF-e.'],
    ['Quanto custa?', 'O valor depende do segmento, do número de usuários e dos módulos de que você precisa. Fazemos uma demonstração e uma proposta sem compromisso.'],
    ['Quem faz a implantação e o treinamento?', 'A própria P8. Configuramos o sistema para a sua operação e treinamos a equipe usando a rotina da sua empresa.'],
    ['E depois que o sistema estiver rodando?', 'Você continua falando com a P8. O suporte é local, pelo WhatsApp ou presencialmente quando necessário.'],
    ['Funciona com balança e leitor de código de barras?', 'Sim. Os sistemas trabalham com leitores de código de barras e impressoras, e os segmentos que vendem por peso têm integração com balanças.'],
    ['Atendem fora de Sete Lagoas?', 'Nossa base é Sete Lagoas e atendemos a região. Fale com a gente para confirmar o atendimento na sua cidade.'],
  ];
  return (
    <section id="duvidas" className="bg-slate-50/70 py-20 sm:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="rotulo">Dúvidas frequentes</span>
          <h2 className="titulo-secao mt-4">Perguntas que todo dono de negócio faz</h2>
          <p className="mt-4 text-slate-600">Ficou alguma? Chame no WhatsApp e respondemos rapidinho.</p>
        </div>
        <div className="space-y-3">
          {perguntas.map(([p, r]) => (
            <details key={p} className="cartao group px-5 py-4 open:shadow-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[16px] font-semibold text-tinta">
                {p}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
