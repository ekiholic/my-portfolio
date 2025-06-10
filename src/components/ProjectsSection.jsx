import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { ExternalLink } from 'lucide-react';

export const ProjectsSection = () => {
    const { t, i18n } = useTranslation();

    const savedLanguage = localStorage.getItem("selectedLanguage");
    useEffect(() => {
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    const projects = [
        {
            id: 1,
            title: "Ellia BOT",
            description: t('projects.ellia'),
            image: "/projects/elliabot.png",
            tags: ["Python", "discord.py", "AWS"],
            Url:"https://discord.com/oauth2/authorize?client_id=603949535764545557&permissions=8&integration_type=0&scope=bot"
        },
        {
            id: 2,
            title: "Dragon Wizard",
            description: t('projects.wizard'),
            image: "/projects/wizard.jpg",
            tags: ["Unreal Engine 5", "Blueprint"],
            Url: "https://chachamaru.itch.io/unreal-blueprint-dragon-wizard"
        },
        {
            id: 3,
            title: "School Adventure",
            description: t('projects.schooladventure'),
            image: "/projects/schooladventure.png",
            tags:["Unity", "C#", "Git", "Scrum"],
            Url: "https://chachamaru.itch.io/schooladventure"
        },
        {
            id: 4,
            title: "MixMaster Hench Droprate Calculator",
            description: t('projects.mm'),
            image: "/projects/mm-drop-calc.png",
            tags: ["Python", "PyQt5"],
            Url: "https://github.com/ekiholic/MixMaster-Hench-Droprate-Calculator"
        },
        {
            id: 5,
            title: "Portfolio",
            description: t('projects.portfolio'),
            image: "/projects/portfolio.png",
            tags: ["React", "Vite", "Tailwind CSS"],
            Url: "https://github.com/ekiholic/MixMaster-Hench-Droprate-Calculator"
        },
    ];

    return (
        <section id="projects">
            <div className="container mx-auto max-w-8xl mb-8">
                <h2 className="text-3xl md:text-4xl fond-bold mb-4 text-center">{t('projects.title1')} <span className="text-primary">{t('projects.title2')} </span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-80 overflow-hidden">
                            <img src={project.image} alt={project.title}  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-3 mb-2">
                                {project.tags.map((tag) => (
                                    <span className="px-4 py-1 text-x font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.Url} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink /></a>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};