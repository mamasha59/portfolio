import { Metadata } from 'next';
import { Seymour_One } from 'next/font/google'
import './globals.css';

export const metadata: Metadata = { // seo
  title: 'Front-end Aleksei',
  description: 'Портфолия - Алексей Тихонов',
}

interface LayoutProps{
  children: React.ReactNode;
}

const inter = Seymour_One({ // общий шрифт для всего проекта
  subsets: ['cyrillic'],
  display: "swap",
  weight: ["400"],
})

export default function RootLayout({children}: LayoutProps) {
 
  return (
    <html className={`h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto hide-scrollbar ${inter.className}`} lang="ru">
      <body className='text-lg max-w-7xl mx-auto bg-[#000] text-[#f2d6d6]'>
          {children}
          <div className="fixed top-1/2 left-1/2 h-[1px] w-[1px] bg-[#fff] -z-10 rounded-full shadow-stars animate-zoomSpace animate-pulse"></div>
      </body>
    </html>
  )
}