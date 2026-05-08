# Template Client — Atelier Digital Genève

Socle technique prêt à l'emploi pour chaque nouveau site client.  
Stack : **Next.js · TypeScript · Tailwind CSS v4 · Framer Motion · Supabase · Resend**

---

## ⚡ Démarrage rapide

```bash
# 1. Cloner le template
git clone https://github.com/jordanrodriguez0204-cyber/template-client-adg.git nom-du-client
cd nom-du-client

# 2. Réinitialiser Git (nouveau projet client)
rm -rf .git && git init && git add . && git commit -m "init: template ADG"

# 3. Installer les dépendances
npm install

# 4. Variables d'environnement
cp .env.example .env.local
# → Remplir les valeurs dans .env.local

# 5. Lancer en développement
npm run dev
```

---

## 🗂️ Structure du projet

```
├── app/
│   ├── globals.css          ← Design tokens (couleurs, typo)
│   ├── layout.tsx           ← SEO + Analytics + Schema LocalBusiness
│   ├── page.tsx             ← Page d'accueil (sections à construire)
│   ├── sitemap.ts           ← Sitemap automatique
│   ├── robots.ts            ← robots.txt
│   └── api/
│       └── contact/
│           └── route.ts     ← API email (Resend) + DB (Supabase)
├── components/
│   ├── Navbar.tsx           ← Navbar responsive + hamburger animé
│   ├── Footer.tsx           ← Footer 3 colonnes + horaires
│   └── ContactForm.tsx      ← Formulaire de contact complet
├── lib/
│   ├── types.ts             ← Types TypeScript réutilisables
│   └── supabase/
│       ├── client.ts        ← Client navigateur
│       └── server.ts        ← Client serveur (SSR)
└── .env.example             ← Modèle de variables d'environnement
```

---

## 🔧 Personnalisation par client

### 1. Identité visuelle — `app/globals.css`
```css
--color-brand: #VOTRE-COULEUR;   /* Couleur principale du client */
```

### 2. Navbar — `components/Navbar.tsx`
```ts
const brandName = 'NOM DU COMMERCE';
const ctaLabel  = 'Réserver';      // ou "Contact", "Commander"
const ctaHref   = '/contact';
const navLinks  = [ ... ];         // Décommenter selon forfait
```

### 3. Footer — `components/Footer.tsx`
```ts
const COMMERCE_NAME = 'NOM DU COMMERCE';
const COMMERCE_ADDR = 'Rue et numéro, Genève';
const COMMERCE_TEL  = '+41 XX XXX XX XX';
const COMMERCE_MAIL = 'info@DOMAINE-CLIENT.ch';
const horaires      = [ ... ];     // Adapter les heures
```

### 4. API Contact — `app/api/contact/route.ts`
```ts
const CONFIG = {
  clientEmail:  'client@domaine.ch',
  commerceName: 'Nom du Commerce',
  fromEmail:    'noreply@atelierdigitalgeneve.ch',
};
```

### 5. SEO + Schema — `app/layout.tsx`
- Remplacer tous les `TODO:` par les vraies infos du client
- Mettre le bon `G-XXXXXXXXXX` Google Analytics

### 6. Sitemap — `app/sitemap.ts`
- Remplacer `DOMAINE-CLIENT.ch` par le vrai domaine

---

## 🗄️ Supabase — Table `leads`

Créer cette table dans le projet Supabase du client :

```sql
create table leads (
  id          bigserial primary key,
  commerce    text not null,
  name        text not null,
  email       text not null,
  phone       text,
  service     text,
  message     text not null,
  created_at  timestamptz default now()
);

-- Sécurité : seule l'API peut écrire
alter table leads enable row level security;
create policy "Service role only" on leads
  for insert with check (false);
```

> Utiliser la **service role key** dans `route.ts` pour bypass RLS côté serveur.

---

## 📧 Resend — Configuration email

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier le domaine `atelierdigitalgeneve.ch` (une seule fois)
3. Générer une API Key → coller dans `.env.local`
4. L'email client part de `noreply@atelierdigitalgeneve.ch`

---

## 🚀 Déploiement Vercel

```bash
# Lier au projet Vercel du client
vercel link

# Ajouter les variables d'environnement
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add RESEND_API_KEY

# Déployer
vercel --prod
```

---

## 📋 Checklist livraison client

- [ ] `brandName` + `ctaLabel` + `navLinks` remplis
- [ ] Couleur brand dans `globals.css`
- [ ] Infos commerce dans `Footer.tsx`
- [ ] `CONFIG` dans `api/contact/route.ts`
- [ ] Métadonnées SEO dans `layout.tsx`
- [ ] Schema LocalBusiness complet
- [ ] Table `leads` créée dans Supabase
- [ ] Variables `.env.local` configurées
- [ ] `npm run build` sans erreur
- [ ] Domaine personnalisé configuré sur Vercel
- [ ] UptimeRobot configuré (alerte si site down)
- [ ] Google Analytics vérifié (données reçues)

---

*Template maintenu par [Atelier Digital Genève](https://atelierdigitalgeneve.ch)*
