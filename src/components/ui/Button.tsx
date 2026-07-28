import { ReactNode } from "react";
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
                "rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500",
                className
            )}
        >
            {children}
        </button>
    );
}