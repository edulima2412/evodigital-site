import Container from "@/shared/components/layout/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";

const plans = [
    {
        title: "Site Pronto",
        price: "R$ 400",
        subtitle: "Pagamento único",
        description:
            "Ideal para quem precisa colocar sua empresa no ar rapidamente.",
        features: [
            "Até 5 páginas",
            "Design profissional",
            "Site Responsivo",
            "SEO básico",
            "Formulário de contato",
            "Entrega rápida"
        ],
        highlight: false,
        button: "Solicitar orçamento",
        message:
            "Olá! Tenho interesse no plano Site Pronto (R$ 400) e gostaria de solicitar um orçamento."
    },
    {
        title: "Site Personalizado",
        price: "A partir de R$ 800",
        subtitle: "Pagamento único",
        description:
            "Projeto desenvolvido sob medida para o seu negócio.",
        features: [
            "Layout exclusivo",
            "Quantidade de páginas personalizada",
            "Animações modernas",
            "SEO avançado",
            "Alta Performance",
            "Suporte inicial"
        ],
        highlight: true,
        button: "Quero esse",
        message:
            "Olá! Tenho interesse no plano Site Personalizado (a partir de R$ 800) e gostaria de conversar sobre o projeto."
    },
    {
        title: "Loja Virtual",
        price: "Sob consulta",
        subtitle: "Projeto personalizado",
        description:
            "E-commerce completo para vender seus produtos online.",
        features: [
            "Catálogo de produtos",
            "Carrinho de compras",
            "Pagamento online",
            "Painel administrativo",
            "Integrações"
        ],
        highlight: false,
        button: "Solicitar proposta",
        message:
            "Olá! Tenho interesse no plano Loja Virtual e gostaria de solicitar uma proposta personalizada."
    }
];

export default function Pricing() {

    function handlePlanClick(message) {
        // Envia a mensagem predefinida para o formulário de contato ouvir
        window.dispatchEvent(
            new CustomEvent("prefill-contact-message", {
                detail: { message }
            })
        );

        // Faz o scroll suave até o formulário
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section id="pricing" className="py-24">
            <Container>

                <SectionTitle
                    title="Planos para sua empresa"
                    subtitle="Escolha a solução ideal para começar sua presença digital."
                />

                <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">

                    {plans.map(plan => (

                        <div
                            key={plan.title}
                            className={`relative flex h-[640px] flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2

                                ${
                                    plan.highlight
                                        ? "border-blue-500 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-2xl shadow-blue-600/20 scale-[1.03]"
                                        : "border-zinc-800 bg-zinc-900"
                                }
                            `}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex whitespace-nowrap rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold shadow-md shadow-blue-600/30">
                                    MAIS ESCOLHIDO
                                </div>
                            )}

                            <div className="flex-1 overflow-hidden">

                                <h3 className="text-3xl font-bold">
                                    {plan.title}
                                </h3>

                                <p className="mt-2 text-zinc-400">
                                    {plan.description}
                                </p>

                                <div className="mt-8">
                                    <span className="text-4xl font-black">
                                        {plan.price}
                                    </span>
                                    <p className="mt-1 text-sm text-zinc-500">
                                        {plan.subtitle}
                                    </p>
                                </div>

                                <ul className="mt-8 space-y-4">
                                    {plan.features.map(feature => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-zinc-300"
                                        >
                                            <span className="text-emerald-400">
                                                ✓
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <button
                                type="button"
                                onClick={() => handlePlanClick(plan.message)}
                                className={`
                                    mt-6 flex h-12 shrink-0 items-center justify-center rounded-xl font-semibold transition-all

                                    ${
                                        plan.highlight
                                            ? "bg-blue-600 hover:bg-blue-500"
                                            : "border border-zinc-700 hover:border-blue-500"
                                    }
                                `}
                            >
                                {plan.button}
                            </button>

                        </div>

                    ))}

                </div>

            </Container>
        </section>
    );
}