import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const HomeSection = () => {
    const { t, i18n } = useTranslation();

    const savedLanguage = localStorage.getItem("selectedLanguage");
    useEffect(() => {
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">{t('home.title1')}</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}{t('home.title2')}</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "} {t('home.title3')}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        {t('home.subtitle')}
                    </p>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transfor -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">{t('home.scroll')}</span>
            <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};