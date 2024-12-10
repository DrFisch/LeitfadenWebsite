'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Entscheidungsfindung', href: '/decision-making' },
  { name: 'Migration Guide', href: '/migration-guide' },
  { name: 'Wiki', href: '/wiki' },
  { name: 'Über', href: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Aktueller Pfad

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <a href="/" className="text-xl font-bold text-black">
          Leitfaden
        </a>
        <div className="hidden lg:flex gap-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold px-2 py-1 rounded-md transition-all ${
                pathname === item.href
                  ? 'text-white bg-indigo-900'
                  : 'text-white hover:text-white hover:bg-indigo-600'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                pathname === item.href
                  ? 'bg-indigo-700 text-indigo-200'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
