'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { WA_NUMBER } from './Navbar';

const plats = [
  {
    nom: 'Empanadas maison',
    description: 'Feuilletées et dorées à souhait, garnies à la viande ou au fromage. Parfaites pour vos apéritifs et événements — préparées en grande quantité sur commande.',
    image: '/images/plats/empanadas.jpg',
    tag: 'Disponible',
    tagColor: 'bg-[#C9A84C]',
  },
  {
    nom: 'Causa Limeña',
    description: "Purée de pomme de terre assaisonnée au citron et au piment jaune, garnie au thon ou au poulet. Un incontournable de la cuisine péruvienne.",
    image: null,
    tag: 'Sur commande',
    tagColor: 'bg-white/20',
  },
  {
    nom: 'Tamales',
    description: "Préparés à la vapeur dans des feuilles de bananier, fourrés au porc ou au poulet. Une recette transmise de génération en génération.",
    image: null,
    tag: 'Sur commande',
    tagColor: 'bg-white/20',
  },
  {
    nom: 'Alfajores',
    description: 'Biscuits sablés fondants fourrés au dulce de leche. Une douceur maison qui disparaît toujours trop vite.',
    image: null,
    tag: 'Sur commande',
    tagColor: 'bg-white/20',
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
            Cuisine du Pérou
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {plats.map((plat, i) => (
            <motion.div
              key={plat.nom}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-white/[0.07] border border-white/10 hover:border-white/25 hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row"
            >
              {/* Image / placeholder */}
              <div className="relative sm:w-48 shrink-0 aspect-[4/3] sm:aspect-auto overflow-hidden">
                {plat.image ? (
                  <Image
                    src={plat.image}
                    alt={plat.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                ) : (
                  <div className="w-full h-full bg-white/[0.06] flex items-center justify-center min-h-[140px]">
                    <span className="text-5xl opacity-25">🍽️</span>
                  </div>
                )}
              </div>

              {/* Texte */}
              <div className="p-6 flex flex-col justify-center gap-2">
                <span className={`self-start text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full text-white ${plat.tagColor}`}>
                  {plat.tag}
                </span>
                <h3 className="text-white font-bold text-[16px]">{plat.nom}</h3>
                <p className="text-white/55 text-[13px] leading-relaxed">{plat.description}</p>
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
