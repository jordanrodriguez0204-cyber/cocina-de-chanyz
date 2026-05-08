import type { MetadataRoute } from 'next';

/* ── Adapter les URLs selon les pages créées pour le client ── */
const BASE_URL = 'https://DOMAINE-CLIENT.ch';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    /*
      Décommenter selon les pages créées :

      Standard / Pro :
      {
        url: `${BASE_URL}/menu`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${BASE_URL}/galerie`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/a-propos`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.7,
      },
      {
        url: `${BASE_URL}/contact`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
      },

      Pro uniquement :
      {
        url: `${BASE_URL}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    */
  ];
}
