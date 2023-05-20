'use client'

import { toast } from 'react-hot-toast'

const isBrowser = () => typeof window !== 'undefined'

const ShareButton = ({ memoryId }: { memoryId: string }) => {
  const shareData = {
    title: 'My Memory',
    text: 'Check out my memory',
    url: isBrowser() ? `${window.location.href}memories/${memoryId}` : '',
  }

  const handleClick = async () => {
    try {
      await navigator.share(shareData)
    } catch (error) {
      toast.error('Failed to share')
    }
  }

  return (
    <button
      onClick={handleClick}
      className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors duration-200 hover:bg-green-600"
    >
      Share Memory
    </button>
  )
}

export default ShareButton
