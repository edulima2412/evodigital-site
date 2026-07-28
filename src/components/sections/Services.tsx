import Container from "../layout/Container";

import SectionTitle from "../ui/SectionTitle";

import ServiceCard from "../ui/ServiceCard";

import { services } from "../../mocks/services";

export default function Services() {

    return (

        <section id="services">

            <Container>

                <SectionTitle

                    title="Soluções digitais para empresas"

                    subtitle="Desenvolvemos sites modernos que ajudam sua empresa a conquistar mais clientes."

                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service) => (

                        <ServiceCard

                            key={service.title}

                            {...service}

                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}