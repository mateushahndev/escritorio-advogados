"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de Atuação" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Scale className="w-8 h-8 text-[#C9A84C] transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-white">
                Isabella Mendes
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C]">
                Advocacia Criminal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-[#C9A84C] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#contato"
              className="bg-[#C9A84C] text-[#0A1628] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#B8973A] transition-all duration-300 hover:scale-105 shadow-lg shadow-[#C9A84C]/20"
            >
              Fale Comigo
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:text-[#C9A84C] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-[#C9A84C] transition-colors text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contato"
                className="bg-[#C9A84C] text-[#0A1628] px-6 py-3 rounded-full text-sm font-semibold text-center hover:bg-[#B8973A] transition-all duration-300 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fale Comigo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}