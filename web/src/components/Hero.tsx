import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <div className="space-y-5">
      <Image src={logo} alt="Logo" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          Your timeline
        </h1>
        <p className="text-lg leading-relaxed">
          Collect memorable moments from your journey and share (if you like)
          with the world!
        </p>
      </div>
      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors duration-200 hover:bg-green-600"
        href="/memories/new"
      >
        Resgister memory
      </Link>
    </div>
  )
}

export default Hero
