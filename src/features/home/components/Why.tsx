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

        description: "Sites rápidos e otimizados."

    },

    {

        icon: FiCode,

        title: "Tecnologia",

        description: "React + TypeScript."

    },

    {

        icon: FiClock,

        title: "Entrega",

        description: "Projetos entregues rapidamente."

    },

    {

        icon: FiAward,

        title: "Qualidade",

        description: "Código limpo e escalável."

    }

];

export default function Why() {

    return (

        <section>

            <Container>

                <div className="grid gap-8 lg:grid-cols-2">

                    <div>

                        <span className="text-blue-400">

                            POR QUE NÓS?

                        </span>

                        <h2 className="mt-4 text-5xl font-bold">

                            Desenvolvemos experiências digitais.

                        </h2>

                        <p className="mt-6 text-zinc-400">

                            Cada projeto é pensado para gerar resultados e fortalecer a presença digital da sua empresa.

                        </p>

                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">

                        {items.map(item => {

                            const Icon = item.icon;

                            return (

                                <div

                                    key={item.title}

                                    className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"

                                >

                                    <Icon

                                        size={32}

                                        className="text-blue-500"

                                    />

                                    <h3 className="mt-5 text-xl font-semibold">

                                        {item.title}

                                    </h3>

                                    <p className="mt-3 text-zinc-400">

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