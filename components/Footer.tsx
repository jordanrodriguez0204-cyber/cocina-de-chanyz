import { WA_NUMBER } from './Navbar';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A0A0F] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-8">

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 border-b border-white/[0.07]">

          {/* Identité */}
          <div className="text-center md:text-left">
            <p className="font-bold text-[15px] tracking-tight mb-2">Cocina de Chanyz</p>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-xs">
              Gâteaux personnalisés & spécialités péruviennes<br />
              faits maison à Genève.
            </p>
          </div>

          {/* Contact rapide */}
          <div className="text-center md:text-right">
            <p className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-white/25 mb-4">
              Contact
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.847L.057 23.5l5.818-1.524A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.003-1.368l-.36-.213-3.714.973.989-3.617-.235-.372A9.818 9.818 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.417 0 9.818 4.4 9.818 9.818 0 5.417-4.401 9.818-9.818 9.818z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-[12px] text-white/20">
            © {year} Cocina de Chanyz. Tous droits réservés.
          </p>
          <p className="text-[11px] text-white/[0.12]">
            Site réalisé par{' '}
            <a
              href="https://atelierdigitalgeneve.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/30 transition-colors"
            >
              Atelier Digital Genève
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
