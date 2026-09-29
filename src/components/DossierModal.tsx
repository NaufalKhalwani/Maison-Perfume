import React from 'react';
import { Fragrance } from '../types';
import { X, Bookmark, ShoppingBag } from 'lucide-react';

interface DossierModalProps {
  fragrance: Fragrance | null;
  onClose: () => void;
  onAddToCart: (fragrance: Fragrance, volume: '50ml' | '100ml' | 'Crystal') => void;
  isWishlisted: boolean;
  onToggleWishlist: (fragrance: Fragrance) => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({
  fragrance,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  const [selectedVolume, setSelectedVolume] = React.useState<'50ml' | '100ml' | 'Crystal'>('100ml');

  if (!fragrance) return null;

  const priceMap = {
    '50ml': Math.round(fragrance.price * 0.72),
    '100ml': fragrance.price,
    'Crystal': Math.round(fragrance.price * 1.55)
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative bg-[#18181c] border border-[#f2ca50]/40 max-w-4xl w-full p-5 sm:p-8 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.9)] text-[#e5e2e3] z-10 rounded-2xl max-h-[92vh] overflow-y-auto">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#f2ca50]/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#99907c] hover:text-[#f2ca50] transition-colors p-1"
          aria-label="Tutup berkas"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Flacon */}
          <div className="md:col-span-5 relative bg-[#0e0e0f] rounded-2xl overflow-hidden flex flex-col items-center justify-center min-h-[360px]">
            <img
              src={fragrance.image}
              alt={fragrance.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#0e0e0f]/80 backdrop-blur-md text-[#f2ca50] font-sans text-[10px] font-semibold uppercase tracking-widest border border-[#f2ca50]/20 rounded-lg">
              {fragrance.concentration}
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#1c1b1c]/90 backdrop-blur-md border border-[#4d4635]/30">
              <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Asal Usul Terroir</span>
              <span className="text-xs text-[#e4c277]">{fragrance.sourceOrigin}</span>
            </div>
          </div>

          {/* Right Column: Detailed Olfactory Architecture */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-[#e4c277] font-semibold">
                  {fragrance.family}
                </span>
                <button
                  onClick={() => onToggleWishlist(fragrance)}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg border transition-colors ${
                    isWishlisted
                      ? 'border-[#f2ca50] text-[#f2ca50] bg-[#f2ca50]/10'
                      : 'border-[#4d4635] text-[#99907c] hover:text-[#f2ca50]'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase tracking-wider">
                    {isWishlisted ? 'Tersimpan' : 'Simpan Flacon'}
                  </span>
                </button>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-[#e5e2e3] font-normal">
                {fragrance.name}
              </h2>
              <p className="text-sm text-[#d3cec5] mt-2 font-light leading-relaxed">
                {fragrance.description}
              </p>
            </div>

            {/* Accord Pyramidal 3-Tiers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-[#201f20] p-3.5 rounded-xl border border-[#4d4635]/40">
              <div className="p-2 border-b sm:border-b-0 sm:border-r border-[#4d4635]/30">
                <span className="text-[9px] uppercase tracking-widest text-[#f2ca50] block font-semibold">
                  01. Nada Puncak
                </span>
                <span className="font-serif text-xs text-[#e5e2e3] block mt-0.5 font-medium">
                  {fragrance.notes.top}
                </span>
                <span className="text-[10px] text-[#99907c] block mt-1">
                  {fragrance.notes.topDesc || 'Kilau aroma awal'}
                </span>
              </div>
              <div className="p-2 border-b sm:border-b-0 sm:border-r border-[#4d4635]/30">
                <span className="text-[9px] uppercase tracking-widest text-[#e4c277] block font-semibold">
                  02. Nada Jantung
                </span>
                <span className="font-serif text-xs text-[#e5e2e3] block mt-0.5 font-medium">
                  {fragrance.notes.heart}
                </span>
                <span className="text-[10px] text-[#99907c] block mt-1">
                  {fragrance.notes.heartDesc || 'Inti bunga & getah murni'}
                </span>
              </div>
              <div className="p-2">
                <span className="text-[9px] uppercase tracking-widest text-[#d5b46b] block font-semibold">
                  03. Nada Dasar
                </span>
                <span className="font-serif text-xs text-[#e5e2e3] block mt-0.5 font-medium">
                  {fragrance.notes.base}
                </span>
                <span className="text-[10px] text-[#99907c] block mt-1">
                  {fragrance.notes.baseDesc || 'Jejak kayu & ambar abadi'}
                </span>
              </div>
            </div>

            {/* Formulations Chord Bar */}
            <div className="p-4 bg-[#201f20] rounded-xl border border-[#4d4635]/40 space-y-2">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-[#99907c]">
                <span>Harmonisasi Formulasi Alami</span>
                <span className="text-[#f2ca50] font-semibold">Ketahanan: {fragrance.longevity}</span>
              </div>
              <div className="w-full h-2.5 bg-[#0e0e0f] rounded-full overflow-hidden flex">
                {fragrance.accords.map((accord) => (
                  <div
                    key={accord.name}
                    style={{ width: `${accord.percentage}%`, backgroundColor: accord.color }}
                    className="h-full"
                    title={`${accord.name}: ${accord.percentage}%`}
                  />
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between text-[11px] text-[#d0c5af] pt-1 gap-2">
                {fragrance.accords.map((accord) => (
                  <span key={accord.name} className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ backgroundColor: accord.color }}
                    />
                    {accord.name} {accord.percentage}%
                  </span>
                ))}
              </div>
            </div>

            {/* Volume Selection & Purchase CTA */}
            <div className="pt-2 border-t border-[#4d4635]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {(['50ml', '100ml', 'Crystal'] as const).map((vol) => (
                  <button
                    key={vol}
                    onClick={() => setSelectedVolume(vol)}
                    className={`px-3 py-1.5 text-xs font-sans uppercase tracking-wider rounded-lg transition-colors ${
                      selectedVolume === vol
                        ? 'bg-[#f2ca50] text-[#3c2f00] font-bold'
                        : 'bg-[#201f20] text-[#d0c5af] hover:text-[#e5e2e3]'
                    }`}
                  >
                    {vol === 'Crystal' ? 'Kristal' : vol}
                  </button>
                ))}
                <span className="font-serif text-2xl text-[#f2ca50] ml-3">
                  €{priceMap[selectedVolume]}
                </span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onAddToCart(fragrance, selectedVolume);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#f2ca50] text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#ffe088] transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Miliki Botol Ini</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
