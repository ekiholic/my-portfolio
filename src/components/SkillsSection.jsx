import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

export const SkillsSection = () => {
    const { t, i18n } = useTranslation();

    const savedLanguage = localStorage.getItem("selectedLanguage");
    useEffect(() => {
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    const skills = [
        {name: "Python", level: t('skills.level3'), logo: "skills/python.png"},
        {name: "Django", level: t('skills.level2'), logo: "skills/django.png"},
        {name: "Git", level: t('skills.level3'), logo: "skills/git.png"},
        {name: "C", level: t('skills.level2'), logo: "skills/c.png"},
        {name: "C++", level: t('skills.level2'), logo: "skills/cpp.png"},
        {name: "Shell (Bash)", level: t('skills.level1'), logo: "skills/shell.png"},
        {name: "HTML/CSS", level: t('skills.level1'), logo: "skills/html.png"},
        {name: "Tailwind CSS", level: t('skills.level1'), logo: "skills/tailwind.png"},
        {name: "JavaScript", level: t('skills.level2'), logo: "skills/javascript.png"},
        {name: "TypeScript", level: t('skills.level2'), logo: "skills/typescript.png"},
        {name: "React", level: t('skills.level1'), logo: "skills/React.png"},
        {name: "Node JS", level: t('skills.level1'), logo: "skills/Node.png"},
        {name: "PHP", level: t('skills.level1'), logo: "skills/php.png"},
        {name: "SQL", level: t('skills.level1'), logo: "skills/sql.png"},
        {name: "Visual Studio Code", level: t('skills.level2'), logo: "skills/vscode.png"},
        {name: "Photoshop", level: t('skills.level2'), logo: "skills/photoshop-.png"},
    ]

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    {t('skills.title1')} <span className="text-primary">{t('skills.title2')}</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
                    {skills.map((skill, key) => (                        
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover text-foreground">
                            <h3 className="font-medium">{skill.name}</h3>
                            <p >{skill.level}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};