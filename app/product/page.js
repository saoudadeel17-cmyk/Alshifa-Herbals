'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

const HOTSPOTS = [
  { top: '20%', left: '50%', title: 'Sealed Freshness', text: 'Airtight jar keeps herbal actives fresh & potent.' },
  { top: '45%', left: '28%', title: '75g Pack', text: "A full month's supply with the recommended daily dose." },
  { top: '65%', left: '68%', title: '100% Herbal', text: 'Turmeric, senna, fennel & root blend — no added chemicals.' },
  { top: '85%', left: '45%', title: 'Alshifa Certified', text: 'Pure · Natural · Safe · Trusted formula.' },
];

const BENEFITS = [
  'Improves digestion & liver function',
  'Supports healthy weight & metabolism',
  'Relieves constipation & bloating',
  'Boosts energy & overall wellness',
  'Restores appetite & nutrient absorption',
  '100% natural, no added chemicals',
];

export default function ProductPage() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    addToCart(PRODUCTS.hepaliv, qty);
    router.push('/cart');
  };

  return (
    <>
      <div className="pagehero">
        <div className="hero-arc" />
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
            Nature&apos;s Power for Your Wellness
          </div>
          <h1>Hepaliv Herbal Powder</h1>
          <p>Liver Wellness · Digestion · Metabolism · Overall Health</p>
        </div>
      </div>

      <section className="showcase">
        <div className="wrap">
          <Reveal className="showcase-media reveal" style={{ position: 'relative' }}>
            <Image src="/assets/poster3.png" alt="Hepaliv Herbal Powder bottle" width={500} height={600} style={{ width: '100%', height: 'auto' }} />
            {HOTSPOTS.map((h) => (
              <div className="hotspot" style={{ top: h.top, left: h.left }} key={h.title}>
                <div className="tip">
                  <strong>{h.title}</strong>
                  {h.text}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="reveal">
            <div className="eyebrow">
              Rs 1000/-{' '}
              <span style={{ color: 'var(--ink-soft)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
                · 75g Jar
              </span>
            </div>
            <h2 style={{ fontSize: 32, color: 'var(--forest)', marginTop: 14 }}>
              A Premium Herbal Formula for Liver, Digestion &amp; Metabolism
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: 14.5, lineHeight: 1.65, maxWidth: 480 }}>
              Hepaliv Herbal Powder brings together traditional herbs used for generations to
              support a healthy liver, smoother digestion and steady natural energy — with zero
              added chemicals.
            </p>

            <div className="benefits">
              {BENEFITS.map((b) => (
                <div className="benefit" key={b}>
                  <div className="dot">✓</div>
                  <p>{b}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 30, flexWrap: 'wrap' }}>
              <div className="qty-box" style={{ border: '1px solid var(--line)', borderRadius: 999, padding: '8px 16px' }}>
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <span style={{ padding: '0 10px' }}>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
              <button className="btn-primary" onClick={handleAdd}>Add to Cart</button>
              <a href="https://wa.me/966573859529" target="_blank" rel="noreferrer" className="btn-ghost">
                WhatsApp Order
              </a>
            </div>
            <div className="trustrow" style={{ marginTop: 24 }}>
              <div className="item"><span className="dot" />Ships to Pakistan &amp; GCC</div>
              <div className="item"><span className="dot" />Free delivery above Rs 3000</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="howto">
        <div className="wrap">
          <Reveal className="section-head reveal">
            <div className="eyebrow">How To Use</div>
            <h2>Two spoons a day, morning and night</h2>
          </Reveal>
          <Reveal className="steps reveal-stagger">
            <div className="step lift">
              <div className="tag">Morning</div>
              <h3>☀ On an empty stomach</h3>
              <p>Mix one spoon of Hepaliv powder in a glass of warm water. Drink 20–30 minutes before breakfast.</p>
            </div>
            <div className="step lift">
              <div className="tag">Night</div>
              <h3>☾ Before bed</h3>
              <p>Mix one spoon in warm water and take after dinner, at least one hour before sleeping.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ingredients">
        <Reveal className="wrap reveal">
          <div className="section-head" style={{ marginBottom: 20 }}>
            <div className="eyebrow">Made With Pure Herbs</div>
            <h2>Power of Nature, in every spoon</h2>
          </div>
          <div className="istrip">
            <div className="ing"><div className="ic">🌿</div><span>Fennel</span></div>
            <div className="ing"><div className="ic">🌾</div><span>Senna</span></div>
            <div className="ing"><div className="ic">🟠</div><span>Turmeric</span></div>
            <div className="ing"><div className="ic">🌱</div><span>Mint</span></div>
            <div className="ing"><div className="ic">🌰</div><span>Root Blend</span></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
