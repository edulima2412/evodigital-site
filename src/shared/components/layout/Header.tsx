import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Container from "./Container";
import Button from "../ui/Button";

const links = [
    { label: "Serviços", href: "#services" },
    { label: "Projetos", href: "#portfolio" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" }
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 border-b transition-colors ${isScrolled ? "border-zinc-800/80 bg-[#09090BEA]" : "border-transparent bg-transparent"}`}>
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <a href="#top" className="text-2xl font-bold tracking-tight">
                        Evo<span className="text-blue-500">Digital</span>
                    </a>

                    <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
                        {links.map((link) => (
                            <a key={link.href} href={link.href} className="transition hover:text-white">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button>Solicitar orçamento</Button>
                    </div>

                    <button
                        className="rounded-full border border-zinc-800 p-2 text-zinc-300 md:hidden"
                        aria-label="Abrir menu"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="border-t border-zinc-800 bg-zinc-950/95 px-4 py-4 md:hidden">
                        <nav className="flex flex-col gap-3 text-sm text-zinc-300">
                            {links.map((link) => (
                                <a key={link.href} href={link.href} className="transition hover:text-white" onClick={() => setIsOpen(false)}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </Container>
        </header>
    );
}