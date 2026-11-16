// Catálogo de soluções que a P8 Technology implanta como representante
// oficial da LJ Sistemas. As funcionalidades foram conferidas nas páginas de
// produto de ljsistemas.com.br/produtos (nov/2026); os textos são da P8.
//
// Para incluir um segmento novo: copie um item, troque slug/nome/textos e
// liste o que for específico em "destaques". Os blocos comuns (financeiro,
// fiscal, gestão) são reaproveitados abaixo.

// ---------- blocos reaproveitados ----------
const FINANCEIRO = {
  titulo: 'Financeiro',
  itens: [
    'Contas a pagar e a receber',
    'Antecipação de recebíveis (cartão, cheques e títulos)',
    'Emissão de boletos',
    'Controle de caixa, bancos e cheques',
  ],
};

const GESTAO = {
  titulo: 'Gestão e resultado',
  itens: [
    'Receitas e despesas por centro de custo',
    'Fluxo de caixa previsto x realizado',
    'DRE — demonstrativo de resultado',
  ],
};

const fiscalComercio = (extras = []) => ({
  titulo: 'Fiscal',
  itens: [
    ['NF-e', 'NFC-e', ...extras].join(', ').replace(/, ([^,]*)$/, ' e $1'),
    'SPED Fiscal, SPED Contribuições e Sintegra',
    'Livro contábil',
  ],
});

const FISCAL_SERVICOS = {
  titulo: 'Fiscal',
  itens: ['NFS-e e NF-e', 'Controle de notas de entrada'],
};

const VENDAS = {
  titulo: 'Vendas e caixa',
  itens: [
    'PDV / frente de caixa',
    'Produto pelo código de barras ou código interno',
    'Alteração de preço durante a venda, sem travar o atendimento',
    'Orçamentos e controle de vendas',
    'Comissão por produto, departamento ou vendedor',
    'Impressão de etiquetas',
  ],
};

const ESTOQUE = {
  titulo: 'Estoque e compras',
  itens: [
    'Controle de estoque',
    'Sugestão de compras',
    'Controle de notas de entrada',
    'Relatórios e gráficos de vendas',
    'Curva ABC dos produtos',
  ],
};

const CLINICA = {
  titulo: 'Atendimento clínico',
  itens: [
    'Cadastro de pacientes',
    'Agenda por profissional',
    'Anamnese e histórico do paciente',
    'Pedidos de exame e receituário',
    'Procedimentos realizados e pendentes por paciente',
  ],
};

const CONVENIOS = {
  titulo: 'Convênios e repasses',
  itens: [
    'Atendimentos e procedimentos por convênio',
    'Controle de repasse dos convênios',
    'Repasse e comissão por profissional',
  ],
};

const PERIFERICOS_BASICOS = ['Leitor de código de barras', 'Impressoras'];

// ---------- categorias (filtro da página inicial) ----------
export const CATEGORIAS = [
  { id: 'comercio', rotulo: 'Comércio e varejo' },
  { id: 'saude', rotulo: 'Saúde' },
  { id: 'servicos', rotulo: 'Oficinas e serviços' },
  { id: 'logistica', rotulo: 'Hotelaria e transporte' },
];

