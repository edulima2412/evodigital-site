import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PortfolioCard from "@/components/ui/PortfolioCard";

import { portfolio } from "@/mocks/portfolio";

export default function Portfolio() {

    return (

        <section id="portfolio">

            <Container>

                <SectionTitle

                    title="Projetos"

                    subtitle="Alguns exemplos do tipo de solução que desenvolvemos."

                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {portfolio.map(project => (

                        <PortfolioCard

                            key={project.id}

                            project={project}

                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}