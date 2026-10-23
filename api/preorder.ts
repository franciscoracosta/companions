// Pre-order form handler (Vercel Function). Saves the contact in Resend and sends two emails:
// a confirmation to the customer and a notification to the team.
const RESEND = 'https://api.resend.com';
const FROM = 'Wobi <hello@getwobi.com>';
const MODELS = { care: 'Wobi Care', guard: 'Wobi Guard', play: 'Wobi Play' } as const;
type Model = keyof typeof MODELS;

const copy: Record<string, { subject: string; hi: string; body: (m: string) => string; next: string; bye: string }> = {
  pt: { subject: 'Está na lista do Wobi', hi: 'Olá!', body: (m) => `Obrigado por reservar o seu lugar na primeira série do ${m}.`, next: 'Ainda não cobrámos nada. Vamos escrever-lhe quando abrirmos os pagamentos e sempre que houver novidades.', bye: 'Até breve,\nA equipa Wobi' },
  br: { subject: 'Você está na lista do Wobi', hi: 'Oi!', body: (m) => `Obrigado por reservar seu lugar na primeira série do ${m}.`, next: 'Ainda não cobramos nada. Vamos escrever para você quando abrirmos os pagamentos e sempre que houver novidades.', bye: 'Até breve,\nEquipe Wobi' },
  en: { subject: "You're on the Wobi list", hi: 'Hi!', body: (m) => `Thanks for reserving your spot in the first ${m} batch.`, next: "We haven't charged anything yet. We'll email you when payments open and whenever there's news.", bye: 'Talk soon,\nThe Wobi team' },
  es: { subject: 'Ya estás en la lista de Wobi', hi: '¡Hola!', body: (m) => `Gracias por reservar tu plaza en la primera serie de ${m}.`, next: 'Todavía no hemos cobrado nada. Te escribiremos cuando abramos los pagos y siempre que haya novedades.', bye: 'Hasta pronto,\nEl equipo Wobi' },
  fr: { subject: 'Vous êtes sur la liste Wobi', hi: 'Bonjour !', body: (m) => `Merci d'avoir réservé votre place dans la première série de ${m}.`, next: "Nous n'avons encore rien prélevé. Nous vous écrirons à l'ouverture des paiements et à chaque nouveauté.", bye: 'À bientôt,\nL’équipe Wobi' },
  de: { subject: 'Sie stehen auf der Wobi-Liste', hi: 'Hallo!', body: (m) => `Danke, dass Sie sich einen Platz in der ersten ${m}-Serie gesichert haben.`, next: 'Wir haben noch nichts abgebucht. Wir melden uns, sobald die Zahlungen öffnen, und bei allen Neuigkeiten.', bye: 'Bis bald,\nIhr Wobi-Team' },
  it: { subject: 'Sei nella lista Wobi', hi: 'Ciao!', body: (m) => `Grazie per aver prenotato il tuo posto nella prima serie di ${m}.`, next: "Non abbiamo ancora addebitato nulla. Ti scriveremo all'apertura dei pagamenti e a ogni novità.", bye: 'A presto,\nIl team Wobi' },
};

const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } });

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

async function resend(path: string, method: string, body?: object) {
  return fetch(`${RESEND}${path}`, {
    method,
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, { ok: false });
  }

  // Honeypot: bots fill every field.
  if (data.company) return json(200, { ok: true });

  const email = String(data.email ?? '').trim().toLowerCase();
  const model = String(data.model ?? '') as Model;
  const locale = copy[String(data.locale)] ? String(data.locale) : 'en';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !(model in MODELS)) {
    return json(400, { ok: false });
  }

  const properties = { wobi_model: model, wobi_locale: locale };
  const created = await resend('/contacts', 'POST', { email, unsubscribed: false, properties });
  if (!created.ok) {
    // Already a contact: update what they picked instead.
    const updated = await resend(`/contacts/${encodeURIComponent(email)}`, 'PATCH', { properties });
    if (!updated.ok) {
      console.error('resend contact', created.status, await created.text(), updated.status, await updated.text());
      return json(502, { ok: false });
    }
  }
  if (process.env.RESEND_SEGMENT_ID) {
    await resend(`/contacts/${encodeURIComponent(email)}/segments/${process.env.RESEND_SEGMENT_ID}`, 'POST');
  }

  const c = copy[locale];
  const name = MODELS[model];
  const text = `${c.hi}\n\n${c.body(name)}\n\n${c.next}\n\n${c.bye}`;
  const html = `<div style="font-family:system-ui,sans-serif;font-size:16px;line-height:1.6;color:#1b1a2e">${text
    .split('\n\n')
    .map((p) => `<p>${escape(p).replace(/\n/g, '<br>')}</p>`)
    .join('')}</div>`;

  const sends = [resend('/emails', 'POST', { from: FROM, to: email, subject: c.subject, text, html })];
  if (process.env.PREORDER_NOTIFY_TO) {
    sends.push(
      resend('/emails', 'POST', {
        from: FROM,
        to: process.env.PREORDER_NOTIFY_TO,
        reply_to: email,
        subject: `Nova pré-encomenda: ${name}`,
        text: `Email: ${email}\nModelo: ${name}\nLíngua: ${locale}`,
      }),
    );
  }
  const [confirmation] = await Promise.all(sends);
  if (!confirmation.ok) console.error('resend email', confirmation.status, await confirmation.text());

  return json(200, { ok: true });
}
