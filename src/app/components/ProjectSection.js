"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const sectionRef = useRef(null);

  const projects = [
    {
      name: "SmartBudget - ios/anroid app",
      stack: ["React Native", "Expo", "Tailwind CSS"],
      image: "/projects/epikcart.png",
    },
    {
      name: "Freelink",
      stack: ["Supabase", "Next.js", "Tailwind CSS"],
      image: "/projects/resume-roaster.png",
    },
    {
      name: "Real Estate",
      stack: ["React.js", "Redux", "Tailwind CSS"],
      image: "/projects/real-estate.png",
    },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Selected Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="project-card group relative p-6 rounded-lg border border-white/10 hover:border-white/30 bg-[#111111] transition"
            >
              {/* Hover Preview */}
              <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none z-10">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-48 rounded-md shadow-xl border border-white/10"
                />
              </div>

              <div className="text-sm text-white/40 mb-1">
                .{String(index + 1).padStart(2, "0")}.
              </div>

              <h3 className="text-xl font-semibold text-[#00FF6C] mb-2 group-hover:underline transition">
                {project.name}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {project.stack.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
