import React from 'react';
import { Fragrance } from '../types';
import { FRAGRANCES } from '../data/fragrances';
import { X, Bookmark, ShoppingBag, Eye, Trash2 } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveWishlist: (fragrance: Fragrance) => void;
  onAddToCart: (fragrance: Fragrance, volume: '50ml' | '100ml' | 'Crystal') => void;
  onOpenDossier: (fragrance: Fragrance) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveWishlist,
  onAddToCart,
  onOpenDossier
}) => {
  if (!isOpen) return null;

  const savedFragrances = FRAGRANCES.filter(f => wishlistIds.includes(f.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#141416] border border-[#262629] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#262629] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-[#f2ca50]/10 border border-[#f2ca50]/20 text-[#f2ca50]">
              <Bookmark className="w-5 h-5 fill-[#f2ca50]/20" />
            </span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#f3f0e6]">
                Daftar Aroma Favorit
              </h3>
              <p className="text-xs text-[#9d9387]">
                {savedFragrances.length} {savedFragrances.length === 1 ? 'botol tersimpan' : 'botol tersimpan'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-[#9d9387] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {savedFragrances.length === 0 ? (
            <div className="py-16 text-center">
              <Bookmark className="w-12 h-12 text-[#9d9387]/40 mx-auto mb-3" />
              <p className="font-serif text-lg text-[#f3f0e6] mb-1">
                Daftar aroma favorit Anda masih kosong
              </p>
              <p className="text-xs text-[#9d9387] max-w-sm mx-auto">
                Jelajahi Koleksi Parfum dan simpan formula aroma favorit Anda untuk persiapan konsultasi salon mendatang.
              </p>
            </div>
          ) : (
            savedFragrances.map(fragrance => (
              <div 
                key={fragrance.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#1c1c1f] border border-[#2b2b2f] hover:border-[#f2ca50]/30 transition-all group"
              >
                <img 
                  src={fragrance.image} 
                  alt={fragrance.name}
                  className="w-16 h-20 object-cover rounded-lg bg-black/40 border border-white/5 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#f2ca50]">
                    {fragrance.number} • {fragrance.concentration}
                  </span>
                  <h4 className="font-serif text-lg text-[#f3f0e6] truncate">
                    {fragrance.name}
                  </h4>
                  <p className="text-xs text-[#9d9387] truncate">
                    {fragrance.family}
                  </p>
                  <p className="text-xs font-semibold text-[#f2ca50] mt-1">
                    €{fragrance.price} (50ml)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onOpenDossier(fragrance);
                      onClose();
                    }}
                    title="Lihat Berkas Lengkap"
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#9d9387] hover:text-[#f3f0e6] transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      onAddToCart(fragrance, '50ml');
                      onClose();
                    }}
                    title="Tambahkan Ke Keranjang"
                    className="p-2.5 rounded-lg bg-[#f2ca50]/15 hover:bg-[#f2ca50]/25 text-[#f2ca50] border border-[#f2ca50]/30 transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveWishlist(fragrance)}
                    title="Hapus dari Favorit"
                    className="p-2.5 rounded-lg hover:bg-red-500/10 text-[#99907c] hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedFragrances.length > 0 && (
          <div className="border-t border-[#262629] pt-4 mt-4 flex items-center justify-between">
            <span className="text-xs text-[#99907c]">
              Pilihan aroma disimpan aman di perangkat ini
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-[#f3f0e6] transition-colors"
            >
              Tutup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
