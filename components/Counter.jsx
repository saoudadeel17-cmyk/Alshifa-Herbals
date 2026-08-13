'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter({ target }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const runCount = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      let cur = 0;
      const step = Math.max(1, Math.round(target / 60));
      const tick = () => {
        cur += step;
        if (cur >= target) {
          setValue(target);
          return;
        }
        setValue(cur);
        requestAnimationFrame(tick);
      };
      tick();
    };

    // Fallback: if the element is already visible when it mounts
    // (e.g. on smaller screens / short pages), start immediately
    // instead of waiting for a scroll-triggered intersection.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      runCount();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCount();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <b ref={ref}>{value.toLocaleString()}</b>;
}