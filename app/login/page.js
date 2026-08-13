'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push('/account');
  };

  return (
    <>
      <div className="pagehero" style={{ padding: '44px 0' }}>
        <div className="wrap"><h1 style={{ fontSize: 30 }}>Login</h1></div>
      </div>
      <section>
        <div className="wrap">
          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
              </div>
              {error && <p style={{ color: 'var(--turmeric)', fontSize: 13, marginBottom: 14 }}>{error}</p>}
              <button type="submit" className="btn-primary form-submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--ink-soft)', marginTop: 16 }}>
              Don&apos;t have an account? <Link href="/signup" style={{ color: 'var(--turmeric)', textDecoration: 'underline' }}>Sign up</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}