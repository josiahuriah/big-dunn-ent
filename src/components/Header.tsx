'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/services/equipment', label: 'Equipment' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  const solid = scrolled || isMenuOpen;
  const isActive = (href: string) => pathname === href || (href !== '/contact' && pathname.startsWith(`${href}/`));

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] transition-[background,box-shadow,border-color] duration-300"
      style={{
        background: solid ? 'rgba(255,255,255,0.95)' : 'linear-gradient(180deg,rgba(10,7,18,0.6),transparent)',
        backdropFilter: solid ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${solid ? '#e7e5ee' : 'transparent'}`,
        boxShadow: solid ? '0 8px 28px rgba(22,19,31,0.07)' : 'none',
      }}
    >
      <div className="bd-container flex h-[78px] items-center justify-between">
        <Link href="/" aria-label="Big Dunn Entertainment home" className="flex shrink-0 items-center">
          <Image
            src="/images/logo-long.png"
            alt="Big Dunn Entertainment"
            width={1200}
            height={200}
            className="h-10 w-auto transition-[filter] duration-300 lg:h-11"
            style={{ filter: solid ? 'none' : 'brightness(0) invert(1)' }}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 py-2 text-[13.5px] font-bold tracking-[0.01em] no-underline transition-colors ${active ? 'border-purple text-purple' : solid ? 'border-transparent text-ink hover:text-purple' : 'border-transparent text-white hover:text-purple-soft'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/quote" className="bd-btn bd-btn-primary !px-5 !py-3 text-[12px]">
            Get a quote <ArrowRight size={14} />
          </Link>
        </nav>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${solid ? 'text-ink' : 'text-white'}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-line bg-white px-4 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-[1240px] flex-col">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={`border-b border-line px-2 py-3.5 text-[15px] font-bold no-underline ${isActive(link.href) ? 'text-purple' : 'text-ink'}`}>
                {link.label}
              </Link>
            ))}
            <Link href="/quote" className="bd-btn bd-btn-primary mt-4 w-full">Get a quote <ArrowRight size={16} /></Link>
          </div>
        </nav>
      )}
    </header>
  );
}
