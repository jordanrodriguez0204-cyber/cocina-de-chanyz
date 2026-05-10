'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const creations = [
  {
    src: '/images/gateaux/enfant-miraculous.jpg',
    titre: 'Gâteau Miraculous pour Maelyss',
    occasion: 'Anniversaire · Genève',
    tall: true,
  },
  {
    src: '/images/gateaux/adulte-blanc-or-roses.jpg',
    titre: 'Blanc & or — roses blanches',
    occasion: 'Anniversaire élégant',
    tall: false,
  },
  {
    src: '/images/gateaux/mariage-3-etages.jpg',
    titre: 'Mariage 3 étages',
    occasion: 'Mariage à Genève',
    tall: false,
  },
  {
    src: '/images/gateaux/enfant-minecraft.jpg',
    titre: 'Anniversaire Minecraft',
    occasion: 'Anniversaire enfant',
    tall: true,
  },
];

export default function InstagramSection() {
  return (
    <section className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7B1231]/60 mb-4">
            Récemment réalisés
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-[clamp(28px,4vw,48px)] text-[#1A0A0F]"
              style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.1 }}
            >
              Chaque commande est{' '}
              <span className="italic font-normal">unique</span>
            </h2>
            <a
              href="https://www.instagram.com/cocina_de_chanyz"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 text-[13px] font-semibold text-[#7B1231] hover:opacity-70 transition-opacity"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @cocina_de_chanyz
            </a>
          </div>
        </motion.div>

        {/* Grille asymétrique 2×2 — tall alternés */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {creations.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col gap-2"
            >
              <div
                className={`relative w-full overflow-hidden rounded-2xl bg-[#F0EAE2] ${
                  c.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={c.src}
                  alt={c.titre}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </div>
              <div className="px-1">
                <p className="text-[13px] sm:text-[14px] font-semibold text-[#1A0A0F] leading-snug">
                  {c.titre}
                </p>
                <p className="text-[11px] sm:text-[12px] text-[#6B5057]/65 mt-0.5">{c.occasion}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.instagram.com/cocina_de_chanyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-[#7B1231]/25 text-[#7B1231] font-semibold text-[14px] px-7 py-3.5 rounded-full hover:bg-[#7B1231] hover:text-white hover:border-[#7B1231] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Voir toutes les créations sur Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
