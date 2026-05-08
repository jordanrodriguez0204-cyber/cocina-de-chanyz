import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Cocina de Chanyz — Gâteaux & Spécialités Péruviennes à Genève',
    template: '%s | Cocina de Chanyz',
  },
  description: 'Gâteaux personnalisés sur commande et spécialités péruviennes faites maison à Genève. Mariages, anniversaires, événements. Commandez via WhatsApp.',
  metadataBase: new URL('https://cocina-de-chanyz.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: 'https://cocina-de-chanyz.vercel.app',
    siteName: 'Cocina de Chanyz',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Cocina de Chanyz',
  description: 'Gâteaux personnalisés et spécialités péruviennes faites maison à Genève.',
  url: 'https://cocina-de-chanyz.vercel.app',
  areaServed: 'Genève',
  servesCuisine: ['Péruvienne', 'Pâtisserie'],
  priceRange: '$$',
  currenciesAccepted: 'CHF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={bodyFont.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
