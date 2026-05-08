'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { creations, categories } from '@/data/creations';
import type { Categorie } from '@/data/creations';
import { WA_NUMBER } from './Navbar';

const aspectRatios = ['aspect-[3/4]', 'aspect-[4/5]', 'aspect-[2/3]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-[3/4]'];

export default function GateauxGallery() {
  const [active, setActive] = useState<Categorie | 'tous'>('tous');

  const filtered = active === 'tous'
    ? creations
    : creations.filter((c) => c.categorie === active);

  return (
    <section id="gateaux" className="py-28 px-5 sm:px-8 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7B1231]/60 mb-4">
            Nos réalisations
          </p>
          <h2
            className="text-[clamp(30px,5vw,52px)] text-[#1A0A0F]"
            style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Chaque gâteau,<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>une histoire unique</span>
          </h2>
          <p className="text-[15px] text-[#6B5057] mt-5 max-w-md mx-auto">
            Tous nos gâteaux sont réalisés sur commande, avec des ingrédients frais et beaucoup d&apos;amour.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                active === cat.id
                  ? 'bg-[#7B1231] text-white shadow-md shadow-[#7B1231]/20'
                  : 'bg-white text-[#6B5057] border border-[#7B1231]/15 hover:border-[#7B1231]/40 hover:text-[#7B1231]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Galerie masonry */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="columns-2 md:columns-3 gap-3 sm:gap-4"
          >
            {filtered.map((creation, i) => (
              <div
                key={creation.id}
                className="break-inside-avoid mb-3 sm:mb-4 group relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#F0EAE2] cursor-pointer"
              >
                <div className={`relative w-full ${aspectRatios[i % aspectRatios.length]}`}>
                  <Image
                    src={creation.image}
                    alt={creation.titre}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-[13px] font-semibold leading-snug">{creation.titre}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA bas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-[15px] text-[#6B5057] mb-6">
            Vous avez un thème en tête ? Décrivez-le nous, on le réalise.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Chanyz%2C%20j%27ai%20une%20id%C3%A9e%20de%20g%C3%A2teau%20%F0%9F%8E%82`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#7B1231] text-white text-[14px] font-bold px-7 py-3.5 rounded-full hover:bg-[#5C0D23] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#7B1231]/20"
          >
            Demander un devis gratuit →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
