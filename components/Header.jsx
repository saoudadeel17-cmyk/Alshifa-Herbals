'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export default function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { cartCount, bump } = useCart();
  const t = translations[lang];

  const NAV_ITEMS = [
    { href: '/', label: t.nav.home },
    { href: '/product', label: t.nav.shop },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
    { href: '/track-order', label: t.nav.track },
  ];

  return (
    <>
      <div className="announce">
        <span>{t.announce}</span>
      </div>
      <header>
        <div className="headrow">
          <Link href="/" className="brand">
            <Image src="/assets/logo.png" alt="Alshifa Herbals" width={46} height={46} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div className="name">Alshifa Herbals</div>
              <div className="tag">Pure · Natural · Safe</div>
            </div>
          </Link>

          <nav className={`mainnav ${navOpen ? 'open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="head-actions">
            <div className="lang-switch">
              {['en', 'ur', 'ar'].map((code) => (
                <button
                  key={code}
                  className={lang === code ? 'active' : ''}
                  onClick={() => setLang(code)}
                >
                  {code === 'en' ? 'EN' : code === 'ur' ? 'اردو' : 'عربي'}
                </button>
              ))}
            </div>
            <Link href="/cart" className={`cart-btn ${bump ? 'bump' : ''}`}>
              {t.nav.cart} <span className="count">{cartCount}</span>
            </Link>
            <button className="mobile-toggle" onClick={() => setNavOpen((v) => !v)}>
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  );
}