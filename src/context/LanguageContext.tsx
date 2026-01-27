'use client';

import React, { createContext, useContext, useState } from 'react';
import { translations, Locale } from '@/data/translations';

type LanguageContextType = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: typeof translations.pl;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({children} : { children: React.ReactNode}) {
    const [locale, setLocale] = useState<Locale>('pl');

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