import { useEffect } from "react";

export default function SEO() {
    useEffect(() => {
        const title = "EvoDigital | Desenvolvimento Web Premium";
        const description = "Landing page profissional da EvoDigital com foco em sites institucionais, performance e conversão.";

        document.title = title;
        document.querySelector('meta[name="description"]')?.setAttribute("content", description);
        document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
        document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
        document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", title);
        document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
    }, []);

    return null;
}
