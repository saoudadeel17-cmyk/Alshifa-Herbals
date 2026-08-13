'use client';

import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { supabase } from '@/lib/supabaseClient';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save to Supabase so it shows up in the Admin Panel
    await supabase.from('contact_messages').insert({
      name: form.name,
      phone: form.phone,
      email: form.email || null,
      message: form.message,
    });

    const text = encodeURIComponent(
      `New message from website:\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || '-'}\nMessage: ${form.message}`
    );
    setSent(true);
    window.open(`https://wa.me/966573859529?text=${text}`, '_blank');
  };

  return (
    <>
      <div className="pagehero">
        <div className="hero-arc" />
        <div className="wrap">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--gold)' }}>Get In Touch</div>
          <h1>We&apos;d Love to Hear From You</h1>
          <p>Questions about Hepaliv, an order, or a bulk request — we&apos;re here to help.</p>
        </div>
      </div>

      <section>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 50, alignItems: 'flex-start' }}>
          <Reveal className="reveal">
            <div className="eyebrow">Contact Details</div>
            <h2 style={{ fontSize: 26, color: 'var(--forest)', marginTop: 14 }}>Reach us directly</h2>
            <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="step lift" style={{ height: 'auto' }}>
                <div className="tag">WhatsApp</div>
                <h3 style={{ fontSize: 16 }}>+966 57 385 9529</h3>
                <p>Fastest way to order or ask a question.</p>
              </div>
              <div className="step lift" style={{ height: 'auto' }}>
                <div className="tag">Availability</div>
                <h3 style={{ fontSize: 16 }}>Mon–Sat, 10am–8pm</h3>
                <p>We reply to messages and emails within one business day.</p>
              </div>
              <div className="step lift" style={{ height: 'auto' }}>
                <div className="tag">Shipping</div>
                <h3 style={{ fontSize: 16 }}>Pakistan &amp; the GCC</h3>
                <p>We currently ship across Pakistan and the Gulf region.</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="reveal">
            <div className="form-card">
              {!sent ? (
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label>Full Name</label>
                    <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label>Phone or WhatsApp Number</label>
                    <input type="tel" name="phone" required placeholder="+92 3xx xxxxxxx" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label>Email (optional)</label>
                    <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea rows="4" name="message" required placeholder="How can we help you?" value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn-primary form-submit">Send Message</button>
                </form>
              ) : (
                <div className="form-success show">
                  <div style={{ fontSize: 44 }}>✅</div>
                  <h3 style={{ color: 'var(--forest)', marginTop: 12 }}>Message ready!</h3>
                  <p style={{ color: 'var(--ink-soft)', marginTop: 8, fontSize: 14 }}>
                    We&apos;ve opened WhatsApp for you to send this instantly. Once you connect a
                    backend, this can post directly to your email/CRM instead.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}