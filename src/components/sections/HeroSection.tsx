'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
{/*className='container' */}
export default function HeroSection() {
  const {t} = useLanguage();
  return (
    <section
      id='hero'
      className='relative  w-full h-screen flex items-center justify-center'
    >
      {/* --- BACKGROUND IMAGE
      <picture>
        <source srcSet='/Hero-1x.webp, /Hero-2x.webp' type='image/webp'/>
        <img
          src='/Hero-4x.webp'
          alt='Hero image'
          className='w-screen h-screen '/>
      </picture> --- */}

      {/* --- TEXT OVERLAY --- */}
      <div className=' absolute inset-0 flex flex-col items-center justify-center px-6 md:px-20 bg-gray-950/3'>
        <h1 className='font-title text-4xl md:text-7xl text-white leading-tight uppercase tracking-wide animate-fadeIn'>
          {t.hero.title}
        </h1>
        <p className='mb-12 font-sans text-sm md:text-base text-gray-100 max-w-lg uppercase tracking-[0.2em] opacity-90'>
          {t.hero.subtitle}
        </p>
        <Link
          href='/about'
          className="
                      font-sans text-xs uppercase tracking-[0.3em] 
                      text-white border border-white/40 
                      px-10 py-4 
                      rounded-sm 
                      bg-white/5 backdrop-blur-sm
                      hover:bg-white hover:text-[#10069F] hover:border-white
                      transition-all duration-700 ease-in-out 
                      focus:outline-none 
                      shadow-2xl
                    "
                   >
          {t.hero.cta}
        </Link>
      </div>
    </section>
  )
}
