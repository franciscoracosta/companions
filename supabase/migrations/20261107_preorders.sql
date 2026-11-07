-- Pre-orders from getwobi.com. Written only by api/preorder.ts with the service role key.
create table public.preorders (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  email text not null check (char_length(email) <= 254),
  model text not null check (model in ('care', 'guard', 'play')),
  locale text not null check (locale in ('pt', 'br', 'en', 'es', 'fr', 'de', 'it')),
  country text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  user_agent text,
  status text not null default 'reserved' check (status in ('reserved', 'cancelled', 'converted'))
);

create index preorders_email_idx on public.preorders (lower(email));
create index preorders_created_at_idx on public.preorders (created_at desc);

-- No public access: RLS on with no policies; the service role bypasses RLS.
alter table public.preorders enable row level security;
revoke all on public.preorders from anon, authenticated;
