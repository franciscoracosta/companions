import { brand } from '../config';
import type { Dict } from './pt';

const B = brand.name;

const it: Dict = {
  meta: {
    title: `${B} · Robot da compagnia con intelligenza artificiale`,
    description: `${B} è una famiglia di piccoli robot con IA che fanno compagnia ai nonni, vegliano sui più piccoli e portano allegria in casa. Preordini aperti.`,
  },
  nav: { lines: 'Robot', how: 'Come funziona', roadmap: 'Tappe', faq: 'Domande', cta: 'Preordina', language: 'Lingua' },
  hero: {
    badge: 'Prototipo funzionante · Preordini aperti',
    titleA: 'Piccoli robot.',
    titleB: 'Grande compagnia.',
    subtitle: `${B} è una famiglia di robot con IA, grandi quanto una tazza, che fanno compagnia ai nonni, tengono d'occhio i bambini e rallegrano tutta la casa.`,
    cta: `Prenota il mio ${B}`,
    secondary: 'Scopri i robot',
    note: 'Acconto rimborsabile al 100% · Senza impegno',
  },
  marquee: ['Rilevamento cadute', 'Promemoria farmaci', 'Avvisi di pericolo', 'IA a bordo', 'Prodotto in Europa', 'Personalità unica', 'Privacy prima di tutto', 'Parti stampate in 3D'],
  lines: {
    eyebrow: 'Una famiglia, tre missioni',
    title: `Scegli il ${B} giusto per chi ami.`,
    subtitle: 'Hanno tutti lo stesso cuore: un corpo che cammina e reagisce, occhi espressivi e un\'IA che impara le abitudini di casa. Cambia solo la missione.',
    from: 'da',
    items: {
      care: {
        name: `${B} Care`,
        tagline: 'Per i nonni',
        desc: 'Un compagno paziente che chiacchiera, ricorda i farmaci e avvisa la famiglia se qualcosa non va.',
        features: ['Rilevamento di cadute e inattività', 'Promemoria per farmaci e visite', 'Videochiamata con un tocco', 'Conversazione con voce calma e chiara'],
      },
      guard: {
        name: `${B} Guard`,
        tagline: 'Per i più piccoli',
        desc: 'Un compagno di giochi che è anche un guardiano attento: riconosce le situazioni a rischio e ti avvisa subito.',
        features: ['Avvisi per zone pericolose', 'Monitoraggio di sonno e pianto del bebè', 'Storie e giochi educativi', 'Notifiche in tempo reale per i genitori'],
      },
      play: {
        name: `${B} Play`,
        tagline: 'Per divertirsi',
        desc: 'Balla, fa le smorfie, reagisce al tuo umore e impara nuovi trucchi. Il robot da scrivania con più personalità al mondo.',
        features: ['Oltre 100 espressioni e balli', 'Reagisce a voce, tocco e gesti', 'Programmabile a blocchi o in Python', 'Scocche personalizzabili stampate in 3D'],
      },
    },
  },
  videos: {
    eyebrow: `A casa`,
    title: `${B} nella vita di tutti i giorni.`,
    subtitle: `Tre momenti, tre missioni. Un assaggio di come ogni ${B} entrerà nella tua casa.`,
    label: `Simulazione concettuale`,
    note: `Video generati al computer per illustrare il concetto. Il prodotto finale potrebbe essere diverso.`,
  },
  how: {
    eyebrow: 'Dentro',
    title: 'Semplice fuori. Molto intelligente dentro.',
    subtitle: `Ogni ${B} unisce robotica di precisione e IA che gira direttamente sul robot, per rispondere in fretta e tenere i tuoi dati in casa.`,
    items: [
      { title: 'IA a bordo', text: 'Visione e voce elaborate in locale. Le immagini non escono mai di casa senza il tuo permesso.' },
      { title: 'Cammina e sta in equilibrio', text: 'Gambe con motori di precisione ed equilibrio attivo per muoversi in casa con naturalezza.' },
      { title: "Un'app per tutta la famiglia", text: "Avvisi, routine e impostazioni in un'unica app, condivisa con chi deve sapere." },
      { title: 'Fatto per durare', text: 'Parti modulari, sostituibili e stampate in 3D. Aggiornamenti gratuiti per tutta la sua vita.' },
    ],
  },
  trust: {
    title: 'La fiducia è di serie.',
    items: [
      { title: 'Privacy di default', text: 'Elaborazione locale, dati cifrati e piena conformità al GDPR.' },
      { title: 'Progettato in Europa', text: 'Progettato e testato in Portogallo, con componenti certificati.' },
      { title: 'Prenotazione senza rischi', text: 'Acconto rimborsabile in qualsiasi momento fino alla spedizione.' },
    ],
  },
  roadmap: {
    eyebrow: 'Tappe',
    title: 'Dal prototipo a casa tua.',
    steps: [
      { date: '2026', title: 'Prototipo funzionante', text: `I primi ${B} camminano, vedono e parlano nel nostro laboratorio.`, done: true },
      { date: 'Ora', title: 'Preordini aperti', text: 'Assicurati un posto nella prima serie con un acconto rimborsabile.', done: true },
      { date: 'T2 2027', title: 'Programma beta', text: `Famiglie selezionate provano ${B} a casa e ci aiutano a perfezionare ogni dettaglio.`, done: false },
      { date: 'T4 2027', title: 'Prime consegne', text: `I primi ${B} arrivano a casa di chi ha prenotato per primo.`, done: false },
    ],
  },
  preorder: {
    eyebrow: 'Preordine',
    title: 'Assicurati un posto nella prima serie.',
    subtitle: `Scegli il tuo ${B} e lasciaci la tua email. Paghi l'acconto solo quando apriremo i pagamenti, e puoi annullare quando vuoi.`,
    deposit: 'Acconto',
    choose: 'Scegli',
    selected: 'Scelto',
    emailLabel: 'La tua email',
    emailPlaceholder: 'nome@esempio.it',
    button: 'Preordina',
    consent: 'Continuando accetti la nostra',
    consentLink: 'Informativa sulla privacy',
    success: 'Grazie! Sei nella lista. Ti scriveremo presto.',
    perks: ['Prezzo di lancio garantito', 'Accesso prioritario al programma beta', 'Scocca esclusiva della prima serie'],
  },
  faq: {
    title: 'Domande frequenti',
    items: [
      { q: `Quando arriva ${B}?`, a: "Le prime consegne sono previste per l'ultimo trimestre del 2027. Chi prenota prima riceve prima, e ti terremo aggiornato via email." },
      { q: "L'acconto è davvero rimborsabile?", a: "Sì. Puoi chiedere il rimborso completo dell'acconto in qualsiasi momento prima della spedizione, senza domande." },
      { q: `${B} registra la mia casa?`, a: "No. Visione e voce vengono elaborate sul robot. All'app arrivano solo avvisi e dati minimi, sempre cifrati, e puoi spegnere la fotocamera quando vuoi." },
      { q: 'Serve internet?', a: "Le funzioni principali funzionano offline. Il Wi-Fi serve per inviare avvisi all'app, fare videochiamate e ricevere aggiornamenti." },
      { q: `${B} Care sostituisce un badante?`, a: `No. ${B} è un compagno e un aiuto, non un dispositivo medico. Aiuta a mantenere le routine e a tenere informata la famiglia, ma non sostituisce l'assistenza professionale.` },
      { q: 'Posso cambiare modello dopo aver prenotato?', a: 'Certo. Puoi cambiare modello fino all\'apertura dei pagamenti finali.' },
    ],
  },
  footer: {
    tagline: 'Robot da compagnia per tutta la famiglia.',
    rights: 'Tutti i diritti riservati.',
    contact: 'Contatti',
    legal: 'Note legali',
    privacy: 'Privacy',
    cookies: 'Cookie',
    terms: 'Termini del preordine',
    made: 'Fatto con amore in Portogallo',
    back: 'Torna alla home',
    updated: 'Ultimo aggiornamento',
  },
};

export default it;
