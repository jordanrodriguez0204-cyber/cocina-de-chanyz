'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    nom: 'Sophie M.',
    event: 'Mariage',
    note: 5,
    texte: 'Le gâteau de mariage était absolument magnifique et délicieux. Tous nos invités ont été bluffés. Chanyz a parfaitement reproduit notre vision. Je recommande les yeux fermés !',
  },
  {
    nom: 'Carlos R.',
    event: 'Anniversaire 60 ans',
    note: 5,
    texte: 'Commande pour les 60 ans de ma maman. Elle était en larmes tellement le gâteau était beau. Le goût était exceptionnel. Merci infiniment !',
  },
  {
    nom: 'Amina T.',
    event: 'Baptême',
    note: 5,
    texte: 'Super réactive, très professionnelle et le résultat est incroyable. Les empanadas étaient délicieuses aussi. On reviendra pour tous nos événements !',
  },
  {
    nom: 'Laura B.',
    event: 'Anniversaire enfant',
    note: 5,
    texte: 'Gâteau Miraculous pour les 7 ans de ma fille. Elle a hurlé de joie en le voyant ! Aussi beau que sur les photos. Un vrai talent artisanal.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="avis" className="py-24 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7B1231]/60 mb-4">
            Ils nous ont fait confiance
          </p>
          <h2
            className="text-[clamp(30px,5vw,52px)] text-[#1A0A0F]"
            style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Ce que disent{' '}
            <span className="italic font-normal">nos clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.nom}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-[#FAF7F2] rounded-3xl p-7 flex flex-col gap-4 border border-[#7B1231]/[0.06] hover:border-[#7B1231]/15 transition-colors"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.note }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[13.5px] text-[#3D2020] leading-relaxed flex-1">
                &ldquo;{t.texte}&rdquo;
              </p>
              <div className="pt-2 border-t border-[#7B1231]/[0.08]">
                <p className="text-[13px] font-bold text-[#1A0A0F]">{t.nom}</p>
                <p className="text-[11px] text-[#7B1231]/60 font-medium mt-0.5">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
