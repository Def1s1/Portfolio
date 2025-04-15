"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;

    // Начальная анимация при загрузке
    gsap.fromTo(
      btn,
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
        delay: 0.4,
      }
    );

    // Пульсирующий эффект свечения (бесконечно)
    gsap.to(btn, {
      boxShadow: "0 0 15px rgba(0,255,108,0.3)",
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
    });

    // Наведение — glow & прыжок
    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(btn, {
      background: "linear-gradient(90deg, #00FF6C, #00FFA3)",
      color: "#0a0a0a",
      scale: 1.05,
      boxShadow: "0 0 35px rgba(0,255,150,0.6)",
      duration: 0.3,
      ease: "power1.out",
    });

    const handleEnter = () => hoverTl.play();
    const handleLeave = () => hoverTl.reverse();

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-start bg-[#0a0a0a] text-white px-6 md:px-12">
      <div className="max-w-[600px]">
        {/* Heading */}
        <h1 className="text-[42px] sm:text-[64px] md:text-[80px] leading-[1.05] font-extrabold tracking-tight font-anton mb-6">
          <span className="block text-[#00FF6C]">FRONTEND</span>
          <span className="block text-white ml-6 sm:ml-10 -mt-2">DEVELOPER</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg font-robotoFlex text-white/80 leading-relaxed mb-8">
          Hi! I'm <span className="font-bold text-white">Anton</span>, a creative Frontend Developer with 2 years of
          experience in building high-performance, scalable, and responsive web solutions.
        </p>

        {/* Button with gsap */}
        <a
          ref={buttonRef}
          href="mailto:solution.b1214@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 text-white font-semibold text-sm sm:text-base backdrop-blur-md bg-white/5 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,108,0.15)] cursor-pointer"
        >
          Let's work together
        </a>
      </div>

      {/* Sidebar Stats */}
      <div className="z-10 md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right text-[#00FF6C] text-lg font-semibold">
        {[{ num: "2+", label: "Years of Experience" }, { num: "3+", label: "Completed Projects" }, { num: "1K+", label: "Hours Worked" }].map(({ num, label }) => (
          <div key={label} className="p-2 rounded border border-[#00FF6C]/30 backdrop-blur-sm hover:scale-105 transition">
            <p>{num}</p>
            <p className="text-sm text-white/70">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
