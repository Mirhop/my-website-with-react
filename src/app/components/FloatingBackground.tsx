'use client'; // <-- WAJIB: Menandakan ini adalah Client Component

import { useMemo, useRef, useEffect } from 'react';

// --- Konfigurasi dipindah ke luar agar tidak dibuat ulang ---
const largeShapesConfig = [
  { sizeClasses: 'w-24 h-24 md:w-32 lg:w-48', className: 'bg-cyan-400/20 ring-2 ring-cyan-300/30', duration: 8, delay: 0 },
  { sizeClasses: 'w-20 h-20 md:w-28 lg:w-40', className: 'bg-indigo-400/25 ring-2 ring-indigo-300/40', duration: 10, delay: 2 },
  { sizeClasses: 'w-16 h-16 md:w-24 lg:w-32', className: 'bg-sky-400/20 ring-2 ring-sky-300/35', duration: 12, delay: 4 },
];

const smallParticlesConfig = {
  count: 15,
  className: 'w-1.5 h-1.5 bg-white/25',
};

// --- Komponen Utama ---
export default function FloatingBackground() {
  
  // 1. MOUSE FOLLOWER
  // Kita pakai 'useRef' untuk performa tinggi.
  // Ini menghindari re-render setiap kali mouse bergerak.
  const followerRef = useRef<HTMLDivElement>(null);

  // 'useEffect' menggantikan 'DOMContentLoaded' dan 'addEventListener'
  useEffect(() => {
    // Fungsi 'handleMouseMove' Anda
    const handleMouseMove = (e: MouseEvent) => {
      if (followerRef.current) {
        // -192 adalah setengah dari w-96 (384px / 2)
        followerRef.current.style.transform = `translate(${e.clientX - 192}px, ${e.clientY - 192}px)`;
      }
    };

    // Cek media query
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    if (mediaQuery.matches) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    // PENTING: Cleanup function
    // Ini akan dijalankan saat komponen 'unmount' (dihapus)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // [] dependency array kosong = jalankan sekali saat 'mount'

  // 2. SHAPES & PARTICLES
  // 'useMemo' dipakai agar Math.random() HANYA dijalankan sekali
  // saat komponen mount, bukan setiap kali re-render.
  
  // --- Membuat data untuk Bola-bola Besar ---
  const largeShapes = useMemo(() => {
    return largeShapesConfig.map((config, i) => ({
      id: `l-shape-${i}`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDuration: `${config.duration}s`,
      animationDelay: `${config.delay}s`,
      className: `absolute rounded-full animate-float-custom ${config.sizeClasses} ${config.className}`,
    }));
  }, []); // [] = jalankan sekali

  // --- Membuat data untuk Partikel Kecil ---
  const smallParticles = useMemo(() => {
    return Array.from({ length: smallParticlesConfig.count }).map((_, i) => ({
      id: `s-particle-${i}`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDuration: `${5 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 10}s`,
      className: `absolute rounded-full animate-float-custom ${smallParticlesConfig.className}`,
    }));
  }, []); // [] = jalankan sekali


  // --- Render JSX (Ini menggantikan document.createElement) ---
  return (
    <>
      {/* 1. Mouse Follower (Elemen HTML-nya) */}
      <div
        id="mouse-follower"
        ref={followerRef} // <-- Hubungkan ref
        className="hidden md:block absolute top-0 left-0 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl pointer-events-none"
      />
      
      {/* 2. Floating Shapes Container (Elemen HTML-nya) */}
      <div
        id="floating-shapes-container"
        className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"
      >
        {/* Render Bola Besar */}
        {largeShapes.map(shape => (
          <div
            key={shape.id}
            className={shape.className}
            style={{
              left: shape.left,
              top: shape.top,
              animationDuration: shape.animationDuration,
              animationDelay: shape.animationDelay,
            }}
          />
        ))}
        
        {/* Render Partikel Kecil */}
        {smallParticles.map(particle => (
          <div
            key={particle.id}
            className={particle.className}
            style={{
              left: particle.left,
              top: particle.top,
              animationDuration: particle.animationDuration,
              animationDelay: particle.animationDelay,
            }}
          />
        ))}
      </div>
    </>
  );
}