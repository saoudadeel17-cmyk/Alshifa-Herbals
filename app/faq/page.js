'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Is Hepaliv safe to use daily?',
    a: 'Hepaliv is made from natural herbs and is intended for daily use as directed (one spoon morning and night). As with any herbal supplement, we recommend consulting your doctor before starting, especially if you have an existing medical condition.',
  },
  {
    q: 'Is it safe during pregnancy or breastfeeding?',
    a: 'We recommend pregnant or breastfeeding women consult their doctor before using Hepaliv, as we have not specifically tested the formula for this group.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Orders within Pakistan typically arrive in 3–5 business days. Orders shipped to the GCC region typically take 5–8 business days, depending on your city.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Currently we accept Cash on Delivery (COD) within Pakistan, and orders can also be arranged directly via WhatsApp. Online card payment is coming soon.',
  },
  {
    q: 'What is your return / refund policy?',
    a: 'If your order arrives damaged or incorrect, contact us on WhatsApp within 48 hours of delivery with photos, and we will arrange a replacement or refund. Opened product cannot be returned for hygiene reasons unless defective.',
  },
  {
    q: 'Are there any side effects?',
    a: "Hepaliv is made from natural herbal ingredients with no added chemicals. Some people may experience mild digestive changes when first starting any herbal supplement. If you experience discomfort, stop use and consult your doctor.",
  },
  {
    q: 'Can children use Hepaliv?',
    a: 'Hepaliv is formulated for adults. Please consult a doctor before giving any herbal supplement to children.',
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="pagehero">
        <div className="hero-arc" />
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold)' }}>
            Have Questions?
          </div>
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about Hepaliv, orders and delivery.</p>
        </div>
      </div>

      <section>
        <div className="wrap" style={{ maxWidth: 760 }}>
          {FAQS.map((item, i) => (
            <div
              key={item.q}
              className="step lift"
              style={{ height: 'auto', marginBottom: 14, cursor: 'pointer' }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: 16 }}>{item.q}</h3>
                <span style={{ color: 'var(--turmeric)', fontSize: 20, fontWeight: 700 }}>
                  {open === i ? '−' : '+'}
                </span>
              </div>
              {open === i && (
                <p style={{ marginTop: 10 }}>{item.a}</p>
              )}
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14 }}>Still have a question?</p>
            <a
              href="https://wa.me/966573859529"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ marginTop: 10, display: 'inline-flex' }}
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}