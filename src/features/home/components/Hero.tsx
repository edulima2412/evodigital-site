import { motion } from "framer-motion";

import Container from "@/shared/components/layout/Container";

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
            {/* pointer-events-none: elementos decorativos não podem interceptar cliques/hover */}
            <div className="pointer-events-none absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[140px]" />
            <div className="pointer-events-none absolute right-10 top-32 h-72 w-72 rounded-full bg-violet-700/20 blur-[140px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_40%)]" />

            <Container>
                <div className="
                    relative z-10
                    grid
                    gap-10
                    items-center
                    lg:grid-cols-[1.1fr_0.9fr]
                    lg:gap-20
                    ">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <span className="inline-flex mx-auto lg:mx-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                            🚀 Soluções Digitais Completas
                        </span>

                        <h1
                            className="
                            mt-6
                            text-4xl
                            font-black
                            leading-tight
                            tracking-tight
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                        "
                        >
                            Criamos experiências digitais

                            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                para empresas crescerem.
                            </span>
                        </h1>

                        <div className="mt-8 space-y-2">
                            <p className="mx-auto lg:mx-0 max-w-xl text-lg leading-8 text-zinc-400">
                                Desenvolvemos sites institucionais, landing pages e lojas virtuais
                                preparados para fortalecer sua marca, conquistar clientes e gerar
                                resultados reais para o seu negócio.
                            </p>
                            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm lg:justify-start">

                                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-blue-300">
                                    ⚡ Alta Performance
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-emerald-300">
                                    📱 100% Responsivo
                                </span>

                                <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-violet-300">
                                    🔍 SEO Otimizado
                                </span>

                            </div>
                        </div>

                        {/* CTAs agora agrupados num flex container, com z-index e cursor garantidos */}
                        <div className="relative z-10 mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:justify-start">
                            <a
                                href="#contact"
                                className="
                                    relative z-10
                                    cursor-pointer
                                    inline-flex items-center justify-center
                                    rounded-xl
                                    bg-blue-600
                                    px-6 py-3
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    shadow-blue-600/30
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:bg-blue-500
                                "
                            >
                                Solicitar orçamento
                            </a>

                            <a
                                href="#portfolio"
                                className="
                                    relative z-10
                                    cursor-pointer
                                    inline-flex items-center justify-center
                                    rounded-xl
                                    border
                                    border-zinc-700
                                    px-6 py-3
                                    font-semibold
                                    transition-all
                                    duration-300
                                    hover:border-blue-500
                                    hover:bg-zinc-900
                                "
                            >
                                Ver projetos
                            </a>
                        </div>

                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-400 lg:justify-start">
                            <span>✓ Atendimento personalizado</span>

                            <span>✓ Entrega rápida</span>

                            <span>✓ Suporte contínuo</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-4 shadow-[0_0_80px_rgba(59,130,246,0.15)]">
                            <div className="rounded-[1.5rem] border border-zinc-800 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6">
                                <div className="rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-5 backdrop-blur">

                                    {/* Barra superior */}
                                    <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
                                        <div className="h-3 w-3 rounded-full bg-red-400" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                        <div className="h-3 w-3 rounded-full bg-emerald-400" />
                                    </div>

                                    {/* Navbar do site */}
                                    <div className="mt-4 flex items-center justify-between">
                                        <div className="h-3 w-20 rounded-full bg-white/90" />

                                        <div className="flex gap-3">
                                            <div className="h-2 w-10 rounded-full bg-white/30" />
                                            <div className="h-2 w-10 rounded-full bg-white/30" />
                                            <div className="h-2 w-10 rounded-full bg-white/30" />
                                        </div>
                                    </div>

                                    {/* Hero */}
                                    <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-700 p-6">

                                        <div className="h-4 w-40 rounded-full bg-white/90" />

                                        <div className="mt-4 h-3 w-full rounded-full bg-white/30" />

                                        <div className="mt-3 h-3 w-4/5 rounded-full bg-white/20" />

                                        <div className="mt-6 h-10 w-36 rounded-xl bg-white/90" />

                                    </div>

                                    {/* Cards */}

                                    <div className="mt-6 grid grid-cols-2 gap-4">

                                        {[1, 2, 3, 4].map(item => (

                                            <div
                                                key={item}
                                                className="rounded-xl border border-zinc-800 bg-zinc-900 p-4"
                                            >
                                                <div className="h-3 w-16 rounded-full bg-blue-500" />

                                                <div className="mt-4 h-2 rounded-full bg-zinc-700" />

                                                <div className="mt-2 h-2 w-3/4 rounded-full bg-zinc-700" />
                                            </div>

                                        ))}

                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container >
        </section >
    );
}