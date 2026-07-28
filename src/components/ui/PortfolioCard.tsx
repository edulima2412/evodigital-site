import { type PortfolioItem } from "@/mocks/portfolio";
import Image from "@/components/ui/Image";

type Props = {

    project: PortfolioItem;

};

export default function PortfolioCard({

    project

}: Props) {

    return (

        <article className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

            <div className="overflow-hidden">

                <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

            </div>

            <div className="p-6">

                <h3 className="text-2xl font-bold">

                    {project.title}

                </h3>

                <p className="mt-3 text-zinc-400">

                    {project.description}

                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((item) => (

                        <span

                            key={item}

                            className="rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300"

                        >

                            {item}

                        </span>

                    ))}

                </div>

            </div>

        </article>

    );

}