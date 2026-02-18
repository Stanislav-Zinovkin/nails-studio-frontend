'use client'

import Link from 'next/link';
import { useState } from 'react';
import {  navLinkClass } from '../styles/ui';
import { useLanguage } from '@/context/LanguageContext';




export default function Header() {
const [open, setOpen] = useState(false);

const {locale, setLocale, t} = useLanguage();
const navItems = [
    {href: "#services", label: t.nav.services},
    {href: "#gallery", label: t.nav.gallery},
    {href: "/prices", label: t.nav.prices},
    {href: "#contacts", label: t.nav.contacts},  
];

return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[#FDF5E6]/65 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="focus:outline-none">
          <svg className='w-16 h-16 fill-[#10069F]'
               viewBox='0 0 24 24'
               xmlns="http://www.w3.org/2000/svg"
               >
            <use href='#icon-logo'/>
          </svg>
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-8'>
            {navItems.map((item) => (
                <a
                 key={item.href}
                 href={item.href}
                 className={`${navLinkClass} font-sans text-sm uppercase tracking-[0.2em] focus:outline-none hover:text-[#10069F] transition-colors`}>
                    {item.label}
                </a>
            ))}
        </nav> 
               {/*Language Switcher*/}
        <div className="flex gap-2 items-center mr-4 border-r border-[#10069F]/10 pr-4">
          {(['pl', 'ua', 'en'] as const).map((lang) => (<button 
              key={lang} 
              onClick={() => setLocale(lang)}
              className={`font-sans text-[10px] uppercase tracking-wider transition-all
              ${locale === lang ? 'text-[#10069F] font-bold' : 'text-[#10069F]/40 hover:text-[#10069F]'}`}>
           {lang}</button>))}

        </div>

        {/* CTA Button */}
        <Link
          href="https://booksy.com/pl-pl/283628_nailspace-vita-mosondz_paznokcie_15608_poznan?do=invite&utm_medium=profile_share_from_profile"
          className="hidden md:block font-sans uppercase tracking-widest border-0 text-[#10069F] rounded-sm px-6 py-2 hover:bg-[#10069F]/80 hover:text-white transition-all focus:outline-none transition-all duration-500 ease-in-out">
            {t.nav.bookvisit}
        </Link>



        {/* Mobile Burger */}
        <button 
           className='md:hidden p-2 focus:outline-none text-[#10069F]'
           onClick={() => setOpen(!open)}>
            <div className="text-3xl">{open ? '✕' : '☰'}</div> 
        </button>
      </div>

      {/* Mobile Menu */}
     
          <nav className={`md:hidden absolute top-full left-0 w-full bg-[#FDF5E6] border-t border-blue-100 shadow-xl
                          transition-all duration-700 ease-in-out overflow-hidden
          ${open ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className='flex flex-col py-6 px-4 gap-6 text-center'>
                  {navItems.map((item, index) => (
                      <a
                        key={item.href}
                        href={item.href}
                        style={{transitionDelay: `${index * 50}ms`}}
                        className={`font-sans text-[12px] uppercase tracking-[0.3em] text-[#10069F]/70 hover:text-[#10069F] transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        onClick={() => setOpen(false)}>
                          {item.label}
                        </a>
                  ))}
                  <Link
                    href="#contacts"
                    style={{ transitionDelay: `${navItems.length * 50}ms`}}
                    className={`font-sans focus:outline-none text-[12px] py-3 uppercase tracking-widest text-[#10069F] font-bold transition-all duration-700 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} `}
                    onClick={() => setOpen(false)}>
                      {t.nav.bookvisit}
                  </Link>
              </div>
          </nav>
    
    </header>
);
}