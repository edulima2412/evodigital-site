import { useEffect } from "react";
import { FiX } from "react-icons/fi";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative mx-4 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl">
                <div className="sticky top-0 border-b border-zinc-800 bg-zinc-950 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <button
                        onClick={onClose}
                        className="rounded-lg p-1 transition hover:bg-zinc-800"
                        aria-label="Fechar modal"
                    >
                        <FiX size={24} />
                    </button>
                </div>

                <div className="space-y-6 px-6 py-8 text-zinc-300">
                    {children}
                </div>
            </div>
        </div>
    );
}
