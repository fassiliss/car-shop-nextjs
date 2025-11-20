'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-white shadow-md">
            {/* Top Bar */}
            <div className="bg-gray-900 text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center text-sm">
                        <div className="hidden md:flex gap-6">
                            <a href="tel:+16155550199" className="hover:text-blue-400">📞 (615) 555-0199</a>
                            <a href="mailto:info@autoshop.com" className="hover:text-blue-400">✉️ info@autoshop.com</a>
                            <span>📍 Franklin, TN</span>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-blue-400">Facebook</a>
                            <a href="#" className="hover:text-blue-400">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-3xl font-bold text-blue-600">
                        AutoShop
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="hover:text-blue-600 font-semibold transition">Home</Link>
                        <Link href="/cars" className="hover:text-blue-600 font-semibold transition">Inventory</Link>
                        <Link href="/about" className="hover:text-blue-600 font-semibold transition">About</Link>
                        <Link href="/contact" className="hover:text-blue-600 font-semibold transition">Contact</Link>
                        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
                        <Link href="/" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link href="/cars" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Inventory</Link>
                        <Link href="/about" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</Link>
                        <Link href="/contact" className="block py-2 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}