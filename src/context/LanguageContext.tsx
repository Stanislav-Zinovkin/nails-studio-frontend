'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Locale } from '@/data/translations';

type LanguageContextType = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: typeof translations.pl;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({children} : { children: React.ReactNode}) {
    const [locale, setLocaleState] = useState<Locale>('pl');
    
    useEffect(() => {
        const savedLocale = localStorage.getItem('user_locale') as Locale;
        if(savedLocale && (savedLocale === 'pl' || savedLocale === 'ua' || savedLocale === 'en')){
            setLocaleState(savedLocale);
        }
    }, []);
    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('user_locale', newLocale);
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
    };
    const t = translations[locale];

    return ( 
        <LanguageContext.Provider value={{locale, setLocale, t}}>{children}</LanguageContext.Provider>
     );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw Error('useLanguage must be used within LanguageProvider');
    return context;
}