import { brand } from '../../config';
import type { LegalDict } from './types';

const B = brand.name;
const E = brand.email;

const fr: LegalDict = {
  privacy: {
    title: 'Politique de confidentialité',
    intro: `Cette politique explique quelles données personnelles ${B} collecte via ce site, pourquoi, et quels sont vos droits au titre du Règlement général sur la protection des données (RGPD).`,
    sections: [
      { h: 'Responsable du traitement', p: [`${brand.legalEntity}, ${brand.country}. Contact : ${E}.`] },
      { h: 'Données collectées', p: ["Lors d'une précommande : votre email, le modèle choisi et la langue du site. Nous ne demandons aucune donnée de paiement à ce stade.", "Notre hébergeur enregistre des données techniques minimales (comme l'adresse IP) pour assurer la sécurité et le bon fonctionnement du site."] },
      { h: 'Finalités', p: ["Gérer votre réservation, vous prévenir à l'ouverture des paiements et vous envoyer des nouvelles du produit. Nous ne vendons jamais vos données et ne les partageons pas à des fins publicitaires."] },
      { h: 'Base légale', p: ['Votre consentement, donné en envoyant le formulaire. Vous pouvez le retirer à tout moment.'] },
      { h: 'Sous-traitants', p: ["Hébergement : Vercel Inc. Envoi d'emails : Resend Inc. Tous deux sont liés par des accords de traitement des données et des clauses contractuelles types de l'UE pour les transferts internationaux."] },
      { h: 'Durée de conservation', p: ["Jusqu'à l'annulation de votre réservation ou votre demande de suppression, et au plus 24 mois après le lancement commercial."] },
      { h: 'Vos droits', p: [`Vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou la portabilité de vos données, ou vous opposer à leur traitement, en écrivant à ${E}. Vous pouvez aussi introduire une réclamation auprès de l'autorité de protection des données de votre pays (en France, la CNIL).`] },
    ],
  },
  cookies: {
    title: 'Politique de cookies',
    intro: `Le site ${B} est conçu pour respecter votre vie privée. Nous n'utilisons ni cookies publicitaires ni cookies de suivi.`,
    sections: [
      { h: 'Ce que nous enregistrons sur votre appareil', p: ['Uniquement votre préférence de langue, stockée dans le stockage local du navigateur. Elle n’est partagée avec personne et vous pouvez l’effacer dans les réglages du navigateur.'] },
      { h: 'Cookies tiers', p: ["Nous n'utilisons pas de cookies tiers. Les polices et les scripts sont servis depuis notre propre domaine."] },
      { h: 'Modifications', p: ['Si nous ajoutons un jour des outils de mesure ou de marketing, nous vous demanderons d’abord votre consentement via un bandeau et mettrons cette politique à jour.'] },
    ],
  },
  terms: {
    title: 'Conditions de précommande',
    intro: `Ces conditions s'appliquent aux réservations de robots ${B} effectuées sur ce site.`,
    sections: [
      { h: "Qu'est-ce qu'une précommande", p: ["Une précommande réserve votre place dans la file de production. Elle est actuellement gratuite et ne constitue pas un contrat d'achat."] },
      { h: 'Acompte', p: ["À l'ouverture des paiements, nous vous inviterons à verser un acompte. Celui-ci est intégralement remboursable à tout moment avant l'expédition du robot."] },
      { h: 'Prix, dates et caractéristiques', p: ['Les prix affichés sont des prix de lancement estimés. Les dates de livraison et les caractéristiques techniques sont prévisionnelles et peuvent évoluer pendant le développement. Nous vous préviendrons toujours par email avant tout paiement.'] },
      { h: 'Annulation', p: [`Vous pouvez annuler votre réservation à tout moment en écrivant à ${E}. Après la livraison, vous conservez votre droit légal de rétractation de 14 jours.`] },
      { h: 'Utilisation du produit', p: [`Les robots ${B} ne sont pas des dispositifs médicaux et ne remplacent ni la surveillance d'un adulte ni des soins professionnels.`] },
      { h: 'Droit applicable', p: ['Ces conditions sont régies par le droit portugais, sans préjudice des droits que vous accorde, en tant que consommateur, la loi de votre pays de résidence.'] },
    ],
  },
};

export default fr;
