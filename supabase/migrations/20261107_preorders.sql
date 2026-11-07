-- Pre-orders from getwobi.com. Written only by api/preorder.ts via public.submit_preorder.
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

-- No public access: RLS on with no policies; writes go through submit_preorder below.
alter table public.preorders enable row level security;
revoke all on public.preorders from anon, authenticated;

-- The site writes through this function with the publishable key: insert only, nothing readable.
create or replace function public.submit_preorder(
  p_email text, p_model text, p_locale text,
  p_country text default null, p_referrer text default null,
  p_utm_source text default null, p_utm_medium text default null,
  p_utm_campaign text default null, p_user_agent text default null
) returns void
language sql
security definer
set search_path = ''
as $$
  insert into public.preorders (email, model, locale, country, referrer, utm_source, utm_medium, utm_campaign, user_agent)
  values (lower(trim(p_email)), p_model, p_locale, left(p_country, 2), left(p_referrer, 300),
          left(p_utm_source, 100), left(p_utm_medium, 100), left(p_utm_campaign, 100), left(p_user_agent, 300));
$$;
revoke all on function public.submit_preorder from public;
grant execute on function public.submit_preorder to anon, authenticated, service_role;
