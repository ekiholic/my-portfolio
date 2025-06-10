import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("selectedLanguage", lang);
    };

    const savedLanguage = localStorage.getItem("selectedLanguage");
    useEffect(() => {
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/90 backdrop-blur-md shadow-xs" : "py-5"
        )}
        >
            <div className="container flex items-center justify-between">
                <a
                className="text-xl font-bold flex items-center text-primary"
                href="#home"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Cédric</span>{" "}
                        Portfolio
                    </span>
                </a>

                <div className="hidden md:flex space-x-8">
                    <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href="#home">{t('navbar.home')}</a>
                    <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href="#about">{t('navbar.about')}</a>
                    <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href="#skills">{t('navbar.skills')}</a>
                    <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href="#projects">{t('navbar.projects')}</a>
                    <select className="font-bold text-foreground bg-background" onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                    <option value="en">EN</option>
                    <option value="fr">FR</option>
                    </select>
                </div>

                <button onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? t('menu.close') : t('menu.open') }>
                    { isMenuOpen ? <X  size={24}/> : <Menu size={24}/>}
                    </button>

                <div className={cn("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href="#home" onClick={() => setIsMenuOpen(false)}>{t('navbar.home')}</a>
                        <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href="#about" onClick={() => setIsMenuOpen(false)}>{t('navbar.about')}</a>
                        <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href="#skills" onClick={() => setIsMenuOpen(false)}>{t('navbar.skills')}</a>
                        <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href="#projects" onClick={() => setIsMenuOpen(false)}>{t('navbar.projects')}</a>
                    <button className="font-bold text-foreground" onClick={() => changeLanguage('en')}>EN</button>
                    <button className="font-bold text-foreground" onClick={() => changeLanguage('fr')}>FR</button>
                    </div>
                </div>

            </div>
        </nav>
    );
};