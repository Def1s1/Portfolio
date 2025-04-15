"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MyStackSection() {
  const sectionRef = useRef(null);

  const techStack = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "JavaScript",
    "TypeScript",
    "HTML",
    "SCSS",
    "Git",
    "Vercel",
    "Figma"
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stack-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stack"
      ref={sectionRef}
      style={{
        padding: "2rem 1rem",
        maxWidth: "800px",
        margin: "0 auto",
        color: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>
        MY TECH STACK
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        {techStack.map((tech, index) => (
          <li
            key={tech}
            className="stack-item"
            style={{
              padding: "0.5rem 1rem",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(6px)",
            }}
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}
