"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Users, CheckCircle } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".hero-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628]/95 to-[#0A1628]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C9A84C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-2xl" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuMSIgZD0iTTM2IDM0aDR2MWgtNHoiLz48cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIvPjwvZz48L3N2Zz4=')]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="hero-animate opacity-0 inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#C9A84C]" />
              <span className="text-xs uppercase tracking-wider text-[#C9A84C] font-semibold">
                Mais de 12 anos defendendo a justiça
              </span>
            </div>

            {/* Título Persuasivo */}
            <h1 className="hero-animate opacity-0 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Sua Defesa Criminal
              <br />
              <span className="text-[#C9A84C] relative">
                com Excelência e Estratégia
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#C9A84C]/20" 
                  viewBox="0 0 200 10" 
                  fill="none"
                >
                  <path 
                    d="M1 8.5C67 -1.5 133 -1.5 199 8.5" 
                    stroke="currentColor" 
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtítulo Persuasivo */}
            <p className="hero-animate opacity-0 text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
              Defesa estratégica em Direito Penal com mais de 500 casos bem-sucedidos. 
              <span className="text-white font-medium"> Dra. Isabella Mendes</span> atua 
              com compromisso, ética e excelência técnica para garantir seus direitos.
            </p>

            {/* Diferenciais */}
            <div className="hero-animate opacity-0 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm">Atendimento personalizado</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm">Estratégia jurídica avançada</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm">Sigilo absoluto</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
                <span className="text-sm">98% de taxa de sucesso</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-animate opacity-0 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0A1628] px-8 py-4 rounded-full font-semibold hover:bg-[#B8973A] transition-all duration-300 hover:scale-105 shadow-xl shadow-[#C9A84C]/25"
              >
                Agendar Consulta Gratuita
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/20 text-white hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
              >
                Conheça minha trajetória
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-animate opacity-0 flex flex-wrap gap-8 pt-8 mt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#C9A84C]" />
                <div>
                  <div className="text-white font-bold text-lg">12+</div>
                  <div className="text-white/50 text-sm">Anos de Experiência</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[#C9A84C]" />
                <div>
                  <div className="text-white font-bold text-lg">500+</div>
                  <div className="text-white/50 text-sm">Casos Defendidos</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#C9A84C]" />
                <div>
                  <div className="text-white font-bold text-lg">98%</div>
                  <div className="text-white/50 text-sm">Taxa de Sucesso</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="hero-animate opacity-0 relative">
              {/* Container da imagem com tamanho reduzido */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#C9A84C]/20 bg-[#0A1628] max-w-md mx-auto lg:max-w-full">
                <div className="relative w-full" style={{ aspectRatio: '600/548' }}>
                  <Image
                    src="/dra-isabella-mendes.jpg"
                    alt="Dra. Isabella Mendes - Advogada Criminalista"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                  {/* Borda dourada sutil */}
                  <div className="absolute inset-0 border border-[#C9A84C]/10 rounded-2xl pointer-events-none" />
                </div>
              </div>

              {/* Badge flutuante 1 */}
              <div className="absolute -top-4 -right-4 bg-[#0A1628] border border-[#C9A84C]/20 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white text-sm font-medium">Atendimento Online</span>
                </div>
              </div>

              {/* Badge flutuante 2 */}
              <div className="absolute -bottom-4 -left-4 bg-[#0A1628] border border-[#C9A84C]/20 rounded-xl px-4 py-3 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#C9A84C] text-lg font-bold">⭐</span>
                  <div>
                    <span className="text-white text-sm font-medium block">5.0</span>
                    <span className="text-white/50 text-xs">Avaliações</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 border-4 border-[#C9A84C]/10 rounded-full" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-24 h-24 border-4 border-[#C9A84C]/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#C9A84C] rounded-full" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}