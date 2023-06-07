export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Sadchikov Tech.",
    description:
        "Разработка сайтов под ключ",
    mainNav: [
        {
            title: "Главная",
            href: "/",
        },
        {
            title: "Проекты",
            href: "/projects",
        },
        {
            title: "Услуги",
            href: "/services",
        },
        {
            title: "Дайджест",
            href: "/services",
        },
        {
            title: "Контакты",
            href: "/contacts",
        },
    ],
    links: {
        twitter: "https://twitter.com/shadcn",
        github: "https://github.com/shadcn/ui",
        docs: "https://ui.shadcn.com",
    },
}
