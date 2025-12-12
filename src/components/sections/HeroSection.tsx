'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='relative w-full h-screen flex items-center justify-center'
    >
      {/* --- BACKGROUND IMAGE --- */}
      <Image
        src='/brocarot-bmw.jpg'
        alt='BMW e34 the best car ever'
        fill
        className='object-cover'
        priority
      />

      {/* --- TEXT OVERLAY --- */}
      <div className='absolute inset-0 flex flex-col items-start justify-center px-6 md:px-20 bg-gray-900/40'>
        <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight'>
          Nails Studio by Vita M.
        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-200 max-w-lg'>
          TUT BYDE TEXT PRO TE JAKA VITA HAROSHA MASTERITSA I T.D. T.P.
        </p>
        <Link
          href='#contacts'
          className='mt-6 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg transition shadow-lg hover:shadow-xl'
        >
          Services
        </Link>
      </div>
    </section>
  )
}
