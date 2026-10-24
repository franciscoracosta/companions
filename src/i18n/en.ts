import { brand } from '../config';
import type { Dict } from './pt';

const B = brand.name;

const en: Dict = {
  meta: {
    title: `${B} · AI companion robots for the whole family`,
    description: `${B} is a family of small AI robots that keep grandparents company, watch over little ones and bring joy to your home. Pre-orders are open.`,
  },
  nav: { lines: 'Robots', how: 'How it works', roadmap: 'Timeline', faq: 'FAQ', cta: 'Pre-order', language: 'Language' },
  hero: {
    badge: 'Working prototype · Pre-orders open',
    titleA: 'Small robots.',
    titleB: 'Big companions.',
    subtitle: `${B} is a family of mug-sized AI robots that keep grandparents company, keep an eye on the little ones and liven up the whole house.`,
    cta: `Reserve my ${B}`,
    secondary: 'Meet the robots',
    note: '100% refundable deposit · No commitment',
  },
  marquee: ['Fall detection', 'Medication reminders', 'Danger alerts', 'On-device AI', 'Made in Europe', 'One-of-a-kind personality', 'Privacy first', '3D-printed parts'],
  lines: {
    eyebrow: 'One family, three missions',
    title: `Pick the right ${B} for the people you love.`,
    subtitle: 'They all share the same heart: a body that rolls, sways and reacts, expressive eyes and an AI that learns how your home works. What changes is the mission.',
    from: 'from',
    items: {
      care: {
        name: `${B} Care`,
        tagline: 'For grandparents',
        desc: 'A patient companion that chats, remembers medication and lets the family know if something is wrong.',
        features: ['Fall and inactivity detection', 'Medication and appointment reminders', 'One-tap video calls', 'Calm, clear voice conversation'],
      },
      guard: {
        name: `${B} Guard`,
        tagline: 'For little ones',
        desc: 'A playmate that is also a watchful guardian: it spots risky situations and alerts you instantly.',
        features: ['Danger-zone alerts', 'Baby sleep and crying monitoring', 'Stories and learning games', 'Real-time notifications for parents'],
      },
      play: {
        name: `${B} Play`,
        tagline: 'For pure fun',
        desc: 'It dances, pulls faces, reacts to your mood and learns new tricks. The desk robot with the most personality on the planet.',
        features: ['100+ expressions and dances', 'Reacts to voice, touch and gestures', 'Programmable with blocks or Python', 'Custom 3D-printed shells'],
      },
    },
  },
  videos: {
    eyebrow: `At home`,
    title: `See ${B} in everyday life.`,
    subtitle: `Three moments, three missions. A glimpse of how each ${B} will fit into your home.`,
    label: `Concept simulation`,
    note: `Computer-generated videos to illustrate the concept. The final product may differ.`,
  },
  how: {
    eyebrow: 'Inside',
    title: 'Simple on the outside. Seriously smart inside.',
    subtitle: `Every ${B} combines precision robotics with AI that runs on the robot itself, so it responds fast and keeps your data at home.`,
    items: [
      { title: 'On-device AI', text: 'Vision and voice are processed locally. Images never leave your home without permission.' },
      { title: 'Rolls and waddles', text: 'Wheels hidden in its feet and a gentle penguin sway, so it glides around the house with personality.' },
      { title: 'One app for the family', text: 'Alerts, routines and settings in a single app, shared with everyone who needs to know.' },
      { title: 'Built to last', text: 'Modular, replaceable, 3D-printed parts. Free updates for its entire lifetime.' },
    ],
  },
  trust: {
    title: 'Trust comes built in.',
    items: [
      { title: 'Private by default', text: 'Local processing, encrypted data and full GDPR compliance.' },
      { title: 'Designed in Europe', text: 'Designed and tested in Portugal, with certified components.' },
      { title: 'Risk-free reservation', text: 'Deposit refundable at any time until shipping.' },
    ],
  },
  roadmap: {
    eyebrow: 'Timeline',
    title: 'From prototype to your home.',
    steps: [
      { date: '2026', title: 'Working prototype', text: `The first ${B} robots roll, see and talk in our lab.`, done: true },
      { date: 'Now', title: 'Pre-orders open', text: 'Secure your spot in the first batch with a refundable deposit.', done: true },
      { date: 'Q2 2027', title: 'Beta programme', text: `Selected families test ${B} at home and help us fine-tune every detail.`, done: false },
      { date: 'Q4 2027', title: 'First deliveries', text: `The first ${B} robots arrive at the homes of the earliest backers.`, done: false },
    ],
  },
  preorder: {
    eyebrow: 'Pre-order',
    title: 'Secure your spot in the first batch.',
    subtitle: `Choose your ${B} and leave your email. You only pay the deposit when we open payments, and you can cancel any time.`,
    deposit: 'Deposit',
    choose: 'Choose',
    selected: 'Selected',
    emailLabel: 'Your email',
    emailPlaceholder: 'name@example.com',
    button: 'Pre-order',
    consent: 'By continuing you accept our',
    consentLink: 'Privacy Policy',
    success: "Thank you! You're on the list. We'll be in touch soon.",
    error: "We couldn't save your request. Please try again in a moment.",
    perks: ['Launch price locked in', 'Priority access to the beta programme', 'Exclusive first-batch shell'],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      { q: `When will ${B} ship?`, a: 'First deliveries are planned for Q4 2027. First to reserve, first to receive, and we will keep you posted by email along the way.' },
      { q: 'Is the deposit really refundable?', a: 'Yes. You can request a full refund of your deposit at any time before your robot ships, no questions asked.' },
      { q: `Does ${B} record my home?`, a: 'No. Vision and voice are processed on the robot. Only alerts and minimal data reach the app, always encrypted, and you can switch the camera off whenever you like.' },
      { q: 'Does it need internet?', a: 'Core features work offline. Wi-Fi is used to send alerts to the app, make video calls and receive updates.' },
      { q: `Does ${B} Care replace a carer?`, a: `No. ${B} is a companion and a helper, not a medical device. It helps keep routines and keeps the family informed, but it does not replace professional care.` },
      { q: 'Can I switch models after reserving?', a: 'Of course. You can change models until we open final payments.' },
    ],
  },
  footer: {
    tagline: 'Companion robots for the whole family.',
    rights: 'All rights reserved.',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy',
    cookies: 'Cookies',
    terms: 'Pre-order terms',
    made: 'Made with love in Portugal',
    back: 'Back to home',
    updated: 'Last updated',
  },
};

export default en;
