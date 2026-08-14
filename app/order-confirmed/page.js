'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function OrderConfirmedContent() {
  const params = useSearchParams();
  const id = params.get('id');

  return (
    <div className="wrap" style={{ maxWidth: 500, textAlign: 'center', padding: '80px 0' }}>
      <div style={{ fontSize: 56 }}>✅</div>
      <h1 style={{ color: 'var(--forest)', marginTop: 16, fontSize: 28 }}>Order Placed!</h1>
      {id && (
        <p style={{ color: 'var(--ink-soft)', marginTop: 10 }}>
          Your order number is <strong style={{ color: 'var(--turmeric)' }}>#{id}</strong>
        </p>
      )}
      <p style={{ color: 'var(--ink-soft)', marginTop: 10, fontSize: 14, lineHeight: 1.6 }}>
        We&apos;ll contact you shortly to confirm delivery details. If you paid via JazzCash,
        Easypaisa or Bank Transfer, please make sure you&apos;ve sent your payment screenshot on
        WhatsApp so we can confirm it faster.
      </p>
      <Link href="/" className="btn-primary" style={{ marginTop: 26, display: 'inline-flex' }}>
        Back to Home
      </Link>
    </div>
  );
}

export default function OrderConfirmedPage() {
  return (
    <section>
      <Suspense fallback={<div className="wrap" style={{ textAlign: 'center', padding: '80px 0' }}>Loading...</div>}>
        <OrderConfirmedContent />
      </Suspense>
    </section>
  );
}