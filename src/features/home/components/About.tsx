import Container from "@/shared/components/layout/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Button from "@/shared/components/ui/Button";
import Image from "@/shared/components/ui/Image";

export default function About() {
    return (
        <section id="about">
            <Container>
                <SectionTitle
                    title="Quem está por trás da EvoDigital?"
                    subtitle="Tecnologia, experiência e foco em resultados."
                />

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <div className="overflow-hidden rounded-3xl border border-zinc-800">

                        <Image
                            src="/images/about/founder.jpg"
                            alt="Fundador da EvoDigital"
                            width={700}
                            height={700}
                            className="w-full"
                        />

                    </div>

                    <div>

                        <h3 className="text-4xl font-bold">

                            Olá, eu sou Eduardo.

                        </h3>

                        <p className="mt-6 leading-8 text-zinc-400">

                            Sou arquiteto de software e desenvolvedor com experiência na construção de plataformas escaláveis, APIs, microsserviços e aplicações web modernas.

                        </p>

                        <p className="mt-6 leading-8 text-zinc-400">

                            Criei a EvoDigital para ajudar empresas a terem uma presença digital profissional através de sites rápidos, seguros e preparados para gerar resultados.

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