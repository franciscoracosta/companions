import { brand } from '../../config';
import type { LegalDict } from './types';

const B = brand.name;
const E = brand.email;

const en: LegalDict = {
  privacy: {
    title: 'Privacy Policy',
    intro: `This policy explains what personal data ${B} collects through this website, why, and what your rights are under the General Data Protection Regulation (GDPR).`,
    sections: [
      { h: 'Data controller', p: [`${brand.legalEntity}, ${brand.country}. Contact: ${E}.`] },
      { h: 'What we collect', p: ['When you pre-order: your email address, the model you chose and the website language. We do not ask for payment details at this stage.', 'Our hosting provider logs minimal technical data (such as your IP address) to keep the site secure and running.'] },
      { h: 'Why we use it', p: ['To manage your reservation, tell you when payments open and send you product news. We never sell your data or share it for advertising.'] },
      { h: 'Legal basis', p: ['Your consent, given when you submit the form. You can withdraw it at any time, without affecting processing carried out before then.'] },
      { h: 'Processors', p: ['Website hosting: Vercel Inc. Email delivery: Resend Inc. Both are bound by data processing agreements and EU standard contractual clauses for international transfers.'] },
      { h: 'How long we keep it', p: ['Until you cancel your reservation or ask us to delete it, and at most 24 months after commercial launch.'] },
      { h: 'Your rights', p: [`You can request access, rectification, erasure, restriction or portability of your data, or object to its processing, by writing to ${E}. You also have the right to lodge a complaint with your national data protection authority.`] },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    intro: `The ${B} website is built to respect your privacy. We do not use advertising or tracking cookies.`,
    sections: [
      { h: 'What we store on your device', p: ["Only your language preference, saved in your browser's local storage. It is never shared and you can clear it in your browser settings."] },
      { h: 'Third-party cookies', p: ['We do not use third-party cookies. Fonts and scripts are served from our own domain.'] },
      { h: 'Changes', p: ['If we ever add analytics or marketing tools, we will ask for your consent first through a notice on the site and update this policy.'] },
    ],
  },
  terms: {
    title: 'Pre-order Terms',
    intro: `These terms apply to reservations made through this website for ${B} robots.`,
    sections: [
      { h: 'What a pre-order is', p: ['A pre-order reserves your place in the production queue. Right now it is free and is not a purchase contract.'] },
      { h: 'Deposit', p: ['When payments open, we will invite you to pay a deposit. The deposit is fully refundable at any time before your robot ships.'] },
      { h: 'Prices, dates and specifications', p: ['Prices shown are estimated launch prices. Delivery dates and technical specifications are forecasts and may change during development. We will always notify you by email before any payment.'] },
      { h: 'Cancellation', p: [`You can cancel your reservation at any time by writing to ${E}. After delivery you keep your statutory 14-day right of withdrawal.`] },
      { h: 'Use of the product', p: [`${B} robots are not medical devices and do not replace adult supervision or professional care.`] },
      { h: 'Governing law', p: ['These terms are governed by Portuguese law, without prejudice to the consumer rights granted by the law of your country of residence.'] },
    ],
  },
};

export default en;