// ---------- soluções ----------
export const SOLUCOES = [
  {
    slug: 'acougues-sacoloes',
    nome: 'Açougues e Sacolões',
    icone: 'beef',
    categoria: 'comercio',
    resumo: 'Balança integrada ao caixa, validade sob controle e venda rápida no balcão.',
    intro:
      'No açougue e no sacolão, o produto é vendido no peso e o movimento vem em picos. O sistema conversa com a balança, identifica o item pelo código e deixa o operador ajustar preço na hora, sem parar a fila.',
    destaques: [
      { titulo: 'Integração com balanças', texto: 'Peso e preço vão direto para a venda, sem digitação.' },
      { titulo: 'Controle de validade', texto: 'Saiba o que precisa sair primeiro e reduza perdas.' },
      { titulo: 'Preço ajustado no balcão', texto: 'Altere o valor durante a venda sem travar o atendimento.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(), GESTAO],
    perifericos: ['Balanças', ...PERIFERICOS_BASICOS],
  },
  {
    slug: 'atacadistas-distribuidoras',
    nome: 'Atacadistas e Distribuidoras',
    icone: 'truck',
    categoria: 'comercio',
    resumo: 'Tabelas de preço por cliente, romaneio de carga e vendedor externo no celular.',
    intro:
      'Quem vende no atacado trabalha com volume, prazo e preço negociado. O sistema organiza tabelas diferentes por cliente, produto ou forma de pagamento, monta o romaneio da carga e leva o pedido do vendedor externo direto para o escritório.',
    destaques: [
      { titulo: 'Tabelas de preço diferenciadas', texto: 'Por cliente, por produto ou por forma de pagamento.' },
      { titulo: 'Romaneio de carga', texto: 'Separação e conferência do que sai em cada entrega.' },
      { titulo: 'App de vendas externas', texto: 'Vendedor tira o pedido no celular com o Sig Mobile Vendas.' },
      { titulo: 'Controle de validade', texto: 'Giro do estoque com atenção ao vencimento.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(), GESTAO],
    perifericos: [...PERIFERICOS_BASICOS, 'Celular do vendedor (app)'],
  },
  {
    slug: 'auto-pecas',
    nome: 'Auto Peças',
    icone: 'car',
    categoria: 'comercio',
    resumo: 'Peças encontradas pela aplicação no veículo e orçamento rápido no balcão.',
    intro:
      'Na auto peças, o cliente chega com o carro, não com o código da peça. O sistema relaciona cada produto às aplicações veiculares, agiliza o orçamento no balcão e mantém o estoque e as comissões em ordem.',
    destaques: [
      { titulo: 'Produto por aplicação veicular', texto: 'Encontre a peça certa a partir do veículo.' },
      { titulo: 'Orçamentos ágeis', texto: 'Monte, envie e converta orçamentos em venda.' },
      { titulo: 'Comissão de vendedores', texto: 'Por produto, departamento ou vendedor.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(), GESTAO],
    perifericos: PERIFERICOS_BASICOS,
  },
  {
    slug: 'clinicas-fisioterapia',
    nome: 'Clínicas de Fisioterapia',
    icone: 'activity',
    categoria: 'saude',
    resumo: 'Agenda por profissional, sessões por convênio e repasses calculados.',
    intro:
      'Fisioterapia é feita de sessões recorrentes, convênios e vários profissionais na mesma agenda. O sistema acompanha cada paciente do cadastro ao procedimento realizado e calcula repasses e comissões sem planilha paralela.',
    destaques: [
      { titulo: 'Agenda por profissional', texto: 'Horários de cada fisioterapeuta em um só lugar.' },
      { titulo: 'Sessões realizadas e pendentes', texto: 'Acompanhamento do tratamento de cada paciente.' },
      { titulo: 'Repasse e comissão', texto: 'Valores de convênio e de cada profissional calculados.' },
    ],
    modulos: [CLINICA, CONVENIOS, FINANCEIRO, FISCAL_SERVICOS, GESTAO],
  },
  {
    slug: 'clinicas-medicas',
    nome: 'Clínicas Médicas',
    icone: 'stethoscope',
    categoria: 'saude',
    resumo: 'Prontuário com anamnese, convênios e financeiro da clínica integrados.',
    intro:
      'A clínica precisa de uma recepção organizada, histórico confiável do paciente e um financeiro que feche com os convênios. O sistema une agenda, anamnese, pedidos de exame, receituário e repasses em uma única base.',
    destaques: [
      { titulo: 'Anamnese e histórico', texto: 'Atendimentos anteriores à mão em cada consulta.' },
      { titulo: 'Exames e receituário', texto: 'Pedidos e prescrições emitidos pelo sistema.' },
      { titulo: 'Convênios sob controle', texto: 'Procedimentos e repasses por convênio e por médico.' },
    ],
    modulos: [CLINICA, CONVENIOS, FINANCEIRO, FISCAL_SERVICOS, GESTAO],
  },
  {
    slug: 'clinicas-odontologicas',
    nome: 'Clínicas Odontológicas',
    icone: 'smile',
    categoria: 'saude',
    resumo: 'Tratamentos planejados e realizados, convênios e comissão de dentistas.',
    intro:
      'No consultório odontológico, cada paciente tem um plano de tratamento que se estende por várias consultas. O sistema registra o que foi planejado e o que já foi feito, controla convênios e calcula a parte de cada dentista.',
    destaques: [
      { titulo: 'Procedimentos previstos e realizados', texto: 'O plano de tratamento acompanhado consulta a consulta.' },
      { titulo: 'Agenda por dentista', texto: 'Cada profissional com seus horários.' },
      { titulo: 'Comissão por profissional', texto: 'Repasse calculado a partir dos atendimentos.' },
    ],
    modulos: [CLINICA, CONVENIOS, FINANCEIRO, FISCAL_SERVICOS, GESTAO],
  },
  {
    slug: 'farmacias',
    nome: 'Farmácias',
    icone: 'pill',
    categoria: 'comercio',
    resumo: 'SNGPC, Farmácia Popular, PBM, lote e validade em um só sistema.',
    intro:
      'Farmácia tem regra própria: medicamento controlado, lote, validade, programas do governo e convênios com laboratórios. O sistema reúne essas exigências no mesmo caixa que vende perfumaria e higiene.',
    destaques: [
      { titulo: 'SNGPC e controlados', texto: 'Escrituração dos medicamentos controlados.' },
      { titulo: 'Farmácia Popular e PBM', texto: 'Vendas dos programas e convênios de laboratório.' },
      { titulo: 'Lote e validade', texto: 'Rastreio por lote e alerta de vencimento.' },
      { titulo: 'Tabela PMC', texto: 'Preço máximo ao consumidor dos medicamentos.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(), GESTAO],
    perifericos: PERIFERICOS_BASICOS,
  },
  {
    slug: 'hoteis',
    nome: 'Hotéis e Pousadas',
    icone: 'bed',
    categoria: 'logistica',
    resumo: 'Reservas, check-in e check-out, consumo do hóspede e notas fiscais.',
    intro:
      'Na hotelaria, a recepção precisa ver a ocupação em tempo real e fechar a conta do hóspede sem surpresas. O sistema controla reservas, tarifas, entrada e saída, além de produtos e serviços consumidos durante a estadia.',
    destaques: [
      { titulo: 'Painel da situação atual', texto: 'Quartos ocupados, livres e reservados em uma tela.' },
      { titulo: 'Reservas e tarifas', texto: 'Controle de reservas e ajuste de diárias.' },
      { titulo: 'Check-in e check-out', texto: 'Conta do hóspede fechada com consumo e serviços.' },
    ],
    modulos: [
      { titulo: 'Hospedagem', itens: ['Check-in e check-out', 'Controle de reservas', 'Alteração de tarifas', 'Painel de ocupação'] },
      { titulo: 'Consumo e estoque', itens: ['Venda de produtos ao hóspede', 'Controle de serviços', 'Controle de estoque', 'Controle de notas de entrada'] },
      FINANCEIRO,
      { titulo: 'Fiscal', itens: ['NF-e, NFC-e e NFS-e'] },
      GESTAO,
    ],
  },
  {
    slug: 'loja-de-bicicletas',
    nome: 'Lojas de Bicicletas',
    icone: 'bike',
    categoria: 'comercio',
    resumo: 'Venda de peças e bikes junto com a oficina, com ordem de serviço no celular.',
    intro:
      'A loja de bicicletas vende e também conserta. O sistema junta as duas pontas: balcão com estoque e etiquetas, oficina com ordem de serviço pelo celular, histórico de cada bike e comissão de quem executou o serviço.',
    destaques: [
      { titulo: 'Ordem de serviço no celular', texto: 'Mecânico registra o serviço pelo app Sig Mobile.' },
      { titulo: 'Histórico de serviços', texto: 'Tudo o que já foi feito em cada bicicleta.' },
      { titulo: 'Composição de produtos', texto: 'Monte kits e bikes a partir das peças em estoque.' },
      { titulo: 'Comissão por profissional', texto: 'Venda e serviço com comissões separadas.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(['NFS-e']), GESTAO],
    perifericos: [...PERIFERICOS_BASICOS, 'Celular (app de OS)'],
  },
  {
    slug: 'moveis-eletrodomesticos',
    nome: 'Móveis e Eletrodomésticos',
    icone: 'sofa',
    categoria: 'comercio',
    resumo: 'Orçamento, venda parcelada, comissão de vendedores e notas de produto e serviço.',
    intro:
      'Venda de móveis e eletro é consultiva e costuma envolver orçamento, parcelamento e, às vezes, montagem. O sistema acompanha o orçamento até a venda, organiza o crediário e emite as notas de produto e de serviço.',
    destaques: [
      { titulo: 'Orçamento até a venda', texto: 'Negociação registrada e convertida em pedido.' },
      { titulo: 'Recebíveis organizados', texto: 'Boletos, cartões e antecipações no financeiro.' },
      { titulo: 'Produto e serviço', texto: 'NF-e, NFC-e e NFS-e no mesmo sistema.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(['NFS-e']), GESTAO],
    perifericos: PERIFERICOS_BASICOS,
  },
  {
    slug: 'roupas-calcados',
    nome: 'Roupas e Calçados',
    icone: 'shirt',
    categoria: 'comercio',
    resumo: 'Estoque por grade de tamanho e cor, etiquetas e controle de entregas.',
    intro:
      'Em moda, uma peça vira dezenas de itens quando entram tamanho e cor. O sistema controla o estoque por grade, imprime etiquetas, acompanha as entregas e mostra o que mais vende para orientar a próxima compra.',
    destaques: [
      { titulo: 'Estoque por grade', texto: 'Tamanho e cor controlados item a item.' },
      { titulo: 'Controle de entregas', texto: 'Acompanhe o que foi vendido e ainda vai sair.' },
      { titulo: 'Curva ABC', texto: 'Descubra o que gira e o que está parado.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(), GESTAO],
    perifericos: PERIFERICOS_BASICOS,
  },
  {
    slug: 'madeireiras',
    nome: 'Madeireiras',
    icone: 'tree',
    categoria: 'comercio',
    resumo: 'Venda por bitola, orçamento de obra e estoque de madeira organizado.',
    intro:
      'Madeireira vende por medida e trabalha muito com orçamento. O sistema permite vender por bitola, controla o estoque e mantém o fiscal e o financeiro em dia, sem atrasar o balcão.',
    destaques: [
      { titulo: 'Venda por bitola', texto: 'Itens vendidos conforme a medida da peça.' },
      { titulo: 'Orçamentos', texto: 'Monte o orçamento da obra e converta em venda.' },
      { titulo: 'Sugestão de compras', texto: 'Reposição baseada no que realmente sai.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(), GESTAO],
    perifericos: PERIFERICOS_BASICOS,
  },
  {
    slug: 'material-de-construcao',
    nome: 'Material de Construção',
    icone: 'hardhat',
    categoria: 'comercio',
    resumo: 'Milhares de itens, orçamentos de obra e controle de entregas.',
    intro:
      'Loja de material de construção tem mix enorme, orçamento grande e entrega marcada. O sistema localiza o item rápido, acompanha o orçamento até a entrega e mostra quais produtos dão resultado.',
    destaques: [
      { titulo: 'Orçamento, venda e entrega', texto: 'O pedido acompanhado até chegar na obra.' },
      { titulo: 'Busca rápida de produtos', texto: 'Código de barras ou código interno.' },
      { titulo: 'Comissões', texto: 'Por produto, departamento ou vendedor.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(), GESTAO],
    perifericos: PERIFERICOS_BASICOS,
  },
  {
    slug: 'oficinas-mecanicas',
    nome: 'Oficinas Mecânicas',
    icone: 'wrench',
    categoria: 'servicos',
    resumo: 'Ordem de serviço no celular, histórico do veículo e comissão por mecânico.',
    intro:
      'Na oficina, peça e mão de obra andam juntas na mesma ordem de serviço. O sistema registra a OS até pelo celular, guarda o histórico de manutenção de cada veículo e calcula a comissão de cada mecânico.',
    destaques: [
      { titulo: 'Ordem de serviço', texto: 'Aberta no balcão ou no celular com o app Sig Mobile.' },
      { titulo: 'Histórico de manutenção', texto: 'Tudo o que já foi feito em cada veículo.' },
      { titulo: 'Comissão por mecânico', texto: 'Serviços e vendas com comissões separadas.' },
      { titulo: 'Peças e serviços na mesma nota', texto: 'NF-e, NFC-e e NFS-e.' },
    ],
    modulos: [
      { titulo: 'Oficina', itens: ['Ordens de serviço', 'App de OS para celular (Sig Mobile)', 'Histórico de manutenção', 'Relatórios de OS', 'Comissão por profissional e por mecânico'] },
      { titulo: 'Peças e vendas', itens: ['Controle de estoque de peças', 'Produto pelo código de barras ou interno', 'Alteração de preço durante a venda', 'Impressão de etiquetas', 'Sugestão de compras e notas de entrada'] },
      FINANCEIRO,
      fiscalComercio(['NFS-e']),
      GESTAO,
    ],
    perifericos: [...PERIFERICOS_BASICOS, 'Celular (app de OS)'],
  },
  {
    slug: 'oticas',
    nome: 'Óticas',
    icone: 'glasses',
    categoria: 'comercio',
    resumo: 'Receitas de óculos registradas, orçamentos e venda com estoque integrado.',
    intro:
      'A venda na ótica começa pela receita do cliente. O sistema registra as prescrições, monta o orçamento com armação e lentes e mantém estoque, financeiro e notas fiscais conectados.',
    destaques: [
      { titulo: 'Controle de receitas', texto: 'Prescrição de cada cliente guardada no cadastro.' },
      { titulo: 'Orçamento de óculos', texto: 'Armação e lentes no mesmo orçamento.' },
      { titulo: 'Comissão de vendedores', texto: 'Por produto, departamento ou vendedor.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(), GESTAO],
    perifericos: PERIFERICOS_BASICOS,
  },
  {
    slug: 'petshop',
    nome: 'Pet Shops',
    icone: 'paw',
    categoria: 'servicos',
    resumo: 'Cadastro dos pets, vacinas, agenda de banho e tosa e loja no mesmo sistema.',
    intro:
      'O pet shop é loja, serviço e, muitas vezes, clínica. O sistema cadastra cada animal com histórico, vacinas e vermífugos, organiza a agenda dos profissionais e mantém o balcão de produtos funcionando.',
    destaques: [
      { titulo: 'Cadastro do animal', texto: 'Histórico, anamnese e receituário de cada pet.' },
      { titulo: 'Vacinas e vermífugos', texto: 'Controle das doses aplicadas e das próximas.' },
      { titulo: 'Agenda e ordens de serviço', texto: 'Serviços agendados por profissional e acompanhados.' },
      { titulo: 'Comissão por profissional', texto: 'Calculada a partir dos serviços executados.' },
    ],
    modulos: [
      { titulo: 'Atendimento pet', itens: ['Cadastro de animais', 'Agenda por profissional', 'Ordens de serviço pet', 'Anamnese, receituário e histórico', 'Vacinas e vermífugos', 'Acompanhamento da execução dos serviços'] },
      { titulo: 'Loja', itens: ['PDV / frente de caixa', 'Controle de estoque', 'Sugestão de compras e notas de entrada', 'Gráficos de vendas e curva ABC'] },
      FINANCEIRO,
      fiscalComercio(['NFS-e']),
      GESTAO,
    ],
  },
  {
    slug: 'supermercados-mercearias',
    nome: 'Supermercados e Mercearias',
    icone: 'cart',
    categoria: 'comercio',
    resumo: 'Caixa rápido com balança e consulta de preço, validade e compras inteligentes.',
    intro:
      'No mercado, cada segundo no caixa conta e a margem é apertada. O sistema integra balanças e terminais de consulta de preço, controla validade e sugere compras com base no que realmente vende.',
    destaques: [
      { titulo: 'Caixa ágil', texto: 'Leitura de código, balança e ajuste de preço sem parar a fila.' },
      { titulo: 'Controle de validade', texto: 'Menos perda com produtos vencidos.' },
      { titulo: 'Sugestão de compras', texto: 'Reposição guiada pelo giro e pela curva ABC.' },
    ],
    modulos: [VENDAS, ESTOQUE, FINANCEIRO, fiscalComercio(), GESTAO],
    perifericos: ['Balanças', 'Terminais de consulta de preço', ...PERIFERICOS_BASICOS],
  },
  {
    slug: 'transportadoras',
    nome: 'Transportadoras',
    icone: 'route',
    categoria: 'logistica',
    resumo: 'CT-e, MDF-e, frota, viagens e coletas para cargas e passageiros.',
    intro:
      'Transportadora precisa emitir documento fiscal de transporte sem erro e saber quanto cada veículo custa. O sistema emite CT-e, CT-e OS e MDF-e, controla frota, multas, viagens e coletas, com o financeiro integrado.',
    destaques: [
      { titulo: 'CT-e, CT-e OS e MDF-e', texto: 'Documentos de transporte emitidos no sistema, inclusive CT-e em lote.' },
      { titulo: 'Controle de frota', texto: 'Manutenções e despesas de cada veículo.' },
      { titulo: 'Viagens e coletas', texto: 'Programação e acompanhamento da operação.' },
      { titulo: 'Controle de multas', texto: 'Infrações registradas por veículo.' },
    ],
    modulos: [
      { titulo: 'Operação', itens: ['Controle de frota (manutenção e despesas)', 'Controle de multas', 'Controle de viagens', 'Controle de coletas'] },
      { titulo: 'Fiscal de transporte', itens: ['CT-e e transmissão de CT-e em lote', 'CT-e OS', 'MDF-e'] },
      FINANCEIRO,
    ],
  },
];

export const solucaoPorSlug = (slug) => SOLUCOES.find((s) => s.slug === slug);
