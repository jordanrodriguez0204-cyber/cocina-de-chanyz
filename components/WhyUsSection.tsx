'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const reasons = [
  {
    icon: '🍰',
    titre: '100% fait maison',
    desc: 'Chaque gâteau est préparé à la main, avec des ingrédients frais sélectionnés avec soin.',
  },
  {
    icon: '✨',
    titre: 'Entièrement sur mesure',
    desc: 'Votre vision, votre thème, vos couleurs. Chaque commande est unique et personnalisée.',
  },
  {
    icon: '📦',
    titre: 'Retrait à Genève',
    desc: 'Commandez depuis toute la région lémanique. Retrait sur rendez-vous à Genève.',
  },
  {
    icon: '🇵🇪',
    titre: 'Saveurs authentiques',
    desc: 'Des recettes péruviennes transmises de génération en génération, préparées avec amour.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7B1231]/60 mb-4">
            Notre différence
          </p>
          <h2
            className="text-[clamp(30px,5vw,52px)] text-[#1A0A0F]"
            style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Pourquoi choisir{' '}
            <span className="italic font-normal text-[#7B1231]">Cocina de Chanyz ?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.titre}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group text-center p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] hover:bg-[#7B1231]/5 border border-transparent hover:border-[#7B1231]/10 transition-all duration-300"
            >
              <span className="text-4xl block mb-5">{r.icon}</span>
              <h3 className="text-[15px] font-bold text-[#1A0A0F] mb-3">{r.titre}</h3>
              <p className="text-[13px] text-[#6B5057] leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
