import { defaultLocale, locales, type LegalPage, type Locale } from '../config';
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

const dicts: Record<Locale, Dict> = { pt, br, en, es, fr, de, it };
const legal: Record<Locale, LegalDict> = { pt: legalPt, br: legalBr, en: legalEn, es: legalEs, fr: legalFr, de: legalDe, it: legalIt };

export const isLocale = (v: string | undefined): v is Locale => !!v && (locales as readonly string[]).includes(v);

export const t = (locale: Locale) => dicts[locale] ?? dicts[defaultLocale];
export const tLegal = (locale: Locale) => legal[locale] ?? legal[defaultLocale];

export const href = (locale: Locale, page?: LegalPage, hash?: string) =>
  `/${locale}/${page ? `${page}/` : ''}${hash ? `#${hash}` : ''}`;

export const formatPrice = (value: number, htmlLang: string) =>
  new Intl.NumberFormat(htmlLang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
