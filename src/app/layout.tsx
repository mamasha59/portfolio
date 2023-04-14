import { Metadata } from 'next';
import { Seymour_One } from 'next/font/google'
import './globals.css';

export const metadata: Metadata = {
  title: 'Front-end Aleksei',
  description: 'Портфолия - Алексей Тихонов',
}

interface LayoutProps{
  children: React.ReactNode;
}

const inter = Seymour_One({ 
  subsets: ['cyrillic'],
  display: "swap",
  weight: ["400"]
})

export default function RootLayout({children}: LayoutProps) {
 
  return (
    <html className={`h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto hide-scrollbar ${inter.className}`} lang="ru">
      <body className='text-lg px-3 py-6 max-w-7xl mx-auto my-0 bg-[#000] text-[#f2d6d6]'>
          {children}
      </body>
    </html>
  )
}