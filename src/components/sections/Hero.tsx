import { motion } from "framer-motion";

import Container from "../layout/Container";

import Button from "../ui/Button";

export default function Hero() {

    return (

        <section className="relative overflow-hidden">

            <div className="absolute left-20 top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

            <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-violet-700/20 blur-[120px]" />

            <Container>

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    <motion.div

                        initial={{ opacity: 0, y: 40 }}

                        animate={{ opacity: 1, y: 0 }}

                        transition={{ duration: .8 }}

                    >

                        <span className="rounded-full bg-blue-500/10 px-4 py-2 text-blue-400">

                            🚀 Desenvolvimento Web

                        </span>

                        <h1 className="mt-6 text-6xl font-extrabold leading-tight">

                            Sites que geram

                            <span className="text-blue-500">

                                {" "}resultados

                            </span>

                        </h1>

                        <p className="mt-8 text-xl text-zinc-400">

                            Desenvolvemos sites modernos, rápidos e preparados para aumentar a presença digital da sua empresa.

                        </p>

                        <div className="mt-10 flex gap-4">

                            <Button>

                                Solicitar orçamento

                            </Button>

                            <Button className="bg-zinc-800 hover:bg-zinc-700">

                                Ver projetos

                            </Button>

                        </div>

                    </motion.div>

                    <motion.div

                        initial={{ opacity: 0, scale: .8 }}

                        animate={{ opacity: 1, scale: 1 }}

                        transition={{ duration: 1 }}

                        className="relative"

                    >

                        <div className="h-[500px] rounded-3xl border border-zinc-800 bg-gradient-to-br from-blue-600 to-violet-700 shadow-2xl">

                        </div>

                    </motion.div>

                </div>

            </Container>

        </section>

    );

}