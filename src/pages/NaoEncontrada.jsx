import { Link } from 'react-router-dom';

export default function NaoEncontrada() {
  return (
    <section className="container-site flex min-h-[70vh] flex-col items-center justify-center pt-24 text-center">
      <p className="text-6xl font-extrabold text-marca">404</p>
      <h1 className="mt-4 text-2xl font-bold">Página não encontrada</h1>
      <p className="mt-2 text-slate-500">O endereço pode ter mudado. Veja as nossas soluções na página inicial.</p>
      <Link to="/" className="btn-primario mt-8">Voltar ao início</Link>
    </section>
  );
}
