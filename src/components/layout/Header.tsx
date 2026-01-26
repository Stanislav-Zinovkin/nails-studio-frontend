'use client'

import Link from 'next/link';
import { useState } from 'react';
import { buttonClass, navLinkClass } from '../styles/ui';


const navItems = [
    {href: "#services", label: "Services"},
    {href: "#gallery", label: "Gallery"},
    {href: "#prices", label: "Prices"},
    {href: "#contacts", label: "Contacts"},  
];

export default function Header() {
const [open, setOpen] = useState(false);



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

        {/* CTA Button */}
        <Link
          href="#contacts"
          className="hidden md:block font-sans uppercase tracking-widest border-0 text-[#10069F] rounded-sm px-6 py-2 hover:bg-[#10069F]/80 hover:text-white transition-all focus:outline-none transition-all duration-500 ease-in-out">
            Zapisz
        </Link>

        {/* Mobile Burger */}
        <button 
           className='md:hidden p-2 focus:outline-none text-[#10069F]'
           onClick={() => setOpen(!open)}>
            <div className="text-3xl">{open ? '✕' : '☰'}</div> 
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
          <nav className='md:hidden bg-[#FFF9F0] border-t border-blue-100 shadow-lg animate-fadeIn'>
              <div className='flex flex-col py-6 px-4 gap-6 text-center'>
                  {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className='font-sans text-sm uppercase tracking-widest text-gray-700 hover:text-[#10069F] focus:outline-none'
                        onClick={() => setOpen(false)}>
                          {item.label}
                        </a>
                  ))}
                  <Link
                    href="#contacts"
                    className='border-0 text-[#10069F] py-3 uppercase tracking-widest focus:outline-none'
                    onClick={() => setOpen(false)}>
                      Zapisz
                  </Link>
              </div>
          </nav>
      )}
    </header>
);
}