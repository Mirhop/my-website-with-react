'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-8 py-6 z-20">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                <Link href="/">MY WEBSITE</Link>
                <Link href="/about" className="ml-4 text-lg font-normal">About</Link>
                </div>

                <div className="relative group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-sky-400 animate-border-pulse-custom group-hover:scale-110 transition-transform duration-300">
                        <Image src="/Avatar.svg" alt="Avatar" width={150} height={150}/>
                    </div>
                </div>
            </nav>
        </header>
    );
}