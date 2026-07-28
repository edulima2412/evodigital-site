import { useState } from "react";
import Modal from "@/shared/components/ui/Modal";

interface LegalContent {
    title: string;
    sections: Array<{
        heading: string;
        content: string | string[];
    }>;
}

const privacyPolicyContent: LegalContent = {
    title: "Política de Privacidade",
    sections: [
        {
            heading: "1. Introdução",
            content:
                "A EvoDigital (\"nós\", \"nosso\" ou \"nos\") respeita a privacidade de nossos usuários (\"usuário\" ou \"você\"). Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso site.",
        },
        {
            heading: "2. Informações que Coletamos",
            content: [
                "Coletamos informações que você nos fornece voluntariamente quando:",
                "Preenche formulários no site (nome, email, telefone, mensagem)",
                "Entra em contato conosco para solicitar um orçamento",
                "Nos fornece feedback ou comentários",
            ],
        },
        {
            heading: "3. Como Usamos Suas Informações",
            content: [
                "Utilizamos as informações coletadas para:",
                "Responder às suas solicitações e consultas",
                "Enviar propostas e orçamentos",
                "Melhorar nossa experiência de usuário",
                "Cumprir obrigações legais",
                "Comunicações de marketing (com seu consentimento)",
            ],
        },
        {
            heading: "4. Compartilhamento de Informações",
            content:
                "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros sem seu consentimento, exceto quando exigido por lei.",
        },
        {
            heading: "5. Segurança de Dados",
            content:
                "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.",
        },
        {
            heading: "6. Cookies",
            content:
                "Nossa website pode usar cookies para melhorar sua experiência. Você pode optar por não aceitar cookies através das configurações do seu navegador.",
        },
        {
            heading: "7. Seus Direitos",
            content:
                "Você tem o direito de acessar, corrigir ou solicitar a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato através do nosso formulário de contato.",
        },
        {
            heading: "8. Alterações a esta Política",
            content:
                "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas publicando a nova política em nosso website.",
        },
        {
            heading: "9. Contato",
            content:
                "Se você tiver perguntas sobre esta Política de Privacidade, entre em contato conosco através do formulário de contato em nosso website ou envie um email para contato@evodigital.com.br.",
        },
    ],
};

const termsOfUseContent: LegalContent = {
    title: "Termos de Uso",
    sections: [
        {
            heading: "1. Aceitação dos Termos",
            content:
                "Ao acessar e usar o website da EvoDigital, você concorda em aceitar e estar vinculado pelos termos e disposições desta Política de Termos de Uso.",
        },
        {
            heading: "2. Uso Licenciado",
            content:
                "É concedida a você uma licença limitada, não exclusiva e não transferível para acessar e usar nosso website para fins pessoais e não comerciais, desde que você cumpra com estes termos.",
        },
        {
            heading: "3. Restrições de Uso",
            content: [
                "Você não pode:",
                "Modificar, copiar ou distribuir conteúdo do website sem permissão",
                "Usar o website para fins ilegais ou prejudiciais",
                "Acessar ou tentar acessar áreas protegidas do website",
                "Interferir com o funcionamento do website",
                "Coletar ou rastrear informações pessoais de outros usuários",
            ],
        },
        {
            heading: "4. Propriedade Intelectual",
            content:
                "Todos os conteúdos, designs, gráficos, textos e demais materiais do website são propriedade da EvoDigital ou de seus fornecedores de conteúdo. Eles são protegidos por leis internacionais de direitos autorais.",
        },
        {
            heading: "5. Isenção de Responsabilidade",
            content:
                "O website é fornecido \"como está\" sem garantias de qualquer tipo, expressas ou implícitas. A EvoDigital não garante que o website será ininterrupto, seguro ou livre de erros.",
        },
        {
            heading: "6. Limitação de Responsabilidade",
            content:
                "Em nenhuma circunstância a EvoDigital será responsável por danos indiretos, incidentais, especiais, consequentes ou punitivos decorrentes do seu uso do website.",
        },
        {
            heading: "7. Links Externos",
            content:
                "Nosso website pode conter links para websites externos. Não somos responsáveis pelo conteúdo ou práticas de websites de terceiros. O uso de links externos é por sua conta e risco.",
        },
        {
            heading: "8. Modificações dos Termos",
            content:
                "Reservamo-nos o direito de modificar estes termos a qualquer momento. As mudanças serão efetivas imediatamente após a publicação no website.",
        },
        {
            heading: "9. Terminação",
            content:
                "Podemos encerrar ou suspender seu acesso ao website imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, inclusive se você violar estes Termos.",
        },
        {
            heading: "10. Lei Aplicável",
            content:
                "Estes termos e suas relações conosco serão regidos pelas leis do Brasil, sem levar em consideração suas disposições sobre conflitos de lei.",
        },
        {
            heading: "11. Contato",
            content:
                "Se você tiver perguntas sobre estes Termos de Uso, entre em contato conosco através do formulário de contato em nosso website ou envie um email para contato@evodigital.com.br.",
        },
    ],
};

interface LegalPoliciesProps {
    type: "privacy" | "terms";
}

export default function LegalPolicies({ type }: LegalPoliciesProps) {
    const [isOpen, setIsOpen] = useState(false);
    const content = type === "privacy" ? privacyPolicyContent : termsOfUseContent;
    const label = type === "privacy" ? "Política de Privacidade" : "Termos de Uso";

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="transition hover:text-zinc-300"
            >
                {label}
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={content.title}>
                <div className="space-y-6">
                    <p className="text-sm text-zinc-400">Última atualização: 28 de julho de 2026</p>

                    {content.sections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-white">{section.heading}</h3>
                            <div className="mt-2 leading-relaxed">
                                {Array.isArray(section.content) ? (
                                    <ul className="space-y-1 list-disc list-inside">
                                        {section.content.map((item, i) => (
                                            <li key={i} className="text-zinc-300">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-zinc-300">{section.content}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    );
}
