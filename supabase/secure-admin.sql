-- Run this in the Supabase SQL Editor before deploying the authentication changes.
-- Create the Growus administrator as an Auth user first, then use that user's email below.

begin;

do $$
begin
  if not exists (
    select 1 from auth.users
    where id = 'ea369a9f-033a-404f-999b-f4428524c449'
      and email = 'growusdata@gmail.com'
      and email_confirmed_at is not null
      and coalesce(encrypted_password, '') <> ''
  ) then
    raise exception 'The GrowUs administrator is not ready';
  end if;
end;
$$;

create or replace function public.is_growus_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(auth.uid() = 'ea369a9f-033a-404f-999b-f4428524c449'::uuid, false);
$$;

alter table public.site_settings enable row level security;
alter table public.leads enable row level security;

drop policy if exists "Public can read site settings" on public.site_settings;
create policy "Public can read site settings"
on public.site_settings for select using (true);

drop policy if exists "Admins can manage site settings" on public.site_settings;
create policy "Admins can manage site settings"
on public.site_settings for all
using (public.is_growus_admin())
with check (public.is_growus_admin());

drop policy if exists "Public can submit leads" on public.leads;
create policy "Public can submit leads"
on public.leads for insert with check (true);

drop policy if exists "Admins can read leads" on public.leads;
create policy "Admins can read leads"
on public.leads for select using (public.is_growus_admin());

drop policy if exists "Admins can update leads" on public.leads;
create policy "Admins can update leads"
on public.leads for update
using (public.is_growus_admin())
with check (public.is_growus_admin());

drop policy if exists "Admins can delete leads" on public.leads;
create policy "Admins can delete leads"
on public.leads for delete using (public.is_growus_admin());

-- Restrictive policies also constrain older permissive policies.
drop policy if exists "Require admin to create settings" on public.site_settings;
create policy "Require admin to create settings" on public.site_settings
as restrictive for insert with check (public.is_growus_admin());

drop policy if exists "Require admin to edit settings" on public.site_settings;
create policy "Require admin to edit settings" on public.site_settings
as restrictive for update using (public.is_growus_admin())
with check (public.is_growus_admin());

drop policy if exists "Require admin to delete settings" on public.site_settings;
create policy "Require admin to delete settings" on public.site_settings
as restrictive for delete using (public.is_growus_admin());

drop policy if exists "Require admin to view leads" on public.leads;
create policy "Require admin to view leads" on public.leads
as restrictive for select using (public.is_growus_admin());

drop policy if exists "Require admin to edit leads" on public.leads;
create policy "Require admin to edit leads" on public.leads
as restrictive for update using (public.is_growus_admin())
with check (public.is_growus_admin());

drop policy if exists "Require admin to delete leads" on public.leads;
create policy "Require admin to delete leads" on public.leads
as restrictive for delete using (public.is_growus_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'resumes',
  'resumes',
  false,
  5242880,
  array[
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]
)
on conflict (id) do update
set public = false,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Applicants can upload resumes" on storage.objects;
create policy "Applicants can upload resumes"
on storage.objects for insert
with check (bucket_id = 'resumes');

drop policy if exists "Admins can read resumes" on storage.objects;
create policy "Admins can read resumes"
on storage.objects for select
using (bucket_id = 'resumes' and public.is_growus_admin());

drop policy if exists "GrowUs admin uploads assets" on storage.objects;
create policy "GrowUs admin uploads assets" on storage.objects for insert
with check (bucket_id in ('images', 'brochures') and public.is_growus_admin());

drop policy if exists "Require admin for website asset uploads" on storage.objects;
create policy "Require admin for website asset uploads" on storage.objects
as restrictive for insert
with check (bucket_id not in ('images', 'brochures') or public.is_growus_admin());

drop policy if exists "Require admin for website asset updates" on storage.objects;
create policy "Require admin for website asset updates" on storage.objects
as restrictive for update
using (bucket_id not in ('images', 'brochures', 'resumes') or public.is_growus_admin())
with check (bucket_id not in ('images', 'brochures', 'resumes') or public.is_growus_admin());

drop policy if exists "Require admin for website asset deletion" on storage.objects;
create policy "Require admin for website asset deletion" on storage.objects
as restrictive for delete
using (bucket_id not in ('images', 'brochures', 'resumes') or public.is_growus_admin());

drop policy if exists "Require admin to view resumes" on storage.objects;
create policy "Require admin to view resumes" on storage.objects
as restrictive for select
using (bucket_id <> 'resumes' or public.is_growus_admin());

commit;
