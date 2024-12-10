import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/">Leitfaden</Link>
        </div>
        <ul className="flex space-x-4">
          
          <li>
            <Link href="/decision-making" className="hover:text-gray-300">
              Entscheidungsfindung
            </Link>
          </li>
          <li>
            <Link href="/migration-guide" className="hover:text-gray-300">
              Leitfaden
            </Link>
          </li>
          <li>
            <Link href="/wiki" className="hover:text-gray-300">
              Wiki
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              Über diese Seite
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
