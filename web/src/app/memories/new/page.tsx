import Form from '@/components/Form'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <section className="flex flex-1 flex-col gap-2 p-5 md:p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 transition-colors duration-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to timeline
      </Link>
      <Form />
    </section>
  )
}
