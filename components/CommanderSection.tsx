'use client';

import { motion } from 'framer-motion';
import { WA_NUMBER } from './Navbar';

const infos = [
  {
    icon: '🎂',
    titre: 'Délai de commande',
    desc: 'Minimum 5 jours à l\'avance pour les gâteaux personnalisés. Plus tôt pour les mariages.',
  },
  {
    icon: '📍',
    titre: 'Livraison & Retrait',
    desc: 'Retrait à Genève sur rendez-vous. Livraison possible selon la localisation.',
  },
  {
    icon: '💬',
    titre: 'Devis gratuit',
    desc: 'Envoyez votre idée par WhatsApp — nous vous répondons sous 24 h avec un devis.',
  },
];

export default function CommanderSection() {
  return (
    <section id="commander" className="py-24 px-5 sm:px-8 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7B1231]/60 mb-3">
            C&apos;est simple
          </p>
          <h2 className="text-[clamp(30px,5vw,50px)] font-bold text-[#1A0A0F]">
            Comment commander ?
          </h2>
          <p className="text-[15px] text-[#6B5057] mt-4 max-w-md mx-auto">
            Décrivez-nous votre projet sur WhatsApp et nous nous occupons du reste.
          </p>
        </motion.div>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {[
            { num: '01', titre: 'Contactez-nous', desc: 'Envoyez votre idée, la date et le nombre de personnes sur WhatsApp.' },
            { num: '02', titre: 'Devis & Validation', desc: 'Nous vous envoyons un devis sous 24 h. Vous validez et payez un acompte.' },
            { num: '03', titre: 'Récupération', desc: 'Votre commande est prête à la date convenue. Il ne reste plus qu\'à régaler !' },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-[#7B1231]/[0.07] shadow-sm"
            >
              <span className="text-[11px] font-bold tracking-widest text-[#7B1231]/40">{step.num}</span>
              <h3 className="text-[16px] font-bold text-[#1A0A0F] mt-2 mb-2">{step.titre}</h3>
              <p className="text-[13px] text-[#6B5057] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Infos pratiques */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {infos.map((info, i) => (
            <motion.div
              key={info.titre}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="flex gap-3 p-4 bg-[#7B1231]/[0.04] rounded-xl"
            >
              <span className="text-xl shrink-0">{info.icon}</span>
              <div>
                <p className="text-[13px] font-semibold text-[#1A0A0F] mb-0.5">{info.titre}</p>
                <p className="text-[12px] text-[#6B5057] leading-relaxed">{info.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grand bouton WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Bonjour%20Chanyz%2C%20je%20voudrais%20commander%20un%20g%C3%A2teau%20%F0%9F%8E%82%0A%0ADate%20souhait%C3%A9e%20%3A%20%0ATh%C3%A8me%2Fid%C3%A9e%20%3A%20%0ANombre%20de%20personnes%20%3A%20`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white
                       text-[16px] font-bold px-8 py-4 rounded-2xl
                       hover:bg-[#1DA851] hover:-translate-y-1
                       transition-all duration-200 shadow-lg shadow-[#25D366]/25"
          >
            <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.847L.057 23.5l5.818-1.524A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.368l-.36-.213-3.714.973.989-3.617-.235-.372A9.818 9.818 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.417 0 9.818 4.4 9.818 9.818 0 5.417-4.401 9.818-9.818 9.818z"/>
            </svg>
            Écrire à Chanyz sur WhatsApp
          </a>
          <p className="text-[12px] text-[#6B5057]/60 mt-4">
            Réponse garantie sous 24 h · Devis gratuit · Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
