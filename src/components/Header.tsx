'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (key: string) => {
    if (key === 'home') return pathname === '/';
    if (key === 'services') return pathname.startsWith('/services');
    return pathname === `/${key}`;
  };

  const linkColor = (active: boolean) =>
    active ? 'text-purple' : scrolled ? 'text-ink hover:text-purple' : 'text-white hover:text-purple-soft';

  const links = [
    { key: 'home', href: '/', label: 'Home' },
    { key: 'about', href: '/about', label: 'About' },
  ];

  const services = [
    { href: '/services/wedding-packages', label: 'Wedding Packages' },
    { href: '/services/event-packages', label: 'Concert & Event Packages' },
    { href: '/services/equipment', label: 'Equipment Inventory' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-[background,box-shadow,border-color] duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? '#e7e5ee' : 'transparent'}`,
        boxShadow: scrolled ? '0 4px 24px rgba(22,19,31,0.06)' : 'none',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo-long.png"
            alt="Big Dunn Entertainment"
            width={1200}
            height={200}
            className="h-11 w-auto transition-[filter] duration-300"
            style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-[38px]">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={`text-[14.5px] font-semibold tracking-[0.01em] py-1.5 border-b-2 transition-colors ${linkColor(isActive(l.key))} ${
                isActive(l.key) ? 'border-purple' : 'border-transparent'
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              href="/services/equipment"
              className={`inline-flex items-center gap-1 text-[14.5px] font-semibold tracking-[0.01em] py-1.5 border-b-2 transition-colors ${linkColor(
                isActive('services'),
              )} ${isActive('services') ? 'border-purple' : 'border-transparent'}`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
              />
            </Link>
            <div
              className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 min-w-[246px] bg-white rounded-[14px] p-2 flex flex-col transition-all duration-200"
              style={{
                border: '1px solid #e7e5ee',
                boxShadow: '0 18px 50px rgba(22,19,31,0.16)',
                opacity: isServicesOpen ? 1 : 0,
                visibility: isServicesOpen ? 'visible' : 'hidden',
                transform: `translateX(-50%) translateY(${isServicesOpen ? '0' : '-8px'})`,
              }}
            >
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-sm font-semibold text-body-3 px-4 py-3 rounded-[9px] hover:bg-[#f3effc] hover:text-purple transition-colors whitespace-nowrap"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className={`text-[14.5px] font-semibold tracking-[0.01em] py-1.5 border-b-2 transition-colors ${linkColor(
              isActive('contact'),
            )} ${isActive('contact') ? 'border-purple' : 'border-transparent'}`}
          >
            Contact
          </Link>

          <a
            href="tel:+12424493010"
            className="inline-flex items-center gap-2 text-[13.5px] font-bold text-white px-5 py-[11px] rounded-full transition-all bg-purple hover:bg-blue hover:-translate-y-px"
            style={{ boxShadow: '0 8px 22px rgba(106,38,201,0.32)' }}
          >
            <Phone size={14} />
            <span className="tracking-[0.02em]">1-242-449-3010</span>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-line px-6 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2.5 text-[15px] font-semibold text-ink hover:text-purple transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="py-1">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted py-2">Services</div>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 pl-3 text-sm font-semibold text-body hover:text-purple transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block py-2.5 text-[15px] font-semibold text-ink hover:text-purple transition-colors"
          >
            Contact
          </Link>
          <a href="tel:+12424493010" className="bd-btn bd-btn-primary bd-btn-block mt-3 !py-3">
            <Phone size={16} />
            <span>1-242-449-3010</span>
          </a>
        </div>
      )}
    </header>
  );
}
