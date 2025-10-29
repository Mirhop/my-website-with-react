'use client';

import Link from 'next/link';

export default function() {
  return(
    <section className="min-h-screen flex flex-col justify-center items-center p-12 sm:p-24">
    
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10">Todo List Saya</h1>
      
      <div className="w-full max-w-md mb-8 ">
        <form className="flex flex-col md:flex-row gap-4">
          <input
          type="text"
          placeholder="Apa Rencanamu Hari Ini ?"
          className="flex-grow p-3 rounded-lg bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button
          type="submit"
          className="bg-blue-600 p-3 px-5 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">Tambah</button>
        </form>
      </div>
    </section>
  );
}