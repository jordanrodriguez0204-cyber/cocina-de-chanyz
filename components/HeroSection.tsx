'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { WA_NUMBER } from './Navbar';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">

      {/* Photo de fond */}
      <div className="absolute inset-0">
        <Image
          src="/images/gateaux/mariage-3-etages.jpg"
          alt="Gâteau de mariage Cocina de Chanyz"
          fill
          className="object-cover object-center scale-[1.03]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        <div className="absolute inset-0 bg-[#7B1231]/15" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 max-w-3xl mx-auto pt-24 pb-16">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="relative w-[220px] sm:w-[280px] h-[70px] sm:h-[90px] mx-auto">
            <Image src="/images/logo-blanc.png" alt="Cocina de Chanyz" fill className="object-contain" priority />
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {['Fait maison', 'Genève 🇨🇭', 'Preparado con amor 🤍'].map((badge) => (
            <span
              key={badge}
              className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] font-semibold tracking-wide px-3.5 py-1.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="text-[clamp(36px,7vw,76px)] text-white mb-5"
          style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.05 }}
        >
          Pâtisseries & plats<br />
          <span style={{ fontStyle: 'italic', fontWeight: 400 }}>faits maison</span> à Genève
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/75 text-[16px] sm:text-[18px] leading-relaxed mb-10 max-w-lg"
        >
          Préparés avec soin pour vos moments spéciaux.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
        >
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Chanyz%2C%20je%20souhaite%20passer%20une%20commande%20%F0%9F%8E%82`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold text-[15px] px-8 py-4 rounded-2xl hover:bg-[#1DA851] hover:-translate-y-0.5 transition-all duration-200 shadow-2xl shadow-black/30"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.847L.057 23.5l5.818-1.524A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.368l-.36-.213-3.714.973.989-3.617-.235-.372A9.818 9.818 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.417 0 9.818 4.4 9.818 9.818 0 5.417-4.401 9.818-9.818 9.818z"/>
            </svg>
            Passer une commande
          </a>
          <button
            onClick={() => document.querySelector('#gateaux')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2.5 bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold text-[14px] px-7 py-4 rounded-2xl hover:bg-white/25 transition-all duration-200"
          >
            Voir le menu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
