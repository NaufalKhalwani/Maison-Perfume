import React, { useState } from 'react';
import { PageTab } from '../types';
import { TERROIRS } from '../data/fragrances';
import { Sparkles, ArrowRight, ShieldCheck, Award, Clock, History, FlaskConical, MapPin } from 'lucide-react';

interface CraftViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const CraftView: React.FC<CraftViewProps> = ({ onNavigate }) => {
  const [selectedTerroirId, setSelectedTerroirId] = useState<'grasse' | 'florence' | 'cambodia' | 'madagascar'>('grasse');

  const currentTerroir = TERROIRS[selectedTerroirId];

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Editorial Top Canvas / Hero */}
      <section className="relative w-full overflow-hidden bg-[#0e0e0f] pt-10 sm:pt-16 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0f] via-[#0e0e0f]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#f2ca50]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Editorial Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#f2ca50]" />
                <span className="font-sans text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.28em]">
                  Tradisi Seni Haute Parfumerie
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#e5e2e3] tracking-tight leading-[1.08] mb-6">
                Alkimia Waktu, <br />
                <span className="italic font-light text-[#f2ca50]">Bunga & Jiwa</span>
              </h1>

              <p className="font-sans text-sm sm:text-base text-[#d3cec5] max-w-xl font-light leading-relaxed mb-8">
                Di era produksi massal, Maison d'Aura tetap setia pada ritual lambat penciptaan parfum murni. Kami memadukan petikan fajar di Grasse dengan pematangan tong kayu ek Prancis selama 180 hari.
              </p>

              {/* Pedigree Metrics */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#4d4635]/40">
                <div>
                  <span className="font-serif text-3xl text-[#f2ca50] block">1928</span>
                  <span className="font-sans text-[10px] text-[#99907c] uppercase tracking-wider block mt-1">
                    Arsip Bastide Perdana
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-[#f2ca50] block">180</span>
                  <span className="font-sans text-[10px] text-[#99907c] uppercase tracking-wider block mt-1">
                    Hari Maserasi Kayu Ek
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-[#f2ca50] block">0%</span>
                  <span className="font-sans text-[10px] text-[#99907c] uppercase tracking-wider block mt-1">
                    Bahan Sintetis Kasar
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Master Perfumer Hero Portrait */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#f2ca50]/20 shadow-2xl bg-[#1c1b1c] group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL31z2B_Qh7p88_5mJ4U21ZJ6e2xY_q8t8vBvU4QvM1Y4v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";
                  }}
                  alt="Maestro Jean-Luc Delacroix di Atelier Grasse"
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f] via-transparent to-transparent pointer-events-none" />

                {/* Floating Portrait Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0e0e0f]/85 backdrop-blur-md border border-[#4d4635]/60 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-serif text-lg text-[#e5e2e3]">Jean-Luc Delacroix</span>
                    <span className="font-sans text-[10px] text-[#f2ca50] tracking-widest uppercase">
                      Maestro Parfum Generasi Keempat • Grasse
                    </span>
                  </div>
                  <span className="p-2 rounded-lg bg-[#f2ca50]/15 text-[#f2ca50]">
                    <Award className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lineage & Metrology Pillars */}
      <section className="w-full py-16 bg-[#131314]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <span className="font-sans text-xs font-semibold text-[#f2ca50] tracking-[0.28em] uppercase">
                Warisan Kemahiran
              </span>
              <h2 className="font-serif text-3xl text-[#e5e2e3]">
                Empat Pilar Ketelitian Tanpa Kompromi
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#d3cec5] font-light leading-relaxed">
                Setiap tetes wewangian kami mempertahankan integritas molekul alami melalui proses penimbangan manual, maserasi dingin, dan penjagaan kerahasiaan formula.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tile 1 */}
              <div className="bg-[#1c1b1c] p-6 rounded-2xl border border-[#4d4635]/40 flex flex-col justify-between group hover:bg-[#201f20] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-xs text-[#f2ca50] tracking-widest font-semibold">
                      01 / AWAL MULA
                    </span>
                    <History className="w-4 h-4 text-[#99907c] group-hover:text-[#f2ca50]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#e5e2e3] mb-2">Arsip Bastide 1928</h3>
                  <p className="font-sans text-xs text-[#d3cec5] font-light leading-relaxed">
                    Didirikan ketika Gabriel Delacroix menyuling racikan perdana untuk diplomat Paris. Alat suling tembaga aslinya masih beroperasi di perkebunan Provence kami.
                  </p>
                </div>
                <div className="pt-4 mt-4 flex items-center justify-between text-xs border-t border-[#4d4635]/30">
                  <span className="text-[#99907c]">DOKUMEN BRANKAS</span>
                  <span className="text-[#f2ca50] font-semibold font-mono">ARSIP #D-1928</span>
                </div>
              </div>

              {/* Tile 2 */}
              <div className="bg-[#1c1b1c] p-6 rounded-2xl border border-[#4d4635]/40 flex flex-col justify-between group hover:bg-[#201f20] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-xs text-[#f2ca50] tracking-widest font-semibold">
                      02 / PENGHARGAAN
                    </span>
                    <Award className="w-4 h-4 text-[#99907c] group-hover:text-[#f2ca50]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#e5e2e3] mb-2">Grand Prix de la Parfumerie</h3>
                  <p className="font-sans text-xs text-[#d3cec5] font-light leading-relaxed">
                    Dianugerahi penghargaan tertinggi atas pelestarian metode ekstraksi tradisional non-destruktif dan perlindungan suaka mawar Centifolia Grasse.
                  </p>
                </div>
                <div className="pt-4 mt-4 flex items-center justify-between text-xs border-t border-[#4d4635]/30">
                  <span className="text-[#99907c]">KEMENTERIAN KEBUDAYAAN</span>
                  <span className="text-[#f2ca50] font-semibold text-[11px]">CHEVALIER DES ARTS</span>
                </div>
              </div>

              {/* Tile 3 */}
              <div className="bg-[#1c1b1c] p-6 rounded-2xl border border-[#4d4635]/40 flex flex-col justify-between group hover:bg-[#201f20] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-xs text-[#f2ca50] tracking-widest font-semibold">
                      03 / FORMULASI
                    </span>
                    <FlaskConical className="w-4 h-4 text-[#99907c] group-hover:text-[#f2ca50]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#e5e2e3] mb-2">Titrasi Organik Bertahap</h3>
                  <p className="font-sans text-xs text-[#d3cec5] font-light leading-relaxed">
                    Setiap takaran dihitung berdasarkan berat dan suhu molekuler, bukan pencampuran robotik, demi menjaga vitalitas lipid alami tumbuhan.
                  </p>
                </div>
                <div className="pt-4 mt-4 flex items-center justify-between text-xs border-t border-[#4d4635]/30">
                  <span className="text-[#99907c]">KONSENTRASI MURNI</span>
                  <span className="text-[#f2ca50] font-semibold font-mono">32% - 40% EKSTRAK</span>
                </div>
              </div>

              {/* Tile 4 */}
              <div className="bg-[#1c1b1c] p-6 rounded-2xl border border-[#4d4635]/40 flex flex-col justify-between group hover:bg-[#201f20] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-xs text-[#f2ca50] tracking-widest font-semibold">
                      04 / DISKRESI
                    </span>
                    <ShieldCheck className="w-4 h-4 text-[#99907c] group-hover:text-[#f2ca50]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#e5e2e3] mb-2">Buku Formula Rahasia</h3>
                  <p className="font-sans text-xs text-[#d3cec5] font-light leading-relaxed">
                    Hanya sembilan orang dalam kurun 96 tahun yang pernah membaca buku resep rahasia di bawah Rue de Castiglione. Setiap pesanan kustom disegel lilin beeswax.
                  </p>
                </div>
                <div className="pt-4 mt-4 flex items-center justify-between text-xs border-t border-[#4d4635]/30">
                  <span className="text-[#99907c]">PERLINDUNGAN HAK CIPTA</span>
                  <span className="text-[#f2ca50] font-semibold text-[11px]">KERAHASIAAN 100 TAHUN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Botanical Atlas */}
      <section className="w-full py-16 bg-[#0e0e0f]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div>
              <span className="font-sans text-[11px] font-semibold text-[#f2ca50] tracking-[0.24em] uppercase block mb-1">
                Asal Usul Terroir & Ekstraksi
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e3]">Atlas Botani Internasional</h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#d3cec5] max-w-md mt-4 lg:mt-0 font-light leading-relaxed">
              Kami tidak berkompromi pada kimia tanah atau musim panen. Empat pilar botani ini mewakili puncak ekstraksi berkelanjutan di dunia wewangian tinggi.
            </p>
          </div>

          {/* Terroir Interactive Display Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Dynamic Botanical Card Selector */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {(Object.keys(TERROIRS) as ('grasse' | 'florence' | 'cambodia' | 'madagascar')[]).map((key) => {
                const item = TERROIRS[key];
                const isSelected = selectedTerroirId === key;
                return (
                  <div
                    key={key}
                    onClick={() => setSelectedTerroirId(key)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#201f20] border-[#f2ca50] shadow-[0_0_20px_rgba(242,202,80,0.15)]'
                        : 'bg-[#1c1b1c] border-[#4d4635]/40 hover:bg-[#201f20]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-sans text-[10px] font-semibold text-[#f2ca50] tracking-widest uppercase flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                      <span className="font-mono text-[11px] text-[#99907c]">{item.coords}</span>
                    </div>
                    <h4 className="font-serif text-lg text-[#e5e2e3] mb-2">{item.name}</h4>
                    <p className="font-sans text-xs text-[#d3cec5] mb-4 font-light leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {item.badges.map((b) => (
                        <span
                          key={b}
                          className="px-2.5 py-1 bg-[#2a2a2b] text-[#e4c277] font-sans text-[9px] font-semibold uppercase tracking-wider rounded-lg"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Map Simulation & Sensory Analytics Visualizer */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="relative bg-[#1c1b1c] rounded-2xl border border-[#4d4635]/40 overflow-hidden min-h-[360px] shadow-xl flex items-center justify-center p-6">
                <div className="text-center space-y-2 z-10">
                  <span className="font-sans text-xs font-semibold uppercase text-[#f2ca50] tracking-[0.24em] block">
                    Wilayah Terpilih
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#e5e2e3]">{currentTerroir.name}</h3>
                  <p className="font-sans text-xs text-[#99907c] italic">{currentTerroir.botanical}</p>
                  <p className="font-mono text-xs text-[#e4c277] pt-2">{currentTerroir.mapCoords}</p>
                </div>
              </div>

              {/* Chemical Spectrum Visualization */}
              <div className="p-6 bg-[#1c1b1c] rounded-2xl border border-[#4d4635]/40 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="font-sans text-[10px] text-[#f2ca50] uppercase tracking-widest block font-semibold">
                      Analisis Komposisi Spektral
                    </span>
                    <h4 className="font-serif text-lg text-[#e5e2e3]">
                      {currentTerroir.chartTitle}
                    </h4>
                  </div>
                  <span className="font-mono text-xs text-[#e4c277] bg-[#2a2a2b] px-3 py-1 rounded-lg border border-[#4d4635]/40">
                    {currentTerroir.batch}
                  </span>
                </div>

                {/* SVG Visualizer */}
                <div className="w-full my-4">
                  <svg className="w-full h-16 text-[#f2ca50]" fill="none" viewBox="0 0 600 64">
                    <path
                      d="M0,52 Q40,48 80,30 T160,18 T240,45 T320,8 T400,28 T480,12 T540,36 T600,24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,52 Q40,48 80,30 T160,18 T240,45 T320,8 T400,28 T480,12 T540,36 T600,24 L600,64 L0,64 Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <circle cx="160" cy="18" fill="currentColor" r="4" />
                    <circle cx="320" cy="8" fill="currentColor" r="4" />
                    <circle cx="480" cy="12" fill="currentColor" r="4" />
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-2 text-xs border-t border-[#4d4635]/30">
                  <div>
                    <span className="text-[#99907c] text-[10px] block uppercase font-sans">
                      {currentTerroir.metric1.label}
                    </span>
                    <span className="text-[#e5e2e3] font-semibold">
                      {currentTerroir.metric1.value}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#99907c] text-[10px] block uppercase font-sans">
                      {currentTerroir.metric2.label}
                    </span>
                    <span className="text-[#e5e2e3] font-semibold">
                      {currentTerroir.metric2.value}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#99907c] text-[10px] block uppercase font-sans">
                      {currentTerroir.metric3.label}
                    </span>
                    <span className="text-[#e5e2e3] font-semibold">
                      {currentTerroir.metric3.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The 4-Stage Haute Creation Protocol */}
      <section className="w-full py-16 bg-[#131314]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="font-sans text-[11px] font-semibold text-[#f2ca50] tracking-[0.24em] uppercase block mb-1">
              Ketelitian Alami & Tahapan Waktu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e3] mb-2">
              Protokol Kreasi 4 Tahap
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#d3cec5] font-light leading-relaxed">
              Sebuah wewangian sejati tidak boleh diburu-buru tanpa merusak jiwanya. Kami menghormati ritme alam di mana waktu istirahat sama pentingnya dengan penyulingan.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <div className="bg-[#1c1b1c] p-6 rounded-2xl border border-[#4d4635]/40 flex flex-col justify-between group hover:bg-[#201f20] transition-all">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl text-[#f2ca50]">01</span>
                  <span className="font-mono text-xs text-[#99907c]">05:30 — 08:45</span>
                </div>
                <span className="font-sans text-[10px] font-semibold text-[#e4c277] block mb-1 uppercase tracking-wider">
                  Fajar Merekah
                </span>
                <h3 className="font-serif text-lg text-[#e5e2e3] mb-2">Petikan Tangan Fajar</h3>
                <p className="font-sans text-xs text-[#d3cec5] font-light leading-relaxed">
                  Bunga hanya dipetik saat fajar menyingsing ketika embun pagi mengunci terpen aromatik paling halus sebelum panas matahari memicu oksidasi.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0e0e0f] text-[#99907c] font-sans text-[10px] uppercase flex items-center gap-2 border border-[#4d4635]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>Tanpa Sentuhan Mesin Kasar</span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-[#1c1b1c] p-6 rounded-2xl border border-[#4d4635]/40 flex flex-col justify-between group hover:bg-[#201f20] transition-all">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl text-[#f2ca50]">02</span>
                  <span className="font-mono text-xs text-[#99907c]">Suhu 18°C</span>
                </div>
                <span className="font-sans text-[10px] font-semibold text-[#e4c277] block mb-1 uppercase tracking-wider">
                  Penyulingan Rendah Suhu
                </span>
                <h3 className="font-serif text-lg text-[#e5e2e3] mb-2">Ekstraksi Dingin Perlahan</h3>
                <p className="font-sans text-xs text-[#d3cec5] font-light leading-relaxed">
                  Pelarut botani berbasis lipid murni menyerap aroma kelopak pada suhu sejuk konstan, menghasilkan minyak konsentrat alami tanpa hangus.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0e0e0f] text-[#99907c] font-sans text-[10px] uppercase flex items-center gap-2 border border-[#4d4635]/30">
                <FlaskConical className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>Teknologi CO2 Superkritis</span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-[#1c1b1c] p-6 rounded-2xl border border-[#4d4635]/40 flex flex-col justify-between group hover:bg-[#201f20] transition-all">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl text-[#f2ca50]">03</span>
                  <span className="font-mono text-xs text-[#99907c]">180 Hari</span>
                </div>
                <span className="font-sans text-[10px] font-semibold text-[#e4c277] block mb-1 uppercase tracking-wider">
                  Perkawinan Aroma
                </span>
                <h3 className="font-serif text-lg text-[#e5e2e3] mb-2">Maserasi Tong Kayu Ek</h3>
                <p className="font-sans text-xs text-[#d3cec5] font-light leading-relaxed">
                  Formula didiamkan dalam tong kayu ek Prancis Allier berarang ringan di ruang bawah tanah Castiglione, melahirkan keharmonisan aroma yang mendalam.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0e0e0f] text-[#99907c] font-sans text-[10px] uppercase flex items-center gap-2 border border-[#4d4635]/30">
                <Clock className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>Oksigenasi Mikro Alami</span>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-[#1c1b1c] p-6 rounded-2xl border border-[#4d4635]/40 flex flex-col justify-between group hover:bg-[#201f20] transition-all">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif text-2xl text-[#f2ca50]">04</span>
                  <span className="font-mono text-xs text-[#99907c]">Sentuhan Akhir</span>
                </div>
                <span className="font-sans text-[10px] font-semibold text-[#e4c277] block mb-1 uppercase tracking-wider">
                  Karya Tangan
                </span>
                <h3 className="font-serif text-lg text-[#e5e2e3] mb-2">Pembotolan & Lilin Segel</h3>
                <p className="font-sans text-xs text-[#d3cec5] font-light leading-relaxed">
                  Dituangkan secara individual ke dalam kristal bening arsitektural, dipasang sumbat emas 24k, dan leher botol dibalut benang sutra serta segel lilin lebah.
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0e0e0f] text-[#99907c] font-sans text-[10px] uppercase flex items-center gap-2 border border-[#4d4635]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>Segel Lilin Monogram Paris</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Haute Gallery */}
      <section className="w-full py-16 bg-[#0e0e0f]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1c1b1c] border border-[#4d4635]/40 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOCjlYkuppiR1LHOAhzXwY87DUKaPEc2WCvLm_BqKeP_HC8VkKGP9Wnlw9WFDdO8IjHKe5O3Hr6cZHU8D9Ugda8_8--O9S8dJisSZTRdOKWWV4EDCydDcwe_u3POHLx1lSGWd9NBVX1l9VsMZkPiBu19tzWKXok3InwAU3Z-EUrenfzWlsUXKatmLBEsW5Udoan6oSai10u8WqVgIXIE5JgS1hzKUdQBeikBXnQqTvMOGl8QbNssc"
                alt="Meja Organ Parfum Marquina"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-sans text-[10px] text-[#f2ca50] tracking-widest uppercase block mb-1">
                  Atelier Castiglione
                </span>
                <h3 className="font-serif text-xl text-[#e5e2e3]">Meja Organ Parfum Marquina</h3>
                <p className="font-sans text-xs text-[#d3cec5] mt-1 font-light">
                  Menyimpan lebih dari 280 sari botani murni yang dikurasi dari seluruh penjuru bumi.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#1c1b1c] border border-[#4d4635]/40 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp1T7B_2x70q-k0K7XQ9L4-s_N381w_P1N_x940-b_QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8v6pY4-QY8"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80";
                }}
                alt="Lemari Arsip Formula Kristal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0f]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-sans text-[10px] text-[#f2ca50] tracking-widest uppercase block mb-1">
                  Ruang Brankas Bawah Tanah
                </span>
                <h3 className="font-serif text-xl text-[#e5e2e3]">Arsip Formula Kristal Induk</h3>
                <p className="font-sans text-xs text-[#d3cec5] mt-1 font-light">
                  Kumpulan formula asli tulisan tangan yang tersimpan dalam suhu stabil 14°C sejak 1928.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
