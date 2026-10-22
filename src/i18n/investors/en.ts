import { brand } from '../../config';
import type { InvestorDict } from './pt';

const B = brand.name;

const en: InvestorDict = {
  meta: {
    title: `Investors · ${B}`,
    description: `${B} is building a family of AI companion robots that care, protect and delight. Discover the opportunity.`,
  },
  nav: 'Investors',
  hero: {
    badge: 'Pre-seed round in preparation',
    title: 'One robotics platform. Three markets that matter.',
    subtitle: `${B} combines affordable robotics with on-device AI to build companions for three moments in life: ageing at home, growing up safely and simply having fun.`,
    cta: 'Request the deck',
    secondary: 'See the product',
  },
  problem: {
    eyebrow: 'The problem',
    title: 'Homes are changing faster than the technology that serves them.',
    items: [
      { title: 'Ageing alone', text: 'More and more older people live alone. Falls, missed medication and isolation go unnoticed for hours.' },
      { title: 'Parents always on alert', text: 'Accidents at home are a constant worry. Surveillance cameras create anxiety and do nothing for the child.' },
      { title: 'Technology without soul', text: 'Voice assistants are useful but impersonal. There are few products that build a real bond with the family.' },
    ],
  },
  stats: [
    { value: '21%', label: 'of the EU population is aged 65 or over', source: 'Eurostat, 2023', href: 'https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Population_structure_and_ageing' },
    { value: '2nd', label: 'leading cause of unintentional injury death worldwide is falls', source: 'WHO', href: 'https://www.who.int/news-room/fact-sheets/detail/falls' },
    { value: '3', label: 'product lines on a single hardware and software platform', source: B, href: '' },
  ],
  solution: {
    eyebrow: 'The solution',
    title: 'One robot. Three missions.',
    subtitle: 'The same body, components and software power all three lines. Only the shell, sensors and app change. That cuts development cost and speeds up every new launch.',
    layers: ['Hardware', 'Firmware', 'On-device AI', 'App'],
  },
  advantages: {
    eyebrow: 'Why we win',
    title: 'Advantages that are hard to copy.',
    items: [
      { title: 'On-device AI', text: 'Vision and voice processed locally. Private by default, lower latency and near-zero cloud costs.' },
      { title: 'Shared platform', text: 'One technical base for three markets: lower cost per line and more purchasing scale.' },
      { title: 'Emotional design', text: 'A robot with personality, not an appliance. The bond drives retention and word of mouth.' },
      { title: 'Agile manufacturing', text: 'Modular 3D-printed shells let us iterate fast and customise without costly tooling early on.' },
    ],
  },
  model: {
    eyebrow: 'Business model',
    title: 'Hardware opens the door. Services create recurring revenue.',
    items: [
      { title: 'Robot sales', text: 'Hardware margin, with pre-orders to validate demand before production.' },
      { title: 'Subscription', text: 'Advanced Care and Guard features: family alerts, history and integrations. Being defined.' },
      { title: 'Accessories and B2B', text: 'Custom shells, plus partnerships with care homes, insurers and telecare operators.' },
    ],
  },
  roadmap: {
    eyebrow: 'Plan',
    title: 'Where we are and where we are going.',
    steps: [
      { date: 'Today', title: 'Prototype and brand', text: 'Concept, identity and first versions of the robot and app in development. Pre-orders open to gauge demand.' },
      { date: '2027 H1', title: 'Beta programme', text: 'Units tested in the homes of selected families, focused on Wobi Care.' },
      { date: '2027 H2', title: 'First batch', text: 'Production of the first batch and deliveries to pre-order customers.' },
      { date: '2028', title: 'Scale', text: 'All three lines launched across Europe and first B2B contracts.' },
    ],
  },
  funds: {
    eyebrow: 'Use of funds',
    title: 'Where every euro goes.',
    note: 'Indicative split. Final round figures will be shared in the deck.',
    items: [
      { label: 'Hardware and firmware engineering', value: 40 },
      { label: 'AI and app', value: 25 },
      { label: 'First batch and certifications', value: 20 },
      { label: 'Marketing and community', value: 15 },
    ],
  },
  team: {
    eyebrow: 'Team',
    title: 'Who is building it.',
    founder: 'Founder',
    founderText: 'Passionate about AI, robotics and 3D modelling. Leading design, product and technology at Wobi.',
    hiring: 'We are looking for hardware and AI people to join the founding team.',
  },
  cta: {
    title: "Let's talk.",
    text: 'If you believe the next generation of robots will live with us at home, we would love to show you what we are building.',
    button: 'Email the founder',
    subject: 'Investing in Wobi',
  },
  disclaimer: 'This page is for information only and does not constitute an offer of securities. Plans and dates are forecasts and may change.',
};

export default en;
