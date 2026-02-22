'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-[#F2EDE4] border-t border-[#10069F]/5 py-12'>
      <div className='max-w-7xl mx-auto px-6'>

        <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
          <div className='flex justify-center md:justify-start order-2 md:order-1'>
            <span className='font-sans text-[11px] uppercase tracking-[0.2em] text-[#10069F]/60'>
              &copy; 2026 Nails Space. All rights reserved.
            </span>
          </div>
          <div className='flex justify-center items-center gap-8 order-1 md:order-2'>
            <a href='https://www.instagram.com/vitamosondz_nailspace_manicure' 
               className='text-[#10069F]/70 hover:text-[#10069F] transition-all duration-300 transform hover:scale-110'
            >
              <svg className='w-6 h-6 stroke-current fill-current'><use href='#icon-instagram'/></svg>
            </a>
            <a href='#' className='text-[#10069F]/70 hover:text-[#10069F] transition-all duration-300 transform hover:scale-110'>
              <svg className='w-6 h-6 fill-current'><use href='#icon-facebook'/></svg>
            </a>
            <a href='#' className='text-[#10069F]/70 hover:text-[#10069F] transition-all duration-300 transform hover:scale-110'>
              <svg className='w-6 h-9 fill-current'><use href='#icon-phone'/></svg>
            </a>
          </div>
          <div className='flex justify-center md:justify-end gap-6 order-3 uppercase font-sans text-[10px] tracking-[0.2em]'>
            <a href='#' className='text-[#10069F]/70 hover:text-[#10069F] transition-colors duration-300'>
              Privacy Policy
            </a>
            <a href='#' className='text-[#10069F]/70 hover:text-[#10069F] transition-colors duration-300'>
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}