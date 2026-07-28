import { FiMessageCircle } from "react-icons/fi";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20na%20EvoDigital."
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
            className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-600/30 transition hover:scale-105"
        >
            <FiMessageCircle size={24} />
        </a>
    );
}
