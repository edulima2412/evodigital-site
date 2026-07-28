import {
    FiAward,
    FiClock,
    FiCode,
    FiZap
} from "react-icons/fi";

import Container from "@/shared/components/layout/Container";

const items = [
    {
        icon: FiZap,
        title: "Performance",
        description:
            "Sites rápidos, leves e otimizados para oferecer a melhor experiência aos seus clientes."
    },
    {
        icon: FiCode,
        title: "Tecnologia Moderna",
        description:
            "Desenvolvimento com React, TypeScript e as melhores práticas do mercado."
    },
    {
        icon: FiClock,
        title: "Entrega Ágil",
        description:
            "Processo transparente e organizado para colocar seu projeto no ar rapidamente."
    },
    {
        icon: FiAward,
        title: "Suporte Contínuo",
        description:
            "Acompanhamento após a entrega com manutenção e evolução do seu site."
    }
];

export default function Why() {
    return (
        <section
            id="why"
            className="relative py-16 sm:py-20 lg:py-28"
        >
            <Container>
                <div
                    className="
                        grid
                        items-center
                        gap-14
                        lg:grid-cols-[0.9fr_1.1fr]
                        lg:gap-20
                    "
                >
                    {/* Texto */}
                    <div className="text-center lg:text-left">
                        <span
                            className="
                                inline-flex
                                rounded-full
                                border
                                border-blue-500/20
                                bg-blue-500/10
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-blue-400
                            "
                        >
                            POR QUE ESCOLHER A EVODIGITAL
                        </span>

                        <h2
                            className="
                                mt-6
                                text-3xl
                                font-black
                                leading-tight
                                tracking-tight
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Desenvolvemos soluções digitais que geram resultados.
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-6
                                max-w-xl
                                text-base
                                leading-8
                                text-zinc-400
                                sm:text-lg
                                lg:mx-0
                            "
                        >
                            Mais do que criar um site bonito, desenvolvemos
                            experiências digitais rápidas, responsivas e
                            preparadas para ajudar sua empresa a conquistar
                            novos clientes e fortalecer sua presença online.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {items.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
                                        group
                                        rounded-3xl
                                        border
                                        border-zinc-800
                                        bg-gradient-to-b
                                        from-zinc-900
                                        to-zinc-950
                                        p-7
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-blue-500/30
                                        hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
                                    "
                                >
                                    <div
                                        className="
                                            inline-flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-blue-500/10
                                            text-blue-400
                                            transition-all
                                            duration-300
                                            group-hover:bg-blue-500
                                            group-hover:text-white
                                        "
                                    >
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-zinc-400">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}