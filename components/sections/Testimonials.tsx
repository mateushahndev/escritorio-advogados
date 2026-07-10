"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useScreenshot } from "@/context/ScreenshotContext";

const testimonials = [
  {
    name: "João Silva",
    role: "Empresário",
    content: "Profissional excepcional! A Dra. Isabella conduziu meu caso com maestria e conseguiu um resultado que eu nem imaginava ser possível. Recomendo fortemente.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Maria Santos",
    role: "Advogada",
    content: "Uma das melhores criminalistas que já conheci. Sua dedicação e conhecimento técnico são impressionantes. Sempre atualizada e comprometida com a justiça.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Carlos Oliveira",
    role: "Médico",
    content: "Fui absolvido graças ao trabalho incansável da Dra. Isabella. Sua abordagem estratégica e humanizada fez toda a diferença no meu caso.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const { isScreenshotMode } = useScreenshot();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isScreenshotMode) return;

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

    const elements = sectionRef.current?.querySelectorAll(".testimonial-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isScreenshotMode]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" ref={sectionRef} className="py-24 bg-[#0A1628] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`${isScreenshotMode ? '' : 'testimonial-animate opacity-0'} inline-block text-[#C9A84C] font-semibold text-sm uppercase tracking-[0.2em] mb-4`}>
            Depoimentos
          </span>
          <h2 className={`${isScreenshotMode ? '' : 'testimonial-animate opacity-0'} font-serif text-4xl md:text-5xl font-bold text-white mb-6`}>
            O que meus clientes dizem
          </h2>
          <div className={`${isScreenshotMode ? '' : 'testimonial-animate opacity-0'} w-24 h-1 bg-[#C9A84C] mx-auto`} />
        </div>

        {/* Testimonial Card */}
        <div className={`max-w-4xl mx-auto ${isScreenshotMode ? '' : 'testimonial-animate opacity-0'}`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#C9A84C] shadow-lg shadow-[#C9A84C]/20">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    quality={75}
                    loading="lazy"
                    sizes="96px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                <div>
                  <p className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#C9A84C] text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-white/20 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300 group"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6 text-white/60 group-hover:text-[#C9A84C]" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full border border-white/20 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300 group"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6 text-white/60 group-hover:text-[#C9A84C]" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#C9A84C]"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}