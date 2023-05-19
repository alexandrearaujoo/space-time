import { Memory } from '@/interfaces'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'

import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

dayjs.locale(ptBr)

export default async function MemoryPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  const token = cookies().get('tokenTimeline')?.value

  const { data: memory } = await api.get<Memory>(`/memories/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  const isVideo = /\.(mp4)$/

  return (
    <section className="flex flex-col gap-10 p-8">
      <div className="space-y-4">
        <time className="-ml-8 flex items-center justify-end gap-2 text-sm text-gray-100 after:h-px after:w-5 after:bg-gray-50 md:justify-start md:before:h-px md:before:w-5 md:before:bg-gray-50 md:after:h-0">
          {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
        </time>
        {isVideo.test(memory.coverUrl) ? (
          <video src={memory.coverUrl} controls muted />
        ) : (
          <Image
            src={memory.coverUrl}
            alt="Cover URL"
            width={592}
            height={290}
            className="aspect-video w-full rounded-lg object-cover"
          />
        )}
        <p className="text-lg leading-relaxed text-gray-100">
          {memory.content}
        </p>
        <Link
          href="/"
          className="mt-8 block text-end text-sm text-gray-200 underline transition-colors duration-200 hover:text-gray-100"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  )
}
