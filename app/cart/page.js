'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, changeQty, subtotal } = useCart();
  const shipping = subtotal >= 3000 || subtotal === 0 ? 0 : 250;
  const total = subtotal + shipping;

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
                <div className="row total"><span>Total</span><span>Rs {total}/-</span></div>
                <button
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 18 }}
                  onClick={() =>
                    alert('Checkout: connect this button to your payment gateway (Card / COD / Bank Transfer / Wallets).')
                  }
                >
                  Proceed to Checkout
                </button>
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
