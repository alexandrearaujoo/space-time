import Link from 'next/link'

const Copyright = () => {
  return (
    <p>
      Made by{' '}
      <Link
        href="https://www.linkedin.com/in/alexandrearaujoo/"
        target="_blank"
        className="underline transition-colors duration-200 hover:text-gray-50"
      >
        Alexandre Araujo
      </Link>
    </p>
  )
}

export default Copyright
