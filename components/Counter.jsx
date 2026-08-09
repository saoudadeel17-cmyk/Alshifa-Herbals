'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter({ target }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
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
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <b ref={ref}>{value.toLocaleString()}</b>;
}
