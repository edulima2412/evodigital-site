import { type IconType } from "react-icons";

type Props = {

    icon: IconType;

    title: string;

    description: string;

};

export default function ServiceCard({

    icon: Icon,

    title,

    description

}: Props) {

    return (

        <div
            className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
        >

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl">

                <Icon />

            </div>

            <h3 className="mb-3 text-2xl font-semibold">

                {title}

            </h3>

            <p className="text-zinc-400">

                {description}

            </p>

        </div>

    );

}