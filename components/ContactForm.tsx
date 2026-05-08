'use client';

import { useState } from 'react';

/*
 ┌─────────────────────────────────────────────────────────┐
 │  CONTACT FORM — À personnaliser par client              │
 │                                                         │
 │  1. services[] → liste déroulante selon le commerce     │
 │  2. Connecter à /api/contact (déjà prêt)                │
 │  3. Optionnel : ajouter des champs métier               │
 └─────────────────────────────────────────────────────────┘
*/

/* ── Personnaliser les services selon le client ── */
const services = [
  'Choisir un service…',
  /* Exemples :
  'Consultation',
  'Réservation de table',
  'Devis gratuit',
  'Commande',
  */
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError]   = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setError("Une erreur s'est produite. Veuillez réessayer ou nous contacter par téléphone.");
    }
  }

  /* ── Succès ── */
  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-semibold text-green-900 text-[15px] mb-1">Message envoyé !</p>
        <p className="text-green-700 text-[13px]">Nous vous répondrons dans les 24 heures.</p>
      </div>
    );
  }

  /* ── Formulaire ── */
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-[12.5px] font-medium text-[#0C0B09]/60 mb-1.5">
          Nom complet *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Jean Dupont"
          className="w-full px-4 py-3 rounded-xl border border-black/[0.10] bg-white
                     text-[14px] text-[#0C0B09] placeholder:text-black/25
                     focus:outline-none focus:ring-2 focus:ring-[#0C0B09]/20 focus:border-[#0C0B09]/40
                     transition-all duration-150"
        />
      </div>

      {/* Email + Téléphone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-[12.5px] font-medium text-[#0C0B09]/60 mb-1.5">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jean@exemple.ch"
            className="w-full px-4 py-3 rounded-xl border border-black/[0.10] bg-white
                       text-[14px] text-[#0C0B09] placeholder:text-black/25
                       focus:outline-none focus:ring-2 focus:ring-[#0C0B09]/20 focus:border-[#0C0B09]/40
                       transition-all duration-150"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[12.5px] font-medium text-[#0C0B09]/60 mb-1.5">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+41 XX XXX XX XX"
            className="w-full px-4 py-3 rounded-xl border border-black/[0.10] bg-white
                       text-[14px] text-[#0C0B09] placeholder:text-black/25
                       focus:outline-none focus:ring-2 focus:ring-[#0C0B09]/20 focus:border-[#0C0B09]/40
                       transition-all duration-150"
          />
        </div>
      </div>

      {/* Service (masqué si services vides) */}
      {services.length > 1 && (
        <div>
          <label htmlFor="service" className="block text-[12.5px] font-medium text-[#0C0B09]/60 mb-1.5">
            Service souhaité
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 rounded-xl border border-black/[0.10] bg-white
                       text-[14px] text-[#0C0B09]
                       focus:outline-none focus:ring-2 focus:ring-[#0C0B09]/20 focus:border-[#0C0B09]/40
                       transition-all duration-150"
          >
            {services.map((s) => (
              <option key={s} value={s === services[0] ? '' : s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-[12.5px] font-medium text-[#0C0B09]/60 mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Comment pouvons-nous vous aider ?"
          className="w-full px-4 py-3 rounded-xl border border-black/[0.10] bg-white
                     text-[14px] text-[#0C0B09] placeholder:text-black/25
                     focus:outline-none focus:ring-2 focus:ring-[#0C0B09]/20 focus:border-[#0C0B09]/40
                     transition-all duration-150 resize-none"
        />
      </div>

      {/* Erreur */}
      {status === 'error' && (
        <p className="text-[13px] text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#0C0B09] text-white text-[14px] font-semibold
                   px-6 py-3.5 rounded-xl
                   hover:bg-[#1C1B18] disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200"
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>

      <p className="text-[11.5px] text-black/30 text-center">
        Vos données ne sont jamais partagées. Réponse sous 24 h.
      </p>
    </form>
  );
}
