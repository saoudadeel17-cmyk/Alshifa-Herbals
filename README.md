# Alshifa Herbals — Next.js Website

Full Next.js (App Router) conversion of the static site.

## Run in Cursor (or any terminal)

1. Open this folder in Cursor.
2. Open a terminal (Terminal → New Terminal) and run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000 in your browser.

## Project structure
```
app/
  layout.js          -> wraps every page with Header, Footer, CartProvider
  page.js             -> Home
  product/page.js     -> Product detail (hotspots, qty selector)
  cart/page.js         -> Cart (add/remove/qty, localStorage-backed)
  about/page.js        -> About Us (animated counters)
  contact/page.js      -> Contact (form -> opens WhatsApp)
  track-order/page.js  -> Order tracking UI (demo timeline)
  globals.css          -> all site styling (same design as before)
components/
  Header.jsx   Footer.jsx   Reveal.jsx (scroll animations)   Counter.jsx
context/
  CartContext.jsx  -> cart state, synced to localStorage
data/
  products.js  -> product catalog (add new products here later)
public/assets/
  logo.png, poster1.png, poster2.png, poster3.png
```

## Still to do before this goes live
- **Payment gateway**: the "Proceed to Checkout" button in `app/cart/page.js` currently
  just shows an alert. Replace it with a real checkout flow once you have a payment
  gateway (PayFast/PayTabs/etc.) merchant account.
- **Real order tracking**: `app/track-order/page.js` is a UI demo. Real tracking needs a
  backend + database that stores actual orders, and an API route this page can call.
- **More products**: add new entries to `data/products.js` and duplicate the pattern in
  `app/product/page.js` once you have more than one product (or make it dynamic with
  `app/product/[id]/page.js`).

## Build for production
```
npm run build
npm start
```
