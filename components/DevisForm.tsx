'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Mode   = 'retrait' | 'livraison';

const types = ['Gâteau personnalisé', 'Plats maison', 'Gâteau + Plats'];

export default function DevisForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [mode,   setMode]   = useState<Mode>('retrait');
  const [error,  setError]  = useState('');

  function buildMessage(form: HTMLFormElement): string {
    const date       = (form.elements.namedItem('date')        as HTMLInputElement)?.value        || '–';
    const personnes  = (form.elements.namedItem('personnes')   as HTMLInputElement)?.value        || '–';
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement)?.value   || '–';
    const adresse    = (form.elements.namedItem('adresse')     as HTMLInputElement)?.value        || '';

    const livraison = mode === 'livraison'
      ? `Livraison${adresse ? ` — ${adresse}` : ' (adresse à confirmer)'}`
      : 'Retrait à Genève';

    return [
      `Date souhaitée : ${date}`,
      `Nombre de personnes : ${personnes}`,
      `Mode de récupération : ${livraison}`,
      '',
      'Description / Thème :',
      description,
    ].join('\n');
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value,
      service: (form.elements.namedItem('type')    as HTMLInputElement).value,
      message: buildMessage(form),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      form.reset();
      setMode('retrait');
    } catch {
      setStatus('error');
      setError("Une erreur s'est produite. Réessayez ou écrivez-nous sur WhatsApp.");
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-xl border border-[#7B1231]/15 bg-white
    text-[14px] text-[#1A0A0F] placeholder:text-[#6B5057]/40
    focus:outline-none focus:ring-2 focus:ring-[#7B1231]/20 focus:border-[#7B1231]/40
    transition-all duration-150`;

  const labelClass = 'block text-[12px] font-semibold text-[#6B5057] uppercase tracking-wide mb-1.5';

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-[#7B1231]/5 border border-[#7B1231]/15 p-10 text-center">
        <p className="text-4xl mb-4">🎂</p>
        <p className="font-bold text-[#1A0A0F] text-[16px] mb-2">Demande envoyée !</p>
        <p className="text-[#6B5057] text-[14px]">Charo vous répond sous 24h avec votre devis personnalisé.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Nom + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dv-name" className={labelClass}>Nom complet *</label>
          <input id="dv-name" name="name" type="text" required placeholder="Marie Dupont" className={inputClass} />
        </div>
        <div>
          <label htmlFor="dv-email" className={labelClass}>Email *</label>
          <input id="dv-email" name="email" type="email" required placeholder="marie@exemple.ch" className={inputClass} />
        </div>
      </div>

      {/* Téléphone + Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dv-phone" className={labelClass}>Téléphone</label>
          <input id="dv-phone" name="phone" type="tel" placeholder="+41 XX XXX XX XX" className={inputClass} />
        </div>
        <div>
          <label htmlFor="dv-date" className={labelClass}>Date souhaitée *</label>
          <input id="dv-date" name="date" type="date" required className={inputClass} />
        </div>
      </div>

      {/* Type de commande + Personnes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dv-type" className={labelClass}>Type de commande *</label>
          <select id="dv-type" name="type" required className={inputClass}>
            <option value="">Choisir…</option>
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="dv-personnes" className={labelClass}>Nombre de personnes *</label>
          <input id="dv-personnes" name="personnes" type="number" min="1" required placeholder="ex : 20" className={inputClass} />
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="dv-desc" className={labelClass}>Description / Thème / Idées *</label>
        <textarea
          id="dv-desc"
          name="description"
          required
          rows={4}
          placeholder="Décrivez votre idée : thème, couleurs, saveurs souhaitées, occasion…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Mode de récupération */}
      <div>
        <p className={labelClass}>Mode de récupération</p>
        <div className="grid grid-cols-2 gap-3">
          {(['retrait', 'livraison'] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`py-3 px-4 rounded-xl border text-[13px] font-semibold transition-all duration-200 ${
                mode === m
                  ? 'bg-[#7B1231] text-white border-[#7B1231] shadow-md'
                  : 'bg-white text-[#6B5057] border-[#7B1231]/15 hover:border-[#7B1231]/40'
              }`}
            >
              {m === 'retrait' ? '📍 Retrait Genève' : '🚗 Livraison'}
            </button>
          ))}
        </div>

        {mode === 'livraison' && (
          <div className="mt-3">
            <label htmlFor="dv-adresse" className={labelClass}>Adresse de livraison</label>
            <input
              id="dv-adresse"
              name="adresse"
              type="text"
              placeholder="Rue et ville (Genève, Vernier, Carouge…)"
              className={inputClass}
            />
            <p className="text-[11.5px] text-[#7B1231]/70 mt-2 flex items-center gap-1.5">
              <span>ℹ️</span>
              Des frais de livraison s&apos;appliquent selon la commande — précisés dans votre devis.
            </p>
          </div>
        )}
      </div>

      {status === 'error' && (
        <p className="text-[13px] text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#7B1231] text-white text-[14px] font-bold px-6 py-4 rounded-xl
                   hover:bg-[#5C0D23] disabled:opacity-50 disabled:cursor-not-allowed
                   transition-all duration-200 shadow-lg shadow-[#7B1231]/20"
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande de devis →'}
      </button>

      <p className="text-[11px] text-[#6B5057]/50 text-center">
        Gratuit · Sans engagement · Réponse sous 24h
      </p>
    </form>
  );
}
