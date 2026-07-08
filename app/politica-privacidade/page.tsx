import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export default function PoliticasPage() {
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
              Política de Privacidade
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
              1. Coleta de Dados
            </h2>
            <p>
              Coletamos informações pessoais como nome, e-mail, telefone e mensagens 
              enviadas através do formulário de contato para atendimento jurídico. 
              Todos os dados são tratados com confidencialidade absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              2. Uso das Informações
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Atendimento e resposta a consultas jurídicas</li>
              <li>Agendamento de consultas presenciais ou virtuais</li>
              <li>Envio de informações relevantes sobre processos</li>
              <li>Cumprimento de obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              3. Segurança dos Dados
            </h2>
            <p>
              Utilizamos medidas de segurança técnicas e organizacionais para proteger 
              suas informações contra acesso não autorizado, alteração, divulgação ou 
              destruição. Seus dados são armazenados em servidores seguros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              4. Seus Direitos
            </h2>
            <p>
              Você tem direito a acessar, corrigir ou solicitar a exclusão de seus 
              dados pessoais a qualquer momento. Para exercer esses direitos, entre 
              em contato através do nosso formulário ou WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              5. Cookies
            </h2>
            <p>
              Utilizamos cookies apenas para melhorar sua experiência de navegação. 
              Você pode gerenciar suas preferências de cookies nas configurações do 
              seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              6. Contato
            </h2>
            <p>
              Para questões relacionadas à privacidade, entre em contato:
            </p>
            <ul className="mt-2 space-y-1">
              <li>E-mail: privacidade@isabellamendes.adv.br</li>
              <li>Telefone: (11) 11111-1111</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}