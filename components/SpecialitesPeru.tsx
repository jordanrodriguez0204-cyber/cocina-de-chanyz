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
  },
  {
    nom: 'Ceviche péruvien',
    description: 'La recette traditionnelle de Lima — poisson frais, citron vert, piment et coriandre. Sur commande.',
    image: '/images/plats/ceviche.jpg',
    disponible: false,
  },
  {
    nom: 'Lomo Saltado',
    description: 'Le plat emblématique péruvien. Bœuf sauté aux oignons, tomates et frites, servi avec du riz.',
    image: '/images/plats/lomo-saltado.jpg',
    disponible: false,
  },
  {
    nom: 'Alfajores',
    description: 'Biscuits sablés fourrés au dulce de leche, roulés dans la noix de coco. Une douceur péruvienne incontournable.',
    image: '/images/plats/alfajores.jpg',
    disponible: false,
  },
];

export default function SpecialitesPeru() {
  return (
    <section id="specialites" className="py-24 px-5 sm:px-8 bg-[#7B1231]">
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-5">
            <Image src="/images/masque-inca-outline.png" alt="" width={52} height={52} className="opacity-50" />
          </div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-3">
            La cuisine du Pérou
          </p>
          <h2 className="text-[clamp(30px,5vw,50px)] font-bold text-white">
            Spécialités péruviennes
          </h2>
          <p className="text-[15px] text-white/60 mt-4 max-w-md mx-auto">
            Des recettes transmises de génération en génération, préparées avec les épices et saveurs authentiques du Pérou.
          </p>
        </motion.div>

        {/* Grille des plats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plats.map((plat, i) => (
            <motion.div
              key={plat.nom}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {plat.disponible ? (
                  <Image
                    src={plat.image}
                    alt={plat.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-3xl">🍽️</span>
                      <p className="text-white/30 text-[11px] mt-2 font-medium">Photo bientôt</p>
                    </div>
                  </div>
                )}
                {!plat.disponible && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/15 backdrop-blur-sm text-white/70 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/15">
                      Bientôt
                    </span>
                  </div>
                )}
              </div>

              {/* Texte */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-[15px] mb-2">{plat.nom}</h3>
                <p className="text-white/55 text-[12.5px] leading-relaxed">{plat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bande commande */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-[14px] mb-5">
            Vous souhaitez commander pour un événement ? Nous préparons en grande quantité sur demande.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Chanyz%2C%20je%20souhaite%20commander%20des%20sp%C3%A9cialit%C3%A9s%20p%C3%A9ruviennes%20%F0%9F%AB%94`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#7B1231] text-[13px] font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Commander sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
