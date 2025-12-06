import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/");

  useEffect(() => {
    const onPath = () => setActive(window.location.pathname || "/");
    onPath();
    window.addEventListener("popstate", onPath);
    return () => window.removeEventListener("popstate", onPath);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/95 border-b border-[#1F2937] backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* LOGO */}
        <a
          href="/"
          className="text-2xl font-bold tracking-widest bg-gradient-to-r from-[#FACC15] to-[#FB7185] bg-clip-text text-transparent"
        >
          SANKET
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
        >
          <span
            className="block w-6 h-[2px] bg-white relative
          before:content-[''] before:absolute before:-top-2 before:w-6 before:h-[2px] before:bg-white
          after:content-[''] after:absolute after:top-2 after:w-6 after:h-[2px] after:bg-white"
          ></span>
        </button>

        {/* DESKTOP LINKS + RESUME */}
        <div className="hidden md:flex items-center gap-10">

          {/* LINKS */}
          <nav className="flex gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`text-base font-semibold tracking-widest transition-all duration-300 
              ${
                active === link.href
                  ? "text-[#FACC15]"
                  : "text-[#9CA3AF] hover:text-white"
              }
              `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RESUME DOWNLOAD BUTTON */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-full
            bg-gradient-to-r from-[#FACC15] to-[#FB7185]
            text-black font-semibold hover:scale-105 transition-all"
          >
            <Download size={18} />
            Resume
          </a>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden absolute right-6 top-20 w-60 bg-[#0B0F19] border border-[#1F2937] rounded-xl px-4 py-5 shadow-xl transition-all duration-300
          ${open ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"}`}
        >
          <nav className="flex flex-col gap-5">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setOpen(false);
                }}
                className={`text-base font-semibold tracking-widest transition
                ${
                  active === link.href
                    ? "text-[#FACC15]"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* MOBILE RESUME BUTTON */}
            <a
              href="/resume.pdf"
              download
              className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
              bg-gradient-to-r from-[#FACC15] to-[#FB7185]
              text-black font-semibold"
            >
              <Download size={18} />
              Resume
            </a>

          </nav>
        </div>

      </div>
    </header>
  );
}
