'use client'

import { useLanguage } from "@/context/LanguageContext";
import Link from 'next/link';

export default function AboutPage() {
    const { t } = useLanguage();

    return (
       
        <main className="min-h-screen text-[#FFFFF0] flex flex-col">
            
            {/*Head */}
            <header className="pt-24 pb-14 px-4 text-center animate-fadeIn">
                <h1 className="font-tenor text-5xl md:text-7xl uppercase tracking-tighter mb-4 ">
                    {t.aboutPage.title}
                </h1>
                <p className="font-sans uppercase tracking-[0.3em] text-xs opacity-80">
                    {t.aboutPage.subtitle}
                </p>
            </header>

            {/* Main content */}
            <div className="max-w-4xl mx-auto px-4 pb-24 space-y-12 md:space-y-16 flex-grow">
                
                {/* Philosophy section */}
                <section className="animate-fadeIn " style={{ animationDelay: '0.2s' }}>
                    <h2 className="font-tenor text-2xl uppercase mb-8 border-b border-[#10069F]/20 pb-2 text-center mx-auto w-fit">
                        {t.aboutPage.philosophy.title}
                    </h2>
                    <p className="font-sans text-lg leading-relaxed text-[#E2E8F0] first-letter:text-5xl first-letter:font-tenor first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                        {t.aboutPage.philosophy.desc}
                    </p>
                </section>

                {/* Safety section */}
                <section className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <h2 className="font-tenor text-2xl uppercase mb-10 border-b border-[#10069F]/20 pb-2 text-center mx-auto w-fit">
                        {t.aboutPage.safety.title}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 h-auto">
                        {t.aboutPage.safety.items.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-sm space-y-3 transition-transform hover:scale-105 duration-300 cursor-pointer select-none group"
                            >
                                <h3 className="font-sans font-bold uppercase text-sm tracking-widest mb-3 group-hover:text-[#D1B894] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="font-sans text-sm text-[#E2E8F0] leading-snug">
                                    {item.text}
                                </p>
                                <div className="mt-auto pt-4 text-[10px] apocity group-hover:opacity-50 transition-opacity uppercase tracking-widest">
                                  {t.aboutPage.readMore.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Action button */}
                <footer className="flex justify-center pt-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                    <Link 
                        href="/#contacts" 
                        className="px-12 py-4 border border-[#10069F] text-[#10069F] hover:bg-[#10069F] hover:text-white transition-all duration-500 font-sans uppercase tracking-widest text-xs"
                    >
                        {t.aboutPage.cta}
                    </Link>
                </footer>

            </div>
        </main>
    );
}