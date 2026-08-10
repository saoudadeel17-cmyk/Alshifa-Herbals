'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const { cartCount, bump } = useCart();
  const { user } = useAuth();

  return (
    <>
      <div className="announce">
        <span>FREE DELIVERY IN PAKISTAN &amp; GCC ON ORDERS ABOVE RS 3000</span>
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
            <Link href={user ? '/account' : '/login'} className="btn-ghost" style={{ padding: '10px 16px', fontSize: 13 }}>
              {user ? 'Account' : 'Login'}
            </Link>
            <Link href="/cart" className={`cart-btn ${bump ? 'bump' : ''}`}>
              Cart <span className="count">{cartCount}</span>
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