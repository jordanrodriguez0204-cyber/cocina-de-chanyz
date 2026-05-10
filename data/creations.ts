export type Categorie = 'mariage' | 'adulte' | 'enfant' | 'evenement';

export interface Creation {
  id: number;
  titre: string;
  categorie: Categorie;
  image: string;
  occasion?: string;
  featured?: boolean;
}

export const creations: Creation[] = [
  /* ── Mariage & Célébrations ── */
  { id: 1,  titre: 'Mariage élégant 3 étages',     categorie: 'mariage',   image: '/images/gateaux/mariage-3-etages.jpg',       featured: true, occasion: 'Réalisé pour un mariage à Genève — 3 étages sur mesure' },
  { id: 4,  titre: 'Mariage fuchsia',               categorie: 'mariage',   image: '/images/gateaux/mariage-fuchsia.jpg',                         occasion: 'Mariage plein de couleurs — décoration personnalisée' },

  /* ── Anniversaires Adultes ── */
  { id: 5,  titre: 'Blanc & or — roses blanches',   categorie: 'adulte',    image: '/images/gateaux/adulte-blanc-or-roses.jpg',  featured: true, occasion: 'Anniversaire élégant — thème blanc & or avec roses' },
  { id: 6,  titre: 'Blanc & or — cœurs dorés',      categorie: 'adulte',    image: '/images/gateaux/adulte-blanc-or-coeurs.jpg',                  occasion: 'Surprise d\'anniversaire — cœurs et détails dorés' },
  { id: 7,  titre: 'Feliz Cumpleaños — bougies or', categorie: 'adulte',    image: '/images/gateaux/adulte-bougies-or.jpg',                       occasion: 'Célébration en famille — bougies dorées artisanales' },
  { id: 8,  titre: 'Happy Birthday — roses rouges', categorie: 'adulte',    image: '/images/gateaux/adulte-roses-rouges.jpg',                     occasion: 'Anniversaire fleuri — roses rouges faites à la main' },

  /* ── Anniversaires Enfants ── */
  { id: 9,  titre: 'Minecraft',                     categorie: 'enfant',    image: '/images/gateaux/enfant-minecraft.jpg',       featured: true, occasion: 'Anniversaire enfant — thème Minecraft sur commande' },
  { id: 11, titre: 'Simba — Le Roi Lion',           categorie: 'enfant',    image: '/images/gateaux/enfant-simba.jpg',                            occasion: 'Fête d\'anniversaire — Le Roi Lion en pâte à sucre' },
  { id: 13, titre: 'Safari Duarte',                 categorie: 'enfant',    image: '/images/gateaux/enfant-safari-duarte.jpg',                    occasion: 'Anniversaire Safari pour Duarte' },
  { id: 14, titre: 'Safari Gianna',                 categorie: 'enfant',    image: '/images/gateaux/enfant-safari-gianna.jpg',                    occasion: 'Anniversaire Safari pour Gianna' },
  { id: 15, titre: 'Miraculous Ladybug — Maelyss',  categorie: 'enfant',    image: '/images/gateaux/enfant-miraculous.jpg',      featured: true, occasion: 'Gâteau Miraculous pour Maelyss — commande spéciale' },

  /* ── Événements Spéciaux ── */
  { id: 16, titre: 'Thème Musical',                 categorie: 'evenement', image: '/images/gateaux/evenement-musique.jpg',                       occasion: 'Événement musical — création unique sur commande' },
  { id: 17, titre: 'Livre — Iglesia El Alfarero',   categorie: 'evenement', image: '/images/gateaux/evenement-livre-iglesia.jpg',                 occasion: 'Commande pour l\'Iglesia El Alfarero' },
  { id: 18, titre: 'Livre — Pastor Manuel',         categorie: 'evenement', image: '/images/gateaux/evenement-livre-pastor.jpg',                  occasion: 'Réalisé pour le Pastor Manuel — occasion spéciale' },
];

export const categories: { id: Categorie | 'tous'; label: string }[] = [
  { id: 'tous',      label: 'Tout voir' },
  { id: 'mariage',   label: 'Mariages' },
  { id: 'adulte',    label: 'Adultes' },
  { id: 'enfant',    label: 'Enfants' },
  { id: 'evenement', label: 'Événements' },
];
