import React, { useState } from 'react';
import { Fragrance, PageTab } from '../types';
import { FRAGRANCES } from '../data/fragrances';
import { Bookmark, Star, ArrowRight, ShoppingBag, Eye, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface CollectionViewProps {
  onNavigate: (tab: PageTab) => void;
  onAddToCart: (fragrance: Fragrance, volume: '50ml' | '100ml' | 'Crystal') => void;
  onOpenDossier: (fragrance: Fragrance) => void;
  wishlistIds: string[];
  onToggleWishlist: (fragrance: Fragrance) => void;
}

export const CollectionView: React.FC<CollectionViewProps> = ({
  onNavigate,
  onAddToCart,
  onOpenDossier,
  wishlistIds,
  onToggleWishlist
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'boise' | 'floral' | 'oriental' | 'fresh'>('all');
  const [selectedTier, setSelectedTier] = useState<'all' | 'Extrait' | 'Absolu Élixir'>('all');
  const [selectedVolumes, setSelectedVolumes] = useState<Record<string, '50ml' | '100ml' | 'Crystal'>>({
    'aurum-noctis': '50ml',
    'santal-imperial': '50ml',
    'rose-de-mai': '50ml',
    'iris-souverain': '50ml',
    'cuir-majestueux': '50ml',
    'neroli-lumiere': '50ml'
  });

  // Quiz state
  const [quizAtmosphere, setQuizAtmosphere] = useState<'aurum' | 'rose' | 'cuir' | 'neroli'>('aurum');

  const quizRecommendations = {
    aurum: {
      fragrance: FRAGRANCES[0],
      name: 'Aurum Noctis',
      family: 'No. 01 • Oriental Ambré',
      desc: 'Cocok dengan keinginan Anda akan kehangatan rembulan, aroma kayu gaharu liar Kamboja, dan ambar emas mistis.',
      affinity: 'Kecocokan 99.4%',
      sillage: 'Menyelubungi',
      intensity: '38% Ekstrak Murni',
      season: 'Malam Kemewahan',
      img: FRAGRANCES[0].image
    },
    rose: {
      fragrance: FRAGRANCES[2],
      name: 'Rose de Mai Éthérée',
      family: 'No. 03 • Floral Pur',
      desc: 'Selaras dengan embun fajar Grasse, kelopak mawar mekar yang baru dipetik, dan bisikan lada merah muda yang segar.',
      affinity: 'Kecocokan 98.1%',
      sillage: 'Intim',
      intensity: '35% Ekstrak Murni',
      season: 'Fajar Musim Semi',
      img: FRAGRANCES[2].image
    },
    cuir: {
      fragrance: FRAGRANCES[4],
      name: 'Cuir Majestueux',
      family: 'No. 05 • Cuir Fumé',
      desc: 'Mencerminkan aura wibawa mendalam, aroma jilid buku kulit perpustakaan antik, dan kehangatan bara getah pohon birch.',
      affinity: 'Kecocokan 97.6%',
      sillage: 'Monumental',
      intensity: '36% Ekstrak Murni',
      season: 'Malam Musim Dingin',
      img: FRAGRANCES[4].image
    },
    neroli: {
      fragrance: FRAGRANCES[5],
      name: 'Néroli Lumière',
      family: 'No. 06 • Hespéridé Solaire',
      desc: 'Harmonis dengan semilir angin laut Mediterania, bunga jeruk putih bermandikan matahari, dan kesegaran ambergis asin alami.',
      affinity: 'Kecocokan 96.8%',
      sillage: 'Bercahaya',
      intensity: '30% Ekstrak Murni',
      season: 'Puncak Musim Panas',
      img: FRAGRANCES[5].image
    }
  };

  const currentMatch = quizRecommendations[quizAtmosphere];

  // Filtering
  const filteredFragrances = FRAGRANCES.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchTier = selectedTier === 'all' || item.tier === selectedTier;
    return matchCategory && matchTier;
  });

  const getPriceForVolume = (basePrice: number, vol: '50ml' | '100ml' | 'Crystal') => {
    if (vol === '50ml') return Math.round(basePrice * 0.72);
    if (vol === '100ml') return basePrice;
    return Math.round(basePrice * 1.55);
  };

  const handleVolumeChange = (fragranceId: string, vol: '50ml' | '100ml' | 'Crystal') => {
    setSelectedVolumes((prev) => ({ ...prev, [fragranceId]: vol }));
  };

  return (
    <div className="flex flex-col w-full">
      {/* Ambient Atmospheric Backlight */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-[#f2ca50]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-80 right-[-10%] w-[500px] h-[500px] bg-[#5d4604]/20 rounded-full blur-[160px] pointer-events-none -z-10" />

        {/* Editorial Collection Header */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-6 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-[#f2ca50] mb-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e4c277]">
                  Edisi Terbatas • Grasse & Paris 2024
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#e5e2e3] tracking-tight">
                Koleksi Eksklusif Privée
              </h1>
              <p className="font-sans text-xs sm:text-sm text-[#d3cec5] max-w-xl mt-3 font-light leading-relaxed">
                Setiap formula parfum murni diramu secara terbatas dengan botol kristal bernomor, dimatangkan dalam tong kayu ek, dan disegel lilin manual langsung dari Paris.
              </p>
            </div>

            {/* Total count badge */}
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-[#201f20] border border-[#4d4635]/40 rounded-xl flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse" />
                <span className="font-sans text-[#e5e2e3] font-semibold">6 Mahakarya Tersedia</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Navigation Bar */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-4 w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-[#4d4635]/30">
            {/* Primary Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-2 font-sans text-xs uppercase tracking-[0.2em] rounded-xl transition-all duration-300 font-semibold ${
                  selectedCategory === 'all'
                    ? 'bg-[#f2ca50] text-[#3c2f00] shadow'
                    : 'text-[#d0c5af] hover:text-[#e5e2e3] bg-[#201f20]'
                }`}
                type="button"
              >
                Semua Koleksi (6)
              </button>
              <button
                onClick={() => setSelectedCategory('boise')}
                className={`px-3.5 py-2 font-sans text-xs uppercase tracking-[0.2em] rounded-xl transition-all duration-300 font-semibold ${
                  selectedCategory === 'boise'
                    ? 'bg-[#f2ca50] text-[#3c2f00] shadow'
                    : 'text-[#d0c5af] hover:text-[#e5e2e3] bg-[#201f20]'
                }`}
                type="button"
              >
                Kayu & Gaharu
              </button>
              <button
                onClick={() => setSelectedCategory('floral')}
                className={`px-3.5 py-2 font-sans text-xs uppercase tracking-[0.2em] rounded-xl transition-all duration-300 font-semibold ${
                  selectedCategory === 'floral'
                    ? 'bg-[#f2ca50] text-[#3c2f00] shadow'
                    : 'text-[#d0c5af] hover:text-[#e5e2e3] bg-[#201f20]'
                }`}
                type="button"
              >
                Bunga Murni
              </button>
              <button
                onClick={() => setSelectedCategory('oriental')}
                className={`px-3.5 py-2 font-sans text-xs uppercase tracking-[0.2em] rounded-xl transition-all duration-300 font-semibold ${
                  selectedCategory === 'oriental'
                    ? 'bg-[#f2ca50] text-[#3c2f00] shadow'
                    : 'text-[#d0c5af] hover:text-[#e5e2e3] bg-[#201f20]'
                }`}
                type="button"
              >
                Ambar Oriental
              </button>
              <button
                onClick={() => setSelectedCategory('fresh')}
                className={`px-3.5 py-2 font-sans text-xs uppercase tracking-[0.2em] rounded-xl transition-all duration-300 font-semibold ${
                  selectedCategory === 'fresh'
                    ? 'bg-[#f2ca50] text-[#3c2f00] shadow'
                    : 'text-[#d0c5af] hover:text-[#e5e2e3] bg-[#201f20]'
                }`}
                type="button"
              >
                Segar & Sitrus
              </button>
            </div>

            {/* Secondary Concentration & Layout Toggle */}
            <div className="flex items-center gap-4 self-end lg:self-auto">
              <span className="font-sans text-[11px] text-[#99907c] uppercase tracking-wider hidden sm:inline">
                Tingkat:
              </span>
              <div className="flex items-center gap-1 bg-[#201f20] rounded-xl p-1 border border-[#4d4635]/40">
                <button
                  onClick={() => setSelectedTier(selectedTier === 'Extrait' ? 'all' : 'Extrait')}
                  className={`px-3 py-1 font-sans text-[11px] uppercase rounded-lg transition-colors ${
                    selectedTier === 'Extrait'
                      ? 'text-[#3c2f00] bg-[#f2ca50] font-bold'
                      : 'text-[#d0c5af] hover:text-[#e5e2e3]'
                  }`}
                  type="button"
                >
                  Ekstrak Murni
                </button>
                <button
                  onClick={() => setSelectedTier(selectedTier === 'Absolu Élixir' ? 'all' : 'Absolu Élixir')}
                  className={`px-3 py-1 font-sans text-[11px] uppercase rounded-lg transition-colors ${
                    selectedTier === 'Absolu Élixir'
                      ? 'text-[#3c2f00] bg-[#f2ca50] font-bold'
                      : 'text-[#d0c5af] hover:text-[#e5e2e3]'
                  }`}
                  type="button"
                >
                  Élixir Absolu
                </button>
              </div>
              <span className="font-sans text-xs text-[#99907c]">
                {filteredFragrances.length} Flacon
              </span>
            </div>
          </div>
        </section>

        {/* Product Grid: 6 Luxury Flacons */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFragrances.map((fragrance) => {
              const currentVol = selectedVolumes[fragrance.id] || '50ml';
              const price = getPriceForVolume(fragrance.price, currentVol);
              const isWishlisted = wishlistIds.includes(fragrance.id);

              return (
                <article
                  key={fragrance.id}
                  className="group relative bg-[#1c1b1c] border border-[#4d4635]/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-2xl hover:border-[#f2ca50]/40"
                >
                  <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-[#0e0e0f]">
                    <img
                      src={fragrance.image}
                      alt={fragrance.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1c] via-[#1c1b1c]/20 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                      {fragrance.badge && (
                        <span className="px-2.5 py-1 bg-[#0e0e0f]/90 backdrop-blur-md text-[#f2ca50] font-sans text-[10px] font-semibold uppercase rounded-lg tracking-[0.2em] border border-[#f2ca50]/20">
                          {fragrance.badge}
                        </span>
                      )}
                      <span className="px-2.5 py-0.5 bg-[#5d4604]/80 text-[#ffdf9b] font-sans text-[10px] tracking-widest rounded-lg">
                        {fragrance.concentration}
                      </span>
                    </div>

                    {/* Bookmark / Wishlist button */}
                    <button
                      onClick={() => onToggleWishlist(fragrance)}
                      aria-label="Simpan ke Favorit"
                      className={`absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-colors border ${
                        isWishlisted
                          ? 'bg-[#f2ca50] text-[#3c2f00] border-[#f2ca50]'
                          : 'bg-[#0e0e0f]/80 text-[#d0c5af] hover:text-[#f2ca50] border-[#4d4635]/60'
                      }`}
                      type="button"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>

                    {/* Slide-up Olfactory Note Drawer on Desktop Hover */}
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-[#201f20]/95 backdrop-blur-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2 z-20 border-t border-[#f2ca50]/30">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="font-sans text-[11px] font-semibold text-[#e4c277] uppercase">
                          Piramida Aroma
                        </span>
                        <span className="text-[11px] text-[#99907c]">Ketahanan: {fragrance.longevity}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[#e5e2e3]">
                        <div className="bg-[#2a2a2b]/80 p-2 rounded-lg border border-[#4d4635]/30">
                          <span className="text-[9px] text-[#99907c] uppercase block font-semibold">Puncak</span>
                          <span className="text-xs truncate block mt-0.5 text-[#e5e2e3]">
                            {fragrance.notes.top}
                          </span>
                        </div>
                        <div className="bg-[#2a2a2b]/80 p-2 rounded-lg border border-[#4d4635]/30">
                          <span className="text-[9px] text-[#99907c] uppercase block font-semibold">Jantung</span>
                          <span className="text-xs truncate block mt-0.5 text-[#e5e2e3]">
                            {fragrance.notes.heart}
                          </span>
                        </div>
                        <div className="bg-[#2a2a2b]/80 p-2 rounded-lg border border-[#4d4635]/30">
                          <span className="text-[9px] text-[#99907c] uppercase block font-semibold">Dasar</span>
                          <span className="text-xs truncate block mt-0.5 text-[#e5e2e3]">
                            {fragrance.notes.base}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center justify-between pt-2 border-t border-[#4d4635]/30">
                        <span className="text-[10px] uppercase text-[#99907c]">Alokasi Botol:</span>
                        <span className="text-xs text-[#f2ca50]">{fragrance.preorderBatch}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex flex-col flex-grow justify-between bg-[#1c1b1c]">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-sans text-[11px] uppercase text-[#e4c277] tracking-[0.24em] font-semibold">
                          {fragrance.family}
                        </span>
                        <div className="flex items-center gap-1 text-[#f2ca50]">
                          <Star className="w-3.5 h-3.5 fill-[#f2ca50]" />
                          <span className="font-sans text-xs text-[#e5e2e3] font-semibold">
                            {fragrance.rating}
                          </span>
                        </div>
                      </div>
                      <h2
                        onClick={() => onOpenDossier(fragrance)}
                        className="font-serif text-2xl text-[#e5e2e3] tracking-normal group-hover:text-[#f2ca50] transition-colors cursor-pointer"
                      >
                        {fragrance.name}
                      </h2>
                      <p className="font-sans text-xs text-[#d3cec5] mt-2 line-clamp-2 font-light leading-relaxed">
                        {fragrance.description}
                      </p>
                    </div>

                    {/* Volume Selector & Action */}
                    <div className="mt-6 pt-4 border-t border-[#4d4635]/30">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-[#d0c5af] font-sans text-xs">
                          {(['50ml', '100ml', 'Crystal'] as const).map((vol) => (
                            <button
                              key={vol}
                              onClick={() => handleVolumeChange(fragrance.id, vol)}
                              className={`px-2.5 py-1 rounded-lg transition-colors ${
                                currentVol === vol
                                  ? 'bg-[#2a2a2b] text-[#f2ca50] font-bold border border-[#f2ca50]/40'
                                  : 'text-[#99907c] hover:text-[#e5e2e3]'
                              }`}
                              type="button"
                            >
                              {vol === 'Crystal' ? 'Kristal' : vol}
                            </button>
                          ))}
                        </div>
                        <span className="font-serif text-xl text-[#f2ca50] font-medium">
                          €{price}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onAddToCart(fragrance, currentVol)}
                          className="py-2.5 px-3 bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] font-sans text-[11px] uppercase tracking-[0.2em] font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 shadow"
                          type="button"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Pesan</span>
                        </button>
                        <button
                          onClick={() => onOpenDossier(fragrance)}
                          className="py-2.5 px-3 bg-[#2a2a2b] hover:bg-[#353436] text-[#e5e2e3] font-sans text-[11px] uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 border border-[#4d4635]/40"
                          type="button"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Berkas</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Interactive Section: Find Your Signature Scent (Mini-Quiz Module) */}
        <section id="diagnostic-section" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 w-full">
          <div className="relative bg-[#201f20] border border-[#f2ca50]/20 rounded-2xl overflow-hidden p-6 lg:p-12 shadow-2xl">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#f2ca50]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: The Interactive Quiz Step */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-[#f2ca50]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[#e4c277]">
                    Tes Kepribadian Olfaktori Instan
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e3] tracking-tight mb-2">
                  Temukan Karakter Aroma Anda
                </h2>
                <p className="font-sans text-sm text-[#d3cec5] mb-6 font-light">
                  Biarkan indra penciuman intuitif menyelaraskan karakter batin Anda dengan katalog ekstrak murni kami.
                </p>

                {/* Quiz Stepper Header */}
                <div className="flex items-center justify-between mb-4 pb-2 bg-[#1c1b1c] px-4 py-2.5 rounded-xl border border-[#4d4635]/40">
                  <span className="font-sans text-xs uppercase text-[#e5e2e3] font-semibold tracking-widest">
                    Pertanyaan 01 dari 03
                  </span>
                  <span className="font-sans text-xs text-[#f2ca50]">Tema: Suasana & Jiwa</span>
                </div>

                <p className="font-serif text-lg text-[#e5e2e3] mb-4">
                  Suasana panca indra mana yang paling memanggil jiwa Anda malam ini?
                </p>

                {/* Atmosphere Selection Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setQuizAtmosphere('aurum')}
                    className={`text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-3 border ${
                      quizAtmosphere === 'aurum'
                        ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_20px_rgba(242,202,80,0.15)]'
                        : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                    }`}
                    type="button"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0e0e0f] flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif text-base text-[#e5e2e3]">Beludru Rembulan</span>
                      <span className="font-sans text-xs text-[#d3cec5] mt-1 font-light">
                        Kemewahan malam, mawar gelap, ambar madu hangat & misteri nokturnal.
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => setQuizAtmosphere('rose')}
                    className={`text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-3 border ${
                      quizAtmosphere === 'rose'
                        ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_20px_rgba(242,202,80,0.15)]'
                        : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                    }`}
                    type="button"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0e0e0f] flex items-center justify-center text-[#e4c277] shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif text-base text-[#e5e2e3]">Taman Mentari Fajar</span>
                      <span className="font-sans text-xs text-[#d3cec5] mt-1 font-light">
                        Kelopak mawar bermekaran, embun pagi jernih, rempah halus & kepolosan anggun.
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => setQuizAtmosphere('cuir')}
                    className={`text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-3 border ${
                      quizAtmosphere === 'cuir'
                        ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_20px_rgba(242,202,80,0.15)]'
                        : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                    }`}
                    type="button"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0e0e0f] flex items-center justify-center text-[#f2ca50] shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif text-base text-[#e5e2e3]">Perpustakaan Antik</span>
                      <span className="font-sans text-xs text-[#d3cec5] mt-1 font-light">
                        Jilid buku kulit kuno, kayu cedar, safron hangat & bara api pohon birch.
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={() => setQuizAtmosphere('neroli')}
                    className={`text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-3 border ${
                      quizAtmosphere === 'neroli'
                        ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_20px_rgba(242,202,80,0.15)]'
                        : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                    }`}
                    type="button"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0e0e0f] flex items-center justify-center text-[#e4c277] shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif text-base text-[#e5e2e3]">Fajar Samudra</span>
                      <span className="font-sans text-xs text-[#d3cec5] mt-1 font-light">
                        Perkebunan jeruk, kelopak bunga neroli, ambergis laut & udara segar mentari.
                      </span>
                    </div>
                  </button>
                </div>

                {/* Quiz Stepper Footer Controls */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#4d4635]/40 text-[#99907c]">
                  <span className="font-sans text-xs">
                    Pilih suasana untuk menyelaraskan harmoni aroma secara langsung
                  </span>
                  <button
                    onClick={() => onNavigate('private-atelier-&-booking')}
                    className="font-sans text-xs uppercase tracking-wider text-[#f2ca50] hover:text-[#ffe088] transition-colors flex items-center gap-1 font-semibold"
                    type="button"
                  >
                    <span>Konsultasi Khusus Pribadi</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Instant Live Recommendation Card */}
              <div className="lg:col-span-5 bg-[#0e0e0f]/90 backdrop-blur-md p-6 rounded-2xl border border-[#f2ca50]/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 border-b border-[#4d4635]/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f2ca50] animate-pulse" />
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#f2ca50]">
                      Hasil Harmonisasi Aroma
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#e4c277] bg-[#201f20] px-2.5 py-0.5 rounded-lg border border-[#4d4635]/40">
                    {currentMatch.affinity}
                  </span>
                </div>

                <div className="my-4 flex flex-col items-center text-center">
                  <div className="w-40 h-48 rounded-xl overflow-hidden bg-[#201f20] my-2 relative group shadow-inner border border-[#4d4635]/50">
                    <img
                      src={currentMatch.img}
                      alt={currentMatch.name}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                  </div>
                  <span className="font-sans text-xs font-semibold text-[#e4c277] uppercase tracking-[0.24em] mt-2">
                    {currentMatch.family}
                  </span>
                  <h3 className="font-serif text-2xl text-[#e5e2e3] mt-1">{currentMatch.name}</h3>
                  <p className="font-sans text-xs text-[#d3cec5] max-w-sm mt-1 font-light leading-relaxed">
                    {currentMatch.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs my-2 pt-2 border-t border-[#4d4635]/20">
                  <div className="p-2 bg-[#201f20] rounded-lg">
                    <span className="text-[10px] text-[#99907c] uppercase block">Konsentrasi</span>
                    <span className="text-xs font-semibold text-[#f2ca50]">{currentMatch.intensity}</span>
                  </div>
                  <div className="p-2 bg-[#201f20] rounded-lg">
                    <span className="text-[10px] text-[#99907c] uppercase block">Pancaran Aroma</span>
                    <span className="text-xs font-semibold text-[#e5e2e3]">{currentMatch.sillage}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center gap-2">
                  <button
                    onClick={() => onAddToCart(currentMatch.fragrance, '50ml')}
                    className="flex-1 py-2.5 px-3 bg-[#f2ca50] hover:bg-[#ffe088] text-[#3c2f00] font-sans text-xs uppercase tracking-wider font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pesan Hasil Rekomendasi</span>
                  </button>
                  <button
                    onClick={() => onOpenDossier(currentMatch.fragrance)}
                    className="p-2.5 bg-[#201f20] hover:bg-[#2a2a2b] text-[#f2ca50] rounded-xl border border-[#4d4635]/40 transition-colors"
                    title="Lihat Berkas"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
