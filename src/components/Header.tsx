import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { ShoppingBag, Bookmark, Menu, X, Sparkles, ArrowRight, Volume2, VolumeX, Calendar, Compass } from 'lucide-react';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenConsultation: () => void;
  onOpenFinder: () => void;
  ambientAudioActive?: boolean;
  onToggleAmbientAudio?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenConsultation,
  onOpenFinder,
  ambientAudioActive,
  onToggleAmbientAudio
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks: { id: PageTab; num: string; label: string; desc: string }[] = [
    { id: 'home', num: '01', label: 'Beranda', desc: 'L\'Art Invisible de l\'Élégance' },
    { id: 'the-collection', num: '02', label: 'Koleksi Parfum', desc: 'La Collection Privée Grasse' },
    { id: 'olfactory-art-&-craft', num: '03', numDesc: '03', label: 'Seni & Tradisi', desc: 'Haute Parfumerie Savoir-Faire' } as any,
    { id: 'private-atelier-&-booking', num: '04', label: 'Atelier & Reservasi', desc: 'Sanctuaire Privé Place Vendôme' }
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full select-none transition-all duration-300">
        {/* Top Micro Announcement Bar - Clean & Responsive across all viewports */}
        <div className="w-full bg-[#0a0a0c] border-b border-white/[0.06] text-[#99907c] text-[10px] tracking-[0.2em] uppercase font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-7 sm:h-8 flex items-center justify-between gap-3">
            {/* Left badge */}
            <div className="flex items-center gap-2 truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] shrink-0 animate-pulse" />
              <span className="truncate text-[#e5e1d8] font-medium hidden sm:inline">
                Salon Privat Place Vendôme • Hasil Panen Grasse 2024
              </span>
              <span className="truncate text-[#e5e1d8] font-medium sm:hidden">
                Maison d'Aura • Paris & Grasse
              </span>
            </div>

            {/* Right utility options */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {onToggleAmbientAudio && (
                <button
                  onClick={onToggleAmbientAudio}
                  className="flex items-center gap-1.5 py-0.5 px-2 rounded-full hover:bg-white/5 text-[#9d9387] hover:text-[#f2ca50] transition-colors focus:outline-none"
                  title="Suasana Akustik Atelier"
                >
                  {ambientAudioActive ? (
                    <>
                      <Volume2 className="w-3 h-3 text-[#f2ca50]" />
                      <span className="text-[9px] text-[#f2ca50] tracking-wider hidden md:inline">Akustik Aktif</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3 h-3 text-[#7d7568]" />
                      <span className="text-[9px] tracking-wider hidden md:inline">Akustik: Hening</span>
                    </>
                  )}
                </button>
              )}

              <span className="hidden md:inline-block text-[9px] text-[#f2ca50]/90 font-mono tracking-widest pl-2 border-l border-white/10">
                ÉDITION NUMÉROTÉE
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#121214]/95 backdrop-blur-xl border-b border-[#282725] shadow-[0_8px_32px_rgba(0,0,0,0.7)] py-3 sm:py-3.5'
              : 'bg-[#121214]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 sm:py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            
            {/* Brand Logo - Perfectly Balanced & Responsive */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 sm:gap-3.5 group text-left focus:outline-none shrink-0"
              aria-label="Kembali ke Beranda"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#f2ca50]/35 flex items-center justify-center bg-gradient-to-b from-[#f2ca50]/15 via-transparent to-transparent group-hover:border-[#f2ca50] transition-all duration-300">
                <span className="font-serif text-[#f2ca50] text-base sm:text-lg italic font-light select-none leading-none">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg lg:text-xl text-[#f3f0e6] tracking-[0.18em] sm:tracking-[0.22em] uppercase leading-none font-medium group-hover:text-[#f2ca50] transition-colors">
                  Maison d'Aura
                </span>
                <span className="font-sans text-[8px] sm:text-[9px] text-[#9d9387] uppercase tracking-[0.28em] sm:tracking-[0.32em] mt-1 font-light">
                  Haute Parfumerie Paris
                </span>
              </div>
            </button>

            {/* Desktop Center Navigation (Visible on lg and above) */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`group relative py-1.5 text-xs uppercase tracking-[0.2em] font-sans transition-all duration-300 ${
                      isActive
                        ? 'text-[#f2ca50] font-medium'
                        : 'text-[#bbb2a5] hover:text-[#f3f0e6]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Minimalist dot indicator */}
                    <span
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-[#f2ca50] opacity-100 scale-100'
                          : 'bg-transparent opacity-0 scale-0 group-hover:bg-[#f2ca50]/50 group-hover:opacity-100 group-hover:scale-75'
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons & Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shrink-0">
              
              {/* Quick Consultation CTA Button (Visible on xl) */}
              <button
                onClick={onOpenConsultation}
                className="hidden xl:inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-sans uppercase tracking-[0.18em] text-[#f2ca50] border border-[#f2ca50]/35 bg-[#f2ca50]/[0.05] hover:bg-[#f2ca50] hover:text-[#131314] transition-all duration-300 font-medium"
              >
                <span>Reservasi Atelier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Wishlist Icon Button */}
              <button
                onClick={onOpenWishlist}
                aria-label="Aroma Disimpan"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#bbb2a5] hover:text-[#f2ca50] hover:bg-white/[0.04] transition-all"
                title="Daftar Aroma Favorit"
              >
                <Bookmark className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-[#f2ca50] text-[#121214] text-[9px] font-bold flex items-center justify-center leading-none">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                onClick={onOpenCart}
                aria-label="Keranjang Pesanan"
                className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#bbb2a5] hover:text-[#f2ca50] hover:bg-white/[0.04] transition-all"
                title="Keranjang Koleksi Pribadi"
              >
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-[#f2ca50] text-[#121214] text-[9px] font-bold flex items-center justify-center leading-none animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile / Tablet Menu Hamburger (Visible below lg) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#dcd6c8] hover:text-[#f2ca50] hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Buka Menu Navigasi"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Mobile Drawer Menu - Smooth & Fluid */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop Blur Scrim */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sliding Panel */}
          <div className="relative z-10 w-full max-w-sm sm:max-w-md h-full bg-[#121214] border-l border-white/10 shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-in slide-in-from-right duration-300">
            {/* Drawer Top Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#f2ca50]/40 flex items-center justify-center text-[#f2ca50] font-serif italic text-sm">
                    A
                  </div>
                  <div>
                    <h3 className="font-serif text-base text-[#f3f0e6] tracking-wider uppercase font-medium">
                      Maison d'Aura
                    </h3>
                    <p className="font-sans text-[8px] text-[#9d9387] tracking-[0.25em] uppercase">
                      Paris
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/5 text-[#9d9387] hover:text-white transition-colors"
                  aria-label="Tutup Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Numbers */}
              <div className="space-y-1 mb-8">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#7d7568] block mb-3 px-2">
                  Daftar Halaman
                </span>
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const isActive = activeTab === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between group ${
                          isActive
                            ? 'bg-[#f2ca50]/10 border border-[#f2ca50]/30 text-[#f2ca50]'
                            : 'hover:bg-white/[0.03] text-[#dcd6c8]'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <span className="font-mono text-xs text-[#9d9387] group-hover:text-[#f2ca50]">
                            {link.num}
                          </span>
                          <div>
                            <span className="font-serif text-lg block leading-snug">
                              {link.label}
                            </span>
                            <span className="font-sans text-[10px] text-[#8c8274] block">
                              {link.desc}
                            </span>
                          </div>
                        </div>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#f2ca50] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Quick Concierge Actions */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFinder();
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs uppercase tracking-[0.2em] font-sans border border-[#f2ca50]/30 text-[#f2ca50] bg-[#f2ca50]/5 hover:bg-[#f2ca50]/15 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Tes Karakter Aroma</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl text-xs uppercase tracking-[0.2em] font-sans bg-[#f2ca50] text-[#1a1815] font-semibold text-center hover:bg-[#ffe088] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#f2ca50]/15"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Jadwalkan Kunjungan Salon</span>
                </button>
              </div>
            </div>

            {/* Drawer Bottom Details */}
            <div className="pt-6 border-t border-white/[0.08] text-xs text-[#8c8274] space-y-2">
              <div className="flex justify-between items-center text-[11px]">
                <span className="font-serif italic text-[#c5bba8]">14 Rue de Castiglione, Paris</span>
                <span className="font-mono text-[#f2ca50]">Place Vendôme</span>
              </div>
              <p className="text-[10px] text-[#716a5f]">
                Layanan Salon Privat & Konsultasi Olfaktori Eksklusif
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
