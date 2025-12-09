import './globals.css'
import Header from '@/components/layout/Header'
import { Metadata } from 'next'
import { ReactNode } from 'react'


interface RootLayoutProps {
  children: ReactNode
} 

export const metadata: Metadata = {
  title: 'Nails Studio',
  description: 'Landing page for nail studio',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
