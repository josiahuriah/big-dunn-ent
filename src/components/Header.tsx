'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-36 h-12 rounded-lg flex items-center justify-center">
              {/* Logo placeholder - replace with actual logo image */}
              <Image
              src="/images/logo-long.png"
              alt="Big Dunn Entertainment"
              width={1200}
              height={200}
              className="h-10 w-auto"
            />
            </div>
            {/* <div className="hidden md:block">
              <div className="font-display text-xl font-bold text-neutral-dark">
                BIG DUNN
              </div>
              <div className="text-xs text-primary-purple font-serif">
                ENTERTAINMENT
              </div>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-dark hover:text-primary-purple font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12424493010"
              className="flex items-center space-x-2 btn-primary"
            >
              <Phone size={18} />
              <span>1-242-449-3010</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-neutral-dark hover:text-primary-purple font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12424493010"
              className="flex items-center space-x-2 btn-primary w-full justify-center"
            >
              <Phone size={18} />
              <span>1-242-449-3010</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}