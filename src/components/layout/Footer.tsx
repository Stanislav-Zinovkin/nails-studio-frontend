'use client'
import Image from 'next/image'

export default function Footer(){
    return(
        <footer className='w-full bg-gray-900 text-gray-200 py-8'>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-betwee items-center px-6 gap-4'>
           <span className='text-sm'>&copy; 2025 Nails Studio by Wita M. All rigths reserved.</span>

           <div className='flex gap-4'>
              <a href='#' className='hover:text-pink-500'>
                <svg className='w-8 h-8 stroke-current fill-white'><use href='/icons.svg#icon-instagram'/></svg>
              </a>
              <a href='#' className='hover:text-pink-500'><svg className='w-8 h-8 stroke-current fill-white'><use href='/icon-facebook'/></svg></a>
              <a href='#' className='hover:text-pink-500'><svg className='w-8 h-8 stroke-current fill-white'><use href='/icon-phone'/></svg></a>
           </div>
           <div>
              <a href='#' className='hover:text-pink-500'>Privacy Policy</a>

              <a href='#' className='hover:text-pink-500'>  Term of Service</a>
           </div>
          </div>
        </footer>
    )
}