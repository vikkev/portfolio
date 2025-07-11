import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
          />
        </div>

        {/* Menu */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projetos">Projetos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
