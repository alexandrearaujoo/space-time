import EmptyMemories from '@/components/EmptyMemories'
import ShareButton from '@/components/ShareButton'
import { Memory } from '@/interfaces'
import { api } from '@/lib/api'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { ArrowRight } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

dayjs.locale(ptBr)

export default async function Home() {
  const isAuthenticated = cookies().has('tokenTimeline')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('tokenTimeline')?.value

  const { data: memories } = await api.get<Memory[]>('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  const isVideo = /\.(mp4)$/

  return (
    <section className="flex flex-col gap-10 p-8">
      <ul>
        {memories.map((memory) => (
          <li key={memory.id} className="space-y-4">
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
              {memory.excerpt}
            </p>
            <div className="flex items-center gap-3 pb-5">
              <Link
                href={`/memories/${memory.id}`}
                className="flex items-center gap-2 text-sm text-gray-200 transition-colors duration-200 hover:text-gray-100"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
              {memory.isPublic && <ShareButton memoryId={memory.id} />}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
