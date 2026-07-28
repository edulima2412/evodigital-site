import Container from "@/shared/components/layout/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Button from "@/shared/components/ui/Button";
import Image from "@/shared/components/ui/Image";

export default function About() {
    return (
        <section id="about">
            <Container>
                <SectionTitle
                    title="EvoDigital: evolução digital para empresas"
                    subtitle="Estratégia, tecnologia e presença online construída para crescer."
                />

                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-3xl border border-zinc-800">
                        <Image
                            src="/images/about/founder.jpg"
                            alt="Equipe da EvoDigital"
                            width={700}
                            height={700}
                            className="w-full"
                        />
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold">
                            Transformamos negócios com soluções digitais inteligentes.
                        </h3>

                        <p className="mt-6 leading-8 text-zinc-400">
                            A EvoDigital é uma empresa especializada em criar experiências digitais que ajudam empresas a se posicionarem melhor no mercado, conquistarem mais clientes e fortalecerem sua presença online.
                        </p>

                        <p className="mt-6 leading-8 text-zinc-400">
                            Trabalhamos com desenvolvimento de sites institucionais, interfaces modernas, arquitetura preparada para crescimento e soluções pensadas para performance, usabilidade e resultados.
                        </p>

                        <div className="mt-10">
                            <Button>
                                Vamos conversar
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}