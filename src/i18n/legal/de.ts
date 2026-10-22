import { brand } from '../../config';
import type { LegalDict } from './types';

const B = brand.name;
const E = brand.email;

const de: LegalDict = {
  privacy: {
    title: 'Datenschutzerklärung',
    intro: `Diese Erklärung beschreibt, welche personenbezogenen Daten ${B} über diese Website erhebt, zu welchem Zweck und welche Rechte Sie nach der Datenschutz-Grundverordnung (DSGVO) haben.`,
    sections: [
      { h: 'Verantwortlicher', p: [`${brand.legalEntity}, ${brand.country}. Kontakt: ${E}.`] },
      { h: 'Welche Daten wir erheben', p: ['Bei einer Vorbestellung: Ihre E-Mail-Adresse, das gewählte Modell und die Sprache der Website. Zahlungsdaten fragen wir in dieser Phase nicht ab.', 'Unser Hosting-Anbieter protokolliert minimale technische Daten (etwa die IP-Adresse), um die Sicherheit und den Betrieb der Website zu gewährleisten.'] },
      { h: 'Zwecke', p: ['Verwaltung Ihrer Reservierung, Benachrichtigung bei Öffnung der Zahlungen und Produktneuigkeiten. Wir verkaufen Ihre Daten nie und geben sie nicht für Werbung weiter.'] },
      { h: 'Rechtsgrundlage', p: ['Ihre Einwilligung beim Absenden des Formulars (Art. 6 Abs. 1 lit. a DSGVO). Sie können sie jederzeit widerrufen.'] },
      { h: 'Auftragsverarbeiter', p: ['Hosting: Vercel Inc. E-Mail-Versand: Resend Inc. Beide sind durch Auftragsverarbeitungsverträge und EU-Standardvertragsklauseln für internationale Übermittlungen gebunden.'] },
      { h: 'Speicherdauer', p: ['Bis Sie Ihre Reservierung stornieren oder die Löschung verlangen, höchstens jedoch 24 Monate nach Markteinführung.'] },
      { h: 'Ihre Rechte', p: [`Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch. Schreiben Sie dazu an ${E}. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren.`] },
    ],
  },
  cookies: {
    title: 'Cookie-Richtlinie',
    intro: `Die Website von ${B} ist so gebaut, dass sie Ihre Privatsphäre respektiert. Wir verwenden keine Werbe- oder Tracking-Cookies.`,
    sections: [
      { h: 'Was wir auf Ihrem Gerät speichern', p: ['Nur Ihre Spracheinstellung im lokalen Speicher des Browsers. Sie wird mit niemandem geteilt und lässt sich in den Browsereinstellungen löschen.'] },
      { h: 'Cookies von Drittanbietern', p: ['Wir verwenden keine Cookies von Drittanbietern. Schriften und Skripte werden von unserer eigenen Domain ausgeliefert.'] },
      { h: 'Änderungen', p: ['Falls wir künftig Analyse- oder Marketing-Tools einsetzen, holen wir vorher Ihre Einwilligung über einen Hinweis auf der Website ein und aktualisieren diese Richtlinie.'] },
    ],
  },
  terms: {
    title: 'Vorbestellbedingungen',
    intro: `Diese Bedingungen gelten für Reservierungen von ${B}-Robotern über diese Website.`,
    sections: [
      { h: 'Was eine Vorbestellung ist', p: ['Eine Vorbestellung sichert Ihren Platz in der Produktionsreihenfolge. Sie ist derzeit kostenlos und kein Kaufvertrag.'] },
      { h: 'Anzahlung', p: ['Sobald wir die Zahlungen öffnen, laden wir Sie zu einer Anzahlung ein. Diese ist bis zum Versand des Roboters jederzeit vollständig erstattbar.'] },
      { h: 'Preise, Termine und technische Daten', p: ['Die angezeigten Preise sind geschätzte Einführungspreise. Liefertermine und technische Daten sind Prognosen und können sich während der Entwicklung ändern. Vor jeder Zahlung informieren wir Sie per E-Mail.'] },
      { h: 'Stornierung', p: [`Sie können Ihre Reservierung jederzeit stornieren, indem Sie an ${E} schreiben. Nach der Lieferung bleibt Ihr gesetzliches 14-tägiges Widerrufsrecht bestehen.`] },
      { h: 'Nutzung des Produkts', p: [`${B}-Roboter sind keine Medizinprodukte und ersetzen weder die Aufsicht durch Erwachsene noch professionelle Pflege.`] },
      { h: 'Anwendbares Recht', p: ['Es gilt portugiesisches Recht, unbeschadet der Verbraucherrechte, die Ihnen das Recht Ihres Wohnsitzlandes gewährt.'] },
    ],
  },
};

export default de;
