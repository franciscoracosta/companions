// Resend webhook: forwards mail received at @getwobi.com (e.g. hello@) to the team's inbox.
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const payload = await request.text();
  const id = request.headers.get('svix-id');
  const timestamp = request.headers.get('svix-timestamp');
  const signature = request.headers.get('svix-signature');
  if (!id || !timestamp || !signature || !process.env.RESEND_WEBHOOK_SECRET) {
    return new Response('Missing headers', { status: 400 });
  }

  let event: { type: string; data: { email_id: string; to?: string[] } };
  try {
    event = resend.webhooks.verify({ payload, headers: { id, timestamp, signature }, webhookSecret: process.env.RESEND_WEBHOOK_SECRET }) as typeof event;
  } catch {
    return new Response('Invalid signature', { status: 401 });
  }

  const forTeam = event.data.to?.some((a) => a.toLowerCase().endsWith('@getwobi.com')) ?? true;
  if (event.type !== 'email.received' || !forTeam || !process.env.PREORDER_NOTIFY_TO) {
    return Response.json({ skipped: true });
  }

  const { error } = await resend.emails.receiving.forward({
    emailId: event.data.email_id,
    to: process.env.PREORDER_NOTIFY_TO,
    from: 'Wobi <hello@getwobi.com>',
  });
  if (error) {
    console.error('forward failed', error);
    return new Response('Forward failed', { status: 500 });
  }
  return Response.json({ forwarded: true });
}
