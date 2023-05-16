import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.svg'

import { User } from 'lucide-react'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/stars.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        <Link
          href=""
          className="flex items-center gap-3 text-left transition-colors duration-200 hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500" />
          </div>
          <p className="max-w-[200px] text-sm leading-snug">
            <span className="underline">Create your account</span> and save your
            memories!
          </p>
        </Link>
        <div className="space-y-5">
          <Image src={logo} alt="Logo" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Your timeline
            </h1>
            <p className="text-lg leading-relaxed">
              Collect memorable moments from your journey and share (if you
              like) with the world!
            </p>
          </div>
          <Link
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors duration-200 hover:bg-green-600"
            href=""
          >
            Resgister memory
          </Link>
        </div>
        <p>
          Made by{' '}
          <Link
            href="https://www.linkedin.com/in/alexandrearaujoo/"
            target="_blank"
            className="underline transition-colors duration-200 hover:text-gray-50"
          >
            Alexandre Araujo
          </Link>
        </p>
      </section>
      <section className="b flex flex-col bg-[url(../assets/stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You haven&apos;t registered any memories yet, starting{' '}
            <Link
              href=""
              className="underline transition-colors duration-200 hover:text-gray-50"
            >
              creating now
            </Link>
            !
          </p>
        </div>
      </section>
    </main>
  )
}
