"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(61) 99999-9999",
    href: "tel:+5561999999999",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@isabellamendes.adv.br",
    href: "mailto:contato@isabellamendes.adv.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "SBS, Quadra 1, Bloco K, Sala 1001 - Brasília/DF",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Atendimento",
    value: "Segunda a Sexta, 9h às 18h",
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
  //   const elements = sectionRef.current?.querySelectorAll(".contact-animate");
  //   elements?.forEach((el) => observer.observe(el));
  //
  //   return () => observer.disconnect();
  // }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá Dra. Isabella, gostaria de agendar uma consulta."
    );
    window.open(`https://wa.me/5561999999999?text=${message}`, "_blank");
  };

  return (
    <section id="contato" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#C9A84C] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Contato
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">
            Vamos Conversar
          </h2>
          <div className="w-24 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-[#0A1628]/70 leading-relaxed">
            Entre em contato para uma consulta confidencial. Estou aqui para 
            defender seus direitos com excelência e dedicação.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0A1628] rounded-xl p-6 hover:shadow-xl hover:shadow-[#C9A84C]/10 transition-all duration-300 group border border-white/5 hover:border-[#C9A84C]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm uppercase tracking-wider">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-[#C9A84C] transition-colors duration-300 font-medium"
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            <div>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20B85E] text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#25D366]/20 group"
              >
                <MessageCircle className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Fale pelo WhatsApp
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-[#0A1628] rounded-2xl p-8 border border-white/5">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                Envie uma Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-white/60 text-sm">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#C9A84C] focus:ring-[#C9A84C]/20 transition-colors"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-white/60 text-sm">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#C9A84C] focus:ring-[#C9A84C]/20 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white/60 text-sm">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(61) 99999-9999"
                      className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#C9A84C] focus:ring-[#C9A84C]/20 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white/60 text-sm">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente seu caso..."
                    className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#C9A84C] focus:ring-[#C9A84C]/20 transition-colors min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className="w-full bg-[#C9A84C] hover:bg-[#B8973A] text-[#0A1628] font-semibold py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#C9A84C]/20 group relative"
                >
                  {isLoading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-[#0A1628] border-t-transparent rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Mensagem Enviada!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                <p className="text-white/30 text-xs text-center">
                  Ao enviar, você concorda com nossa{" "}
                  <a href="/politicas" className="text-[#C9A84C] hover:underline">
                    Política de Privacidade
                  </a>
                  {" "}e{" "}
                  <a href="/termos" className="text-[#C9A84C] hover:underline">
                    Termos de Uso
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}