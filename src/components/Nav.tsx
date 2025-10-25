"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* Image placeholder - Logo should go here */}
            <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">BD</span>
            </div>
            <div className="hidden md:block">
              <span className="text-2xl font-bold text-gray-900">
                BIG DUNN
              </span>
              <p className="text-xs text-brand-purple uppercase tracking-wider">
                Entertainment
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-brand-purple font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:1-242-449-3010"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>1-242-449-3010</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-brand-purple"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-purple font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:1-242-449-3010"
                className="btn-primary flex items-center justify-center space-x-2 w-full"
              >
                <Phone size={18} />
                <span>1-242-449-3010</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
