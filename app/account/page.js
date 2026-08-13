'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <section>
        <div className="wrap"><p style={{ textAlign: 'center', padding: '60px 0' }}>Loading...</p></div>
      </section>
    );
  }

  return (
    <>
      <div className="pagehero" style={{ padding: '44px 0' }}>
        <div className="wrap"><h1 style={{ fontSize: 30 }}>My Account</h1></div>
      </div>
      <section>
        <div className="wrap" style={{ maxWidth: 500 }}>
          <div className="form-card">
            <p style={{ fontSize: 14, color: 'var(--ink-soft)' }}>Logged in as</p>
            <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: 16, marginBottom: 20 }}>{user.email}</p>

            <button
              className="btn-ghost"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={async () => {
                await signOut();
                router.push('/');
              }}
            >
              Log Out
            </button>
          </div>
        </div>
      </section>
    </>
  );
}