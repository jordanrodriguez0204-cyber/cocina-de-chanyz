/* ── Types de base réutilisables pour tous les projets clients ── */

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export interface Lead extends ContactFormData {
  id?: number;
  commerce: string;
  created_at?: string;
}

/* Ajouter ici les types spécifiques au client (MenuItem, Product, etc.) */
