/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageTab, Fragrance, CartItem } from './types';
import { FRAGRANCES } from './data/fragrances';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { CollectionView } from './components/CollectionView';
import { CraftView } from './components/CraftView';
import { BookingView } from './components/BookingView';
import { CartDrawer } from './components/CartDrawer';
import { DossierModal } from './components/DossierModal';
import { WishlistModal } from './components/WishlistModal';
import { CheckCircle2, ArrowUp } from 'lucide-react';

interface ToastNotification {
  id: string;
  title: string;
  description: string;
  type?: 'success' | 'gold' | 'info';
}

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [dossierFragrance, setDossierFragrance] = useState<Fragrance | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [toasts, setToasts] = useState<ToastNotification[]>([]);
  const [ambientAudioActive, setAmbientAudioActive] = useState(false);

  const getVolumePrice = (fragrance: Fragrance, volume: '50ml' | '100ml' | 'Crystal'): number => {
    if (volume === '50ml') return fragrance.price;
    if (volume === '100ml') return Math.round(fragrance.price * 1.55);
    return Math.round(fragrance.price * 2.85);
  };

  // Cart state initialized with default discovery curation or localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aura_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    // Default initial luxury item in cart
    return [
      {
        fragrance: FRAGRANCES[0],
        volume: '100ml',
        price: Math.round(FRAGRANCES[0].price * 1.55),
        quantity: 1,
        monogram: 'JLD'
      }
    ];
  });

  // Wishlist state with localStorage persistence
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aura_wishlist');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return ['aurum-noctis', 'iris-souverain'];
  });

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aura_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aura_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // ignore
    }
  }, [wishlistIds]);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToast = (title: string, description: string, type: 'success' | 'gold' | 'info' = 'gold') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev.slice(-3), { id, title, description, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  const handleAddToCart = (fragrance: Fragrance, volume: '50ml' | '100ml' | 'Crystal') => {
    const itemPrice = getVolumePrice(fragrance, volume);
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.fragrance.id === fragrance.id && item.volume === volume);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { fragrance, volume, price: itemPrice, quantity: 1 }];
      }
    });

    const displayVol = volume === 'Crystal' ? 'Flacon Kristal' : volume;
    addToast(
      'Flacon Ditambahkan ke Keranjang',
      `${fragrance.name} (${displayVol}) telah dicadangkan dalam koleksi pemesanan Anda.`,
      'gold'
    );
  };

  const handleUpdateQty = (index: number, delta: number) => {
    setCartItems(prev => {
      const updated = [...prev];
      const newQty = updated[index].quantity + delta;
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index] = { ...updated[index], quantity: newQty };
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateMonogram = (index: number, monogram: string) => {
    setCartItems(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], monogram };
      return updated;
    });
    addToast(
      'Gravir Inisial Disimpan',
      monogram ? `Botol akan diukir inisial: "${monogram}"` : 'Pengaturan gravir nama dibatalkan.',
      'info'
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleWishlist = (fragrance: Fragrance) => {
    setWishlistIds(prev => {
      if (prev.includes(fragrance.id)) {
        addToast(
          'Dihapus dari Favorit',
          `${fragrance.name} telah dihapus dari daftar simpanan Anda.`,
          'info'
        );
        return prev.filter(id => id !== fragrance.id);
      } else {
        addToast(
          'Disimpan ke Favorit',
          `${fragrance.name} disimpan untuk konsultasi salon Anda berikutnya.`,
          'gold'
        );
        return [...prev, fragrance.id];
      }
    });
  };

  const handleOpenConsultation = () => {
    setActiveTab('private-atelier-&-booking');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleOpenFinder = () => {
    setActiveTab('the-collection');
    setTimeout(() => {
      const elem = document.getElementById('diagnostic-section');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 700, behavior: 'smooth' });
      }
    }, 150);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAmbientAudio = () => {
    setAmbientAudioActive(prev => !prev);
    addToast(
      !ambientAudioActive 
        ? 'Suasana Akustik Atelier Aktif' 
        : 'Suasana Akustik Dinonaktifkan',
      !ambientAudioActive
        ? 'Resonansi lembut genta atelier Paris dan kesegaran Grasse.' 
        : 'Suasana kembali hening.',
      'info'
    );
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#131314] text-[#edebe6] flex flex-col font-sans selection:bg-[#f2ca50]/30 selection:text-[#f3f0e6]">
      {/* Main Global Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenConsultation={handleOpenConsultation}
        onOpenFinder={handleOpenFinder}
        ambientAudioActive={ambientAudioActive}
        onToggleAmbientAudio={toggleAmbientAudio}
      />

      {/* Main View Transition Container */}
      <main className="flex-1 w-full flex flex-col">
        {activeTab === 'home' && (
          <HomeView
            onNavigate={setActiveTab}
            onAddToCart={handleAddToCart}
            onOpenDossier={fragrance => setDossierFragrance(fragrance)}
          />
        )}

        {activeTab === 'the-collection' && (
          <CollectionView
            onNavigate={setActiveTab}
            onAddToCart={handleAddToCart}
            onOpenDossier={fragrance => setDossierFragrance(fragrance)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeTab === 'olfactory-art-&-craft' && (
          <CraftView
            onNavigate={setActiveTab}
          />
        )}

        {activeTab === 'private-atelier-&-booking' && (
          <BookingView
            onNavigate={setActiveTab}
          />
        )}
      </main>

      {/* Global Luxury Footer */}
      <Footer
        onNavigate={setActiveTab}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onUpdateMonogram={handleUpdateMonogram}
        onClearCart={handleClearCart}
      />

      {/* Full Olfactory Dossier Modal */}
      <DossierModal
        fragrance={dossierFragrance}
        onClose={() => setDossierFragrance(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={dossierFragrance ? wishlistIds.includes(dossierFragrance.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Private Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onOpenDossier={fragrance => setDossierFragrance(fragrance)}
      />

      {/* Floating Action Buttons: Back to Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3.5 rounded-full bg-[#1b1b1e]/90 hover:bg-[#25252a] text-[#f2ca50] border border-[#f2ca50]/20 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 group"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* Notification Toast Stack */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-[#141416]/95 border border-[#f2ca50]/30 shadow-2xl backdrop-blur-md animate-fade-in"
          >
            <span className="p-1 rounded-full bg-[#f2ca50]/15 text-[#f2ca50] shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </span>
            <div className="min-w-0">
              <h5 className="font-serif text-sm text-[#f3f0e6] font-medium leading-tight">
                {toast.title}
              </h5>
              <p className="text-xs text-[#9d9387] mt-0.5 leading-snug">
                {toast.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
