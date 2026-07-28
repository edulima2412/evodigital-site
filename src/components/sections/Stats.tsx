import Container from "../layout/Container";

const stats = [

    {
        value: "100%",
        label: "Responsivos"
    },

    {
        value: "95+",
        label: "Lighthouse"
    },

    {
        value: "24h",
        label: "Suporte"
    },

    {
        value: "SEO",
        label: "Otimizado"
    }

];

export default function Stats() {

    return (

        <section>

            <Container>

                <div className="grid gap-6 rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center md:grid-cols-4">

                    {stats.map((item) => (

                        <div key={item.label}>

                            <h3 className="text-5xl font-bold text-blue-500">

                                {item.value}

                            </h3>

                            <p className="mt-2 text-zinc-400">

                                {item.label}

                            </p>

                        </div>

                    ))}

                </div>

            </Container>

        </section>

    );

}