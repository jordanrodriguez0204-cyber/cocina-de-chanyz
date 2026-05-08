'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { WA_NUMBER } from './Navbar';

const plats = [
  {
    nom: 'Empanadas maison',
    description: 'Feuilletées et dorées à souhait, garnies à la viande ou au fromage. Parfaites pour vos apéritifs et événements.',
    image: '/images/plats/empanadas.jpg',
    disponible: true,
    tag: 'Disponible',
  },
  {
    nom: 'Ceviche péruvien',
    description: 'La recette traditionnelle de Lima — poisson frais, citron vert, piment et coriandre. Sur commande.',
    image: null,
    disponible: false,
    tag: 'Bientôt',
  },
  {
    nom: 'Lomo Saltado',
    description: 'Le plat emblématique péruvien. Bœuf sauté aux oignons, tomates et frites, servi avec du riz.',
    image: null,
    disponible: false,
    tag: 'Bientôt',
  },
  {
    nom: 'Alfajores',
    description: 'Biscuits sablés fourrés au dulce de leche. Une douceur péruvienne incontournable.',
    image: null,
    disponible: false,
    tag: 'Bientôt',
  },
];

export default function SpecialitesPeru() {
  return (
    <section id="specialites" className="py-28 px-5 sm:px-8 bg-[#7B1231] relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.04] pointer-events-none select-none">
        <Image src="/images/masque-inca.png" alt="" width={500} height={500} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/40 mb-4">
            La cuisine du Pérou
          </p>
          <h2
            className="text-[clamp(30px,5vw,56px)] text-white"
            style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.05 }}
          >
            Spécialités<br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>péruviennes</span>
          </h2>
          <p className="text-[15px] text-white/55 mt-5 max-w-sm leading-relaxed">
            Des recettes transmises de génération en génération, préparées avec les saveurs authentiques du Pérou.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plats.map((plat, i) => (
            <motion.div
              key={plat.nom}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white/[0.08] border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {plat.disponible && plat.image ? (
                  <Image
                    src={plat.image}
                    alt={plat.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    <span className="text-4xl opacity-30">🍽️</span>
                  </div>
                )}
                <span className={`absolute top-3 right-3 text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full ${
                  plat.disponible
                    ? 'bg-[#C9A84C] text-white'
                    : 'bg-white/15 text-white/60 border border-white/15'
                }`}>
                  {plat.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-[15px] mb-2">{plat.nom}</h3>
                <p className="text-white/50 text-[12.5px] leading-relaxed">{plat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 pt-10 border-t border-white/10 text-center sm:text-left"
        >
          <p className="text-white/60 text-[15px] max-w-sm leading-relaxed">
            Nous préparons en grande quantité pour vos événements et apéritifs.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Chanyz%2C%20je%20souhaite%20commander%20des%20sp%C3%A9cialit%C3%A9s%20p%C3%A9ruviennes%20%F0%9F%AB%94`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 shrink-0 w-full sm:w-auto bg-white text-[#7B1231] text-[14px] font-bold px-7 py-3.5 rounded-full hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-black/20"
          >
            Commander sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
