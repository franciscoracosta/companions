import { brand } from '../../config';

const B = brand.name;

const pt = {
  meta: {
    title: `Investidores · ${B}`,
    description: `${B} está a construir uma família de robôs companheiros com IA para cuidar, proteger e divertir. Conheça a oportunidade.`,
  },
  nav: 'Investidores',
  hero: {
    badge: 'Ronda pré-seed em preparação',
    title: 'Uma plataforma de robótica. Três mercados que importam.',
    subtitle: `${B} junta robótica acessível e IA que corre no próprio dispositivo para criar companheiros para três momentos da vida: envelhecer em casa, crescer em segurança e simplesmente divertir-se.`,
    cta: 'Pedir o deck',
    secondary: 'Ver o produto',
  },
  problem: {
    eyebrow: 'O problema',
    title: 'As casas estão a mudar mais depressa do que a tecnologia que as serve.',
    items: [
      { title: 'Envelhecer sozinho', text: 'Cada vez mais pessoas idosas vivem sozinhas. Quedas, esquecimentos de medicação e isolamento passam despercebidos durante horas.' },
      { title: 'Pais sempre em alerta', text: 'Os acidentes domésticos são uma preocupação constante. As câmaras de vigilância geram ansiedade e não ajudam a criança.' },
      { title: 'Tecnologia sem alma', text: 'Os assistentes de voz são úteis mas impessoais. Faltam produtos que criem uma relação verdadeira com a família.' },
    ],
  },
  stats: [
    { value: '21%', label: 'da população da UE tem 65 anos ou mais', source: 'Eurostat, 2023', href: 'https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Population_structure_and_ageing' },
    { value: '2.ª', label: 'principal causa de morte por lesão não intencional no mundo são as quedas', source: 'OMS', href: 'https://www.who.int/news-room/fact-sheets/detail/falls' },
    { value: '3', label: 'linhas de produto sobre uma única plataforma de hardware e software', source: B, href: '' },
  ],
  solution: {
    eyebrow: 'A solução',
    title: 'Um só robô. Três missões.',
    subtitle: 'O mesmo corpo, os mesmos componentes e o mesmo software servem as três linhas. O que muda é a capa, os sensores e a app. Isto reduz custos de desenvolvimento e acelera cada novo lançamento.',
    layers: ['Hardware', 'Firmware', 'IA no robô', 'App'],
  },
  advantages: {
    eyebrow: 'Porque vamos ganhar',
    title: 'Vantagens difíceis de copiar.',
    items: [
      { title: 'IA no próprio robô', text: 'Visão e voz processadas localmente. Privacidade por defeito, menor latência e custos de cloud quase nulos.' },
      { title: 'Plataforma partilhada', text: 'Uma base técnica para três mercados: menos custo por linha e mais escala na compra de componentes.' },
      { title: 'Design emocional', text: 'Um robô com personalidade, não um eletrodoméstico. A relação cria retenção e recomendação.' },
      { title: 'Fabrico ágil', text: 'Capas modulares impressas em 3D permitem iterar depressa e personalizar sem moldes caros na fase inicial.' },
    ],
  },
  model: {
    eyebrow: 'Modelo de negócio',
    title: 'Hardware que abre a porta. Serviço que cria receita recorrente.',
    items: [
      { title: 'Venda do robô', text: 'Margem no hardware, com pré-encomendas para validar a procura antes de produzir.' },
      { title: 'Subscrição', text: 'Funções avançadas de Care e Guard: alertas para a família, histórico e integrações. Em fase de definição.' },
      { title: 'Acessórios e B2B', text: 'Capas personalizadas, e parcerias com lares, seguradoras e operadores de teleassistência.' },
    ],
  },
  roadmap: {
    eyebrow: 'Plano',
    title: 'Onde estamos e para onde vamos.',
    steps: [
      { date: 'Hoje', title: 'Protótipo e marca', text: 'Conceito, identidade e primeiras versões do robô e da app em desenvolvimento. Pré-encomendas abertas para medir interesse.' },
      { date: '2027 S1', title: 'Programa beta', text: 'Unidades testadas em casa de famílias selecionadas, com foco no Wobi Care.' },
      { date: '2027 S2', title: 'Primeira série', text: 'Produção da primeira série e entregas a quem pré-encomendou.' },
      { date: '2028', title: 'Escala', text: 'Lançamento das três linhas na Europa e primeiros contratos B2B.' },
    ],
  },
  funds: {
    eyebrow: 'Uso do investimento',
    title: 'Onde vai cada euro.',
    note: 'Distribuição indicativa. Os valores finais da ronda serão partilhados no deck.',
    items: [
      { label: 'Engenharia de hardware e firmware', value: 40 },
      { label: 'IA e app', value: 25 },
      { label: 'Primeira série e certificações', value: 20 },
      { label: 'Marketing e comunidade', value: 15 },
    ],
  },
  team: {
    eyebrow: 'Equipa',
    title: 'Quem está a construir.',
    founder: 'Fundador',
    founderText: 'Apaixonado por IA, robótica e modelação 3D. Está a liderar o design, o produto e a tecnologia da Wobi.',
    hiring: 'Estamos à procura de pessoas de hardware e de IA para se juntarem à equipa fundadora.',
  },
  cta: {
    title: 'Vamos conversar.',
    text: 'Se acredita que a próxima geração de robôs vai viver connosco em casa, gostávamos de lhe mostrar o que estamos a construir.',
    button: 'Escrever ao fundador',
    subject: 'Investimento na Wobi',
  },
  disclaimer: 'Esta página tem fins informativos e não constitui uma oferta de valores mobiliários. Os planos e as datas são previsões e podem mudar.',
};

export default pt;
export type InvestorDict = typeof pt;
