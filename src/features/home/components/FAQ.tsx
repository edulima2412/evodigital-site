import Container from "@/shared/components/layout/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Accordion from "@/shared/components/ui/Accordion";

import { faq } from "@/features/home/mocks/faq";

export default function FAQ(){

    return(

        <section>

            <Container>

                <SectionTitle

                    title="Perguntas Frequentes"

                />

                <div className="mx-auto max-w-4xl space-y-5">

                    {faq.map(item=>(

                        <Accordion

                            key={item.question}

                            title={item.question}

                            content={item.answer}

                        />

                    ))}

                </div>

            </Container>

        </section>

    )

}