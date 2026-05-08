'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    nom: 'Sofia R.',
    ville: 'Genève',
    note: 5,
    texte: 'Le gâteau était magnifique et délicieux, merci encore ❤️ Toute la famille a adoré, on reviendra c\'est sûr !',
  },
  {
    nom: 'Camila T.',
    ville: 'Vernier',
    note: 5,
    texte: 'Todo estaba increíble, se sentía hecho con mucho amor. ¡Gracias Charo, eres una artista! 🎂',
  },
  {
    nom: 'Laura B.',
    ville: 'Carouge',
    note: 5,
    texte: 'Ma fille a hurlé de joie en voyant son gâteau Miraculous ! Aussi beau que délicieux. Merci infiniment Charo 💕',
  },
  {
    nom: 'Carlos M.',
    ville: 'Meyrin',
    note: 5,
    texte: 'El pastel de cumpleaños de mi mamá fue perfecto. Todos preguntaron dónde lo pedimos. ¡Volveremos siempre! 🌟',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="avis" className="py-24 px-5 sm:px-8 bg-[#FBF6EF]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7B1231]/60 mb-4">
            Ils nous font confiance
          </p>
          <h2
            className="text-[clamp(30px,5vw,52px)] text-[#1A0A0F]"
            style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Ce que disent{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>nos clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.nom}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-7 flex flex-col gap-4 shadow-sm border border-[#7B1231]/[0.06] hover:border-[#7B1231]/15 hover:-translate-y-0.5 transition-all duration-300"
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
                <p className="text-[11px] text-[#7B1231]/60 font-medium mt-0.5">{t.ville}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[13px] text-[#6B5057]/60 mt-10 italic"
          style={{ fontFamily: 'var(--font-heading, serif)' }}
        >
          Gracias por su confianza — merci pour votre confiance 🤍
        </motion.p>
      </div>
    </section>
  );
}
