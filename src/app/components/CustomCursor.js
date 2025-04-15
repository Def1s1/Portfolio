'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function CustomCursor() {
  const svgRef = useRef(null);

  useGSAP(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      if (!svgRef.current) return;

      const { clientX, clientY } = e;

      gsap.to(svgRef.current, {
        x: clientX,
        y: clientY,
        ease: 'power2.out',
        duration: 0.2,
        opacity: 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="27"
      height="30"
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        transform: 'translate(-50%, -50%)',
        opacity: 0,
      }}
    >
      <path
        d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
        fill="#00FF6C"
        stroke="#ffffff33"
        strokeWidth="1.5"
      />
    </svg>
  );
}
