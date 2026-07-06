import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#B8973A] transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Voltar para o site
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
          <Scale className="w-12 h-12 text-[#C9A84C]" />
          <div>
            <h1 className="font-serif text-4xl font-bold text-white">
              Termos de Uso
            </h1>
            <p className="text-white/40 text-sm mt-2">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar este site, você concorda com estes Termos de Uso. Se não 
              concordar, por favor, não utilize nossos serviços. Reservamo-nos o 
              direito de atualizar estes termos a qualquer momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              2. Isenção de Responsabilidade
            </h2>
            <p>
              As informações contidas neste site têm caráter meramente informativo 
              e não constituem aconselhamento jurídico. Para orientação específica 
              sobre seu caso, agende uma consulta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos e 
              design, é protegido por direitos autorais e propriedade intelectual. 
              Não é permitida a reprodução sem autorização expressa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              4. Confidencialidade
            </h2>
            <p>
              O contato através deste site não estabelece relação advocatícia. 
              Todas as comunicações são tratadas com sigilo profissional, mas 
              não garantimos confidencialidade absoluta até a formalização do 
              contrato de prestação de serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              5. Links Externos
            </h2>
            <p>
              Este site pode conter links para sites externos. Não nos 
              responsabilizamos pelo conteúdo ou práticas de privacidade 
              desses sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              6. Legislação Aplicável
            </h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. 
              Qualquer disputa será resolvida no foro da comarca de Brasília/DF.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              7. Contato
            </h2>
            <p>
              Dúvidas sobre estes termos? Entre em contato:
            </p>
            <ul className="mt-2 space-y-1">
              <li>E-mail: contato@isabellamendes.adv.br</li>
              <li>Telefone: (61) 99999-9999</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}