import { useEffect } from 'react';
import {
  Beef, Truck, Car, Activity, Stethoscope, Smile, Pill, Bed, Bike, Sofa,
  Shirt, TreePine, HardHat, Wrench, Glasses, PawPrint, ShoppingCart, Route, Forklift, Kanban, Landmark,
} from 'lucide-react';

// Contatos comerciais da P8 Technology — trocar aqui reflete no site todo.
export const CONTATO = {
  whatsapp: '5538999922756',
  telefone: '(38) 9 9992-2756',
  email: 'p8technology@outlook.com',
  instagram: 'p8technology',
  cidade: 'Sete Lagoas, MG',
  sistema: 'https://crm.p8technology.com.br',
};

// Botão "Área do cliente": entrada de cada sistema da P8 (o CRM Contab fica fora: o link vai direto ao cliente).
export const AREA_CLIENTE = [
  { nome: 'P8 Nexus', descricao: 'Locação e mão de obra', url: 'https://nexus.p8technology.com.br' },
  { nome: 'P8 CRM', descricao: 'Gestão comercial', url: 'https://crm.p8technology.com.br' },
  { nome: 'P8 Opus', descricao: 'Engenharia e automação', url: 'https://opus.p8technology.com.br' },
];

export const linkWhatsapp = (texto) =>
  `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(
    texto || 'Olá! Vim pelo site da P8 Technology e quero conhecer o sistema de gestão.'
  )}`;

const ICONES = {
  beef: Beef, truck: Truck, car: Car, activity: Activity, stethoscope: Stethoscope,
  smile: Smile, pill: Pill, bed: Bed, bike: Bike, sofa: Sofa, shirt: Shirt,
  tree: TreePine, hardhat: HardHat, wrench: Wrench, glasses: Glasses, paw: PawPrint,
  cart: ShoppingCart, route: Route, nexus: Forklift, crm: Kanban, contab: Landmark,
};

export function IconeSolucao({ nome, className = 'w-6 h-6' }) {
  const Icone = ICONES[nome] || ShoppingCart;
  return <Icone className={className} strokeWidth={1.75} aria-hidden="true" />;
}

// Título e descrição por página (o Google e o WhatsApp leem isso).
export function useSeo(titulo, descricao) {
  useEffect(() => {
    document.title = titulo;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && descricao) meta.setAttribute('content', descricao);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://p8technology.com.br${window.location.pathname}`);
  }, [titulo, descricao]);
}

export function rolarPara(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
