// Single source of truth for the brand. Rename the brand or change prices here.
export const brand = {
  name: 'Wobi',
  email: 'hello@wobi.example',
  company: 'Wobi Robotics',
  // Shown in legal pages until the company is registered.
  legalEntity: 'Wobi Robotics (em constituição)',
  country: 'Portugal',
};

export type LineId = 'care' | 'guard' | 'play';

// Placeholder prices (EUR). Deposit is refundable.
export const lines: Record<LineId, { price: number; deposit: number; color: string; soft: string }> = {
  play: { price: 199, deposit: 19, color: '#FFB627', soft: '#FFF1CC' },
  guard: { price: 279, deposit: 29, color: '#3D8BFF', soft: '#DCEBFF' },
  care: { price: 349, deposit: 29, color: '#FF6B4A', soft: '#FFE1D9' },
};

export const locales = ['pt', 'br', 'en', 'es', 'fr', 'de', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

export const localeMeta: Record<Locale, { label: string; short: string; htmlLang: string; currency: string }> = {
  pt: { label: 'Português (PT)', short: 'PT', htmlLang: 'pt-PT', currency: 'EUR' },
  br: { label: 'Português (BR)', short: 'BR', htmlLang: 'pt-BR', currency: 'EUR' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', currency: 'EUR' },
  es: { label: 'Español', short: 'ES', htmlLang: 'es', currency: 'EUR' },
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr', currency: 'EUR' },
  de: { label: 'Deutsch', short: 'DE', htmlLang: 'de', currency: 'EUR' },
  it: { label: 'Italiano', short: 'IT', htmlLang: 'it', currency: 'EUR' },
};

export const legalPages = ['privacy', 'cookies', 'terms'] as const;
export type LegalPage = (typeof legalPages)[number];
