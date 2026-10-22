import { defaultLocale, locales, type Locale, type SitePage } from '../config';
import pt, { type Dict } from './pt';
import br from './br';
import en from './en';
import es from './es';
import fr from './fr';
import de from './de';
import it from './it';
import legalPt from './legal/pt';
import legalBr from './legal/br';
import legalEn from './legal/en';
import legalEs from './legal/es';
import legalFr from './legal/fr';
import legalDe from './legal/de';
import legalIt from './legal/it';
import type { LegalDict } from './legal/types';
import investorsPt, { type InvestorDict } from './investors/pt';
import investorsEn from './investors/en';

const dicts: Record<Locale, Dict> = { pt, br, en, es, fr, de, it };
const legal: Record<Locale, LegalDict> = { pt: legalPt, br: legalBr, en: legalEn, es: legalEs, fr: legalFr, de: legalDe, it: legalIt };

export const isLocale = (v: string | undefined): v is Locale => !!v && (locales as readonly string[]).includes(v);

export const t = (locale: Locale) => dicts[locale] ?? dicts[defaultLocale];
export const tLegal = (locale: Locale) => legal[locale] ?? legal[defaultLocale];

// Investor page is written in Portuguese and English only; other locales get English.
export const tInvestors = (locale: Locale): { d: InvestorDict; lang: string } =>
  locale === 'pt' || locale === 'br' ? { d: investorsPt, lang: 'pt' } : { d: investorsEn, lang: 'en' };

export const href = (locale: Locale, page?: SitePage, hash?: string) =>
  `/${locale}/${page ? `${page}/` : ''}${hash ? `#${hash}` : ''}`;

export const formatPrice = (value: number, htmlLang: string) =>
  new Intl.NumberFormat(htmlLang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
