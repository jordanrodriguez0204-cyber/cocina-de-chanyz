'use client';

import { motion } from 'framer-motion';
import { WA_NUMBER } from './Navbar';

export default function NotreHistoireSection() {
  return (
    <section className="py-28 px-5 sm:px-8 bg-[#FBF6EF]">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7B1231]/60 mb-4">
            Nuestra historia
          </p>
          <h2
            className="text-[clamp(30px,5vw,52px)] text-[#1A0A0F]"
            style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Bonjour, je suis{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#7B1231' }}>Charo !</span>
            <span className="ml-2">👋</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Carte portrait / décorative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl bg-[#7B1231] p-8 sm:p-10 text-white relative overflow-hidden">
              {/* Motif décoratif */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/[0.03] rounded-full translate-y-1/2 -translate-x-1/2" />

              <p
                className="text-[clamp(28px,4vw,42px)] text-white/90 leading-snug relative z-10 mb-6"
                style={{ fontFamily: 'var(--font-heading, serif)', fontStyle: 'italic', fontWeight: 400 }}
              >
                &ldquo;Cada pastel<br />es hecho con<br />el corazón.&rdquo;
              </p>
              <div className="border-t border-white/20 pt-5 relative z-10">
                <p className="text-white font-bold text-[15px]">Charo Pinedo</p>
                <p className="text-white/50 text-[12px] mt-1">Pâtissière · Genève</p>
                <p className="text-white/40 text-[11px] mt-0.5 tracking-wide uppercase">Née à Lima, Pérou 🇵🇪</p>
              </div>
            </div>

            {/* Badge flottant */}
            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-[#C9A84C] text-white text-[11px] font-bold px-4 py-2 rounded-full shadow-lg">
              Hecho en casa ✨
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-[15px] sm:text-[16px] text-[#3D2020] leading-relaxed">
              Je m&apos;appelle <strong>Charo Pinedo</strong>, je suis née à Lima au Pérou et installée à Genève depuis des années. La cuisine, c&apos;est ma façon de partager l&apos;amour avec les gens que j&apos;aime — et avec vous ! 🍰
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#3D2020] leading-relaxed">
              Depuis petite, j&apos;ai grandi entourée des parfums du marché, des recettes de ma mamá, et de la fierté de la cuisine péruvienne. Ici à Genève, j&apos;ai eu envie de partager ce petit bout de chez moi.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#3D2020] leading-relaxed">
              Chaque gâteau que je prépare est pensé pour vous — votre histoire, votre famille, votre moment spécial. Je mets beaucoup de soin dans chaque détail, et encore plus de cœur dans chaque saveur. 💕
            </p>

            <div className="bg-white rounded-2xl p-5 border border-[#7B1231]/10 mt-6">
              <p
                className="text-[#7B1231] text-[15px] leading-relaxed"
                style={{ fontFamily: 'var(--font-heading, serif)', fontStyle: 'italic' }}
              >
                &ldquo;Que vous commandiez pour un mariage, un anniversaire ou juste parce que vous avez envie d&apos;un bon gâteau — je suis là, et je suis ravie de cuisiner pour vous !&rdquo;
              </p>
              <p className="text-[#6B5057] text-[13px] mt-3 font-semibold">— Charo 🤍</p>
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Charo%2C%20je%20souhaite%20passer%20une%20commande%20%F0%9F%8E%82`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7B1231] font-semibold text-[14px] hover:gap-3 transition-all duration-200 mt-2"
            >
              Écrire directement à Charo →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
