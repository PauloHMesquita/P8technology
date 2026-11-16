// Sistemas desenvolvidos pela própria P8 Technology (diferentes das soluções
// LJ Sistemas, que a P8 revende). Para incluir um produto, copie um item.
import nexusPainel from '../assets/nexus-painel.webp';
import nexusMedicao from '../assets/nexus-medicao.webp';
import nexusPonto from '../assets/nexus-ponto-celular.webp';

export const PRODUTOS = [
  {
    slug: 'p8-nexus',
    nome: 'P8 Nexus',
    icone: 'nexus',
    chamada: 'Locação de equipamentos e mão de obra terceirizada',
    resumo: 'Do contrato à nota fiscal: horímetro, SST, RDO, ponto, medição e faturamento separado em recibo de locação e NFS-e.',
    acesso: 'https://nexus.p8technology.com.br',
    intro:
      'Feito para empresas que alugam máquinas e, ao mesmo tempo, colocam profissionais dentro dos clientes. O que acontece em campo vira medição, e a medição vira documento fiscal, sem redigitar nada.',
    destaques: [
      { titulo: 'Contratos híbridos', texto: 'Equipamentos (franquia de horímetro, diária ou mensal) e postos de trabalho no mesmo contrato.' },
      { titulo: 'Trava de SST', texto: 'ASO ou NR vencida bloqueia a alocação e o lançamento no RDO automaticamente.' },
      { titulo: 'Medição automática', texto: 'Franquia proporcional, horas excedentes, abono por quebra, fretes e glosa por falta calculados.' },
      { titulo: 'Faturamento separado', texto: 'Recibo de locação sem ISS e NFS-e nacional da mão de obra, com o certificado da sua empresa.' },
    ],
    modulos: [
      { titulo: 'Comercial', itens: ['Clientes e obras', 'Contratos com vigência e reajuste', 'Itens de locação e postos de serviço'] },
      { titulo: 'Frota', itens: ['Horímetro com leituras validadas', 'Preventivas por horas e por data', 'Bloqueio técnico de equipamento', 'Checklist de entrega e devolução'] },
      { titulo: 'Pessoas e campo', itens: ['ASO e NRs por profissional', 'Quadro de alocação', 'RDO diário assinado pelo cliente', 'Ponto pelo celular com espelho mensal'] },
      { titulo: 'Faturamento', itens: ['Medição com memória de cálculo', 'Recibo de locação numerado', 'NFS-e pelo Sistema Nacional', 'Campos de IBS e CBS da reforma tributária'] },
      { titulo: 'Gestão', itens: ['Permissões por perfil', 'Auditoria de todas as alterações', '15 relatórios em Excel, CSV ou PDF', 'Importação por planilha'] },
    ],
    telas: [
      { src: nexusPainel, alt: 'Painel inicial do P8 Nexus', legenda: 'Painel inicial com receita contratada, frota em campo e vencimentos' },
      { src: nexusMedicao, alt: 'Medição mensal com memória de cálculo', legenda: 'Medição com franquia, excedentes, abonos e glosas' },
      { src: nexusPonto, alt: 'Registro de ponto pelo celular', legenda: 'Ponto pelo celular, no posto de trabalho' },
    ],
  },
  {
    slug: 'p8-crm',
    nome: 'P8 CRM',
    icone: 'crm',
    chamada: 'Gestão comercial e prospecção',
    resumo: 'Funil de vendas em quadro, histórico de cada cliente, lembretes de retorno e prospecção de novas empresas.',
    acesso: 'https://crm.p8technology.com.br',
    intro:
      'Um CRM pensado para equipes de vendas de serviços e software: cada oportunidade em um quadro visual, todo contato registrado e nenhum retorno esquecido.',
    destaques: [
      { titulo: 'Funil em quadro', texto: 'Da prospecção ao fechamento, arrastando cada negociação de etapa.' },
      { titulo: 'Histórico completo', texto: 'Ligações, e-mails, WhatsApp e notas em uma linha do tempo por cliente.' },
      { titulo: 'Lembretes de retorno', texto: 'Próximo contato agendado, com aviso para o vendedor.' },
      { titulo: 'Prospecção', texto: 'Busca de novas empresas por atividade (CNAE) e rotas de visita no mapa.' },
    ],
    modulos: [
      { titulo: 'Vendas', itens: ['Quadro Kanban do funil', 'Valores de mensalidade e implantação por negociação', 'Painel com indicadores'] },
      { titulo: 'Relacionamento', itens: ['Linha do tempo de atividades', 'Atalhos para ligar, e-mail e WhatsApp', 'Endereço pelo CEP ou CNPJ'] },
      { titulo: 'Prospecção', itens: ['Captação por CNAE, cidade e estado', 'Rotas de visita em mapa', 'Distribuição de leads para vendedores'] },
      { titulo: 'Gestão', itens: ['Várias unidades na mesma conta', 'Permissões por papel', 'Registro de alterações'] },
    ],
    telas: [],
  },
  {
    slug: 'crm-contab',
    nome: 'CRM Contab',
    icone: 'contab',
    chamada: 'Para sindicatos e associações',
    resumo: 'Captação de novos associados e gestão de associados, contribuições e anuidades.',
    acesso: null,
    intro:
      'Uma versão do CRM da P8 preparada para entidades de classe: atrair novos associados e acompanhar quem já faz parte, com as contribuições em dia.',
    destaques: [
      { titulo: 'Captação de associados', texto: 'Funil para prospectar escritórios e profissionais da categoria.' },
      { titulo: 'Gestão de associados', texto: 'Cadastro e histórico de relacionamento de cada associado.' },
      { titulo: 'Contribuições e anuidades', texto: 'Acompanhamento do que foi pago e do que está em aberto.' },
    ],
    modulos: [],
    telas: [],
  },
];

export const produtoPorSlug = (slug) => PRODUTOS.find((p) => p.slug === slug);
