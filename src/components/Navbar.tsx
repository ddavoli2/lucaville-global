"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/partners", label: "Partners" },
  { href: "/strategic-advisory", label: "Advisory" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="relative z-[60]">
              <Image
                src="/images/lucaville-logo-trimmed.png"
                alt="Lucaville Global"
                width={677}
                height={329}
                className="h-10 w-auto object-contain brightness-125"
                priority
                unoptimized
              />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-[60] text-foreground/70 text-[13px] tracking-[0.25em] uppercase hover:text-gold transition-colors duration-300"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[55] bg-background/98 backdrop-blur-2xl flex items-center"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground/30 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 flex items-center gap-6"
              >
                <a
                  href="https://www.linkedin.com/company/lucaville-global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-gold transition-colors text-sm tracking-wide"
                >
                  LinkedIn
                </a>
                <span className="w-1 h-1 rounded-full bg-muted/30" />
                <a
                  href="https://www.instagram.com/lucavilleglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-gold transition-colors text-sm tracking-wide"
                >
                  Instagram
                </a>
                <span className="w-1 h-1 rounded-full bg-muted/30" />
                <span className="text-muted/40 text-sm">
                  info@lucavilleglobal.com
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
