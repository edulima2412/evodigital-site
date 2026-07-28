type Props = {
    title: string;
    subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
    return (
        <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                EvoDigital
            </span>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-6 text-lg text-zinc-400">
                    {subtitle}
                </p>
            )}

        </div>
    );
}