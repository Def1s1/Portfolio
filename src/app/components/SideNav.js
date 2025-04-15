'use client'; 

import { useState } from 'react';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Burger Button */}
      <button
        className="fixed top-6 right-6 z-50 flex flex-col justify-between w-7 h-6 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${
            open ? 'rotate-45 translate-y-[10px]' : ''
          }`}
        />
        <span
          className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${
            open ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${
            open ? '-rotate-45 -translate-y-[10px]' : ''
          }`}
        />
      </button>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a0a0a] text-white z-40 p-10 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6 text-xl">
          <a href="#" className="hover:text-[#00FF6C] transition">Home</a>
          <a href="#" className="hover:text-[#00FF6C] transition">About</a>
          <a href="#" className="hover:text-[#00FF6C] transition">Projects</a>
          <a href="#" className="hover:text-[#00FF6C] transition">Contact</a>
        </nav>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
