'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { formatDualPrice } from '@/data/currency';
import { supabase } from '@/lib/supabaseClient';

export default function CartPage() {
  const { cart, removeFromCart, changeQty, subtotal, clearCart } = useCart();
  const router = useRouter();
  const shipping = subtotal >= 3000 || subtotal === 0 ? 0 : 250;
  const total = subtotal + shipping;

  const [showForm, setShowForm] = useState(false);
  const [placing, setPlacing] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setPlacing(true);
    const { data, error } = await supabase
      .from('orders')
      .insert({
        customer_name: form.name,
        phone: form.phone,
        address: form.address,
        items: cart,
        total,
        status: 'placed',
      })
      .select()
      .single();
    setPlacing(false);

    if (error) {
      alert('Something went wrong placing your order. Please try again or order via WhatsApp.');
      return;
    }

    clearCart();
    router.push(`/order-confirmed?id=${data.id}`);
  };

  return (
    <>
      <div className="pagehero" style={{ padding: '44px 0' }}>
        <div className="wrap"><h1 style={{ fontSize: 30 }}>Your Cart</h1></div>
      </div>

      <section>
        <div className="wrap">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="ic">🛒</div>
              <h2 style={{ color: 'var(--forest)' }}>Your cart is empty</h2>
              <p style={{ color: 'var(--ink-soft)', margin: '10px 0 26px' }}>
                Add Hepaliv to your cart to get started.
              </p>
              <Link href="/product" className="btn-primary">Shop Hepaliv</Link>
            </div>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr><th>Product</th><th>Quantity</th><th>Subtotal</th><th /></tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="cart-item-info">
                          <Image src={item.img} alt={item.name} width={64} height={64} style={{ borderRadius: 12, objectFit: 'cover' }} />
                          <div>
                            <div style={{ fontWeight: 600, color: 'var(--forest)' }}>{item.name}</div>
                            <div style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>Rs {item.price}/- each</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="qty-box">
                          <button onClick={() => changeQty(item.id, -1)}>−</button>
                          <span>{item.qty}</span>
                          <button onClick={() => changeQty(item.id, 1)}>+</button>
                        </div>
                      </td>
                      <td style={{ fontWeight: 600 }}>Rs {item.price * item.qty}/-</td>
                      <td>
                        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="cart-summary" style={{ marginTop: 34 }}>
                <div className="row"><span>Subtotal</span><span>Rs {subtotal}/-</span></div>
                <div className="row"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `Rs ${shipping}/-`}</span></div>
                <div className="row total"><span>Total</span><span>Rs {total}/- <span style={{ fontSize: 13, opacity: 0.7 }}>(~{formatDualPrice(total).sar} SAR)</span></span></div>
                <p style={{ fontSize: 12, color: 'var(--ink-soft)', textAlign: 'center', marginTop: 14, marginBottom: 4 }}>
                  Currently accepting <strong>Cash on Delivery</strong>. Online card payment coming soon.
                </p>

                {!showForm ? (
                  <button
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
                    onClick={() => setShowForm(true)}
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <form onSubmit={handlePlaceOrder} style={{ marginTop: 16 }}>
                    <div className="field">
                      <label>Full Name</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
                    </div>
                    <div className="field">
                      <label>Phone Number</label>
                      <input name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+92 3xx xxxxxxx" />
                    </div>
                    <div className="field">
                      <label>Delivery Address</label>
                      <textarea name="address" rows="3" required value={form.address} onChange={handleChange} placeholder="House, street, city" />
                    </div>
                    <button type="submit" className="btn-primary form-submit" disabled={placing}>
                      {placing ? 'Placing order...' : `Place Order (Rs ${total}/- COD)`}
                    </button>
                  </form>
                )}

                <a
                  href="https://wa.me/966573859529"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}
                >
                  Order via WhatsApp Instead
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}