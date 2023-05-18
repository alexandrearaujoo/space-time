import { getUser } from '@/lib/auth'
import Image from 'next/image'

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
        <a
          href="/api/auth/logout"
          className="block text-red-400 transition-colors duration-200 hover:text-red-300"
        >
          Logout
        </a>
      </p>
    </div>
  )
}

export default Profile
