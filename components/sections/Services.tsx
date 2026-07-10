"use client";

import { useEffect, useRef } from "react";
import { 
  Shield, 
  Scale, 
  BookOpen, 
  Users, 
  Building, 
  FileText 
} from "lucide-react";
import { useScreenshot } from "@/context/ScreenshotContext";

const services = [
  {
    icon: Shield,
    title: "Defesa Criminal",
    description: "Defesa em processos criminais em todas as instâncias, garantindo o devido processo legal e a ampla defesa.",
  },
  {
    icon: Scale,
    title: "Direito Penal Econômico",
    description: "Atuação em crimes contra o sistema financeiro, lavagem de dinheiro e crimes tributários.",
  },
  {
    icon: BookOpen,
    title: "Direito Penal Empresarial",
    description: "Consultoria e defesa de empresas e executivos em questões criminais corporativas.",
  },
  {
    icon: Users,
    title: "Defesa em Júri",
    description: "Atuação especializada em tribunais do júri, com preparação estratégica e oratória persuasiva.",
  },
  {
    icon: Building,
    title: "Direito Penitenciário",
    description: "Acompanhamento e defesa em execuções penais, buscando a ressocialização e direitos do apenado.",
  },
  {
    icon: FileText,
    title: "Consultoria Jurídica",
    description: "Análise preventiva de riscos criminais e compliance para pessoas físicas e jurídicas.",
  },
];

export default function Services() {
  const { isScreenshotMode } = useScreenshot();
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

    const elements = sectionRef.current?.querySelectorAll(".service-card");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isScreenshotMode]);

  return (
    <section id="areas" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`${isScreenshotMode ? '' : 'service-card opacity-0'} inline-block text-[#C9A84C] font-semibold text-sm uppercase tracking-[0.2em] mb-4`}>
            Áreas de Atuação
          </span>
          <h2 className={`${isScreenshotMode ? '' : 'service-card opacity-0'} font-serif text-4xl md:text-5xl font-bold text-[#0A1628] mb-6`}>
            Especialidades Jurídicas
          </h2>
          <div className={`${isScreenshotMode ? '' : 'service-card opacity-0'} w-24 h-1 bg-[#C9A84C] mx-auto mb-6`} />
          <p className={`${isScreenshotMode ? '' : 'service-card opacity-0'} text-[#0A1628]/70 leading-relaxed`}>
            Atuação estratégica e personalizada nas mais diversas áreas do Direito Penal,
            sempre com excelência técnica e compromisso com a justiça.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${isScreenshotMode ? '' : 'service-card opacity-0'} group relative p-8 bg-[#0A1628] rounded-2xl hover:shadow-2xl hover:shadow-[#C9A84C]/10 transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-[#C9A84C]/20`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A84C]/0 via-[#C9A84C]/0 to-[#C9A84C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-[#C9A84C]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="absolute bottom-8 right-8 w-16 h-[2px] bg-[#C9A84C]/20 group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}