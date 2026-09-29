import React, { useState } from 'react';
import { PageTab, Fragrance } from '../types';
import { FRAGRANCES } from '../data/fragrances';
import { Sparkles, Volume2, VolumeX, Moon, Sun, Trees, ArrowRight, Eye, Check } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: PageTab) => void;
  onAddToCart: (fragrance: Fragrance, volume: '50ml' | '100ml' | 'Crystal') => void;
  onOpenDossier: (fragrance: Fragrance) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onAddToCart,
  onOpenDossier
}) => {
  // Masterpiece Scent Showcase Tabs
  const [activeScentKey, setActiveScentKey] = useState<'aurum' | 'santal' | 'rose'>('aurum');

  // Sensory Chamber Atmosphere state
  const [atmosphere, setAtmosphere] = useState<'nocturne' | 'solaire' | 'boise'>('nocturne');
  const [ambientAudioPlaying, setAmbientAudioPlaying] = useState(false);

  // Scent Master Data for the interactive trilogy showcase
  const scentData = {
    aurum: {
      fragrance: FRAGRANCES[0],
      title: 'Aurum Noctis',
      tag: 'Ambar Kayu • Panen Istimewa',
      vol: '100ml / 3.4 FL. OZ.',
      price: 420,
      desc: 'Ode malam memikat yang diracik di sekitar gaharu Kamboja berusia 25 tahun, getah ambar emas hangat, dan kelopak mawar Damaskus gelap bermandikan embun.',
      top: 'Saffron Persia & Jeruk Darah',
      heart: 'Mawar Turki & Kemenyan Kuno',
      base: 'Gaharu Berasap & Ambar Emas',
      bar1: 45,
      bar2: 30,
      bar3: 25,
      label1: 'Gaharu Berasap 45%',
      label2: 'Mawar Turki 30%',
      label3: 'Ambar Emas 25%',
      image: FRAGRANCES[0].image
    },
    santal: {
      fragrance: FRAGRANCES[1],
      title: 'Santal Impérial',
      tag: 'Kayu Suci • Warisan Abadi',
      vol: '100ml / 3.4 FL. OZ.',
      price: 385,
      desc: 'Berasal dari pohon cendana Mysore lestari, diperkaya seduhan biji kapulaga hijau, mentega iris lembut, dan kehangatan asap kayu cedar Virginia.',
      top: 'Kapulaga Hijau & Bergamot',
      heart: 'Mentega Orris & Daun Violet',
      base: 'Cendana Mysore & Cedar',
      bar1: 55,
      bar2: 25,
      bar3: 20,
      label1: 'Cendana Mysore 55%',
      label2: 'Akar Orris 25%',
      label3: 'Kapulaga Hijau 20%',
      image: FRAGRANCES[1].image
    },
    rose: {
      fragrance: FRAGRANCES[2],
      title: 'Rose de Mai Éthérée',
      tag: 'Kemewahan Bunga • Panen Fajar',
      vol: '100ml / 3.4 FL. OZ.',
      price: 410,
      desc: 'Perayaan panen istimewa. Lebih dari sepuluh ribu kelopak mawar Centifolia Grasse yang dipetik tangan tepat saat fajar, dihangatkan getah benzoin dan kasturi putih sutra.',
      top: 'Lada Merah Muda & Air Embun',
      heart: 'Mawar Centifolia Grasse Murni',
      base: 'Kasturi Sutra & Benzoin Putih',
      bar1: 60,
      bar2: 25,
      bar3: 15,
      label1: 'Mawar Centifolia 60%',
      label2: 'Ambar Putih 25%',
      label3: 'Lada Merah Muda 15%',
      image: FRAGRANCES[2].image
    }
  };

  const currentScent = scentData[activeScentKey];

  const atmosphereData = {
    nocturne: {
      name: 'Malam Kemewahan (Nocturne)',
      description: 'Malam beludru hangat, lilin temaram apartemen Paris, teh hitam berasap, dan getah gaharu Kamboja yang menentramkan jiwa.',
      glowClass: 'from-[#f2ca50]/15 via-[#201f20] to-[#0e0e0f]',
      accentColor: '#f2ca50',
      icon: Moon
    },
    solaire: {
      name: 'Mentari Mediterania (Solaire)',
      description: 'Embun pagi di perkebunan jeruk Cap d’Antibes, bunga neroli putih yang mekar segar, dan ambar perak yang dihangatkan surya.',
      glowClass: 'from-[#ffdf9b]/20 via-[#353436] to-[#0e0e0f]',
      accentColor: '#ffe088',
      icon: Sun
    },
    boise: {
      name: 'Hutan Pinus Dingin (Boisé)',
      description: 'Udara pegunungan segar Alpen, aroma kayu cedar berasap, jilid buku kulit perpustakaan antik, dan keheningan akar orris Toskana.',
      glowClass: 'from-[#99907c]/20 via-[#201f20] to-[#0e0e0f]',
      accentColor: '#e4c277',
      icon: Trees
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Cinematic Hero */}
      <section className="relative w-full min-h-[calc(100vh-100px)] flex items-center justify-center overflow-hidden bg-[#0e0e0f] py-12 sm:py-16 lg:py-20">
        {/* Atmospheric Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] rounded-full bg-gradient-to-b from-[#f2ca50]/10 via-[#5d4604]/20 to-transparent blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f2ca50]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201f20]/80 backdrop-blur-md shadow-sm border border-[#4d4635]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] animate-pulse" />
              <span className="font-sans text-[11px] font-semibold text-[#e4c277] uppercase tracking-[0.24em]">
                Edisi Bernomor • Panen Raya 2024
              </span>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="font-sans text-xs font-semibold text-[#f2ca50] tracking-[0.28em] uppercase">
                Maison d'Aura Paris
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#e5e2e3] tracking-tight leading-[1.08]">
                Seni Tak Kasat Mata <br />
                <span className="italic font-light text-[#f2ca50]">dari Keanggunan</span>
              </h1>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#d3cec5] max-w-lg leading-relaxed font-light">
              Ekstrak Parfum langka buatan tangan yang dipetik dari ladang bunga suci Grasse, diwadahi dalam botol kristal arsitektural tiup tangan di Paris.
            </p>

            {/* Olfactory Accords Preview Micro-card */}
            <div className="w-full max-w-md p-3.5 bg-[#201f20]/75 backdrop-blur-xl rounded-xl border border-[#4d4635]/50 flex items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[#f2ca50]/10 text-[#f2ca50]">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div className="flex flex-col">
                  <span className="font-sans text-[11px] font-semibold text-[#e5e2e3] uppercase tracking-wider">
                    Cru Sillage • Aurum Noctis
                  </span>
                  <span className="font-sans text-xs text-[#99907c]">38% Konsentrasi Ekstrak Murni</span>
                </div>
              </div>
              <span className="font-sans text-[11px] font-semibold px-2.5 py-1 rounded bg-[#2a2a2b] text-[#e4c277] border border-[#4d4635]/40 font-mono">
                No. 048 / 300
              </span>
            </div>

            {/* Dual CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const elem = document.getElementById('signature-collection');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#f2ca50] text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_12px_30px_-8px_rgba(242,202,80,0.3)] hover:bg-[#ffe088]"
              >
                Jelajahi Mahakarya Parfum
              </button>
              <button
                onClick={() => onNavigate('the-collection')}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2a2a2b]/80 backdrop-blur-md text-[#e5e2e3] font-sans text-xs uppercase tracking-widest transition-all duration-300 hover:text-[#f2ca50] hover:bg-[#353436] border border-[#4d4635]/40"
                type="button"
              >
                <span>Temukan Karakter Aroma</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Vertical Metric Accents */}
            <div className="pt-4 flex items-center gap-6 font-sans text-xs text-[#99907c]">
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-[#e5e2e3]">180</span>
                <span className="text-[#d0c5af] text-[10px] tracking-widest uppercase">Hari Tong Kayu Ek</span>
              </div>
              <div className="w-px h-8 bg-[#2a2a2b]" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-[#e5e2e3]">Grasse</span>
                <span className="text-[#d0c5af] text-[10px] tracking-widest uppercase">Mawar Centifolia Murni</span>
              </div>
              <div className="w-px h-8 bg-[#2a2a2b]" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-[#e5e2e3]">100%</span>
                <span className="text-[#d0c5af] text-[10px] tracking-widest uppercase">Dituang Manual</span>
              </div>
            </div>
          </div>

          {/* Right Visual Centerpiece with Aurum Noctis Extrait Flacon */}
          <div className="lg:col-span-6 relative order-1 lg:order-2 flex justify-center items-center">
            <div className="absolute -inset-4 bg-gradient-to-t from-[#f2ca50]/15 via-[#e4c277]/5 to-transparent rounded-2xl blur-2xl pointer-events-none" />
            <div className="relative w-full aspect-[4/5] max-w-[500px] rounded-2xl overflow-hidden shadow-2xl bg-[#0e0e0f] border border-[#f2ca50]/20 group">
              <img
                alt="Maison d'Aura Aurum Noctis Botol Kristal Ekstrak Parfum"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbRUyNyyl6xfYA6FlB6kt7fKqK2hbefWbQw-IOiog7vfO0tg9bUpdTl7l4ptxo6pxvAKTBitsOtPo3Z08DE2W5tYeMsF3D6G9x-rWPVMJ6QZjqHpxQgGhgvOaUV7BMLEpMt0BcU-FxQ5OHe2IMeVnxDoLLSNU49oWIKy-0f35g6DcIBmJ5zPkznKdin-MWSEN9_aUY3UVdiKiuPrqKl-qVioWoJeBpghCI_2DP3oq1RXiUpeqKsos"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f]/90 via-transparent to-[#0e0e0f]/20 pointer-events-none" />

              {/* Bottom Floating Specs Tag */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-4 bg-[#0e0e0f]/85 backdrop-blur-xl rounded-xl border border-[#4d4635]/60 shadow-lg flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] font-semibold text-[#f2ca50] uppercase tracking-[0.2em]">
                    Koleksi Utama
                  </span>
                  <span className="font-serif text-lg sm:text-xl text-[#e5e2e3]">Aurum Noctis</span>
                  <span className="font-sans text-xs text-[#d3cec5]">Ambar Hitam, Gaharu Liar & Selubung Safron</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-serif text-lg sm:text-xl text-[#e4c277]">€420</span>
                  <span className="font-sans text-[10px] text-[#99907c] uppercase tracking-wider">100ml Ekstrak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Critical Acclaim Ticker */}
      <section className="w-full bg-[#1c1b1c] py-6 border-y border-[#4d4635]/30 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-sans text-xs font-semibold text-[#f2ca50] tracking-[0.24em] uppercase shrink-0">
            <Sparkles className="w-4 h-4 text-[#f2ca50]" />
            <span>Pujian Kritikus Internasional</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12 items-center w-full">
            <div className="flex flex-col items-center text-center">
              <span className="font-serif text-lg tracking-wider text-[#d3cec5] italic">VOGUE PARIS</span>
              <span className="font-sans text-[11px] text-[#99907c] tracking-wider">"Puncak Alkimia Wewangian Prancis"</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-serif text-lg tracking-wider text-[#d3cec5]">GQ INTERNASIONAL</span>
              <span className="font-sans text-[11px] text-[#99907c] tracking-wider">"Mahakarya Ekstrak Terbaik Abad Ini"</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-serif text-lg tracking-wider text-[#d3cec5] italic">LE FIGARO</span>
              <span className="font-sans text-[11px] text-[#99907c] tracking-wider">"Keanggunan Abadi Tanpa Banding"</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-serif text-lg tracking-wider text-[#d3cec5]">ELLE DECOR</span>
              <span className="font-sans text-[11px] text-[#99907c] tracking-wider">"Wadah Botol Kristal Berjiwa Seni"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Scent Showcase (Interactive Trilogy) */}
      <section id="signature-collection" className="w-full py-16 sm:py-20 bg-[#131314] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#4d4635]/30 pb-6">
            <div className="flex flex-col space-y-2 max-w-xl">
              <span className="font-sans text-xs font-semibold text-[#f2ca50] tracking-[0.28em] uppercase">
                Trilogi Mahakarya Pilihan
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e3]">Ekstrak Botol Kristal Bernomor</h2>
              <p className="font-sans text-sm text-[#d3cec5]">
                Setiap formula dimatangkan selama enam bulan dalam tong kayu ek Allier Prancis, membuka sillage kaya dan berlapis yang tak mungkin ditemukan pada parfum buatan massal.
              </p>
            </div>

            {/* Flacon Selector Tabs */}
            <div className="flex flex-wrap sm:inline-flex p-1 bg-[#2a2a2b] rounded-xl border border-[#4d4635]/40 shadow-sm w-full sm:w-auto">
              <button
                onClick={() => setActiveScentKey('aurum')}
                className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 rounded-lg text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                  activeScentKey === 'aurum'
                    ? 'text-[#3c2f00] bg-[#f2ca50] shadow-sm'
                    : 'text-[#d0c5af] hover:text-[#e5e2e3]'
                }`}
              >
                Aurum Noctis
              </button>
              <button
                onClick={() => setActiveScentKey('santal')}
                className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 rounded-lg text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                  activeScentKey === 'santal'
                    ? 'text-[#3c2f00] bg-[#f2ca50] shadow-sm'
                    : 'text-[#d0c5af] hover:text-[#e5e2e3]'
                }`}
              >
                Santal Impérial
              </button>
              <button
                onClick={() => setActiveScentKey('rose')}
                className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 rounded-lg text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                  activeScentKey === 'rose'
                    ? 'text-[#3c2f00] bg-[#f2ca50] shadow-sm'
                    : 'text-[#d0c5af] hover:text-[#e5e2e3]'
                }`}
              >
                Rose de Mai
              </button>
            </div>
          </div>

          {/* Main Interactive Scent Card Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#1c1b1c] rounded-2xl border border-[#4d4635]/40 overflow-hidden shadow-xl p-6 lg:p-8">
            {/* Flacon Visual Column */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden bg-[#201f20] min-h-[380px] sm:min-h-[420px] flex items-center justify-center group">
              <img
                src={currentScent.image}
                alt={currentScent.title}
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#0e0e0f]/80 backdrop-blur-md rounded-lg text-[#f2ca50] font-sans text-[11px] font-semibold tracking-widest uppercase border border-[#f2ca50]/30">
                {currentScent.fragrance.concentration}
              </div>
              <button
                onClick={() => onOpenDossier(currentScent.fragrance)}
                className="absolute bottom-4 right-4 px-3.5 py-2 rounded-lg bg-[#0e0e0f]/90 text-[#f2ca50] border border-[#f2ca50]/40 text-xs font-sans uppercase tracking-wider hover:bg-[#f2ca50] hover:text-[#3c2f00] transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Lihat Berkas Lengkap</span>
              </button>
            </div>

            {/* Olfactory Architecture Data Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:pl-4">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-semibold text-[#e4c277] uppercase tracking-[0.24em]">
                    {currentScent.tag}
                  </span>
                  <span className="font-sans text-xs text-[#99907c] uppercase">
                    {currentScent.vol}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#e5e2e3]">
                  {currentScent.title}
                </h3>
                <p className="font-sans text-sm text-[#d3cec5] leading-relaxed font-light">
                  {currentScent.desc}
                </p>
              </div>

              {/* Olfactory Breakdown Tier (Top, Heart, Base) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-[#201f20] border border-[#4d4635]/30 rounded-xl flex flex-col">
                  <span className="font-sans text-[10px] text-[#f2ca50] uppercase tracking-widest mb-1 font-semibold">
                    01. Nada Puncak
                  </span>
                  <span className="font-serif text-sm text-[#e5e2e3]">
                    {currentScent.top}
                  </span>
                </div>
                <div className="p-3.5 bg-[#201f20] border border-[#4d4635]/30 rounded-xl flex flex-col">
                  <span className="font-sans text-[10px] text-[#f2ca50] uppercase tracking-widest mb-1 font-semibold">
                    02. Nada Jantung
                  </span>
                  <span className="font-serif text-sm text-[#e5e2e3]">
                    {currentScent.heart}
                  </span>
                </div>
                <div className="p-3.5 bg-[#201f20] border border-[#4d4635]/30 rounded-xl flex flex-col">
                  <span className="font-sans text-[10px] text-[#f2ca50] uppercase tracking-widest mb-1 font-semibold">
                    03. Nada Dasar
                  </span>
                  <span className="font-serif text-sm text-[#e5e2e3]">
                    {currentScent.base}
                  </span>
                </div>
              </div>

              {/* Accord Balance Visualizer Bar */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="text-[#e4c277] uppercase tracking-wider font-semibold">
                    Struktur Komposisi Alami
                  </span>
                  <span className="text-[#99907c]">Formulasi Rahasia Murni</span>
                </div>
                <div className="w-full h-3 bg-[#201f20] rounded-full overflow-hidden flex p-0.5 border border-[#4d4635]/40">
                  <div
                    className="h-full bg-[#f2ca50] rounded-l-full transition-all duration-500"
                    style={{ width: `${currentScent.bar1}%` }}
                    title={currentScent.label1}
                  />
                  <div
                    className="h-full bg-[#e4c277] transition-all duration-500"
                    style={{ width: `${currentScent.bar2}%` }}
                    title={currentScent.label2}
                  />
                  <div
                    className="h-full bg-[#e9c349] transition-all duration-500"
                    style={{ width: `${currentScent.bar3}%` }}
                    title={currentScent.label3}
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between text-[#99907c] text-xs pt-1 gap-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f2ca50] inline-block" />
                    {currentScent.label1}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#e4c277] inline-block" />
                    {currentScent.label2}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#e9c349] inline-block" />
                    {currentScent.label3}
                  </span>
                </div>
              </div>

              {/* Purchase Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#4d4635]/30">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl text-[#f2ca50]">
                    €{currentScent.price}
                  </span>
                  <span className="text-xs text-[#99907c]">Termasuk Gravir Inisial Nama</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onAddToCart(currentScent.fragrance, '100ml')}
                    className="px-5 py-3 rounded-xl bg-[#f2ca50] text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#ffe088] transition-colors shadow"
                    type="button"
                  >
                    Miliki Botol 100ml
                  </button>
                  <button
                    onClick={() => onAddToCart(currentScent.fragrance, '50ml')}
                    className="px-4 py-3 rounded-xl bg-[#353436] text-[#e5e2e3] font-sans text-xs uppercase tracking-wider hover:text-[#f2ca50] transition-colors flex items-center gap-1.5 border border-[#4d4635]/50"
                    type="button"
                  >
                    <span>Sampel 50ml</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy: Slow Perfumery & Pure Botanical Alchemy */}
      <section className="w-full py-16 bg-[#0e0e0f] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col space-y-12">
          {/* Philosophy Header */}
          <div className="flex flex-col items-center text-center space-y-2 max-w-2xl mx-auto">
            <span className="font-sans text-xs font-semibold text-[#f2ca50] tracking-[0.28em] uppercase">
              Standar Kemewahan Maison
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e3]">
              Slow Perfumery & Alkimia Botani Murni
            </h2>
            <p className="font-sans text-sm text-[#d3cec5] font-light">
              Menolak produksi cepat industri massal. Setiap siklus panen mengikuti peredaran alam dan disuling dengan ketelitian warisan berabad-abad.
            </p>
          </div>

          {/* 3 Editorial Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col bg-[#201f20] p-8 rounded-2xl border border-[#4d4635]/40 hover:bg-[#2a2a2b] transition-all group">
              <span className="font-sans text-[11px] font-semibold text-[#e4c277] uppercase tracking-widest mb-1">
                01. Pematangan Bawah Tanah
              </span>
              <h3 className="font-serif text-xl text-[#e5e2e3] mb-3">Maserasi Tong Kayu Ek Kuno</h3>
              <p className="font-sans text-xs text-[#d3cec5] leading-relaxed mb-6 font-light">
                Konsentrat minyak bunga diistirahatkan selama enam bulan dalam tong kayu ek Allier. Oksidasi lambat ini melunakkan aroma tajam, melahirkan kelembutan beludru yang kaya.
              </p>
              <button
                onClick={() => onNavigate('olfactory-art-&-craft')}
                className="mt-auto pt-2 flex items-center gap-2 text-[#f2ca50] font-sans text-xs uppercase tracking-wider group-hover:text-[#ffe088]"
              >
                <span>Pelajari Tradisi Kayu Ek</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col bg-[#201f20] p-8 rounded-2xl border border-[#4d4635]/40 hover:bg-[#2a2a2b] transition-all group">
              <span className="font-sans text-[11px] font-semibold text-[#e4c277] uppercase tracking-widest mb-1">
                02. Terroir Hasil Panen
              </span>
              <h3 className="font-serif text-xl text-[#e5e2e3] mb-3">100% Botani Asli Grasse</h3>
              <p className="font-sans text-xs text-[#d3cec5] leading-relaxed mb-6 font-light">
                Mawar Centifolia dan melati Grandiflorum dipetik langsung saat fajar sebelum embun menguap. Kami bekerja sama dengan petani lokal generasi keempat di Grasse.
              </p>
              <button
                onClick={() => onNavigate('olfactory-art-&-craft')}
                className="mt-auto pt-2 flex items-center gap-2 text-[#f2ca50] font-sans text-xs uppercase tracking-wider group-hover:text-[#ffe088]"
              >
                <span>Jelajahi Terroir Grasse</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col bg-[#201f20] p-8 rounded-2xl border border-[#4d4635]/40 hover:bg-[#2a2a2b] transition-all group">
              <span className="font-sans text-[11px] font-semibold text-[#e4c277] uppercase tracking-widest mb-1">
                03. Botol Kristal Khusus
              </span>
              <h3 className="font-serif text-xl text-[#e5e2e3] mb-3">Flacon Gravir Monogram</h3>
              <p className="font-sans text-xs text-[#d3cec5] leading-relaxed mb-6 font-light">
                Kristal berbobot tinggi dipotong tangan oleh maestro peniup kaca di Nancy, disempurnakan tutup berlapis emas 24 karat dan ukiran inisial nama pribadi sesuai permintaan.
              </p>
              <button
                onClick={() => onNavigate('private-atelier-&-booking')}
                className="mt-auto pt-2 flex items-center gap-2 text-[#f2ca50] font-sans text-xs uppercase tracking-wider group-hover:text-[#ffe088]"
              >
                <span>Ajukan Permintaan Gravir</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive Atmospheric Visualizer Widget: Sensory Chamber */}
          <div className="w-full bg-[#201f20] border border-[#f2ca50]/20 p-6 lg:p-8 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="flex flex-col space-y-2 max-w-lg">
              <div className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#f2ca50] uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>Ruang Sensorik Interaktif</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#e5e2e3]">Sesuaikan Suasana Aroma Anda</h3>
              <p className="font-sans text-xs sm:text-sm text-[#d3cec5] leading-relaxed font-light">
                {atmosphereData[atmosphere].description}
              </p>
            </div>

            {/* Atmosphere Switches */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setAtmosphere('nocturne')}
                className={`w-full sm:w-auto px-4 py-3 rounded-xl font-sans text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                  atmosphere === 'nocturne'
                    ? 'bg-[#f2ca50] text-[#3c2f00] font-bold shadow'
                    : 'bg-[#2a2a2b] text-[#d0c5af] hover:bg-[#353436]'
                }`}
                type="button"
              >
                <Moon className="w-4 h-4" />
                <span>Malam Kemewahan</span>
              </button>
              <button
                onClick={() => setAtmosphere('solaire')}
                className={`w-full sm:w-auto px-4 py-3 rounded-xl font-sans text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                  atmosphere === 'solaire'
                    ? 'bg-[#f2ca50] text-[#3c2f00] font-bold shadow'
                    : 'bg-[#2a2a2b] text-[#d0c5af] hover:bg-[#353436]'
                }`}
                type="button"
              >
                <Sun className="w-4 h-4" />
                <span>Mentari Pesisir</span>
              </button>
              <button
                onClick={() => setAtmosphere('boise')}
                className={`w-full sm:w-auto px-4 py-3 rounded-xl font-sans text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                  atmosphere === 'boise'
                    ? 'bg-[#f2ca50] text-[#3c2f00] font-bold shadow'
                    : 'bg-[#2a2a2b] text-[#d0c5af] hover:bg-[#353436]'
                }`}
                type="button"
              >
                <Trees className="w-4 h-4" />
                <span>Hutan Pinus</span>
              </button>

              {/* Soundscape Ambient Sound Toggle */}
              <button
                onClick={() => setAmbientAudioPlaying(!ambientAudioPlaying)}
                aria-label="Toggle sensory soundscape"
                className={`p-3 rounded-xl border transition-colors ${
                  ambientAudioPlaying
                    ? 'border-[#f2ca50] text-[#f2ca50] bg-[#f2ca50]/15'
                    : 'border-[#4d4635] text-[#99907c] hover:text-[#f2ca50]'
                }`}
                title={ambientAudioPlaying ? 'Matikan Suara Sensorik' : 'Putar Suara Malam Paris'}
              >
                {ambientAudioPlaying ? <Volume2 className="w-4 h-4 text-[#f2ca50]" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote Banner */}
      <section className="w-full py-16 bg-[#131314] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f2ca50]/5 via-transparent to-[#f2ca50]/5 pointer-events-none" />
        <div className="max-w-[1080px] mx-auto px-4 lg:px-12 text-center flex flex-col items-center space-y-6 relative z-10">
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e5e2e3] italic leading-relaxed max-w-3xl">
            "Wewangian sejati bukan sekadar mengumumkan kehadiran Anda; ia menetap di dalam ruangan sebagai janji yang abadi jauh setelah Anda melangkah pergi."
          </blockquote>
          <div className="flex flex-col items-center pt-2">
            <span className="font-sans text-base text-[#f2ca50] tracking-widest uppercase font-semibold">
              Éléonore de Vigny
            </span>
            <span className="font-sans text-[11px] text-[#99907c] uppercase tracking-[0.24em] mt-1">
              Pendiri & Maestro Parfum • Maison d'Aura Paris
            </span>
          </div>
        </div>
      </section>

      {/* Call to Bespoke Appointment Banner */}
      <section className="w-full py-16 bg-[#1c1b1c]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="p-8 lg:p-12 bg-[#201f20] border border-[#f2ca50]/30 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#f2ca50]/10 blur-[80px] pointer-events-none" />
            <div className="flex flex-col space-y-2 max-w-xl">
              <span className="font-sans text-xs font-semibold text-[#f2ca50] tracking-[0.28em] uppercase">
                Salon Pribadi Castiglione
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e3]">Jadwalkan Sesi Konsultasi Aroma</h2>
              <p className="font-sans text-sm text-[#d3cec5] leading-relaxed font-light">
                Nikmati pengalaman pemetaan aroma pribadi bersama maestro parfum kami di suite privat 14 Rue de Castiglione, Paris, ditemani jamuan teh dan sampanye langka.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button
                onClick={() => onNavigate('private-atelier-&-booking')}
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-[#f2ca50] text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#ffe088] transition-colors shadow"
              >
                Pesan Kunjungan Salon
              </button>
              <button
                onClick={() => onNavigate('private-atelier-&-booking')}
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-[#353436] text-[#e5e2e3] font-sans text-xs uppercase tracking-widest hover:text-[#f2ca50] transition-colors border border-[#4d4635]/50"
              >
                Konsultasi Daring
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
