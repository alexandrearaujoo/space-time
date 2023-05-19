import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-10 p-16">
      <h1>Page not found</h1>
      <Link
        href="/"
        className="underline transition-colors duration-200 hover:text-gray-50"
      >
        Back to homepage
      </Link>
    </section>
  )
}
