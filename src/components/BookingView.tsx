import React, { useState } from 'react';
import { PageTab } from '../types';
import { CheckCircle2, Shield, Calendar, Clock, MapPin, ArrowRight, Lock, Sparkles, Check, Download } from 'lucide-react';

interface BookingViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const BookingView: React.FC<BookingViewProps> = ({ onNavigate }) => {
  // Stepper State
  const [selectedCeremony, setSelectedCeremony] = useState<'Salon Tasting' | 'Bespoke Perfumery' | 'Nuptial Archiving'>('Salon Tasting');
  const [selectedLocation, setSelectedLocation] = useState<'Paris' | 'London' | 'New York'>('Paris');
  const [selectedDay, setSelectedDay] = useState<number>(14);
  const [selectedSlot, setSelectedSlot] = useState<string>('11:00');

  // Patron Profile Form
  const [patronName, setPatronName] = useState('');
  const [patronContact, setPatronContact] = useState('');
  const [patronEmail, setPatronEmail] = useState('');
  const [patronPreferences, setPatronPreferences] = useState('');
  const [emotionalAura, setEmotionalAura] = useState('');

  // Submission State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationToken, setConfirmationToken] = useState('');

  const handleCeremonySelect = (ceremony: 'Salon Tasting' | 'Bespoke Perfumery' | 'Nuptial Archiving') => {
    setSelectedCeremony(ceremony);
    const target = document.getElementById('reservation-suite');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const token = `MDA-RES-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationToken(token);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Atelier Editorial Hero */}
      <section className="relative w-full min-h-[75vh] flex items-end pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOCjlYkuppiR1LHOAhzXwY87DUKaPEc2WCvLm_BqKeP_HC8VkKGP9Wnlw9WFDdO8IjHKe5O3Hr6cZHU8D9Ugda8_8--O9S8dJisSZTRdOKWWV4EDCydDcwe_u3POHLx1lSGWd9NBVX1l9VsMZkPiBu19tzWKXok3InwAU3Z-EUrenfzWlsUXKatmLBEsW5Udoan6oSai10u8WqVgIXIE5JgS1hzKUdQBeikBXnQqTvMOGl8QbNssc')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-[#131314]/70 to-[#0e0e0f]/50" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#131314]/30 to-[#131314]" />

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-24">
          <div className="max-w-3xl flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-[1px] bg-[#f2ca50]" />
              <span className="font-sans text-[11px] font-semibold uppercase text-[#f2ca50] tracking-[0.3em]">
                Kreasi Kustom & Salon Privat
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#e5e2e3] font-normal leading-[1.08] tracking-tight">
              Sebuah Wewangian yang Tercipta <span className="italic text-[#f2ca50]">Hanya Untuk Anda.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#d3cec5] max-w-xl font-light leading-relaxed mt-2">
              Melampaui katalog wewangian biasa, rasakan keintiman perumusan aroma pribadi. Masuki salon privat kami di Paris, London Mayfair, dan New York Madison Avenue untuk metamorfosis olfaktori eksklusif.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#reservation-suite"
                className="px-6 py-3.5 rounded-xl bg-[#f2ca50] text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#ffe088] transition-all shadow-[0_12px_40px_-10px_rgba(212,175,55,0.35)]"
              >
                Pesan Jadwal Konsultasi
              </a>
              <a
                href="#signature-paths"
                className="px-5 py-3.5 rounded-xl border border-[#4d4635] text-[#e5e2e3] hover:text-[#f2ca50] hover:border-[#f2ca50] transition-all font-sans text-xs uppercase tracking-widest backdrop-blur-sm bg-[#0e0e0f]/40"
              >
                Jelajahi Pilihan Upacara
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Badges */}
      <section className="w-full bg-[#0e0e0f] py-6 border-y border-[#4d4635]/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-2xl text-[#f2ca50]">No. 14</span>
            <span className="font-sans text-[10px] text-[#99907c] uppercase tracking-widest">
              Rue de Castiglione, Paris
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-2xl text-[#f2ca50]">12 Patron</span>
            <span className="font-sans text-[10px] text-[#99907c] uppercase tracking-widest">
              Alokasi Formulasi Kustom / Tahun
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-2xl text-[#f2ca50]">100 Tahun</span>
            <span className="font-sans text-[10px] text-[#99907c] uppercase tracking-widest">
              Arsip Kerahasiaan Resep di Brankas
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-2xl text-[#f2ca50]">3 Benua</span>
            <span className="font-sans text-[10px] text-[#99907c] uppercase tracking-widest">
              Salon Privat Paris • London • New York
            </span>
          </div>
        </div>
      </section>

      {/* Signature Paths Comparison */}
      <section id="signature-paths" className="w-full py-20 bg-[#131314]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#f2ca50] font-semibold">
              Dua Jalur Keanggunan
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#e5e2e3]">
              Pilih Pengalaman Sensorik Anda
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#d3cec5] font-light">
              Dari bimbingan penciuman mendalam hingga penciptaan formula parfum orisinal seumur hidup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tier I */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#1c1b1c] border border-[#4d4635]/50 flex flex-col justify-between hover:border-[#f2ca50]/50 transition-all shadow-xl group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-sans text-[11px] font-semibold text-[#f2ca50] tracking-widest uppercase block mb-1">
                      Tingkat I • Salon Privat
                    </span>
                    <h3 className="font-serif text-3xl text-[#e5e2e3]">Sesi Tasting Salon</h3>
                  </div>
                  <span className="font-serif text-2xl text-[#e4c277]">€350</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#d3cec5] font-light leading-relaxed mb-6">
                  Sesi intim 90 menit di ruang salon privat kami. Bimbingan penciuman mendalam untuk menemukan kecocokan harmoni jiwa Anda dengan koleksi 6 ekstrak murni.
                </p>
                <div className="space-y-3 pt-4 border-t border-[#4d4635]/30 text-xs text-[#d3cec5]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>Konsultasi sensorik langsung bersama Maître de Salon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>Jamuan teh langka & sampanye vintage Prancis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>Set Penemuan Eksklusif 5 botol sampel bawa pulang</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>Biaya dapat dipotongkan untuk pembelian flacon 100ml</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCeremonySelect('Salon Tasting')}
                className="mt-8 w-full py-3.5 rounded-xl border border-[#f2ca50]/60 text-[#f2ca50] hover:bg-[#f2ca50] hover:text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold transition-all"
              >
                Pilih Sesi Tasting Salon
              </button>
            </div>

            {/* Tier II */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#201f20] border-2 border-[#f2ca50]/60 flex flex-col justify-between shadow-2xl relative group">
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#f2ca50] text-[#3c2f00] font-sans text-[10px] font-bold uppercase tracking-wider rounded-lg">
                Hak Milik Abadi
              </div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-sans text-[11px] font-semibold text-[#f2ca50] tracking-widest uppercase block mb-1">
                      Tingkat II • Mahakarya Utama
                    </span>
                    <h3 className="font-serif text-3xl text-[#e5e2e3]">Atelier Kustom Penuh</h3>
                  </div>
                  <span className="font-serif text-2xl text-[#f2ca50]">€4.500</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#d3cec5] font-light leading-relaxed mb-6">
                  Perjalanan penciptaan 6 bulan bersama Maestro Jean-Luc Delacroix. Merancang wewangian murni yang didedikasikan secara eksklusif dan diarsipkan atas nama Anda.
                </p>
                <div className="space-y-3 pt-4 border-t border-[#4d4635]/30 text-xs text-[#d3cec5]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>Kepemilikan hak cipta formula tunggal seumur hidup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>3 Botol Kristal Baccarat 100ml berukir monogram emas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>Formula resmi disegel di brankas bawah tanah Paris</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>Layanan isi ulang seumur hidup langsung dari atelier</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCeremonySelect('Bespoke Perfumery')}
                className="mt-8 w-full py-3.5 rounded-xl bg-[#f2ca50] text-[#3c2f00] hover:bg-[#ffe088] font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-lg shadow-[#f2ca50]/20"
              >
                Pilih Atelier Kustom Penuh
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Stepper Suite */}
      <section id="reservation-suite" className="w-full py-20 bg-[#0e0e0f]">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 space-y-2">
            <span className="font-sans text-xs uppercase tracking-[0.28em] text-[#f2ca50] font-semibold">
              Concierge Réservation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e3]">
              Formulir Reservasi Suaka Pribadi
            </h2>
          </div>

          <form onSubmit={handleSubmitBooking} className="space-y-10 bg-[#1c1b1c] p-6 sm:p-10 rounded-2xl border border-[#4d4635]/50 shadow-2xl">
            {/* Step 1: Upacara */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#f2ca50] text-[#3c2f00] font-sans text-xs flex items-center justify-center font-bold">
                  1
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#e5e2e3] font-semibold">
                  Pilih Jenis Upacara
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCeremony('Salon Tasting')}
                  className={`text-left p-4 rounded-xl transition-all border ${
                    selectedCeremony === 'Salon Tasting'
                      ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.2)]'
                      : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                  }`}
                >
                  <span className="font-sans text-[10px] font-semibold text-[#f2ca50] uppercase block mb-1">
                    Durasi 90 Menit • €350
                  </span>
                  <span className="font-serif text-base text-[#e5e2e3] block">Sesi Tasting Salon</span>
                  <span className="font-sans text-xs text-[#99907c] mt-2 block font-light">
                    Eksplorasi sensorik aroma dan pemetaan wewangian pribadi.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCeremony('Bespoke Perfumery')}
                  className={`text-left p-4 rounded-xl transition-all border ${
                    selectedCeremony === 'Bespoke Perfumery'
                      ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.2)]'
                      : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                  }`}
                >
                  <span className="font-sans text-[10px] font-semibold text-[#e4c277] uppercase block mb-1">
                    Proses 6 Bulan • €4.500
                  </span>
                  <span className="font-serif text-base text-[#e5e2e3] block">Atelier Kustom Penuh</span>
                  <span className="font-sans text-xs text-[#99907c] mt-2 block font-light">
                    Penciptaan formula eksklusif seumur hidup bersama Maestro.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCeremony('Nuptial Archiving')}
                  className={`text-left p-4 rounded-xl transition-all border ${
                    selectedCeremony === 'Nuptial Archiving'
                      ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.2)]'
                      : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                  }`}
                >
                  <span className="font-sans text-[10px] font-semibold text-[#cac6bd] uppercase block mb-1">
                    Atmosfer Spesial
                  </span>
                  <span className="font-serif text-base text-[#e5e2e3] block">Dokumentasi Pernikahan</span>
                  <span className="font-sans text-xs text-[#99907c] mt-2 block font-light">
                    Desain aroma ruangan pernikahan dan suvenir botol kristal tamu.
                  </span>
                </button>
              </div>
            </div>

            {/* Step 2: Lokasi */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#f2ca50] text-[#3c2f00] font-sans text-xs flex items-center justify-center font-bold">
                  2
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#e5e2e3] font-semibold">
                  Pilih Lokasi Salon
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedLocation('Paris')}
                  className={`text-left p-4 rounded-xl transition-all border ${
                    selectedLocation === 'Paris'
                      ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.2)]'
                      : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-base text-[#e5e2e3]">Paris Flagship</span>
                    <MapPin className="w-4 h-4 text-[#f2ca50]" />
                  </div>
                  <span className="font-sans text-xs text-[#f2ca50] block">14 Rue de Castiglione</span>
                  <span className="font-sans text-[11px] text-[#99907c] mt-1 block">
                    Brankas maserasi kayu ek bawah tanah langsung.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedLocation('London')}
                  className={`text-left p-4 rounded-xl transition-all border ${
                    selectedLocation === 'London'
                      ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.2)]'
                      : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-base text-[#e5e2e3]">London Salon</span>
                    <MapPin className="w-4 h-4 text-[#99907c]" />
                  </div>
                  <span className="font-sans text-xs text-[#e4c277] block">Mayfair • Albemarle St</span>
                  <span className="font-sans text-[11px] text-[#99907c] mt-1 block">
                    Salon privat era Georgian & perpustakaan klasik.
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedLocation('New York')}
                  className={`text-left p-4 rounded-xl transition-all border ${
                    selectedLocation === 'New York'
                      ? 'bg-[#2a2a2b] border-[#f2ca50] shadow-[0_0_15px_rgba(242,202,80,0.2)]'
                      : 'bg-[#201f20] border-[#4d4635]/40 hover:bg-[#2a2a2b]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-base text-[#e5e2e3]">New York Penthouse</span>
                    <MapPin className="w-4 h-4 text-[#99907c]" />
                  </div>
                  <span className="font-sans text-xs text-[#e4c277] block">Upper East Side • Madison Ave</span>
                  <span className="font-sans text-[11px] text-[#99907c] mt-1 block">
                    Teras cakrawala privat & ruang pengujian wewangian.
                  </span>
                </button>
              </div>
            </div>

            {/* Step 3: Tanggal & Waktu */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#f2ca50] text-[#3c2f00] font-sans text-xs flex items-center justify-center font-bold">
                  3
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#e5e2e3] font-semibold">
                  Tentukan Tanggal & Jam Kunjungan
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 bg-[#201f20] p-4 rounded-xl border border-[#4d4635]/40">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-base text-[#e5e2e3]">November 2024</span>
                    <Calendar className="w-4 h-4 text-[#f2ca50]" />
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center font-sans text-[10px] text-[#99907c] uppercase mb-2 font-semibold">
                    <span>SEN</span>
                    <span>SEL</span>
                    <span>RAB</span>
                    <span>KAM</span>
                    <span>JUM</span>
                    <span>SAB</span>
                    <span>MIN</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center font-sans text-xs">
                    <span className="py-2 text-[#4d4635]">28</span>
                    <span className="py-2 text-[#4d4635]">29</span>
                    <span className="py-2 text-[#4d4635]">30</span>
                    {Array.from({ length: 30 }).map((_, i) => {
                      const day = i + 1;
                      const isSelected = selectedDay === day;
                      return (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          type="button"
                          className={`py-2 rounded-lg transition-colors ${
                            isSelected
                              ? 'bg-[#f2ca50] text-[#3c2f00] font-bold shadow'
                              : 'text-[#e5e2e3] hover:bg-[#2a2a2b]'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sesi Jam */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-sans text-xs text-[#99907c] block mb-3">
                      Slot Waktu Salon Tersedia ({selectedDay} November 2024)
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {['11:00 Pagi', '02:00 Siang', '04:30 Sore', '07:00 Malam'].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`p-3 rounded-xl font-sans text-xs text-center transition-all ${
                            selectedSlot === slot
                              ? 'bg-[#f2ca50] text-[#3c2f00] font-bold shadow'
                              : 'bg-[#201f20] text-[#d0c5af] hover:bg-[#2a2a2b] border border-[#4d4635]/40'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 bg-[#201f20] rounded-xl border border-[#4d4635]/30 text-xs text-[#99907c] flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#f2ca50] shrink-0" />
                    <span>Hanya 1 patron per sesi di ruang privat tertutup.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Profil Patron */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#f2ca50] text-[#3c2f00] font-sans text-xs flex items-center justify-center font-bold">
                  4
                </span>
                <span className="font-sans text-xs uppercase tracking-widest text-[#e5e2e3] font-semibold">
                  Profil Patron & Catatan Kerahasiaan
                </span>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-xs text-[#99907c] block mb-1">
                      Nama Lengkap Patron *
                    </label>
                    <input
                      type="text"
                      required
                      value={patronName}
                      onChange={(e) => setPatronName(e.target.value)}
                      placeholder="e.g. Raden Mas Bagus"
                      className="w-full bg-[#201f20] border border-[#4d4635]/50 rounded-xl px-4 py-3 text-xs text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs text-[#99907c] block mb-1">
                      Nomor WhatsApp / Telepon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={patronContact}
                      onChange={(e) => setPatronContact(e.target.value)}
                      placeholder="+62 812-3456-7890"
                      className="w-full bg-[#201f20] border border-[#4d4635]/50 rounded-xl px-4 py-3 text-xs text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-xs text-[#99907c] block mb-1">
                    Alamat Surel Pribadi *
                  </label>
                  <input
                    type="email"
                    required
                    value={patronEmail}
                    onChange={(e) => setPatronEmail(e.target.value)}
                    placeholder="nama@domain.com"
                    className="w-full bg-[#201f20] border border-[#4d4635]/50 rounded-xl px-4 py-3 text-xs text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-sans text-xs text-[#99907c] block mb-1">
                    Preferensi Olfaktori (Aroma yang disukai atau dihindari)
                  </label>
                  <textarea
                    rows={2}
                    value={patronPreferences}
                    onChange={(e) => setPatronPreferences(e.target.value)}
                    placeholder="Contoh: Sangat menyukai kayu gaharu dan bunga mawar gelap, hindari vanila yang terlalu manis..."
                    className="w-full bg-[#201f20] border border-[#4d4635]/50 rounded-xl p-3 text-xs text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-sans text-xs text-[#99907c] block mb-1">
                    Narasi Emosional (Kesan atau aura yang ingin Anda tinggalkan)
                  </label>
                  <textarea
                    rows={2}
                    value={emotionalAura}
                    onChange={(e) => setEmotionalAura(e.target.value)}
                    placeholder="Contoh: Kesan wibawa yang tenang, kehangatan malam Paris yang misterius..."
                    className="w-full bg-[#201f20] border border-[#4d4635]/50 rounded-xl p-3 text-xs text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submission button */}
            <div className="pt-4 border-t border-[#4d4635]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#99907c]">
                <Shield className="w-4 h-4 text-[#f2ca50]" />
                <span>Privasi Anda dilindungi di bawah protokol kerahasiaan salon haute parfumerie.</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#f2ca50] text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#ffe088] transition-all shadow-lg shadow-[#f2ca50]/20 flex items-center justify-center gap-2"
              >
                <span>Kirim Permohonan Reservasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={() => setIsSubmitted(false)} />
          <div className="relative z-10 w-full max-w-lg bg-[#18181c] border-2 border-[#f2ca50] rounded-2xl p-8 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-[#f2ca50]/15 border border-[#f2ca50] mx-auto flex items-center justify-center text-[#f2ca50] mb-4">
              <Check className="w-8 h-8" />
            </div>
            <span className="font-sans text-[11px] font-semibold text-[#f2ca50] tracking-[0.25em] uppercase block mb-1">
              Konfirmasi Penerimaan Salon
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#e5e2e3] mb-2">
              Reservasi Anda Telah Diterima
            </h3>
            <p className="font-sans text-xs text-[#d3cec5] max-w-sm mx-auto mb-6 font-light leading-relaxed">
              Concierge Maison d'Aura Paris akan menghubungi Anda melalui WhatsApp dan Surel dalam 24 jam untuk memvalidasi jadwal salon Anda.
            </p>

            <div className="p-4 bg-[#201f20] rounded-xl border border-[#4d4635]/50 text-left space-y-2 text-xs mb-6 font-sans">
              <div className="flex justify-between">
                <span className="text-[#99907c]">Nomor Token:</span>
                <span className="font-mono text-[#f2ca50] font-semibold">{confirmationToken}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#99907c]">Nama Patron:</span>
                <span className="text-[#e5e2e3] font-medium">{patronName || 'Patron Terhormat'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#99907c]">Layanan:</span>
                <span className="text-[#e5e2e3]">{selectedCeremony}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#99907c]">Lokasi:</span>
                <span className="text-[#e5e2e3]">{selectedLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#99907c]">Waktu:</span>
                <span className="text-[#e5e2e3]">{selectedDay} November 2024, {selectedSlot}</span>
              </div>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-3 rounded-xl bg-[#f2ca50] text-[#3c2f00] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#ffe088] transition-colors"
            >
              Tutup & Kembali Ke Beranda
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
