'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Reveal from '@/components/Reveal';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

const PROBLEMS = [
  { title: 'Liver Weakness', sub: 'Sluggish digestion & low energy', back: 'Toxin build-up, constant fatigue & worsening digestion over time.' },
  { title: 'Weight Concerns', sub: 'Slow metabolism & stored fat', back: 'Continued weight gain and harder-to-reverse metabolic slowdown.' },
  { title: 'Stomach & Piles', sub: 'Constipation, bloating & discomfort', back: 'Chronic constipation can worsen piles & long-term gut discomfort.' },
  { title: 'Headache & Fatigue', sub: 'Low stamina through the day', back: 'Poor focus, low productivity & disturbed sleep patterns.' },
  { title: 'Loss of Appetite', sub: 'Irregular eating & poor absorption', back: 'Nutrient deficiency and further weakening of the digestive system.' },
  { title: 'Hormonal Balance', sub: "Support for women's wellness", back: 'Mood swings, irregular cycles & low energy can persist.' },
];

const BENEFITS = [
  'Improves digestion & liver function',
  'Supports healthy weight & metabolism',
  'Relieves constipation & bloating',
  'Boosts energy & overall wellness',
  '100% natural, no added chemicals',
  'Trusted quality, made with pure herbs',
];

export default function HomePage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleOrder = () => {
    addToCart(PRODUCTS.hepaliv);
    router.push('/cart');
  };

  return (
    <>
      <section className="hero">
        <div className="hero-arc" />
        <div className="wrap">
          <div>
            <div className="eyebrow hero-eyebrow">Nature&apos;s Power for Your Wellness</div>
            <h1>
              Your liver works hard.
              <br />
              <em>Give it herbs</em> that work harder.
            </h1>
            <p className="sub">
              Hepaliv is a premium herbal powder crafted to support liver wellness, digestion,
              metabolism and everyday energy — made with pure, traditional herbs.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={handleOrder}>
                Shop Hepaliv — Rs 1000
              </button>
              <a href="https://wa.me/966573859529" target="_blank" rel="noreferrer" className="btn-ghost">
                Order on WhatsApp
              </a>
            </div>
            <div className="trustrow">
              <div className="item"><span className="dot" />100% Natural Herbal Actives</div>
              <div className="item"><span className="dot" />No Added Chemicals</div>
              <div className="item"><span className="dot" />Ships to Pakistan &amp; GCC</div>
            </div>
          </div>
          <div className="hero-media">
            <div className="frame">
              <Link href="/product">
                <Image src="/assets/poster3.png" alt="Hepaliv Herbal Powder" width={380} height={480} />
              </Link>
            </div>
            <div className="price-pill">
              <div className="lbl">ONE-TIME PRICE</div>
              <div className="val">Rs 1000/-</div>
            </div>
          </div>
        </div>
      </section>

      <section className="problems">
        <div className="wrap">
          <Reveal className="section-head reveal">
            <div className="eyebrow">Struggling With?</div>
            <h2>Hover a card to see what happens if it&apos;s ignored</h2>
          </Reveal>
          <Reveal className="pgrid reveal-stagger">
            {PROBLEMS.map((p) => (
              <div className="flip-card" key={p.title}>
                <div className="flip-inner">
                  <div className="flip-front">
                    <div className="ic">✺</div>
                    <h3>{p.title}</h3>
                    <p>{p.sub}</p>
                  </div>
                  <div className="flip-back">
                    <div className="tag">If ignored</div>
                    {p.back}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="showcase">
        <div className="wrap">
          <Reveal className="showcase-media reveal" style={{ position: 'relative' }}>
            <Image src="/assets/poster2.png" alt="Hepaliv Herbal Powder details" width={500} height={600} style={{ borderRadius: 16, width: '100%', height: 'auto' }} />
            <div className="hotspot" style={{ top: '38%', left: '30%' }}>
              <div className="tip">
                <strong>Pure Herbs</strong>Turmeric, fennel &amp; senna sourced from trusted farms.
              </div>
            </div>
            <div className="hotspot" style={{ top: '60%', left: '65%' }}>
              <div className="tip">
                <strong>Easy to Mix</strong>Just one spoon in warm water, morning &amp; night.
              </div>
            </div>
          </Reveal>
          <Reveal className="reveal">
            <div className="eyebrow">Key Benefits</div>
            <h2 style={{ fontSize: 32, color: 'var(--forest)', marginTop: 14 }}>
              One formula. Four kinds of relief.
            </h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: 14.5, lineHeight: 1.6, maxWidth: 460 }}>
              A premium herbal formula made with pure herbs — turmeric, senna, fennel and
              traditional roots — to support liver detox, digestion and steady, natural energy.
            </p>
            <div className="benefits">
              {BENEFITS.map((b) => (
                <div className="benefit" key={b}>
                  <div className="dot">✓</div>
                  <p>{b}</p>
                </div>
              ))}
            </div>
            <Link href="/product" className="btn-primary" style={{ marginTop: 26, display: 'inline-flex' }}>
              View Product Details
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="ingredients">
        <Reveal className="wrap reveal">
          <div className="istrip">
            <div className="ing"><div className="ic">🌿</div><span>Fennel</span></div>
            <div className="ing"><div className="ic">🌾</div><span>Senna</span></div>
            <div className="ing"><div className="ic">🟠</div><span>Turmeric</span></div>
            <div className="ing"><div className="ic">🌱</div><span>Mint</span></div>
            <div className="ing"><div className="ic">🌰</div><span>Root Blend</span></div>
          </div>
        </Reveal>
      </section>

      <section className="testis">
        <div className="wrap">
          <Reveal className="section-head reveal">
            <div className="eyebrow">Real Results</div>
            <h2>What our customers say</h2>
          </Reveal>
          <Reveal className="tgrid reveal-stagger">
            <div className="tcard lift"><div className="stars">★★★★★</div><p>&quot;My digestion improved within two weeks and I finally feel light after meals.&quot;</p><div className="who">— Ayesha, Lahore</div></div>
            <div className="tcard lift"><div className="stars">★★★★★</div><p>&quot;Easy to mix, no strange taste, and my energy through the day has improved.&quot;</p><div className="who">— Omar, Riyadh</div></div>
            <div className="tcard lift"><div className="stars">★★★★★</div><p>&quot;Helped with my constipation issue in just a few days. Ordering again.&quot;</p><div className="who">— Fatima, Karachi</div></div>
          </Reveal>
        </div>
      </section>

      <section>
        <Reveal className="wrap reveal">
          <div className="ctaband">
            <div>
              <h2>Ready to feel lighter, calmer, healthier?</h2>
              <p>Order Hepaliv today — delivered across Pakistan &amp; the GCC.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div className="cta-price">75g pack<b>Rs 1000/-</b></div>
              <button className="btn-primary" style={{ background: 'var(--gold)', color: 'var(--forest)' }} onClick={handleOrder}>
                Order Now
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}