'use client';

import { useState } from 'react';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [phone, setPhone] = useState('');
  const [result, setResult] = useState(null);

  const handleTrack = () => {
    if (!orderId.trim()) {
      alert('Please enter your order number.');
      return;
    }
    setResult(orderId.trim());
  };

  return (
    <>
      <div className="pagehero">
        <div className="hero-arc" />
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Order Status</div>
          <h1>Track Your Order</h1>
          <p>Enter your order number to see its current status.</p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="form-card">
            <div className="field">
              <label>Order Number</label>
              <input type="text" placeholder="e.g. AS-10234" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
            </div>
            <div className="field">
              <label>Phone Number Used at Checkout</label>
              <input type="tel" placeholder="+92 3xx xxxxxxx" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button className="btn-primary form-submit" onClick={handleTrack}>Track Order</button>
            <p style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 12, textAlign: 'center' }}>
              Can&apos;t find your order?{' '}
              <a href="https://wa.me/966573859529" target="_blank" rel="noreferrer" style={{ color: 'var(--turmeric)', textDecoration: 'underline' }}>
                Ask us on WhatsApp
              </a>
            </p>
          </div>

          {result && (
            <div style={{ marginTop: 50 }}>
              <div className="section-head">
                <div className="eyebrow">Order #{result}</div>
                <h2>Your order is on its way</h2>
              </div>
              <div className="timeline">
                <div className="tpoint done"><div className="circ">✓</div><span>Placed</span></div>
                <div className="tpoint done"><div className="circ">✓</div><span>Confirmed</span></div>
                <div className="tpoint active"><div className="circ">●</div><span>Shipped</span></div>
                <div className="tpoint"><div className="circ">○</div><span>Out for Delivery</span></div>
                <div className="tpoint"><div className="circ">○</div><span>Delivered</span></div>
              </div>
              <p style={{ textAlign: 'center', color: 'var(--ink-soft)', fontSize: 13.5, maxWidth: 440, margin: '0 auto' }}>
                Estimated delivery: 3–5 business days for Pakistan, 5–8 business days for GCC addresses.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
