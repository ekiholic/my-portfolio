import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const AboutSection = () => {
    const { t, i18n } = useTranslation();

    const savedLanguage = localStorage.getItem("selectedLanguage");
    useEffect(() => {
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    {t('about.title1')} <span className="text-primary">{t('about.title2')}</span>
                </h2>

                <div className="max-w-5xl mx-auto items-center">
                    <div className="space-y-6">

                        <p className="text-muted-foreground">
                            {t('about.content1')}
                        </p>

                        <p className="text-muted-foreground">
                            {t('about.content2')}
                        </p>

                        <p className="text-muted-foreground">
                            {t('about.content3')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href={t('resume.link')} target="_blank" className="cosmic-button">
                                {t('resume.text')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};