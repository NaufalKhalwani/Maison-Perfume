import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShieldCheck, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (index: number, delta: number) => void;
  onRemoveItem: (index: number) => void;
  onUpdateMonogram: (index: number, monogram: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onUpdateMonogram,
  onClearCart
}) => {
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [selectedSample, setSelectedSample] = useState('Aurum Noctis 5ml');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setCheckoutComplete(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-6 md:pl-10 w-full justify-end">
        <div className="w-screen max-w-md bg-[#131314] border-l border-[#f2ca50]/20 flex flex-col justify-between shadow-2xl text-[#e5e2e3]">
          {/* Header */}
          <div className="p-6 border-b border-[#4d4635]/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#f2ca50]" />
              <span className="font-serif text-lg tracking-wider text-[#e5e2e3]">
                Keranjang Koleksi Pribadi
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-[#99907c] hover:text-[#f2ca50] transition-colors p-1"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            {checkoutComplete ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f2ca50]/20 border border-[#f2ca50] flex items-center justify-center text-[#f2ca50]">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#f2ca50]">
                  Pesanan Berhasil Disegel
                </h3>
                <p className="text-xs text-[#d3cec5] max-w-xs leading-relaxed">
                  Pesanan botol kristal Anda telah disegel lilin manual dan diserahkan kepada Maître de Crypte di Paris. Sertifikat keaslian bernomor resmi akan menyertai pengiriman Anda.
                </p>
                <div className="p-4 bg-[#201f20] w-full text-left space-y-2 text-xs border border-[#4d4635]/50 rounded-xl">
                  <div className="flex justify-between text-[#99907c]">
                    <span>Nomor Registrasi Brankas:</span>
                    <span className="text-[#f2ca50] font-mono font-semibold">MDA-2024-8841</span>
                  </div>
                  <div className="flex justify-between text-[#99907c]">
                    <span>Kurir Diplomatik:</span>
                    <span className="text-[#e5e2e3]">DHL Express Terproteksi</span>
                  </div>
                  <div className="flex justify-between text-[#99907c]">
                    <span>Sampel Gratis Tambahan:</span>
                    <span className="text-[#e4c277]">{selectedSample}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setCheckoutComplete(false);
                    onClearCart();
                    onClose();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#f2ca50] text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#ffe088]"
                >
                  Kembali Ke Koleksi
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 flex flex-col items-center text-center text-[#99907c] space-y-3">
                <ShoppingBag className="w-10 h-10 stroke-[1.2] text-[#4d4635]" />
                <p className="font-serif text-lg text-[#e5e2e3]">
                  Keranjang pesanan Anda masih kosong
                </p>
                <p className="text-xs max-w-xs">
                  Jelajahi Koleksi Mahakarya Ekstrak Murni untuk memilih botol bernomor Anda.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div
                    key={`${item.fragrance.id}-${item.volume}-${index}`}
                    className="p-4 bg-[#1c1b1c] border border-[#4d4635]/30 rounded-xl flex gap-4 relative group"
                  >
                    <img
                      src={item.fragrance.image}
                      alt={item.fragrance.name}
                      className="w-20 h-24 object-cover rounded-lg bg-[#0e0e0f]"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] text-[#e4c277] font-sans uppercase tracking-widest block">
                              {item.fragrance.family}
                            </span>
                            <h4 className="font-serif text-base text-[#e5e2e3]">
                              {item.fragrance.name}
                            </h4>
                          </div>
                          <button
                            onClick={() => onRemoveItem(index)}
                            className="text-[#99907c] hover:text-[#ffb4ab] transition-colors p-1"
                            aria-label="Hapus item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-xs text-[#99907c]">
                          Ukuran: <strong className="text-[#e5e2e3]">{item.volume === 'Crystal' ? 'Flacon Kristal' : item.volume}</strong>
                        </span>
                      </div>

                      {/* Monogram customization */}
                      <div className="mt-2">
                        <label className="text-[9px] uppercase tracking-wider text-[#99907c] block">
                          Gratis Gravir Inisial Nama (Maks. 4 Huruf):
                        </label>
                        <input
                          type="text"
                          maxLength={4}
                          value={item.monogram || ''}
                          onChange={(e) => onUpdateMonogram(index, e.target.value.toUpperCase())}
                          placeholder="e.g. JLD"
                          className="bg-[#201f20] border-b border-[#4d4635] text-xs px-1.5 py-0.5 w-24 text-[#f2ca50] tracking-widest uppercase focus:outline-none focus:border-[#f2ca50]"
                        />
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#4d4635]/20">
                        <div className="flex items-center gap-2 border border-[#4d4635]/60 bg-[#201f20] px-2 py-0.5 rounded-lg">
                          <button
                            onClick={() => onUpdateQty(index, -1)}
                            className="text-[#99907c] hover:text-[#e5e2e3]"
                            aria-label="Kurangi jumlah"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono px-2">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQty(index, 1)}
                            className="text-[#99907c] hover:text-[#e5e2e3]"
                            aria-label="Tambah jumlah"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-serif text-sm text-[#f2ca50]">
                          €{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Free Sample Selector */}
                <div className="p-3.5 bg-[#201f20] border border-[#4d4635]/40 rounded-xl mt-4">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#f2ca50] block mb-1 font-semibold">
                    Bonus Spesial: Vial Miniatur 5ml Gratis:
                  </span>
                  <select
                    value={selectedSample}
                    onChange={(e) => setSelectedSample(e.target.value)}
                    className="w-full bg-[#131314] text-xs text-[#e5e2e3] border border-[#4d4635] p-2 rounded-lg focus:border-[#f2ca50] focus:outline-none"
                  >
                    <option value="Aurum Noctis 5ml">Aurum Noctis (38% Ekstrak) - 5ml</option>
                    <option value="Santal Impérial 5ml">Santal Impérial (32% Ekstrak) - 5ml</option>
                    <option value="Rose de Mai Éthérée 5ml">Rose de Mai Éthérée (35% Ekstrak) - 5ml</option>
                    <option value="Iris Souverain 5ml">Iris Souverain (34% Ekstrak) - 5ml</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout */}
          {!checkoutComplete && items.length > 0 && (
            <div className="p-6 border-t border-[#4d4635]/40 bg-[#1c1b1c] space-y-4">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[#d0c5af]">
                  <span>Subtotal Pesanan</span>
                  <span className="font-serif text-base text-[#f2ca50]">€{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#99907c]">
                  <span>Penyegelan Lilin Manual & Kurir</span>
                  <span className="text-[#f2ca50]">Gratis (Complimentary)</span>
                </div>
                <div className="flex justify-between text-[#99907c]">
                  <span>Kredit Konsultasi Salon</span>
                  <span className="text-[#e5e2e3]">100% Dapat Diklaim</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 rounded-xl bg-[#f2ca50] text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#ffe088] transition-all flex items-center justify-center gap-2 shadow-[0_4px_25px_rgba(212,175,55,0.25)]"
              >
                <span>Konfirmasi Pembelian Brankas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
