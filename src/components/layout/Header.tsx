'use client'

import Link from 'next/link';
import { useState } from 'react';


const navItems = [
    {href: "#services", label: "Services"},
    {href: "#gallery", label: "Gallery"},
    {href: "#prices", label: "Prices"},
    {href: "#contacts", label: "Contacts"},  
];

export default function Header() {
const [open, setOpen] = useState(false);



return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <svg className='w-20 h-20 fill-current'
               viewBox='0 0 24 24'
               xmlns="http://www.w3.org/2000/svg"
               >
            <use href='#icon-logo'/>
          </svg>
        </Link>

        {/*Desktop Menu*/}
        <nav className='hidden md:flex gap-8 text-lg'>
            {navItems.map((item) => (
                <a
                 key={item.href}
                 href={item.href}
                 className='hover:text-pink-500 transition'>{item.label}</a>
            ))}
        </nav>
        {/*CTA Button*/}
        <Link
          href="#contacts"
          className='hidden md:block bg-pink-500 text-white px-5 py-3 rounded-full hover:bg-pink-600 transition'>Zapisz</Link>
        {/*Mobile Burger*/}
        <button 
           className='md:hidden'
           onClick={() => setOpen(!open)}>
            <div className="text-3xl">☰</div> 
        </button>
        </div>
        {/*Mobile Menu*/}
        {open && (
            <nav className='md:hidden bg-white border-t shadow-md'>
                <div className='flex flex-col py-4 px-4 gap-4'>
                    {navItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className='text-lg hover:text-pink-500 transition'
                          onClick={() => setOpen(false)}>
                            {item.label}
                          </a>
                    ))}
                    <Link
                      href="#contacts"
                      className='bg-pink-500 text-white px-4 py-2 rounded-full text-center hover:bg-pink-600 transition'>Zapisz</Link>
                </div>
            </nav>
        )}
    </header>
);


}