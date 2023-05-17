import { getUser } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

const Profile = () => {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        className="h-10 w-10 rounded-full"
        src={avatarUrl}
        alt={`${name} Avatar`}
        width={40}
        height={40}
      />
      <p className="max-w-[200px] text-sm leading-snug">
        {name}
        <Link
          href=""
          className="block text-red-400 transition-colors duration-200 hover:text-red-300"
        >
          Sign Out
        </Link>
      </p>
    </div>
  )
}

export default Profile
