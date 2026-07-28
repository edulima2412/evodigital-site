import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
    {
        number: "01",
        title: "Briefing",
        description: "Entendemos seu negócio."
    },
    {
        number: "02",
        title: "Design",
        description: "Criamos a identidade visual."
    },
    {
        number: "03",
        title: "Desenvolvimento",
        description: "Transformamos o layout em um site rápido."
    },
    {
        number: "04",
        title: "Publicação",
        description: "Seu site entra no ar."
    }
];

export default function Process() {

    return (

        <section>

            <Container>

                <SectionTitle
                    title="Como funciona"
                    subtitle="Um processo simples e transparente."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {steps.map(step => (

                        <div
                            key={step.number}
                            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
                        >

                            <span className="text-5xl font-black text-blue-500">

                                {step.number}

                            </span>

                            <h3 className="mt-6 text-2xl font-bold">

                                {step.title}

                            </h3>

                            <p className="mt-4 text-zinc-400">

                                {step.description}

                            </p>

                        </div>

                    ))}

                </div>

            </Container>

        </section>

    );

}