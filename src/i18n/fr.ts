import { brand } from '../config';
import type { Dict } from './pt';

const B = brand.name;

const fr: Dict = {
  meta: {
    title: `${B} · Robots compagnons dotés d'intelligence artificielle`,
    description: `${B} est une famille de petits robots IA qui tiennent compagnie aux grands-parents, veillent sur les petits et mettent de la joie à la maison. Précommandes ouvertes.`,
  },
  nav: { lines: 'Robots', how: 'Fonctionnement', roadmap: 'Calendrier', faq: 'Questions', cta: 'Précommander', language: 'Langue' },
  hero: {
    badge: 'Prototype fonctionnel · Précommandes ouvertes',
    titleA: 'Petits robots.',
    titleB: 'Grands compagnons.',
    subtitle: `${B} est une famille de robots IA, de la taille d'une tasse, qui tiennent compagnie aux grands-parents, gardent un œil sur les enfants et animent toute la maison.`,
    cta: `Réserver mon ${B}`,
    secondary: 'Découvrir les robots',
    note: 'Acompte 100 % remboursable · Sans engagement',
  },
  marquee: ['Détection des chutes', 'Rappels de médicaments', 'Alertes de danger', 'IA embarquée', 'Fabriqué en Europe', 'Personnalité unique', 'Confidentialité avant tout', 'Pièces imprimées en 3D'],
  lines: {
    eyebrow: 'Une famille, trois missions',
    title: `Choisissez le bon ${B} pour ceux que vous aimez.`,
    subtitle: "Ils partagent tous le même cœur : un corps qui marche et réagit, des yeux expressifs et une IA qui apprend les habitudes de la maison. Seule la mission change.",
    from: 'dès',
    items: {
      care: {
        name: `${B} Care`,
        tagline: 'Pour les grands-parents',
        desc: "Un compagnon patient qui discute, rappelle les médicaments et prévient la famille si quelque chose ne va pas.",
        features: ["Détection des chutes et de l'inactivité", 'Rappels de médicaments et de rendez-vous', 'Appel vidéo en un geste', 'Conversation avec une voix calme et claire'],
      },
      guard: {
        name: `${B} Guard`,
        tagline: 'Pour les petits',
        desc: "Un copain de jeu qui est aussi un gardien attentif : il repère les situations à risque et vous alerte aussitôt.",
        features: ['Alertes de zones dangereuses', 'Suivi du sommeil et des pleurs de bébé', 'Histoires et jeux éducatifs', 'Notifications en temps réel pour les parents'],
      },
      play: {
        name: `${B} Play`,
        tagline: 'Pour le plaisir',
        desc: "Il danse, fait des grimaces, réagit à votre humeur et apprend de nouveaux tours. Le robot de bureau le plus attachant au monde.",
        features: ['Plus de 100 expressions et danses', 'Réagit à la voix, au toucher et aux gestes', 'Programmable en blocs ou en Python', 'Coques personnalisables imprimées en 3D'],
      },
    },
  },
  videos: {
    eyebrow: `À la maison`,
    title: `${B} au quotidien.`,
    subtitle: `Trois moments, trois missions. Un aperçu de la place que chaque ${B} prendra chez vous.`,
    label: `Simulation conceptuelle`,
    note: `Vidéos générées par ordinateur pour illustrer le concept. Le produit final peut différer.`,
  },
  how: {
    eyebrow: "À l'intérieur",
    title: 'Simple au dehors. Très malin au dedans.',
    subtitle: `Chaque ${B} associe robotique de précision et IA embarquée, pour réagir vite et garder vos données à la maison.`,
    items: [
      { title: 'IA embarquée', text: "Vision et voix traitées localement. Les images ne quittent jamais la maison sans votre accord." },
      { title: "Marche et garde l'équilibre", text: 'Des jambes à moteurs de précision et un équilibre actif pour se déplacer naturellement dans la maison.' },
      { title: 'Une appli pour toute la famille', text: 'Alertes, routines et réglages dans une seule appli, partagée avec ceux qui doivent savoir.' },
      { title: 'Conçu pour durer', text: 'Pièces modulaires, remplaçables et imprimées en 3D. Mises à jour gratuites pendant toute sa durée de vie.' },
    ],
  },
  trust: {
    title: 'La confiance, de série.',
    items: [
      { title: 'Confidentialité par défaut', text: 'Traitement local, données chiffrées et conformité totale au RGPD.' },
      { title: 'Conçu en Europe', text: 'Conçu et testé au Portugal, avec des composants certifiés.' },
      { title: 'Réservation sans risque', text: "Acompte remboursable à tout moment jusqu'à l'expédition." },
    ],
  },
  roadmap: {
    eyebrow: 'Calendrier',
    title: "Du prototype jusqu'à chez vous.",
    steps: [
      { date: '2026', title: 'Prototype fonctionnel', text: `Les premiers ${B} marchent, voient et parlent dans notre laboratoire.`, done: true },
      { date: 'Maintenant', title: 'Précommandes ouvertes', text: 'Réservez votre place dans la première série avec un acompte remboursable.', done: true },
      { date: 'T2 2027', title: 'Programme bêta', text: `Des familles sélectionnées testent ${B} chez elles et nous aident à peaufiner chaque détail.`, done: false },
      { date: 'T4 2027', title: 'Premières livraisons', text: `Les premiers ${B} arrivent chez ceux qui ont réservé en premier.`, done: false },
    ],
  },
  preorder: {
    eyebrow: 'Précommande',
    title: 'Réservez votre place dans la première série.',
    subtitle: `Choisissez votre ${B} et laissez votre email. Vous ne payez l'acompte qu'à l'ouverture des paiements, et vous pouvez annuler à tout moment.`,
    deposit: 'Acompte',
    choose: 'Choisir',
    selected: 'Choisi',
    emailLabel: 'Votre email',
    emailPlaceholder: 'nom@exemple.fr',
    button: 'Précommander',
    consent: 'En continuant, vous acceptez notre',
    consentLink: 'Politique de confidentialité',
    success: 'Merci ! Vous êtes sur la liste. Nous vous donnerons des nouvelles très vite.',
    perks: ['Prix de lancement garanti', 'Accès prioritaire au programme bêta', 'Coque exclusive de la première série'],
  },
  faq: {
    title: 'Questions fréquentes',
    items: [
      { q: `Quand ${B} sera-t-il livré ?`, a: "Les premières livraisons sont prévues au dernier trimestre 2027. Premier à réserver, premier servi, et nous vous tiendrons informé par email." },
      { q: "L'acompte est-il vraiment remboursable ?", a: "Oui. Vous pouvez demander le remboursement intégral de votre acompte à tout moment avant l'expédition, sans justification." },
      { q: `${B} filme-t-il ma maison ?`, a: "Non. La vision et la voix sont traitées dans le robot. Seules les alertes et des données minimales vont vers l'appli, toujours chiffrées, et vous pouvez couper la caméra quand vous voulez." },
      { q: 'A-t-il besoin d’internet ?', a: "Les fonctions principales marchent hors ligne. Le Wi-Fi sert à envoyer les alertes à l'appli, à passer des appels vidéo et à recevoir les mises à jour." },
      { q: `${B} Care remplace-t-il un aidant ?`, a: `Non. ${B} est un compagnon et un soutien, pas un dispositif médical. Il aide à garder les routines et à informer la famille, mais ne remplace pas les soins professionnels.` },
      { q: 'Puis-je changer de modèle après avoir réservé ?', a: "Bien sûr. Vous pouvez changer de modèle jusqu'à l'ouverture des paiements finaux." },
    ],
  },
  footer: {
    tagline: 'Des robots compagnons pour toute la famille.',
    rights: 'Tous droits réservés.',
    contact: 'Contact',
    legal: 'Mentions légales',
    privacy: 'Confidentialité',
    cookies: 'Cookies',
    terms: 'Conditions de précommande',
    made: 'Fabriqué avec amour au Portugal',
    back: "Retour à l'accueil",
    updated: 'Dernière mise à jour',
  },
};

export default fr;
