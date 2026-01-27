'use client'
import Image from 'next/image'

export default function Footer(){
    return(
        <footer className='bg-[#F2EDE4]cborder-t border-[#10069F]/5 py-12'>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-8'>
           <span className='font-sans text-[11px] uppercase tracking-[0.2em] text-[#10069F]/60 text-center md:text-left'>&copy; 2026 Nails Space. All rigths reserved.</span>

           <div className='flex gap-6 items-center'>
              <a href='#' className='text-[#10069F]/70 hover:text-[#10069F] transition-colors duration-300 focus:outline-none'>
                <svg className='w-6 h-6 stroke-current fill-current'><use href='#icon-instagram'/></svg>
              </a>
              <a href='#' className='text-[#10069F]/70 hover:text-[#10069F] transition-colors duration-300 focus:outline-none'><svg className='w-6 h-6  fill-current'><use href='#icon-facebook'/></svg></a>
              <a href='#' className='text-[#10069F]/70 hover:text-[#10069F] transition-colors duration-300 focus:outline-none'><svg className='w-6 h-9  fill-current'><use href='#icon-phone'/></svg></a>
           </div>
           <div>
              <a href='#' className='font-sans text-[10px] uppercase tracking-[0.2em] text-[#10069F]/70 hover:text-[#10069F] transition-colors duration-300 focus:outline-none'>Privacy Policy</a>

              <a href='#' className='font-sans text-[10px] uppercase tracking-[0.2em] text-[#10069F]/70 hover:text-[#10069F] transition-colors duration-300 focus:outline-none'>  Term of Service</a>
           </div>
          </div>
        </footer>
    )
}