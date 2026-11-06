-- ============================================================================
-- SUPABASE POSTGRESQL SCHEMA FOR ALFIN DEVELOPER PORTFOLIO
-- Tables: contact_messages, portfolio_projects, technical_skills
-- Row Level Security (RLS) Enabled with Anonymous Insert/Read Policies
-- ============================================================================

-- 1. Tabel Pesan Kontak (Contact Form Messages)
create table if not exists public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Aktifkan Row Level Security (RLS)
alter table public.contact_messages enable row level security;

-- Izinkan publik/anon untuk mengirim pesan
create policy "Allow anonymous insert into contact_messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- Hanya admin/authenticated yang dapat membaca pesan masuk
create policy "Allow authenticated users to select contact_messages"
  on public.contact_messages
  for select
  to authenticated
  using (true);

-- 2. Optional: Tabel Portofolio Proyek (Jika ingin dinamis dari Supabase)
create table if not exists public.portfolio_projects (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique,
  category text,
  description text not null,
  image_url text,
  tech_stack text[] default '{}',
  github_url text,
  live_url text,
  is_featured boolean default true,
  display_order int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.portfolio_projects enable row level security;

-- Izinkan publik membaca data proyek
create policy "Allow public read on portfolio_projects"
  on public.portfolio_projects
  for select
  to anon, authenticated
  using (true);

-- 3. Optional: Tabel Skills (Jika ingin dinamis dari Supabase)
create table if not exists public.technical_skills (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  category text not null, -- 'frontend', 'backend', 'mobile_iot', 'tools'
  proficiency int default 85,
  icon_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.technical_skills enable row level security;

create policy "Allow public read on technical_skills"
  on public.technical_skills
  for select
  to anon, authenticated
  using (true);

