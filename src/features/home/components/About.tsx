import Container from "@/shared/components/layout/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Image from "@/shared/components/ui/Image";

export default function About() {
    return (
        <section id="about">
            <Container>
                <SectionTitle
                    title="Evolução digital para empresas"
                    subtitle="Estratégia, tecnologia e presença online construída para crescer."
                />

                <div className="grid items-stretch gap-16 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-3xl border border-zinc-800 h-full">
                        <Image
                            src="/images/about/founder.png"
                            alt="Equipe da EvoDigital"
                            width={700}
                            height={700}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-4xl font-bold">
                            Transformamos negócios com soluções digitais inteligentes.
                        </h3>

                        <p className="mt-6 leading-8 text-zinc-400">
                            A EvoDigital é uma empresa especializada em criar experiências digitais que ajudam empresas a se posicionarem melhor no mercado, conquistarem mais clientes e fortalecerem sua presença online.
                        </p>

                        <p className="mt-6 leading-8 text-zinc-400">
                            Trabalhamos com desenvolvimento de sites institucionais, interfaces modernas, arquitetura preparada para crescimento e soluções pensadas para performance, usabilidade e resultados.
                        </p>

                        <div className="mt-10 flex justify-center">
                            <a
                                href="#contact"
                                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/50"
                            >
                                Vamos conversar
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}