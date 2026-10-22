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

// Concept videos (AI-generated, hosted on Higgsfield's CDN). Poster is the first frame.
export const videos: Record<LineId, { src: string; poster: string }> = {
  care: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3K7BCZTI6GBZ94wcr8ysimkGppY/hf_20261022_201741_2f45488b-a24a-425e-a25d-cf5a90f765f6.mp4',
    poster: 'https://d8j0ntlcm91z4.cloudfront.net/user_3K7BCZTI6GBZ94wcr8ysimkGppY/hf_20261022_185416_b6a8d4d1-8cab-442f-9ba1-fcfb861bda3d.png',
  },
  guard: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3K7BCZTI6GBZ94wcr8ysimkGppY/hf_20261022_201632_79e4a9a6-6579-455c-be3c-cd00154bccd6.mp4',
    poster: 'https://d8j0ntlcm91z4.cloudfront.net/user_3K7BCZTI6GBZ94wcr8ysimkGppY/hf_20261022_185417_d4cc3231-cf55-4b2c-9f9e-f919b51eb857.png',
  },
  play: {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3K7BCZTI6GBZ94wcr8ysimkGppY/hf_20261022_201631_f5be34e1-6f6d-472b-9b56-ff1f0b41d687.mp4',
    poster: 'https://d8j0ntlcm91z4.cloudfront.net/user_3K7BCZTI6GBZ94wcr8ysimkGppY/hf_20261022_185417_6f208cee-30cb-4579-8062-f5ff4db89154.png',
  },
};
