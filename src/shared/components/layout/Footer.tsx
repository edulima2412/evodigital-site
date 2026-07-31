import Container from "./Container";
import Logo from "./Logo";
import LegalPolicies from "@/features/home/components/LegalPolicies";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950/90">
            <Container>
                <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
                    <div>
                        <Logo />
                        <p className="mt-2 text-sm text-zinc-400">
                            Sites modernos, rápidos e preparados para crescimento.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                        <a href="#services" className="transition hover:text-white">Serviços</a>
                        <a href="#portfolio" className="transition hover:text-white">Projetos</a>
                        <a href="#about" className="transition hover:text-white">Sobre</a>
                        <a href="#pricing" className="transition hover:text-white">Preços</a>
                        <a href="#contact" className="transition hover:text-white">Contato</a>
                    </div>
                </div>

                <div className="flex flex-col gap-3 border-t border-zinc-800 py-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
                    <span>© 2026 EvoDigital. Todos os direitos reservados.</span>
                    <div className="flex gap-4">
                        <LegalPolicies type="privacy" />
                        <LegalPolicies type="terms" />
                    </div>
                </div>
            </Container>
        </footer>
    );
}
