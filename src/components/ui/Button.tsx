import { type ReactNode } from "react";
import clsx from "clsx";

type Props = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};

export default function Button({
    children,
    className,
    onClick
}: Props) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "rounded-xl bg-blue-600 px-6 py-3 font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/50",
                className
            )}
        >
            {children}
        </button>
    );
}