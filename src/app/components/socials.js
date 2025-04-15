'use client';

import { Github, Linkedin } from 'lucide-react';

export default function Socials() {
  return (
    <div className="fixed left-6 bottom-6 flex flex-col items-center gap-6 z-50">
      <a
        href="https://github.com/Def1s1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#00FF6C] transition"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/anton-ivakhiv-ab2b4429a/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-[#00FF6C] transition"
      >
        <Linkedin size={24} />
      </a>
      <div className="w-[1px] h-24 bg-white/30 mt-2" />
    </div>
  );
}
