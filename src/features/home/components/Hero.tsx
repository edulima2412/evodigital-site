import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

import Container from "@/shared/components/layout/Container";
import Button from "@/shared/components/ui/Button";

export default function Hero() {
    return (
        <section id="top" className="relative overflow-hidden pb-24 pt-10 lg:pt-20">
            <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[140px]" />
            <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-violet-700/20 blur-[140px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_40%)]" />

            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                            🚀 Desenvolvimento Web Premium
                        </span>

                        <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                            Sites que conectam
                            <span className="block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                                marca, presença e resultados.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
                            Criamos experiências digitais modernas, rápidas e estratégicas para empresas que querem crescer com autoridade.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button className="inline-flex items-center gap-2">
                                Solicitar orçamento
                                <FiArrowRight />
                            </Button>
                            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-6 py-3 font-semibold text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-800">
                                <FiPlay />
                                Ver projetos
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-2xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur lg:block" />
                        <div className="absolute -right-8 bottom-10 hidden h-24 w-24 rounded-2xl border border-blue-400/20 bg-blue-500/10 shadow-2xl backdrop-blur lg:block" />

                        <div className="rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 p-4 shadow-[0_0_80px_rgba(59,130,246,0.15)]">
                            <div className="rounded-[1.5rem] border border-zinc-800 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-6">
                                <div className="rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-5 backdrop-blur">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-zinc-400">Performance</p>
                                            <p className="text-xl font-semibold text-white">+180% presença digital</p>
                                        </div>
                                        <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                                            em 90 dias
                                        </div>
                                    </div>
                                    <div className="mt-6 h-40 rounded-[1rem] border border-zinc-800 bg-[linear-gradient(120deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4">
                                        <div className="h-full rounded-[0.8rem] border border-zinc-700 bg-zinc-900/70 p-4">
                                            <div className="h-2 w-24 rounded-full bg-blue-500" />
                                            <div className="mt-4 h-2 w-full rounded-full bg-zinc-800" />
                                            <div className="mt-3 h-2 w-5/6 rounded-full bg-zinc-800" />
                                            <div className="mt-3 h-2 w-2/3 rounded-full bg-zinc-800" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}