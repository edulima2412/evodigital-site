export type PortfolioItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
};

export const portfolio: PortfolioItem[] = [
    {
        id: 1,
        title: "Clínica Médica",
        description:
            "Site institucional moderno para clínica particular.",

        image:"/images/portfolio/project1.jpg",

        technologies: [
            "React",
            "TypeScript",
            "SEO"
        ]
    },

    {
        id: 2,
        title: "Escritório de Advocacia",

        description:
            "Landing Page focada em conversão.",

        image: "/images/portfolio/project2.jpg",

        technologies: [
            "React",
            "Tailwind",
            "Analytics"
        ]
    },

    {
        id: 3,
        title: "Restaurante",

        description:
            "Cardápio digital e presença online.",

        image: "/images/portfolio/project3.jpg",

        technologies: [
            "React",
            "Performance",
            "Responsivo"
        ]
    }
];