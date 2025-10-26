'use client';

import Wave from 'react-wavify';

const MyWave = () => {
    return (
        <div className="absolute bottom-0 w-full">
      {/* Defs Anda bisa ditaruh di komponen terpisah atau di layout global 
          jika ingin dipakai di sini */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8"/> {/* indigo-600 */}
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6"/> {/* sky-500 */}
          </linearGradient>
        </defs>
      </svg>

      <Wave
        fill="url(#wave-gradient)" // Pakai gradient yang sudah Anda buat
        paused={false}
        className="h-24 md:h-40" // Atur tinggi di sini
        options={{
          height: 20,       // Ketinggian ombak (internal SVG)
          amplitude: 40,    // Amplitudo ombak
          speed: 0.15,      // Kecepatan animasi
          points: 3         // Jumlah lekukan
        }}
      />
    </div>
    )
}

export default MyWave;