"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Scale, BookOpen, Users, Target } from "lucide-react";

const stats = [
  { icon: Scale, label: "Casos Defendidos", value: "500+" },
  { icon: BookOpen, label: "Publicações", value: "15" },
  { icon: Users, label: "Clientes", value: "350+" },
  { icon: Target, label: "Taxa de Sucesso", value: "98%" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Remove o observer de animação
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("animate-fade-in-up");
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );
  //
  //   const elements = sectionRef.current?.querySelectorAll(".about-animate");
  //   elements?.forEach((el) => observer.observe(el));
  //
  //   return () => observer.disconnect();
  // }, []);

  return (
    <section id="sobre" ref={sectionRef} className="py-24 bg-[#0A1628] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-[#C9A84C]/10">
              <Image
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dra. Isabella Mendes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-[#C9A84C]/20 rounded-2xl z-[-1]" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#C9A84C]/20 rounded-full z-[-1]" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-[#C9A84C] font-semibold text-sm uppercase tracking-[0.2em]">
                Sobre Mim
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
                Defendendo seus Direitos
                <br />
                <span className="text-[#C9A84C]">com Dedicação</span>
              </h2>
            </div>

            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Sou a <strong className="text-white">Dra. Isabella Mendes</strong>, advogada criminalista 
                com mais de 12 anos de experiência dedicados à defesa dos direitos 
                fundamentais e à justiça criminal.
              </p>
              <p>
                Especialista em <strong className="text-white">Direito Penal Econômico</strong> e 
                <strong className="text-white"> Defesa Criminal</strong>, atuo com excelência técnica e 
                compromisso ético, oferecendo uma defesa estratégica e personalizada 
                para cada cliente.
              </p>
              <p>
                Minha atuação é pautada na transparência, no diálogo constante e na 
                busca incansável pela melhor solução para cada caso, sempre com 
                respeito à dignidade da pessoa humana.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#C9A84C]/30 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-[#C9A84C] mb-2" />
                  <div className="text-white font-bold text-2xl">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="w-16 h-[2px] bg-[#C9A84C] mb-3" />
              <p className="text-white/50 text-sm font-serif italic">
                "A justiça é a virtude de dar a cada um o que é seu."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}