import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamJuree,
} from 'next/font/google'
import Profile from '@/components/Profile'
import Hero from '@/components/Hero'
import SignIn from '@/components/SignIn'
import { cookies } from 'next/headers'
import Copyright from '@/components/Copyright'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamJuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Timeline',
  description: 'A constructed timeline with NextJS, Tailwind and Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().has('tokenTimeline')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>
        <NextTopLoader color="#5c3ea3" />
        <Toaster position="bottom-right" />
        <main className="grid min-h-screen grid-cols-2">
          <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/stars.svg)] bg-cover px-28 py-16">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </section>
          <section className="b flex flex-col bg-[url(../assets/stars.svg)] bg-cover p-16">
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
