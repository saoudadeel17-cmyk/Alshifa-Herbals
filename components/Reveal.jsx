'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Wrap any block in <Reveal> to fade/slide it in on scroll.
 * Pass className="reveal-stagger" to stagger the animation of direct children
 * (uses the nth-child delays already defined in globals.css).
 */
export default function Reveal({ children, className = 'reveal', as: Tag = 'div', style }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${className} ${inView ? 'in-view' : ''}`} style={style}>
      {children}
    </Tag>
  );
}
