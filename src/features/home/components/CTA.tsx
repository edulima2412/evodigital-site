import Button from "@/shared/components/ui/Button";
import Container from "@/shared/components/layout/Container";

export default function CTA() {

    return (

        <section>

            <Container>

                <div className="rounded-[40px] bg-gradient-to-r from-blue-600 to-violet-700 p-16 text-center">

                    <h2 className="text-5xl font-bold">

                        Vamos criar o site da sua empresa?

                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">

                        Solicite um orçamento e descubra como podemos fortalecer sua presença digital.

                    </p>

                    <Button className="mt-10 bg-white text-zinc-900 hover:bg-zinc-100"
                        onClick={() => {
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}>

                        Solicitar orçamento

                    </Button>

                </div>

            </Container>

        </section>

    );

}