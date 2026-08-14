'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function SignupPage() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await signUp(email, password);
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setDone(true);
  };

  return (
    <>
      <div className="pagehero" style={{ padding: '44px 0' }}>
        <div className="wrap"><h1 style={{ fontSize: 30 }}>Create Account</h1></div>
      </div>
      <section>
        <div className="wrap">
          <div className="form-card">
            {done ? (
              <div className="form-success show">
                <div style={{ fontSize: 44 }}>✅</div>
                <h3 style={{ color: 'var(--forest)', marginTop: 12 }}>Check your email</h3>
                <p style={{ color: 'var(--ink-soft)', marginTop: 8, fontSize: 14 }}>
                  We&apos;ve sent a confirmation link to {email}. Confirm it, then log in.
                </p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 6 characters" />
                  </div>
                  {error && <p style={{ color: 'var(--turmeric)', fontSize: 13, marginBottom: 14 }}>{error}</p>}
                  <button type="submit" className="btn-primary form-submit" disabled={loading}>
                    {loading ? 'Creating account...' : 'Sign Up'}
                  </button>
                </form>
                <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--ink-soft)', marginTop: 16 }}>
                  Already have an account? <Link href="/login" style={{ color: 'var(--turmeric)', textDecoration: 'underline' }}>Login</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}