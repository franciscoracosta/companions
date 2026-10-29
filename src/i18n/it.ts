import { brand } from '../config';
import type { Dict } from './pt';

const B = brand.name;

const it: Dict = {
  meta: {
    title: `${B} · Robot da compagnia con intelligenza artificiale`,
    description: `${B} è una famiglia di piccoli robot con IA che fanno compagnia ai nonni, vegliano sui più piccoli e portano allegria in casa. Preordini aperti.`,
  },
  nav: { flight: `Modalità volo`, lines: 'Robot', how: 'Come funziona', roadmap: 'Tappe', faq: 'Domande', cta: 'Preordina', language: 'Lingua' },
  hero: {
    badge: 'Prototipo funzionante · Preordini aperti',
    titleA: 'Piccoli robot.',
    titleB: 'Grande compagnia.',
    subtitle: `${B} è una famiglia di robot con IA, grandi quanto una tazza, che fanno compagnia ai nonni, tengono d'occhio i bambini e rallegrano tutta la casa. E quando serve, volano.`,
    cta: `Prenota il mio ${B}`,
    secondary: 'Scopri i robot',
    note: 'Acconto rimborsabile al 100% · Senza impegno',
  },
  marquee: ['Rilevamento cadute', 'Promemoria farmaci', 'Avvisi di pericolo', 'IA a bordo', 'Prodotto in Europa', 'Personalità unica', 'Privacy prima di tutto', 'Parti stampate in 3D', `Modalità volo`],
  lines: {
    eyebrow: 'Una famiglia, tre missioni',
    title: `Scegli il ${B} giusto per chi ami.`,
    subtitle: 'Hanno tutti lo stesso cuore: un corpo che rotola, ondeggia e reagisce, occhi espressivi e un\'IA che impara le abitudini di casa. Cambia solo la missione.',
    from: 'da',
    items: {
      care: {
        name: `${B} Care`,
        tagline: 'Per i nonni',
        desc: 'Un compagno paziente che chiacchiera, ricorda i farmaci e avvisa la famiglia se qualcosa non va.',
        features: ['Rilevamento di cadute e inattività', 'Promemoria per farmaci e visite', 'Videochiamata con un tocco', 'Conversazione con voce calma e chiara', `Modalità volo: segue chi esce di casa`],
      },
      guard: {
        name: `${B} Guard`,
        tagline: 'Per i più piccoli',
        desc: 'Un compagno di giochi che è anche un guardiano attento: riconosce le situazioni a rischio e ti avvisa subito.',
        features: ['Avvisi per zone pericolose', 'Monitoraggio di sonno e pianto del bebè', 'Storie e giochi educativi', 'Notifiche in tempo reale per i genitori', `Modalità volo: la stanza vista dall'alto`],
      },
      play: {
        name: `${B} Play`,
        tagline: 'Per divertirsi',
        desc: 'Balla, fa le smorfie, reagisce al tuo umore e impara nuovi trucchi. Il robot da scrivania con più personalità al mondo.',
        features: ['Oltre 100 espressioni e balli', 'Reagisce a voce, tocco e gesti', 'Programmabile a blocchi o in Python', 'Scocche personalizzabili stampate in 3D', `Modalità volo: piroette in aria`],
      },
    },
  },
  flight: {
    eyebrow: `Modalità volo`,
    title: `Quando il pavimento non basta, ${B} vola.`,
    subtitle: `Ogni ${B} nasconde quattro rotori a metà del corpo. Quando serve si aprono, ${B} decolla per qualche minuto e poi atterra per continuare a rotolare.`,
    pick: `Scegli il robot`,
    items: [
      { tag: `Tutti i ${B}`, title: `Sale le scale`, text: `Apre i rotori, sale la rampa di scale con un breve volo e continua a rotolare al piano di sopra. Tutta la casa, non solo il piano terra.` },
      { tag: `${B} Care`, title: `Segue chi esce di casa`, text: `Se una persona con Alzheimer esce di casa da sola, ${B} Care avvisa subito la famiglia, la segue a distanza di sicurezza nei primi minuti e condivide la posizione in tempo reale.` },
      { tag: `${B} Guard · ${B} Play`, title: `Vede dall'alto`, text: `Vola in cima all'armadio per vedere tutta la stanza, sbircia sullo scaffale più alto o riprende la festa da un'altra angolazione.` },
    ],
    safety: [`Eliche dentro protezioni`, `Voli brevi, fino a 8 minuti`, `Atterra da solo con batteria scarica`, `Ferma i rotori se viene afferrato`],
    note: `Funzione in sviluppo sul prototipo. Il volo all'aperto dipende dalle regole sui droni di ogni paese.`,
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
      { title: `Rotola, ondeggia e vola`, text: `Ruote nascoste nei piedi e un dondolio da pinguino per girare per casa. Per le scale apre i rotori e vola.` },
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
      { date: '2026', title: 'Prototipo funzionante', text: `I primi ${B} rotolano, vedono e parlano nel nostro laboratorio.`, done: true },
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
    error: 'Non siamo riusciti a salvare la tua richiesta. Riprova tra poco.',
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
      { q: `${B} vola davvero? È sicuro?`, a: `Sì, con voli brevi. I quattro rotori escono dalla metà del corpo e stanno dentro protezioni, ${B} atterra da solo quando la batteria è scarica e ferma i motori se qualcuno lo tocca. In casa vola solo quando serve, per esempio per salire le scale. Il volo all'aperto segue le regole di ogni paese.` },
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
