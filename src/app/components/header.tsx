'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="absolute w-full flex justify-between items-center bg-gradient-to-tl from-indigo-500 via-sky-500 to-sky-400">
            <nav className="text-white font-bold text-2xl">
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}