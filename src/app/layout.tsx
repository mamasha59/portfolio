import { Metadata } from 'next';
import { Seymour_One } from 'next/font/google';
import './globals.css';
import Providers from './Store/provider';

export const metadata: Metadata = { // seo
  title: 'Front-end Aleksei',
  description: 'Портфолия - Алексей Тихонов',
  keywords: ['Front-end', 'Junior', 'Job-opened', 'Aleksei Tikhonov'],
  authors: [{name:'Aleksei Tikhonov'}],
  publisher: 'Aleksei Tikhonov',
  colorScheme: 'dark',
  themeColor: 'black',
  category: 'technology',
  icons:{
    icon: {
      url:  '/favicon.svg',
      type: "image/svg"
    },
    shortcut: {  url: "/favicon.svg", type: "image/svg" }
  }
}

interface LayoutProps{
  children: React.ReactNode;
}

const seymour = Seymour_One({ // общий шрифт для всего проекта
  weight: ["400"],
  subsets: ['cyrillic'],
  display: "swap",
})

export default function RootLayout({children}: LayoutProps) {
 
  return (
    <html className={`h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto hide-scrollbar ${seymour.className}`} lang="ru">
      <body className='text-lg max-w-7xl mx-auto bg-[#000]'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}