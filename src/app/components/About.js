'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-heading", {
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4">
          {/* Vertical Line Accent */}
          <div className="w-[3px] h-32 bg-[#00FF6C] rounded-full mt-1 hidden md:block" />

          <div>
            <h2 className="about-heading text-3xl md:text-5xl font-bold mb-6 text-white">
              About Me
            </h2>

            <p className="about-text text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
              I’m a creative frontend developer focused on building modern, responsive web apps that feel smooth and intuitive. <br /><br />
              I love using frameworks like <span className="text-[#00FF6C] font-medium">React</span> and <span className="text-[#00FF6C] font-medium">Next.js</span> to turn clean designs into functional user experiences. Whether it's an animated landing page or a full-blown dashboard — I’m all about performance, pixel-perfection, and polish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
