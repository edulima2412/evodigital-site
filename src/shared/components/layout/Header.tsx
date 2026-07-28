import Container from "./Container";
import Button from "../ui/Button";

export default function Header() {

    return (

        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#09090BDD] backdrop-blur">

            <Container>

                <div className="flex h-20 items-center justify-between">

                    <div className="text-2xl font-bold">

                        Evo<span className="text-blue-500">Digital</span>

                    </div>

                    <nav className="hidden gap-10 md:flex">

                        <a href="#services">Serviços</a>

                        <a href="#portfolio">Projetos</a>

                        <a href="#about">Sobre</a>

                        <a href="#contact">Contato</a>

                    </nav>

                    <Button>

                        Solicitar orçamento

                    </Button>

                </div>

            </Container>

        </header>

    );

}