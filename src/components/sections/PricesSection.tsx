'use client'
import { useLanguage } from "@/context/LanguageContext";


export default function PricesSection() {

    const {t} = useLanguage();

    const PriceRow = ({ name, price }:{ name: string, price: string }) => (
        <div className="flex justify-between items-end py-4 border-b border-white/10 group hover:border-[#FFFFF0]/40 transition-all duration-300">
            <span className="font-sans taxt-white/80 uppercase tracking-widest text-sm group-hover:text-[#FFFFF0] transition-colors">{name}</span>
            <div className="flex-gorw mx-4 border-b border-dotted border-white/20 mb-1 group-hover:border-white/40 transition-colors"></div>
            <span className="font-tenor text-[#10069F] font-bold">{price}<span className="text-xs ml-1 opacity-60 font-sans font-normal"> zł</span></span>
        </div>
    );
    return (
        <section className="max-w-3xl mx-auto px-4 pt-16 pb-24 text-[#FFFFF0]">
            <h2 className="font-tenor text-4xl text-center uppercase mb-20 tracking-[0.2em] animate-fadeIn">{t.pricesPage.title}</h2>
            <div className="space-y-16">
            {/*Manicure*/}
            <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-tenor text-xl uppercase mb-8 text-[#D1B894] tracking-widest border-l-2 border-[#D1B894] pl-4">{t.pricesPage.categories.manicure}</h3>
                <PriceRow name={t.pricesPage.services.hybrid} price="150"/>
                <PriceRow name={t.pricesPage.services.gel} price="170"/>
                <PriceRow name={t.pricesPage.services.extension} price="od 190"/>
                <PriceRow name={t.pricesPage.services.classic} price="100"/>
                <PriceRow name={t.pricesPage.services.withColor} price="110"/>
            </div>
            {/*Pedicure*/}
            <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-tenor text-xl uppercase mb-8 text-[#D1B894] tracking-widest border-l-2 border-[#D1B894] pl-4">{t.pricesPage.categories.pedicure}</h3>
                <PriceRow name={t.pricesPage.services.pododisk} price="130"/>
                <PriceRow name={t.pricesPage.services.pdColor} price="150"/>
                <PriceRow name={t.pricesPage.services.pdHybrid} price="170"/>
            </div>
            {/*MAVEX*/}
            <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-tenor text-xl uppercase mb-8 text-[#D1B894] tracking-widest border-l-2 border-[#D1B894] pl-4">{t.pricesPage.categories.mavex}</h3>
                <PriceRow name={t.pricesPage.services.mavexClassic} price="170"/>
                <PriceRow name={t.pricesPage.services.mavexColor} price="190"/>
                <PriceRow name={t.pricesPage.services.mavexHybrid} price="210"/>
            </div>
            {/*Extra*/}
            <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                <h3 className="font-tenor text-xl uppercase mb-8 text-[#D1B894] tracking-widest border-l-2 border-[#D1B894] pl-4">{t.pricesPage.categories.extras}</h3>
                <PriceRow name={t.pricesPage.services.removal} price="100"/>
                <PriceRow name={t.pricesPage.services.repair} price="???"/>
            </div>
            </div>
        </section>
    )
}