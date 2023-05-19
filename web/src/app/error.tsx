'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="flex h-screen flex-col items-center justify-center gap-10 p-16">
      <h1>Something went wrong or the memory was not found</h1>
      <Link
        href="/"
        className="underline transition-colors duration-200 hover:text-gray-50"
      >
        Back to homepage
      </Link>
    </section>
  )
}
