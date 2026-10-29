import { brand } from '../config';
import type { Dict } from './pt';

const B = brand.name;

const de: Dict = {
  meta: {
    title: `${B} · KI-Begleitroboter für die ganze Familie`,
    description: `${B} ist eine Familie kleiner KI-Roboter, die Großeltern Gesellschaft leisten, auf die Kleinen aufpassen und Freude ins Zuhause bringen. Jetzt vorbestellen.`,
  },
  nav: { flight: `Flugmodus`, lines: 'Roboter', how: "So funktioniert's", roadmap: 'Zeitplan', faq: 'FAQ', cta: 'Vorbestellen', language: 'Sprache' },
  hero: {
    badge: 'Funktionierender Prototyp · Vorbestellung offen',
    titleA: 'Kleine Roboter.',
    titleB: 'Große Begleiter.',
    subtitle: `${B} ist eine Familie tassengroßer KI-Roboter, die Großeltern Gesellschaft leisten, die Kleinen im Blick behalten und das ganze Haus aufmuntern. Und wenn nötig, fliegen sie.`,
    cta: `Meinen ${B} reservieren`,
    secondary: 'Die Roboter kennenlernen',
    note: '100 % erstattbare Anzahlung · Unverbindlich',
  },
  marquee: ['Sturzerkennung', 'Medikamenten-Erinnerungen', 'Gefahrenwarnungen', 'KI direkt im Roboter', 'Made in Europe', 'Einzigartige Persönlichkeit', 'Datenschutz zuerst', '3D-gedruckte Teile', `Flugmodus`],
  lines: {
    eyebrow: 'Eine Familie, drei Aufgaben',
    title: `Finden Sie den richtigen ${B} für Ihre Liebsten.`,
    subtitle: 'Alle haben dasselbe Herz: einen Körper, der rollt, watschelt und reagiert, ausdrucksstarke Augen und eine KI, die den Alltag zu Hause lernt. Nur die Aufgabe ist eine andere.',
    from: 'ab',
    items: {
      care: {
        name: `${B} Care`,
        tagline: 'Für Großeltern',
        desc: 'Ein geduldiger Begleiter, der plaudert, an Medikamente erinnert und die Familie informiert, wenn etwas nicht stimmt.',
        features: ['Sturz- und Inaktivitätserkennung', 'Erinnerungen an Medikamente und Termine', 'Videoanruf per Fingertipp', 'Gespräche mit ruhiger, klarer Stimme', `Flugmodus: folgt, wenn jemand das Haus verlässt`],
      },
      guard: {
        name: `${B} Guard`,
        tagline: 'Für die Kleinen',
        desc: 'Ein Spielkamerad und zugleich ein aufmerksamer Beschützer: Er erkennt riskante Situationen und warnt Sie sofort.',
        features: ['Warnungen bei Gefahrenzonen', 'Überwachung von Babyschlaf und Weinen', 'Geschichten und Lernspiele', 'Echtzeit-Benachrichtigungen für Eltern', `Flugmodus: das Zimmer von oben im Blick`],
      },
      play: {
        name: `${B} Play`,
        tagline: 'Für den Spaß',
        desc: 'Er tanzt, schneidet Grimassen, reagiert auf Ihre Laune und lernt neue Tricks. Der Schreibtischroboter mit der meisten Persönlichkeit der Welt.',
        features: ['Über 100 Gesichtsausdrücke und Tänze', 'Reagiert auf Stimme, Berührung und Gesten', 'Programmierbar mit Blöcken oder Python', 'Individuelle 3D-gedruckte Hüllen', `Flugmodus: Pirouetten in der Luft`],
      },
    },
  },
  flight: {
    eyebrow: `Flugmodus`,
    title: `Wenn der Boden nicht reicht, fliegt ${B}.`,
    subtitle: `Jeder ${B} versteckt vier Rotoren in der Mitte seines Körpers. Bei Bedarf klappen sie aus, ${B} hebt für ein paar Minuten ab und landet dann, um weiterzurollen.`,
    pick: `Roboter wählen`,
    items: [
      { tag: `Alle ${B}`, title: `Steigt Treppen`, text: `Rotoren ausklappen, mit einem kurzen Flug die Treppe hinauf und oben weiterrollen. Das ganze Haus, nicht nur das Erdgeschoss.` },
      { tag: `${B} Care`, title: `Folgt, wenn jemand das Haus verlässt`, text: `Verlässt jemand mit Alzheimer allein das Haus, alarmiert ${B} Care sofort die Familie, folgt der Person in den ersten Minuten mit sicherem Abstand und teilt ihren Standort live.` },
      { tag: `${B} Guard · ${B} Play`, title: `Sieht von oben`, text: `Fliegt auf den Schrank, um das ganze Zimmer zu sehen, schaut ins oberste Regal oder filmt die Party aus einem neuen Blickwinkel.` },
    ],
    safety: [`Propeller im Schutzring`, `Kurze Flüge, bis zu 8 Minuten`, `Landet bei schwachem Akku selbst`, `Rotoren stoppen, wenn man ihn greift`],
    note: `Funktion in Entwicklung am Prototyp. Flüge im Freien hängen von den Drohnenregeln des jeweiligen Landes ab.`,
  },
  videos: {
    eyebrow: `Zu Hause`,
    title: `${B} im Alltag.`,
    subtitle: `Drei Momente, drei Aufgaben. Ein Vorgeschmack darauf, wie jeder ${B} Teil Ihres Zuhauses wird.`,
    label: `Konzept-Simulation`,
    note: `Computergenerierte Videos zur Veranschaulichung des Konzepts. Das Endprodukt kann abweichen.`,
  },
  how: {
    eyebrow: 'Im Inneren',
    title: 'Außen einfach. Innen richtig klug.',
    subtitle: `Jeder ${B} verbindet Präzisionsrobotik mit KI, die direkt im Roboter läuft. So reagiert er schnell und Ihre Daten bleiben zu Hause.`,
    items: [
      { title: 'KI direkt im Roboter', text: 'Bild und Sprache werden lokal verarbeitet. Aufnahmen verlassen das Haus nie ohne Ihre Erlaubnis.' },
      { title: `Rollt, watschelt und fliegt`, text: `In den Füßen versteckte Räder und ein Pinguin-Watscheln für Wege durchs Haus. Für Treppen klappt er seine Rotoren aus und fliegt.` },
      { title: 'Eine App für die Familie', text: 'Warnungen, Routinen und Einstellungen in einer App, geteilt mit allen, die Bescheid wissen müssen.' },
      { title: 'Gebaut für die Dauer', text: 'Modulare, austauschbare, 3D-gedruckte Teile. Kostenlose Updates ein Leben lang.' },
    ],
  },
  trust: {
    title: 'Vertrauen ist serienmäßig.',
    items: [
      { title: 'Datenschutz als Standard', text: 'Lokale Verarbeitung, verschlüsselte Daten und volle DSGVO-Konformität.' },
      { title: 'Entwickelt in Europa', text: 'Entworfen und getestet in Portugal, mit zertifizierten Komponenten.' },
      { title: 'Risikofrei reservieren', text: 'Anzahlung bis zum Versand jederzeit erstattbar.' },
    ],
  },
  roadmap: {
    eyebrow: 'Zeitplan',
    title: 'Vom Prototyp zu Ihnen nach Hause.',
    steps: [
      { date: '2026', title: 'Funktionierender Prototyp', text: `Die ersten ${B} rollen, sehen und sprechen in unserem Labor.`, done: true },
      { date: 'Jetzt', title: 'Vorbestellung offen', text: 'Sichern Sie sich mit einer erstattbaren Anzahlung einen Platz in der ersten Serie.', done: true },
      { date: 'Q2 2027', title: 'Beta-Programm', text: `Ausgewählte Familien testen ${B} zu Hause und helfen uns, jedes Detail zu verfeinern.`, done: false },
      { date: 'Q4 2027', title: 'Erste Auslieferungen', text: `Die ersten ${B} ziehen bei den frühesten Unterstützern ein.`, done: false },
    ],
  },
  preorder: {
    eyebrow: 'Vorbestellung',
    title: 'Sichern Sie sich einen Platz in der ersten Serie.',
    subtitle: `Wählen Sie Ihren ${B} und hinterlassen Sie Ihre E-Mail. Die Anzahlung zahlen Sie erst, wenn wir die Zahlungen öffnen, und Sie können jederzeit stornieren.`,
    deposit: 'Anzahlung',
    choose: 'Wählen',
    selected: 'Gewählt',
    emailLabel: 'Ihre E-Mail',
    emailPlaceholder: 'name@beispiel.de',
    button: 'Vorbestellen',
    consent: 'Mit dem Fortfahren akzeptieren Sie unsere',
    consentLink: 'Datenschutzerklärung',
    success: 'Danke! Sie stehen auf der Liste. Wir melden uns bald.',
    error: 'Ihre Anfrage konnte nicht gespeichert werden. Bitte versuchen Sie es gleich noch einmal.',
    perks: ['Garantierter Einführungspreis', 'Vorrangiger Zugang zum Beta-Programm', 'Exklusive Hülle der ersten Serie'],
  },
  faq: {
    title: 'Häufige Fragen',
    items: [
      { q: `Wann wird ${B} ausgeliefert?`, a: 'Die ersten Auslieferungen sind für das vierte Quartal 2027 geplant. Wer zuerst reserviert, bekommt zuerst, und wir halten Sie per E-Mail auf dem Laufenden.' },
      { q: 'Ist die Anzahlung wirklich erstattbar?', a: 'Ja. Sie können die Anzahlung bis zum Versand jederzeit vollständig zurückverlangen, ohne Angabe von Gründen.' },
      { q: `Nimmt ${B} mein Zuhause auf?`, a: 'Nein. Bild und Sprache werden im Roboter verarbeitet. Nur Warnungen und minimale Daten gehen verschlüsselt an die App, und Sie können die Kamera jederzeit ausschalten.' },
      { q: 'Braucht er Internet?', a: 'Die Kernfunktionen laufen offline. WLAN wird für Warnungen an die App, Videoanrufe und Updates genutzt.' },
      { q: `Ersetzt ${B} Care eine Pflegekraft?`, a: `Nein. ${B} ist ein Begleiter und Helfer, kein Medizinprodukt. Er hilft, Routinen einzuhalten und die Familie zu informieren, ersetzt aber keine professionelle Pflege.` },
      { q: 'Kann ich nach der Reservierung das Modell wechseln?', a: 'Natürlich. Sie können das Modell wechseln, bis wir die finalen Zahlungen öffnen.' },
      { q: `Fliegt ${B} wirklich? Ist das sicher?`, a: `Ja, in kurzen Flügen. Die vier Rotoren kommen aus der Körpermitte und sitzen in Schutzringen, ${B} landet bei schwachem Akku selbst und stoppt die Motoren, sobald ihn jemand berührt. Im Haus fliegt er nur, wenn es nötig ist, etwa auf der Treppe. Flüge im Freien folgen den Regeln des jeweiligen Landes.` },
    ],
  },
  footer: {
    tagline: 'Begleitroboter für die ganze Familie.',
    rights: 'Alle Rechte vorbehalten.',
    contact: 'Kontakt',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    cookies: 'Cookies',
    terms: 'Vorbestellbedingungen',
    made: 'Mit Liebe in Portugal gemacht',
    back: 'Zur Startseite',
    updated: 'Zuletzt aktualisiert',
  },
};

export default de;
