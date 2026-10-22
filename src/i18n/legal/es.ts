import { brand } from '../../config';
import type { LegalDict } from './types';

const B = brand.name;
const E = brand.email;

const es: LegalDict = {
  privacy: {
    title: 'Política de Privacidad',
    intro: `Esta política explica qué datos personales recoge ${B} a través de este sitio, para qué y cuáles son tus derechos según el Reglamento General de Protección de Datos (RGPD).`,
    sections: [
      { h: 'Responsable del tratamiento', p: [`${brand.legalEntity}, ${brand.country}. Contacto: ${E}.`] },
      { h: 'Qué datos recogemos', p: ['Cuando haces una reserva: tu email, el modelo elegido y el idioma del sitio. En esta fase no pedimos datos de pago.', 'Nuestro proveedor de alojamiento registra datos técnicos mínimos (como la dirección IP) para mantener el sitio seguro y en funcionamiento.'] },
      { h: 'Para qué los usamos', p: ['Para gestionar tu reserva, avisarte cuando abramos los pagos y enviarte novedades del producto. Nunca vendemos tus datos ni los compartimos con fines publicitarios.'] },
      { h: 'Base legal', p: ['Tu consentimiento, dado al enviar el formulario. Puedes retirarlo en cualquier momento.'] },
      { h: 'Encargados del tratamiento', p: ['Alojamiento web: Vercel Inc. Envío de emails: Resend Inc. Ambos están sujetos a acuerdos de tratamiento de datos y a cláusulas contractuales tipo de la UE para transferencias internacionales.'] },
      { h: 'Durante cuánto tiempo', p: ['Hasta que canceles tu reserva o pidas su eliminación y, como máximo, 24 meses después del lanzamiento comercial.'] },
      { h: 'Tus derechos', p: [`Puedes solicitar el acceso, la rectificación, la supresión, la limitación o la portabilidad de tus datos, u oponerte a su tratamiento, escribiendo a ${E}. También puedes reclamar ante la autoridad de protección de datos de tu país (en España, la AEPD).`] },
    ],
  },
  cookies: {
    title: 'Política de Cookies',
    intro: `El sitio de ${B} está hecho para respetar tu privacidad. No usamos cookies publicitarias ni de seguimiento.`,
    sections: [
      { h: 'Qué guardamos en tu dispositivo', p: ['Solo tu preferencia de idioma, guardada en el almacenamiento local del navegador. No se comparte con nadie y puedes borrarla desde los ajustes del navegador.'] },
      { h: 'Cookies de terceros', p: ['No usamos cookies de terceros. Las fuentes y los scripts se sirven desde nuestro propio dominio.'] },
      { h: 'Cambios', p: ['Si en el futuro añadimos herramientas de analítica o marketing, te pediremos el consentimiento antes mediante un aviso en el sitio y actualizaremos esta política.'] },
    ],
  },
  terms: {
    title: 'Condiciones de Reserva',
    intro: `Estas condiciones se aplican a las reservas de robots ${B} hechas a través de este sitio.`,
    sections: [
      { h: 'Qué es una reserva', p: ['Una reserva guarda tu plaza en la cola de producción. Ahora mismo es gratuita y no constituye un contrato de compra.'] },
      { h: 'Depósito', p: ['Cuando abramos los pagos, te invitaremos a pagar un depósito. El depósito es totalmente reembolsable en cualquier momento antes del envío del robot.'] },
      { h: 'Precios, fechas y especificaciones', p: ['Los precios mostrados son precios de lanzamiento estimados. Las fechas de entrega y las especificaciones técnicas son previsiones y pueden cambiar durante el desarrollo. Siempre te avisaremos por email antes de cualquier pago.'] },
      { h: 'Cancelación', p: [`Puedes cancelar tu reserva cuando quieras escribiendo a ${E}. Tras la entrega, conservas el derecho legal de desistimiento de 14 días.`] },
      { h: 'Uso del producto', p: [`Los robots ${B} no son dispositivos médicos ni sustituyen la supervisión de un adulto o la atención profesional.`] },
      { h: 'Ley aplicable', p: ['Estas condiciones se rigen por la ley portuguesa, sin perjuicio de los derechos que te reconozca como consumidor la ley de tu país de residencia.'] },
    ],
  },
};

export default es;
