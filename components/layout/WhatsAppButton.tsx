"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Esconde o botão quando scrolla para baixo, mostra quando scrolla para cima
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá Dra. Isabella, gostaria de agendar uma consulta."
    );
    window.open(`https://wa.me/5561999999999?text=${message}`, "_blank");
  };

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <button
        onClick={handleWhatsApp}
        className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20B85E] shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110"
        aria-label="Fale pelo WhatsApp"
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        
        {/* Ícone */}
        <MessageCircle className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-2 bg-[#0A1628] text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale comigo agora
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-[#0A1628]" />
        </span>
      </button>
    </div>
  );
}