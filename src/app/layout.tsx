import './globals.css'
import Header from '@/components/layout/Header'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { Tenor_Sans, Montserrat } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import SvgSprite from "@/public/SvgSprite"


interface RootLayoutProps {
  children: ReactNode
} 

export const metadata: Metadata = {
  title: 'Nail Studio',
  description: 'Landing page for nail studio',
  icons: {
    icon: '/favicon-new.svg?v=3', 
  },
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
    <html lang="pl" className={`${TenorSans.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
           <SvgSprite/>
           <Header />
           <main >{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
