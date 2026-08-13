import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';

const VALUES = [
  { tag: 'Pure', title: 'No shortcuts', text: 'Every batch is made with pure herbal ingredients — nothing artificial added.' },
  { tag: 'Natural', title: 'Traditional herbs', text: 'Formulas rooted in herbs used safely for generations across the region.' },
  { tag: 'Safe', title: 'Made responsibly', text: 'Careful sourcing and clean processing, from farm to jar.' },
  { tag: 'Trusted', title: 'Real customers', text: 'Thousands of families across Pakistan & the Gulf trust Alshifa Herbals.' },
  { tag: 'Regional', title: 'Built for you', text: 'Designed and shipped for customers in Pakistan and the GCC region.' },
  { tag: 'Growing', title: 'More to come', text: 'Hepaliv is our first step — more herbal wellness products are on the way.' },
];

export default function AboutPage() {
  return (
    <>
      <div className="pagehero">
        <div className="hero-arc" />
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Our Story</div>
          <h1>Healing with the Power of Nature</h1>
          <p>Why we started Alshifa Herbals, and what we stand for.</p>
        </div>
      </div>

      <section>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <Reveal className="reveal">
            <Image src="/assets/logo.png" alt="Alshifa Herbals logo" width={280} height={280} style={{ margin: '0 auto', borderRadius: '50%' }} />
          </Reveal>
          <Reveal className="reveal">
            <div className="eyebrow">Who We Are</div>
            <h2 style={{ fontSize: 30, color: 'var(--forest)', marginTop: 14 }}>Pure. Natural. Safe. Trusted.</h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: 14, fontSize: 14.5, lineHeight: 1.7 }}>
              Alshifa Herbals was built on a simple belief — that the herbs traditionally used for
              generations still hold real answers for modern wellness problems. We formulate every
              product with pure, natural ingredients, with no added chemicals, so families across
              Pakistan and the Gulf can feel confident about what they put in their bodies.
            </p>
            <p style={{ color: 'var(--ink-soft)', marginTop: 14, fontSize: 14.5, lineHeight: 1.7 }}>
              Our first product, <strong>Hepaliv</strong>, was created to support the one organ most
              people forget about until something goes wrong — the liver. From there, our herbal
              wellness line will keep growing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="problems">
        <div className="wrap">
          <Reveal className="stats reveal-stagger">
            <div className="stat"><Counter target={5000} /><span>HAPPY CUSTOMERS</span></div>
            <div className="stat"><Counter target={2} /><span>COUNTRIES SERVED</span></div>
            <div className="stat"><Counter target={100} /><span>% NATURAL HERBS</span></div>
            <div className="stat"><Counter target={4} /><span>YEARS OF TRUST</span></div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal className="section-head reveal">
            <div className="eyebrow">What We Stand For</div>
            <h2>Our promise to every customer</h2>
          </Reveal>
          <Reveal className="pgrid reveal-stagger" style={{ perspective: 'none' }}>
            {VALUES.map((v) => (
              <div className="step lift" style={{ height: 'auto' }} key={v.tag}>
                <div className="tag">{v.tag}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <Reveal className="wrap reveal">
          <div className="ctaband">
            <div>
              <h2>Want to know more about our herbs?</h2>
              <p>Reach out anytime — we love talking about what goes into every jar.</p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ background: 'var(--gold)', color: 'var(--forest)' }}>
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}