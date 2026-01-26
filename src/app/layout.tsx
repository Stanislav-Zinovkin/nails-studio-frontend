import './globals.css'
import Header from '@/components/layout/Header'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Tenor_Sans, Montserrat } from 'next/font/google'


interface RootLayoutProps {
  children: ReactNode
} 

export const metadata: Metadata = {
  title: 'Nails Studio',
  description: 'Landing page for nail studio',
}

 const TenorSans = Tenor_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-tenor'
})

 const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-motserrat'
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main >{children}</main>
        
      </body>
    </html>
  )
}
