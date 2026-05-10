'use client';

import { motion } from 'framer-motion';
import { WA_NUMBER } from './Navbar';
import DevisForm from './DevisForm';

const steps = [
  {
    num: '01',
    titre: 'Contactez-nous',
    desc: 'Remplissez le formulaire ci-dessous ou écrivez-nous sur WhatsApp. On vous répond sous 24h.',
  },
  {
    num: '02',
    titre: 'Devis & Validation',
    desc: 'Nous vous envoyons un devis personnalisé. Vous validez et payez un acompte pour confirmer.',
  },
  {
    num: '03',
    titre: 'Récupération',
    desc: "Votre commande est prête à la date convenue. Retrait à Genève ou livraison selon accord.",
  },
];

const infos = [
  { icon: '⏰', titre: 'Délai minimum', desc: "5 jours à l'avance pour les gâteaux. Plus tôt pour les mariages." },
  { icon: '📍', titre: 'Retrait & Livraison', desc: 'Retrait sur rendez-vous à Genève. Livraison possible sur Genève et alentours — frais précisés dans votre devis.' },
  { icon: '💬', titre: 'Devis gratuit', desc: 'Sans engagement — réponse sous 24h garantie.' },
];

export default function CommanderSection() {
  return (
    <section id="commander" className="py-28 px-5 sm:px-8 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7B1231]/60 mb-4">
            C&apos;est simple
          </p>
          <h2
            className="text-[clamp(30px,5vw,52px)] text-[#1A0A0F]"
            style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.1 }}
          >
            Commander en{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#7B1231' }}>3 étapes</span>
          </h2>
        </motion.div>

        {/* Étapes */}
        <div className="relative">
          <div className="hidden md:block absolute top-7 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7B1231]/20 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#7B1231] flex items-center justify-center mb-6 shadow-lg shadow-[#7B1231]/20">
                  <span className="text-white font-bold text-[13px] tracking-wider">{step.num}</span>
                </div>
                <h3 className="text-[17px] font-bold text-[#1A0A0F] mb-3">{step.titre}</h3>
                <p className="text-[14px] text-[#6B5057] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Infos pratiques */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {infos.map((info, i) => (
            <motion.div
              key={info.titre}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 p-5 bg-white rounded-2xl border border-[#7B1231]/[0.07] shadow-sm"
            >
              <span className="text-2xl shrink-0">{info.icon}</span>
              <div>
                <p className="text-[13px] font-bold text-[#1A0A0F] mb-1">{info.titre}</p>
                <p className="text-[12px] text-[#6B5057] leading-relaxed">{info.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-20"
        >
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Chanyz%2C%20je%20voudrais%20commander%20un%20g%C3%A2teau%20%F0%9F%8E%82%0A%0ADate%20souhait%C3%A9e%20%3A%20%0ATh%C3%A8me%2Fid%C3%A9e%20%3A%20%0ANombre%20de%20personnes%20%3A%20`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#25D366] text-white text-[15px] sm:text-[17px] font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-[#1DA851] hover:-translate-y-1 transition-all duration-200 shadow-2xl shadow-[#25D366]/30"
          >
            <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.847L.057 23.5l5.818-1.524A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.368l-.36-.213-3.714.973.989-3.617-.235-.372A9.818 9.818 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.417 0 9.818 4.4 9.818 9.818 0 5.417-4.401 9.818-9.818 9.818z"/>
            </svg>
            Écrire à Chanyz sur WhatsApp
          </a>
          <p className="text-[12px] text-[#6B5057]/55 mt-4 tracking-wide">
            Réponse sous 24h · Devis gratuit · Sans engagement
          </p>
        </motion.div>

        {/* Divider + formulaire de devis */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-[1px] bg-[#7B1231]/10" />
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#7B1231]/50">
              Ou remplissez le formulaire
            </p>
            <div className="flex-1 h-[1px] bg-[#7B1231]/10" />
          </div>

          <div className="text-center mb-10">
            <h3
              className="text-[clamp(22px,3.5vw,36px)] text-[#1A0A0F] mb-3"
              style={{ fontFamily: 'var(--font-heading, serif)', fontWeight: 700, lineHeight: 1.15 }}
            >
              Demander un{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#7B1231' }}>devis gratuit</span>
            </h3>
            <p className="text-[14px] text-[#6B5057] max-w-md mx-auto">
              Décrivez votre projet, on vous répond sous 24h avec un devis personnalisé.
            </p>
          </div>

          <DevisForm />
        </motion.div>

      </div>
    </section>
  );
}
