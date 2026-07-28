export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#00D4FF", stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: "#0099FF", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#9D4EDD", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <rect x="8" y="10" width="40" height="8" rx="4" fill="url(#logoGrad)" />
                <rect x="8" y="26" width="32" height="8" rx="4" fill="url(#logoGrad)" />
                <rect x="8" y="42" width="40" height="8" rx="4" fill="url(#logoGrad)" />
            </svg>
            <span className="text-xl font-bold tracking-tight">Evo<span className="text-blue-400">Digital</span></span>
        </div>
    );
}
