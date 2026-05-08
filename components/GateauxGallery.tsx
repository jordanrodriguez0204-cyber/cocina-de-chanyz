'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { creations, categories } from '@/data/creations';
import type { Categorie } from '@/data/creations';

export default function GateauxGallery() {
  const [active, setActive] = useState<Categorie | 'tous'>('tous');

  const filtered = active === 'tous'
    ? creations
    : creations.filter((c) => c.categorie === active);

  return (
    <section id="gateaux" className="py-24 px-5 sm:px-8 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          {/* Masque inca petit */}
          <div className="flex justify-center mb-5">
            <Image src="/images/masque-inca.png" alt="" width={48} height={48} className="opacity-60" />
          </div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7B1231]/60 mb-3">
            Nos réalisations
          </p>
          <h2 className="text-[clamp(32px,5vw,52px)] font-bold text-[#1A0A0F]">
            Chaque gâteau,<br className="hidden sm:block" /> une histoire unique
          </h2>
          <p className="text-[15px] text-[#6B5057] mt-4 max-w-md mx-auto">
            Tous nos gâteaux sont réalisés sur commande, avec des ingrédients frais et beaucoup d&apos;amour.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'bg-[#7B1231] text-white shadow-sm'
                  : 'bg-white text-[#6B5057] border border-[#7B1231]/15 hover:border-[#7B1231]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((creation) => (
              <motion.div
                key={creation.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-2xl bg-[#F0EAE2] ${
                  creation.featured ? 'md:col-span-1 row-span-1' : ''
                }`}
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={creation.image}
                  alt={creation.titre}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label */}
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-[12px] font-semibold leading-tight">{creation.titre}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-[14px] text-[#6B5057] mb-4">
            Vous avez un thème en tête ? On le réalise pour vous.
          </p>
          <button
            onClick={() => document.querySelector('#commander')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-[#7B1231] text-white text-[13px] font-semibold px-6 py-3 rounded-full hover:bg-[#5C0D23] transition-colors"
          >
            Demander un devis gratuit →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
