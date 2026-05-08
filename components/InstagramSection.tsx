'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const posts = [
  { src: '/images/gateaux/mariage-3-etages.jpg',      alt: 'Mariage 3 étages' },
  { src: '/images/gateaux/adulte-blanc-or-roses.jpg',  alt: 'Blanc & or roses' },
  { src: '/images/gateaux/enfant-miraculous.jpg',      alt: 'Miraculous' },
  { src: '/images/gateaux/adulte-bougies-or.jpg',      alt: 'Bougies dorées' },
  { src: '/images/gateaux/mariage-fuchsia.jpg',        alt: 'Mariage fuchsia' },
  { src: '/images/gateaux/enfant-minecraft.jpg',       alt: 'Minecraft' },
];

export default function InstagramSection() {
  return (
    <section className="py-24 px-5 sm:px-8 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7B1231]/60 mb-4">
            Nos créations
          </p>
          <h2
            className="text-[clamp(28px,4vw,48px)] text-[#1A0A0F]"
            style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Suivez nos créations{' '}
            <span className="italic font-normal">sur Instagram</span>
          </h2>
          <p className="text-[14px] text-[#6B5057]/70 mt-3 tracking-wide">@cocina_de_chanyz</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 mb-10"
        >
          {posts.map((post, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl bg-[#F0EAE2] cursor-pointer"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                sizes="(max-width: 640px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-[#7B1231]/0 group-hover:bg-[#7B1231]/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/cocina_de_chanyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-[#7B1231]/25 text-[#7B1231] font-semibold text-[14px] px-7 py-3.5 rounded-full hover:bg-[#7B1231] hover:text-white hover:border-[#7B1231] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Voir sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
