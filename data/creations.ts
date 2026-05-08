export type Categorie = 'mariage' | 'adulte' | 'enfant' | 'evenement';

export interface Creation {
  id: number;
  titre: string;
  categorie: Categorie;
  image: string;
  featured?: boolean;
}

export const creations: Creation[] = [
  /* ── Mariage & Célébrations ── */
  { id: 1,  titre: 'Mariage élégant 3 étages',     categorie: 'mariage',   image: '/images/gateaux/mariage-3-etages.jpg',    featured: true },
  { id: 2,  titre: 'Mariage roses roses',           categorie: 'mariage',   image: '/images/gateaux/mariage-roses-roses.jpg' },
  { id: 3,  titre: 'Mariage rose & or',             categorie: 'mariage',   image: '/images/gateaux/mariage-rose-or.jpg' },
  { id: 4,  titre: 'Mariage fuchsia',               categorie: 'mariage',   image: '/images/gateaux/mariage-fuchsia.jpg' },

  /* ── Anniversaires Adultes ── */
  { id: 5,  titre: 'Blanc & or — roses blanches',   categorie: 'adulte',    image: '/images/gateaux/adulte-blanc-or-roses.jpg', featured: true },
  { id: 6,  titre: 'Blanc & or — cœurs dorés',      categorie: 'adulte',    image: '/images/gateaux/adulte-blanc-or-coeurs.jpg' },
  { id: 7,  titre: 'Feliz Cumpleaños — bougies or', categorie: 'adulte',    image: '/images/gateaux/adulte-bougies-or.jpg' },
  { id: 8,  titre: 'Happy Birthday — roses rouges', categorie: 'adulte',    image: '/images/gateaux/adulte-roses-rouges.jpg' },

  /* ── Anniversaires Enfants ── */
  { id: 9,  titre: 'Minecraft',                     categorie: 'enfant',    image: '/images/gateaux/enfant-minecraft.jpg',    featured: true },
  { id: 10, titre: 'Licorne arc-en-ciel',           categorie: 'enfant',    image: '/images/gateaux/enfant-licorne.jpg' },
  { id: 11, titre: 'Simba — Le Roi Lion',           categorie: 'enfant',    image: '/images/gateaux/enfant-simba.jpg' },
  { id: 12, titre: 'Winnie l\'ourson',              categorie: 'enfant',    image: '/images/gateaux/enfant-winnie.jpg' },
  { id: 13, titre: 'Safari Duarte',                 categorie: 'enfant',    image: '/images/gateaux/enfant-safari-duarte.jpg' },
  { id: 14, titre: 'Safari Gianna',                 categorie: 'enfant',    image: '/images/gateaux/enfant-safari-gianna.jpg' },
  { id: 15, titre: 'Miraculous Ladybug — Maelyss',  categorie: 'enfant',    image: '/images/gateaux/enfant-miraculous.jpg',   featured: true },

  /* ── Événements Spéciaux ── */
  { id: 16, titre: 'Thème Musical',                 categorie: 'evenement', image: '/images/gateaux/evenement-musique.jpg' },
  { id: 17, titre: 'Livre — Iglesia El Alfarero',   categorie: 'evenement', image: '/images/gateaux/evenement-livre-iglesia.jpg' },
  { id: 18, titre: 'Livre — Pastor Manuel',         categorie: 'evenement', image: '/images/gateaux/evenement-livre-pastor.jpg' },
];

export const categories: { id: Categorie | 'tous'; label: string }[] = [
  { id: 'tous',      label: 'Tout voir' },
  { id: 'mariage',   label: 'Mariages' },
  { id: 'adulte',    label: 'Adultes' },
  { id: 'enfant',    label: 'Enfants' },
  { id: 'evenement', label: 'Événements' },
];
