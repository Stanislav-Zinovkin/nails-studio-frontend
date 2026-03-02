'use client'
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Link from 'next/link';
import BookingModal from "@/components/sections/BookingModal";

export default function AboutPage() {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen text-[#F5F5F7] flex flex-col font-sans">
            
            {/* Main text */}
            <div className="pt-24 pb-14 px-4 text-center animate-fadeIn">
                <h1 className="font-tenor text-5xl md:text-7xl uppercase tracking-tighter mb-4 ">
                    {t.aboutPage.title}
                </h1>
                <p className="uppercase tracking-[0.3em] text-xs opacity-80 text-[10px] text-[#F5F5F7]">
                    {t.aboutPage.subtitle}
                </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 pb-24 space-y-12 md:space-y-16 flex-grow">
                
                {/* Phylosophy */}
                <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    <h2 className="font-tenor text-2xl uppercase mb-8 border-b border-[#10069F]/20 pb-2 text-center text-[#F5F5F7] mx-auto w-fit tracking-widest">
                        {t.aboutPage.philosophy.title}
                    </h2>
                    <div className="flex gap-6 items-stretch">
                        <div className="w-[1px] bg-gradient-to-b from-[#10069F] to-transparent opacity-50"></div>
                        <p className="text-lg leading-relaxed text-[#E2E8F0] py-1">
                            {t.aboutPage.philosophy.desc}
                        </p>
                    </div>
                </div>

                {/* Safety */}
                <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
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
                                    ${isOpen ? 'bg-white/10 border-[#10069F]/40 shadow-lg' : 'hover:bg-white/10'}`}
                                >
                                    <h3 className={`font-bold uppercase text-[12px] tracking-[0.2em] mb-4 transition-colors duration-300
                                        ${isOpen ? 'text-[#D1B894]' : 'text-white/90'}`}>
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-[#E2E8F0]/80 leading-relaxed">
                                        {item.text}
                                    </p>

                                    <div className={`grid transition-all duration-700 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="border-t border-white/10 pt-4">
                                                <p className="text-[13px] text-[#D1B894]/90 italic leading-relaxed">
                                                    {item.detail} 
                                                </p>
                                            </div>
                                        </div>
                                    </div>

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
                </div>

                {/* Action Button */}
                <div className="flex justify-center pt-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                    <button 
                        onClick={() => setIsBookingOpen(true)} 
                        className="                      font-sans text-xs uppercase tracking-[0.3em] 
                            text-white border border-white/40 
                            px-10 py-4 
                            rounded-sm 
                            bg-white/5 backdrop-blur-sm
                            hover:bg-white hover:text-[#10069F] hover:border-white
                            transition-all duration-700 ease-in-out 
                            focus:outline-none 
                            shadow-2xl"
                    >
                        {t.aboutPage.cta}
                    </button>
                </div>
                <BookingModal
                        isOpen={isBookingOpen}
                        onClose={() => setIsBookingOpen(false)}
                        t={t}
                        />
            </div>
        </div>
    );
}