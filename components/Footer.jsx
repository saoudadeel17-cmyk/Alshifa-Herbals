import Link from 'next/link';
import Image from 'next/image';
import Disclaimer from './Disclaimer';

export default function Footer() {
  return (
    <>
      <Disclaimer />
      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div>
              <div className="fbrand">
                <Image src="/assets/logo.png" alt="logo" width={40} height={40} style={{ borderRadius: '50%' }} />
                <span>Alshifa Herbals</span>
              </div>
              <p className="fdesc">
                Healing with the power of nature. Pure, natural and trusted herbal wellness — made
                for the whole family.
              </p>
              {/* TODO: replace # with your real social media links */}
              <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
                <a href="#" aria-label="Facebook" style={{ color: 'var(--gold-soft)', fontSize: 18 }}>Facebook</a>
                <a href="#" aria-label="Instagram" style={{ color: 'var(--gold-soft)', fontSize: 18 }}>Instagram</a>
              </div>
            </div>
            <div>
              <h4>Shop</h4>
              <ul>
                <li><Link href="/product">Hepaliv Herbal Powder</Link></li>
                <li><Link href="/cart">View Cart</Link></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h4>Reach Us</h4>
              <ul>
                <li>WhatsApp: +966 57 385 9529</li>
                {/* TODO: add your real email address here */}
                <li>Email: info@alshifaherbals.com</li>
                <li>Ships to Pakistan &amp; GCC</li>
                <li>Mon–Sat, 10am–8pm</li>
              </ul>
            </div>
          </div>
          <div className="fbottom">
            <span>© 2026 Alshifa Herbals. All rights reserved.</span>
            <span>Privacy Policy · Terms · Refund Policy</span>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/966573859529"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fab"
        title="Order on WhatsApp"
      >
        ✆
      </a>
    </>
  );
}