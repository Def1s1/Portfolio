'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function IntroOverlay({ onComplete }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete(); // optional callback
      },
    });

    tl.to(overlayRef.current, {
      y: '-100%',
      duration: 1.2,
      ease: 'power4.inOut',
      delay: 0.5,
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-screen bg-[#0a0a0a] z-[9999] flex items-center justify-center"
    >
      <h1 className="text-white text-3xl md:text-5xl font-bold tracking-widest">
        WELCOME
      </h1>
    </div>
  );
}
