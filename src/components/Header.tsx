'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { 
      label: 'Services',
      submenu: [
        { href: '/services/wedding-packages', label: 'Wedding Packages' },
        { href: '/services/event-packages', label: 'Event Packages' },
        { href: '/services/equipment', label: 'Equipment Inventory' },
      ]
    },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-36 h-12 rounded-lg flex items-center justify-center">
              <Image
                src="/images/logo-long.png"
                alt="Big Dunn Entertainment"
                width={1200}
                height={200}
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              if (link.submenu) {
                return (
                  <div 
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 text-neutral-dark hover:text-primary-purple font-medium transition-colors"
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border-2 border-gray-100 overflow-hidden transition-all duration-200 ${
                      isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {link.submenu.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sublink.href}
                          className="block px-6 py-3 text-neutral-dark hover:bg-primary-purple hover:text-white transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="text-neutral-dark hover:text-primary-purple font-medium transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
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
            {navLinks.map((link, index) => {
              if (link.submenu) {
                return (
                  <div key={index}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full py-2 text-neutral-dark hover:text-primary-purple font-medium transition-colors"
                    >
                      {link.label}
                      <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((sublink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={sublink.href}
                            className="block py-2 text-gray-600 hover:text-primary-purple font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="block py-2 text-neutral-dark hover:text-primary-purple font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
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