'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { WA_NUMBER } from './Navbar';

export default function CTAFinalSection() {
  return (
    <section className="py-28 px-5 sm:px-8 bg-[#7B1231] relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
        <Image src="/images/masque-inca.png" alt="" width={500} height={500} className="w-[60vw] max-w-[500px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-6">
            <Image src="/images/icon-blanc.png" alt="" width={72} height={72} className="opacity-30" />
          </div>
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/40 mb-6">
            Commencez maintenant
          </p>
          <h2
            className="text-[clamp(34px,6vw,64px)] text-white mb-6"
            style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.05 }}
          >
            Un gâteau aussi beau<br />
            <span className="italic font-normal">que délicieux</span>
          </h2>
          <p className="text-[16px] text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
            Décrivez-nous votre idée sur WhatsApp. Nous vous répondons sous 24h avec un devis gratuit.
          </p>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Chanyz%2C%20je%20voudrais%20commander%20un%20g%C3%A2teau%20%F0%9F%8E%82`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-[#7B1231] font-bold text-[15px] sm:text-[17px] px-6 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-white/95 hover:-translate-y-1 transition-all duration-200 shadow-2xl shadow-black/20"
          >
            <svg className="w-6 h-6 shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.847L.057 23.5l5.818-1.524A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.368l-.36-.213-3.714.973.989-3.617-.235-.372A9.818 9.818 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.417 0 9.818 4.4 9.818 9.818 0 5.417-4.401 9.818-9.818 9.818z"/>
            </svg>
            Écrire à Chanyz maintenant
          </a>
          <p className="text-[12px] text-white/35 mt-5 tracking-wide">
            Réponse sous 24h · Devis gratuit · Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
