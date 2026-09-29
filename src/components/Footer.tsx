import React, { useState } from 'react';
import { PageTab } from '../types';
import { Sparkles, Globe, Mail, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-[#0e0e0f] border-t border-[#4d4635]/30 text-[#d0c5af]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* Brand & Address */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="font-serif text-2xl text-[#f2ca50] tracking-wider uppercase mb-1">
              Maison d'Aura
            </div>
            <div className="font-sans text-[11px] font-semibold text-[#e4c277] mb-4 tracking-[0.2em] uppercase">
              Haute Parfumerie Paris
            </div>
            <p className="font-sans text-sm text-[#d3cec5] mb-4 max-w-sm font-light leading-relaxed">
              Ekstrak parfum murni yang diramu dengan teknik ekstraksi tradisional di Grasse dan diwadahi dalam botol kristal arsitektural di Paris.
            </p>
            <div className="font-sans text-xs text-[#99907c] mb-6 flex flex-col gap-1">
              <span className="text-[#e5e2e3]">14 Rue de Castiglione</span>
              <span>75001 Paris, Prancis</span>
              <span className="text-[#e4c277]">concierge@maisondaura.fr</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl border border-[#4d4635]/50 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#f2ca50]/60 transition-all cursor-pointer">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-xl border border-[#4d4635]/50 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#f2ca50]/60 transition-all cursor-pointer">
                <Globe className="w-4 h-4" />
              </span>
              <a
                href="mailto:concierge@maisondaura.fr"
                className="w-9 h-9 rounded-xl border border-[#4d4635]/50 flex items-center justify-center text-[#d0c5af] hover:text-[#f2ca50] hover:border-[#f2ca50]/60 transition-all"
                title="Hubungi Concierge"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Maison Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="font-sans text-[11px] font-semibold text-[#f2ca50] uppercase tracking-[0.2em] mb-1">
              Maison
            </div>
            <button
              onClick={() => onNavigate('the-collection')}
              className="text-left font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              Koleksi Utama
            </button>
            <button
              onClick={() => onNavigate('olfactory-art-&-craft')}
              className="text-left font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              Hasil Panen Grasse
            </button>
            <button
              onClick={() => onNavigate('olfactory-art-&-craft')}
              className="text-left font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              Sumber Botani Berkelanjutan
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="text-left font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              Pujian & Penghargaan
            </button>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="font-sans text-[11px] font-semibold text-[#f2ca50] uppercase tracking-[0.2em] mb-1">
              Layanan Salon
            </div>
            <button
              onClick={() => onNavigate('private-atelier-&-booking')}
              className="text-left font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              Konsultasi Privat
            </button>
            <button
              onClick={() => onNavigate('the-collection')}
              className="text-left font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              Tes Profil Aroma
            </button>
            <button
              onClick={() => onNavigate('private-atelier-&-booking')}
              className="text-left font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              Kreasi Parfum Kustom
            </button>
            <button
              onClick={() => onNavigate('the-collection')}
              className="text-left font-sans text-xs text-[#d0c5af] hover:text-[#f2ca50] transition-colors"
            >
              Personalisasi Gravir Botol
            </button>
          </div>

          {/* VIP Privileges */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="font-sans text-[11px] font-semibold text-[#f2ca50] uppercase tracking-[0.2em] mb-2">
              Keistimewaan Anggota VIP
            </div>
            <p className="font-sans text-xs text-[#d3cec5] mb-4 font-light leading-relaxed">
              Dapatkan undangan privat untuk rilis panen terbatas, peluncuran botol kristal bernomor, dan pertemuan rahasia di salon Paris kami.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[#201f20] rounded-xl border border-[#f2ca50]/40 text-[#f2ca50] text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#f2ca50]" />
                <span>Undangan rahasia Anda telah disimpan dengan aman.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-1">
                <div className="relative flex items-center border-b border-[#99907c] hover:border-[#f2ca50] focus-within:border-[#f2ca50] transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Masukkan alamat surel Anda"
                    className="w-full bg-transparent py-2.5 text-xs text-[#e5e2e3] placeholder:text-[#99907c] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="font-sans text-[11px] font-semibold uppercase text-[#f2ca50] hover:text-[#ffe088] transition-colors tracking-widest pl-2"
                  >
                    Daftar
                  </button>
                </div>
                <span className="font-sans text-[11px] text-[#99907c] mt-1">
                  Hanya melalui undangan khusus. Kerahasiaan mutlak terjamin.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#4d4635]/25 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#99907c]">
          <p>© 2024 Maison d'Aura Haute Parfumerie Paris. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase">
            <span className="hover:text-[#f2ca50] cursor-pointer">Protokol Privasi</span>
            <span className="hover:text-[#f2ca50] cursor-pointer">Ketentuan Hukum</span>
            <span className="hover:text-[#f2ca50] cursor-pointer">Layanan Concierge</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
