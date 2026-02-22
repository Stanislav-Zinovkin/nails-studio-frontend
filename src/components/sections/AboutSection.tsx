'use client'
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from 'next/link';

export default function AboutPage() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <main className="min-h-screen text-[#FFFFF0] flex flex-col">
            
            {/* Head */}
            <header className="pt-24 pb-14 px-4 text-center animate-fadeIn">
                <h1 className="font-tenor text-5xl md:text-7xl uppercase tracking-tighter mb-4">
                    {t.aboutPage.title}
                </h1>
                <p className="font-sans uppercase tracking-[0.3em] text-xs opacity-80">
                    {t.aboutPage.subtitle}
                </p>
            </header>

            {/* Main content */}
            <div className="max-w-4xl mx-auto px-4 pb-24 space-y-12 md:space-y-16 flex-grow">
                
                {/* Philosophy section */}
                <section className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <h2 className="font-tenor text-2xl uppercase mb-8 border-b border-[#10069F]/20 pb-2 text-center mx-auto w-fit">
                        {t.aboutPage.philosophy.title}
                    </h2>
                    <div className="flex gap-6 items-stretch">
                        <div className="w-[1px] bg-gradient-to-b from-[#D1B894] to-transparent opacity-50"></div>
                        <p className="font-sans text-lg leading-relaxed text-[#E2E8F0] py-1">
                            {t.aboutPage.philosophy.desc}
                        </p>
                    </div>
                </section>

                {/* Safety section */}
                <section className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <h2 className="font-tenor text-2xl uppercase mb-10 border-b border-[#10069F]/20 pb-2 text-center mx-auto w-fit">
                        {t.aboutPage.safety.title}
                    </h2>
                    
                    <div className="grid md:grid-cols-3 gap-6 items-start">
                        {t.aboutPage.safety.items.map((item: any, idx: number) => { 
                            const isOpen = activeIndex === idx;
                            const hasDetail = !!item.detail;
                            
                            return (
                                <div 
                                    key={idx} 
                                    onClick={() => hasDetail && setActiveIndex(isOpen ? null : idx)}
                                    className={`flex flex-col p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl 
                                    transition-all duration-700 select-none group min-h-[220px]
                                    ${hasDetail ? 'cursor-pointer' : 'cursor-default'}
                                    ${isOpen ? 'bg-white/10 border-[#D1B894]/40 shadow-lg' : 'hover:bg-white/10'}`}
                                >
                                    <h3 className={`font-sans font-bold uppercase text-[12px] tracking-[0.2em] mb-4 transition-colors duration-300
                                        ${isOpen ? 'text-[#D1B894]' : 'text-white/90'}`}>
                                        {item.title}
                                    </h3>

                                    {/* ОСНОВНИЙ ТЕКСТ - його видно ЗАВЖДИ */}
                                    <p className="font-sans text-sm text-[#E2E8F0]/80 leading-relaxed">
                                        {item.text}
                                    </p>

                                    {/* ДОДАТКОВИЙ КОНТЕНТ - розкриється тільки якщо є item.detail */}
                                    <div className={`grid transition-all duration-700 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="border-t border-white/10 pt-4">
                                                <p className="font-sans text-[13px] text-[#D1B894]/90 italic leading-relaxed">
                                                    {item.detail} 
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Кнопка-індикатор внизу (з'являється тільки якщо є деталі) */}
                                    {hasDetail && (
                                        <div className="mt-auto pt-4 flex items-center justify-between">
                                            <span className="text-[10px] text-[#D1B894] opacity-60 uppercase tracking-widest">
                                                {isOpen ? 'Close' : t.aboutPage.readMore.text}
                                            </span>
                                            <span className={`text-[#D1B894] transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
                                                ↓
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
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