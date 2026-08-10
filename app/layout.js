import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Alshifa Herbals — Nature's Power for Your Wellness",
  description:
    'Hepaliv Herbal Powder — a premium herbal formula to support liver wellness, digestion, metabolism & overall health.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}