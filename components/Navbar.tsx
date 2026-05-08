'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { href: '#gateaux',      label: 'Nos Gâteaux' },
  { href: '#specialites',  label: 'Spécialités' },
  { href: '#commander',    label: 'Commander' },
];

export const WA_NUMBER = '41XXXXXXXXX'; // ← Remplacer par le vrai numéro WhatsApp

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-xl border-b border-[#7B1231]/[0.10] shadow-sm'
            : 'bg-[#7B1231]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[64px]">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center"
            >
              <div className="relative w-[130px] h-[44px]">
                <Image
                  src={scrolled ? '/images/logo-bordeaux.png' : '/images/logo-blanc.png'}
                  alt="Cocina de Chanyz"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </button>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors duration-150 ${
                    scrolled
                      ? 'text-[#6B5057] hover:text-[#7B1231]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* CTA WhatsApp desktop */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Chanyz%2C%20je%20souhaite%20passer%20une%20commande%20%F0%9F%8E%82`}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:inline-flex items-center gap-2 text-[12.5px] font-semibold px-4 py-2 rounded-full hover:-translate-y-0.5 transition-all duration-200 ${
                  scrolled
                    ? 'bg-[#7B1231] text-white hover:bg-[#5C0D23]'
                    : 'bg-white text-[#7B1231] hover:bg-white/90'
                }`}
              >
                <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.847L.057 23.5l5.818-1.524A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.368l-.36-.213-3.714.973.989-3.617-.235-.372A9.818 9.818 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.417 0 9.818 4.4 9.818 9.818 0 5.417-4.401 9.818-9.818 9.818z"/>
                </svg>
                Commander
              </a>

              {/* Hamburger mobile */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 ${scrolled ? 'text-[#7B1231]' : 'text-white'}`}
                aria-label="Menu"
              >
                <div className="w-5 flex flex-col gap-[5px]">
                  <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="block h-[1.5px] bg-current rounded-full" />
                  <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block h-[1.5px] bg-current rounded-full" />
                  <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="block h-[1.5px] bg-current rounded-full" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-[#7B1231]/[0.10] md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="block px-3 py-3 text-[15px] font-medium text-[#1A0A0F] hover:bg-[#7B1231]/5 rounded-xl transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-1 border-t border-[#7B1231]/[0.08]">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Chanyz%2C%20je%20souhaite%20passer%20une%20commande%20%F0%9F%8E%82`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#7B1231] text-white text-[14px] font-semibold px-5 py-3 rounded-xl"
                >
                  Commander sur WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
