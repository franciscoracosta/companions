import { brand } from '../config';
import type { Dict } from './pt';

const B = brand.name;

const es: Dict = {
  meta: {
    title: `${B} · Robots de compañía con inteligencia artificial`,
    description: `${B} es una familia de pequeños robots con IA que acompañan a los abuelos, vigilan a los más pequeños y llenan la casa de alegría. Reservas abiertas.`,
  },
  nav: { lines: 'Robots', how: 'Cómo funciona', roadmap: 'Calendario', faq: 'Preguntas', cta: 'Reservar', language: 'Idioma' },
  hero: {
    badge: 'Prototipo funcional · Reservas abiertas',
    titleA: 'Robots pequeños.',
    titleB: 'Compañía enorme.',
    subtitle: `${B} es una familia de robots con IA, del tamaño de una taza, que acompañan a los abuelos, vigilan a los peques y animan toda la casa.`,
    cta: `Reservar mi ${B}`,
    secondary: 'Conocer los robots',
    note: 'Depósito 100 % reembolsable · Sin compromiso',
  },
  marquee: ['Detección de caídas', 'Recordatorios de medicación', 'Alertas de peligro', 'IA en el propio robot', 'Hecho en Europa', 'Personalidad única', 'Privacidad ante todo', 'Piezas impresas en 3D'],
  lines: {
    eyebrow: 'Una familia, tres misiones',
    title: `Elige el ${B} perfecto para quien más quieres.`,
    subtitle: 'Todos comparten el mismo corazón: un cuerpo que camina y reacciona, ojos expresivos y una IA que aprende los hábitos de casa. Lo que cambia es la misión.',
    from: 'desde',
    items: {
      care: {
        name: `${B} Care`,
        tagline: 'Para los abuelos',
        desc: 'Un compañero paciente que conversa, recuerda la medicación y avisa a la familia si algo va mal.',
        features: ['Detección de caídas e inactividad', 'Recordatorios de medicación y citas', 'Videollamada con un toque', 'Conversación con voz calmada y clara'],
      },
      guard: {
        name: `${B} Guard`,
        tagline: 'Para los más pequeños',
        desc: 'Un compañero de juegos que también es un guardián atento: detecta situaciones de riesgo y te avisa al instante.',
        features: ['Alertas de zonas peligrosas', 'Control del sueño y el llanto del bebé', 'Cuentos y juegos educativos', 'Notificaciones en tiempo real para los padres'],
      },
      play: {
        name: `${B} Play`,
        tagline: 'Para divertirse',
        desc: 'Baila, pone caras, reacciona a tu humor y aprende trucos nuevos. El robot de escritorio con más personalidad del mundo.',
        features: ['Más de 100 expresiones y bailes', 'Reacciona a la voz, el tacto y los gestos', 'Programable con bloques o Python', 'Carcasas personalizables impresas en 3D'],
      },
    },
  },
  videos: {
    eyebrow: `En casa`,
    title: `Mira a ${B} en el día a día.`,
    subtitle: `Tres momentos, tres misiones. Un adelanto de cómo cada ${B} formará parte de tu casa.`,
    label: `Simulación conceptual`,
    note: `Vídeos generados por ordenador para ilustrar el concepto. El producto final puede ser diferente.`,
  },
  how: {
    eyebrow: 'Por dentro',
    title: 'Sencillo por fuera. Muy listo por dentro.',
    subtitle: `Cada ${B} combina robótica de precisión con IA que funciona en el propio robot, para responder rápido y mantener tus datos en casa.`,
    items: [
      { title: 'IA en el propio robot', text: 'Visión y voz procesadas localmente. Las imágenes nunca salen de casa sin permiso.' },
      { title: 'Camina y se equilibra', text: 'Piernas con motores de precisión y equilibrio activo para moverse por casa con naturalidad.' },
      { title: 'Una app para toda la familia', text: 'Alertas, rutinas y ajustes en una sola app, compartida con quien necesita saberlo.' },
      { title: 'Hecho para durar', text: 'Piezas modulares, reemplazables e impresas en 3D. Actualizaciones gratuitas durante toda su vida útil.' },
    ],
  },
  trust: {
    title: 'La confianza viene de fábrica.',
    items: [
      { title: 'Privacidad por defecto', text: 'Procesamiento local, datos cifrados y cumplimiento del RGPD.' },
      { title: 'Diseñado en Europa', text: 'Diseñado y probado en Portugal, con componentes certificados.' },
      { title: 'Reserva sin riesgo', text: 'Depósito reembolsable en cualquier momento hasta el envío.' },
    ],
  },
  roadmap: {
    eyebrow: 'Calendario',
    title: 'Del prototipo a tu casa.',
    steps: [
      { date: '2026', title: 'Prototipo funcional', text: `Los primeros ${B} ya caminan, ven y hablan en nuestro laboratorio.`, done: true },
      { date: 'Ahora', title: 'Reservas abiertas', text: 'Asegura tu plaza en la primera serie con un depósito reembolsable.', done: true },
      { date: 'T2 2027', title: 'Programa beta', text: `Familias seleccionadas prueban ${B} en casa y nos ayudan a pulir cada detalle.`, done: false },
      { date: 'T4 2027', title: 'Primeras entregas', text: `Los primeros ${B} llegan a casa de quienes reservaron primero.`, done: false },
    ],
  },
  preorder: {
    eyebrow: 'Reserva',
    title: 'Asegura tu plaza en la primera serie.',
    subtitle: `Elige tu ${B} y déjanos tu email. Solo pagas el depósito cuando abramos los pagos, y puedes cancelar cuando quieras.`,
    deposit: 'Depósito',
    choose: 'Elegir',
    selected: 'Elegido',
    emailLabel: 'Tu email',
    emailPlaceholder: 'nombre@ejemplo.es',
    button: 'Reservar',
    consent: 'Al continuar, aceptas nuestra',
    consentLink: 'Política de Privacidad',
    success: '¡Gracias! Ya estás en la lista. Pronto te enviaremos novedades.',
    perks: ['Precio de lanzamiento garantizado', 'Acceso prioritario al programa beta', 'Carcasa exclusiva de la primera serie'],
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { q: `¿Cuándo llega ${B}?`, a: 'Las primeras entregas están previstas para el último trimestre de 2027. Quien reserva antes recibe antes, y te iremos contando todo por email.' },
      { q: '¿El depósito es realmente reembolsable?', a: 'Sí. Puedes pedir el reembolso total del depósito en cualquier momento antes del envío, sin preguntas.' },
      { q: `¿${B} graba mi casa?`, a: 'No. La visión y la voz se procesan en el propio robot. Solo llegan a la app alertas y datos mínimos, siempre cifrados, y puedes apagar la cámara cuando quieras.' },
      { q: '¿Necesita internet?', a: 'Las funciones principales funcionan sin conexión. El wifi sirve para enviar alertas a la app, hacer videollamadas y recibir actualizaciones.' },
      { q: `¿${B} Care sustituye a un cuidador?`, a: `No. ${B} es un compañero y un apoyo, no un dispositivo médico. Ayuda a mantener rutinas e informada a la familia, pero no sustituye la atención profesional.` },
      { q: '¿Puedo cambiar de modelo después de reservar?', a: 'Por supuesto. Puedes cambiar de modelo hasta que abramos los pagos finales.' },
    ],
  },
  footer: {
    tagline: 'Robots de compañía para toda la familia.',
    rights: 'Todos los derechos reservados.',
    contact: 'Contacto',
    legal: 'Legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    terms: 'Condiciones de reserva',
    made: 'Hecho con cariño en Portugal',
    back: 'Volver al inicio',
    updated: 'Última actualización',
  },
};

export default es;
