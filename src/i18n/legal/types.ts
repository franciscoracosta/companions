import type { LegalPage } from '../../config';

export type LegalDoc = {
  title: string;
  intro: string;
  sections: { h: string; p: string[] }[];
};

export type LegalDict = Record<LegalPage, LegalDoc>;

// Bump when the legal text changes.
export const legalUpdated = '2026-10-22';
