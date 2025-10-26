// app/about/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ==========================================================
// KOMPONEN 1: SkillsSection (VERSI DENGAN STAGGERED ANIMATION)
// Ini adalah komponen pembantu
// ==========================================================
function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 1. Tambahkan kelas .is-visible ke <section>
            section.classList.add('is-visible');

            const skillItems =
              section.querySelectorAll<HTMLElement>('[data-skill]');

            // 2. Terapkan logika STAGGERED dari JS lama Anda
            skillItems.forEach((item, index) => { // <-- Tambahkan 'index'
              const skillValue = item.dataset.skill;
              const skillBar = item.querySelector<HTMLElement>('.skill-bar');

              if (skillBar && skillValue) {
                // 3. Terapkan setTimeout dan transisi kustom
                setTimeout(() => {
                  // Menambahkan transisi kustom dari JS lama Anda
                  skillBar.style.transition =
                    'width 1.5s cubic-bezier(0.25, 1, 0.5, 1)';
                  skillBar.style.width = `${skillValue}%`;
                }, index * 100); // <-- Terapkan delay per indeks
              }
            });

            // 4. Berhenti mengamati
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.1, // Trigger saat 10% elemen terlihat
      }
    );

    observer.observe(section);

    // 5. Fungsi cleanup
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []); // [] berarti useEffect ini hanya berjalan sekali saat mount

  // Return JSX
  return (
    <section
      ref={sectionRef}
      id="skills"
      data-animate
      className="mb-16 md:mb-24 opacity-0 transition-all duration-1000 delay-500 transform translate-y-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Skill 1: React.js */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          data-skill="95"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">React.js</h3>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              95%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="skill-bar bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>

        {/* Skill 2: Node.js */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          data-skill="90"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Node.js</h3>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              90%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="skill-bar bg-gradient-to-r from-green-500 to-green-700 h-3 rounded-full"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>

        {/* Skill 3: TailwindCSS */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          data-skill="92"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">TailwindCSS</h3>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              92%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="skill-bar bg-gradient-to-r from-cyan-500 to-cyan-700 h-3 rounded-full"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>

        {/* Skill 4: MongoDB */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          data-skill="85"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">MongoDB</h3>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              85%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="skill-bar bg-gradient-to-r from-emerald-500 to-emerald-700 h-3 rounded-full"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>

        {/* Skill 5: Python */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          data-skill="88"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">Python</h3>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              88%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="skill-bar bg-gradient-to-r from-yellow-500 to-yellow-700 h-3 rounded-full"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>

        {/* Skill 6: TypeScript */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          data-skill="87"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">TypeScript</h3>
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              87%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className="skill-bar bg-gradient-to-r from-violet-500 to-violet-700 h-3 rounded-full"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================================
// KOMPONEN 2: Halaman Utama (AboutPage)
// INI ADALAH DEFAULT EXPORT YANG HILANG
// ==========================================================
export default function AboutPage() {
  // --- LOGIKA ANIMASI UNTUK SEMUA SECTION ---
  useEffect(() => {
    // 1. Pilih semua elemen yang ingin dianimasikan
    const sections = document.querySelectorAll<HTMLElement>('[data-animate]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 2. Tambahkan .is-visible saat terlihat
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // 3. Amati setiap elemen
    sections.forEach((section) => {
      // Kita kecualikan #skills karena sudah punya observer sendiri
      if (section.id !== 'skills') {
        observer.observe(section);
      }
    });

    // 4. Cleanup
    return () => {
      sections.forEach((section) => {
        if (section.id !== 'skills') {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    // Struktur <main> mengikuti kode Anda sebelumnya
    <main className="bg-slate-900 text-white min-h-screen overflow-x-hidden antialiased">
      
      {/* PERBAIKAN: Padding-top ada di section PERTAMA, bukan di <main> */}
      <section
        id="hero"
        data-animate // <-- Akan dideteksi oleh useEffect di atas
        className="pt-24 text-center mb-16 md:mb-24 opacity-0 transition-all duration-1000 transform translate-y-8"
      >
        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 mb-8">
          <div className="bg-slate-900 rounded-full px-8 md:px-12 py-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none">
              <span className="bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-gradient-move">
                ABOUT ME
              </span>
            </h1>
          </div>
        </div>
        <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto">
          Seorang{' '}
          <span className="font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Fullstack Developer
          </span>{' '}
          &{' '}
          <span className="font-semibold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
            Curriculum Architect
          </span>{' '}
          yang bersemangat dalam menciptakan solusi digital yang berdampak.
        </p>
      </section>

      <div className="max-w-5xl mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <section
            id="profile"
            data-animate // <-- Akan dideteksi
            className="opacity-0 transition-all duration-1000 delay-200 transform -translate-x-8"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 h-full group transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 animate-spin-slow"></div>

                <div className="absolute inset-1 bg-slate-900 rounded-full overflow-hidden">
                  <Image
                    src="https://i.pravatar.cc/150?u=arjunior" // Ganti dengan path Anda jika lokal
                    alt="Foto Profil Ciola Arjunior"
                    width={184}
                    height={184}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>
              <div className="relative text-center mb-6">
                <span className="absolute -top-2 left-0 text-5xl font-serif text-cyan-400/50">
                  “
                </span>
                <blockquote className="italic text-slate-300 text-lg font-medium px-4">
                  Setiap baris kode adalah peluang untuk menciptakan pengalaman
                  digital yang indah, responsif, dan bermanfaat.
                </blockquote>
                <span className="absolute -bottom-6 right-0 text-5xl font-serif text-violet-500/50">
                  ”
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-center">
                Saya adalah{' '}
                <span className="font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  Ciola Arjunior
                </span>
                , seorang fullstack web developer dan curriculum architect yang
                memadukan ketajaman strategi pendidikan dengan ketepatan
                teknologi modern.
              </p>
            </div>
          </section>

          <section
            id="services"
            data-animate // <-- Akan dideteksi
            className="flex flex-col gap-6 opacity-0 transition-all duration-1000 delay-300 transform translate-x-8"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6 transition-all duration-300 hover:border-blue-400/40 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mr-4 text-2xl">
                  🎨
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Frontend
                </h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-2">▶</span> ReactJS,
                  TailwindCSS
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20 rounded-2xl p-6 transition-all duration-300 hover:border-green-400/40 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mr-4 text-2xl">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Backend
                </h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <span className="text-emerald-400 mr-2">▶</span> Node.js,
                  ExpressJS
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 backdrop-blur-xl border border-violet-400/20 rounded-2xl p-6 transition-all duration-300 hover:border-violet-400/40 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-pink-400 flex items-center justify-center mr-4 text-2xl">
                  📚
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-300 bg-clip-text text-transparent">
                  EduTech
                </h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center">
                  <span className="text-pink-400 mr-2">▶</span> Desain Kurikulum
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* --- MEMANGGIL KOMPONEN SkillsSection --- */}
      <SkillsSection />

      <section
        id="portfolio"
        data-animate // <-- Akan dideteksi
        className="mb-16 md:mb-24 opacity-0 transition-all duration-1000 delay-700 transform translate-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
          Featured Project
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"><div className="h-40 rounded-lg mb-6 flex items-center justify-center text-6xl bg-gradient-to-br from-pink-500 to-pink-600 transition-transform duration-300 group-hover:scale-105">🚀</div><h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-cyan-300">Website SMK S Mekarsari</h3><p className="text-slate-400 mb-4 text-sm">Portal sekolah responsif dengan sistem PPDB terintegrasi.</p><div className="flex flex-wrap gap-2"><span className="text-xs bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">React</span><span className="text-xs bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">Node.js</span></div></div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"><div className="h-40 rounded-lg mb-6 flex items-center justify-center text-6xl bg-gradient-to-br from-violet-500 to-violet-600 transition-transform duration-300 group-hover:scale-105">🚀</div><h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-cyan-300">E-Learning Platform</h3><p className="text-slate-400 mb-4 text-sm">Platform pembelajaran digital dengan fitur video streaming.</p><div className="flex flex-wrap gap-2"><span className="text-xs bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">React</span><span className="text-xs bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">Express</span></div></div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group transition-all duration-300 hover:bg-white/10 hover:-translate-y-2"><div className="h-40 rounded-lg mb-6 flex items-center justify-center text-6xl bg-gradient-to-br from-orange-500 to-orange-600 transition-transform duration-300 group-hover:scale-105">🚀</div><h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-cyan-300">Curriculum Management</h3><p className="text-slate-400 mb-4 text-sm">Sistem manajemen kurikulum vokasi berbasis industri.</p><div className="flex flex-wrap gap-2"><span className="text-xs bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">React</span><span className="text-xs bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full">FastAPI</span></div></div>
        </div>
      </section>

      <section
        id="cta"
        data-animate // <-- Akan dideteksi
        className="text-center opacity-0 transition-all duration-1000 delay-700 transform translate-y-8"
      >
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            Interested In Collaborating ?
          </h2>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            Saya selalu terbuka untuk proyek baru dan tantangan menarik. Mari
            kita ubah ide Anda menjadi solusi digital yang luar biasa.
          </p>
          <a
            href="mailto:ciolaarjunior31@gmail.com"
            className="relative inline-flex items-center px-10 py-4 text-lg font-semibold rounded-2xl text-white overflow-hidden group transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/40 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center space-x-2">
              <span>✨</span>
              <span>Hubungi Saya</span>
              <span>🚀</span>
            </span>
          </a>

          <p className="mt-6 text-sm text-slate-400">
            <Link href="/" className="font-bold text-white hover:text-cyan-400 transition-colors">
              Back To Home
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}