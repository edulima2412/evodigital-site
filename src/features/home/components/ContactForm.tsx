import { useEffect } from "react";
import { type SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { FiArrowRight, FiMail, FiPhone } from "react-icons/fi";

import Container from "@/shared/components/layout/Container";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import Button from "@/shared/components/ui/Button";

type FormValues = {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm<FormValues>();

    useEffect(() => {
        function handlePrefill(event: Event) {
            const customEvent = event as CustomEvent<{ message: string }>;
            setValue("message", customEvent.detail.message, {
                shouldValidate: true,
                shouldDirty: true
            });
        }

        window.addEventListener("prefill-contact-message", handlePrefill);

        return () => {
            window.removeEventListener("prefill-contact-message", handlePrefill);
        };
    }, [setValue]);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.info("Contato enviado", data);
        await new Promise((resolve) => window.setTimeout(resolve, 600));
        alert("Mensagem enviada com sucesso. Em breve entraremos em contato.");
    };

    return (
        <section id="contact">
            <Container>
                <SectionTitle
                    title="Vamos construir algo incrível"
                    subtitle="Preencha o formulário e traremos uma proposta detalhada para o seu projeto."
                />

                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8">
                        <h3 className="text-2xl font-semibold">Fale com a EvoDigital</h3>
                        <p className="mt-4 text-zinc-400">
                            Atuamos com foco em sites institucionais, presença digital e soluções web preparadas para crescimento.
                        </p>

                        <div className="mt-8 space-y-4 text-sm text-zinc-300">
                            <div className="flex items-center gap-3">
                                <FiMail className="text-blue-400" />
                                <span>contato@evodigital.com.br</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiPhone className="text-blue-400" />
                                <span>+55 (11) 99999-9999</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8">
                        <div className="grid gap-4 md:grid-cols-2">
                            <label className="text-sm text-zinc-300">
                                <span className="mb-2 block">Nome</span>
                                <input
                                    {...register("name", { required: "Informe seu nome" })}
                                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none ring-0"
                                />
                                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>}
                            </label>

                            <label className="text-sm text-zinc-300">
                                <span className="mb-2 block">Empresa</span>
                                <input
                                    {...register("company")}
                                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none ring-0"
                                />
                            </label>

                            <label className="text-sm text-zinc-300">
                                <span className="mb-2 block">E-mail</span>
                                <input
                                    type="email"
                                    {...register("email", { required: "Informe um e-mail válido", pattern: { value: /.+@.+\..+/, message: "E-mail inválido" } })}
                                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none ring-0"
                                />
                                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
                            </label>

                            <label className="text-sm text-zinc-300">
                                <span className="mb-2 block">Telefone</span>
                                <input
                                    {...register("phone")}
                                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none ring-0"
                                />
                            </label>
                        </div>

                        <label className="mt-4 block text-sm text-zinc-300">
                            <span className="mb-2 block">Mensagem</span>
                            <textarea
                                rows={5}
                                {...register("message", { required: "Descreva seu projeto" })}
                                className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 outline-none ring-0"
                            />
                            {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>}
                        </label>

                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <Button className="inline-flex items-center gap-2" onClick={() => undefined}>
                                {isSubmitting ? "Enviando..." : "Enviar proposta"}
                                <FiArrowRight />
                            </Button>
                            <span className="text-sm text-zinc-500">Resposta em até 24 horas.</span>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
}