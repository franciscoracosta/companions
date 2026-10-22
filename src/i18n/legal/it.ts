import { brand } from '../../config';
import type { LegalDict } from './types';

const B = brand.name;
const E = brand.email;

const it: LegalDict = {
  privacy: {
    title: 'Informativa sulla privacy',
    intro: `Questa informativa spiega quali dati personali ${B} raccoglie tramite questo sito, perché, e quali sono i tuoi diritti ai sensi del Regolamento generale sulla protezione dei dati (GDPR).`,
    sections: [
      { h: 'Titolare del trattamento', p: [`${brand.legalEntity}, ${brand.country}. Contatto: ${E}.`] },
      { h: 'Quali dati raccogliamo', p: ['Quando fai un preordine: la tua email, il modello scelto e la lingua del sito. In questa fase non chiediamo dati di pagamento.', "Il nostro fornitore di hosting registra dati tecnici minimi (come l'indirizzo IP) per mantenere il sito sicuro e funzionante."] },
      { h: 'Per cosa li usiamo', p: ["Per gestire la tua prenotazione, avvisarti all'apertura dei pagamenti e inviarti novità sul prodotto. Non vendiamo mai i tuoi dati e non li condividiamo per pubblicità."] },
      { h: 'Base giuridica', p: ['Il tuo consenso, dato inviando il modulo. Puoi revocarlo in qualsiasi momento.'] },
      { h: 'Responsabili del trattamento', p: ["Hosting: Vercel Inc. Invio email: Resend Inc. Entrambi sono vincolati da accordi sul trattamento dei dati e da clausole contrattuali tipo dell'UE per i trasferimenti internazionali."] },
      { h: 'Per quanto tempo', p: ['Fino alla cancellazione della prenotazione o a una tua richiesta di eliminazione e, al massimo, per 24 mesi dopo il lancio commerciale.'] },
      { h: 'I tuoi diritti', p: [`Puoi chiedere accesso, rettifica, cancellazione, limitazione o portabilità dei tuoi dati, oppure opporti al trattamento, scrivendo a ${E}. Puoi anche presentare reclamo all'autorità di controllo del tuo paese (in Italia, il Garante per la protezione dei dati personali).`] },
    ],
  },
  cookies: {
    title: 'Cookie policy',
    intro: `Il sito di ${B} è pensato per rispettare la tua privacy. Non usiamo cookie pubblicitari né di tracciamento.`,
    sections: [
      { h: 'Cosa salviamo sul tuo dispositivo', p: ['Solo la tua preferenza di lingua, salvata nella memoria locale del browser. Non viene condivisa con nessuno e puoi cancellarla dalle impostazioni del browser.'] },
      { h: 'Cookie di terze parti', p: ['Non usiamo cookie di terze parti. Font e script sono serviti dal nostro dominio.'] },
      { h: 'Modifiche', p: ['Se in futuro aggiungeremo strumenti di analisi o marketing, ti chiederemo prima il consenso tramite un avviso sul sito e aggiorneremo questa policy.'] },
    ],
  },
  terms: {
    title: 'Termini del preordine',
    intro: `Questi termini si applicano alle prenotazioni dei robot ${B} effettuate tramite questo sito.`,
    sections: [
      { h: "Che cos'è un preordine", p: ['Un preordine riserva il tuo posto nella coda di produzione. Al momento è gratuito e non costituisce un contratto di acquisto.'] },
      { h: 'Acconto', p: ["All'apertura dei pagamenti ti inviteremo a versare un acconto, interamente rimborsabile in qualsiasi momento prima della spedizione del robot."] },
      { h: 'Prezzi, date e specifiche', p: ['I prezzi indicati sono prezzi di lancio stimati. Date di consegna e specifiche tecniche sono previsioni e possono cambiare durante lo sviluppo. Ti avviseremo sempre via email prima di qualsiasi pagamento.'] },
      { h: 'Cancellazione', p: [`Puoi cancellare la prenotazione quando vuoi scrivendo a ${E}. Dopo la consegna mantieni il diritto di recesso di 14 giorni previsto dalla legge.`] },
      { h: 'Uso del prodotto', p: [`I robot ${B} non sono dispositivi medici e non sostituiscono la supervisione di un adulto né l'assistenza professionale.`] },
      { h: 'Legge applicabile', p: ['Questi termini sono regolati dalla legge portoghese, fatti salvi i diritti che ti riconosce come consumatore la legge del tuo paese di residenza.'] },
    ],
  },
};

export default it;
