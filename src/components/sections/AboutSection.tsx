'use client'

import { useLanguage } from "@/context/LanguageContext";
import Link from 'next/link';

export default function aboutPage() {
    const {t} = useLanguage();

    return(
        <main className="min-h-screen bg-[#FDF5E6] text-[#10069F]">
            {/*Заголовок */}
            <section className="pt-32 pb-16 px-4 text-center">
                <h1 className="font-tenor text-5xl md:text-7xl uppercase tracking-tighter mb-4">
                   {t.aboutPage.title}
                </h1>
                <p className="font-sans uppercase tracking-[0.3em] text-xs opacity-70">
                   {t.aboutPage.subtitle}
                </p>
            </section>
            <div className="max-w-4xl mx-auto px-4 pb-24">
                <section className="mb-20">
                    <h2 className="font-tenor text-2xl uppercase mb-8 border-b border-[#10069F]/20 pb-2">
                      {t.aboutPage.philosophy.title}
                    </h2>
                    <p className="font-sans text-lg leading-relaxed text-gray-800 first-letter:text-5xl first-letter:font-tenor first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      {t.aboutPage.philosophy.desc}
                    </p>
                </section>
            </div>
            <section className="mb-20">
          <h2 className="font-tenor text-2xl uppercase mb-10 border-b border-[#10069F]/20 pb-2">
            {t.aboutPage.safety.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {t.aboutPage.safety.items.map((item, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="font-sans font-bold uppercase text-sm tracking-widest">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-gray-700 leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Заклик до дії */}
        <div className="flex justify-center pt-10">
          <Link 
            href="/#contacts" 
            className="px-12 py-4 border border-[#10069F] hover:bg-[#10069F] hover:text-white transition-all duration-500 font-sans uppercase tracking-widest text-xs"
          >
            {t.aboutPage.cta}
          </Link>
        </div>
    
        </main>
    )
}