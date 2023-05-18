import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <section className="flex flex-1 flex-col gap-2">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 transition-colors duration-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to timeline
      </Link>
      <form action="" className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 transition-colors duration-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Attach media
          </label>
          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 transition-colors duration-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              id="isPublic"
              name="isPublic"
              value="true"
              className="h-4 w-4 cursor-pointer rounded border-gray-400 bg-gray-700 text-purple-500"
            />
            Make public memory
          </label>
        </div>
        <input type="file" id="media" className="hidden" />
        <textarea
          name="content"
          spellCheck="false"
          placeholder="Feel free to add photos, videos, and stories about that experience you want to remember forever."
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
        />
      </form>
    </section>
  )
}
