'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  //{ name: 'Leitfaden', href: '/' },
  { name: 'Entscheidungsfindung', href: '/decision-making' },
  { name: 'Migration Guide', href: '/migration-guide' },
  { name: 'Wiki', href: '/wiki' },
  { name: 'Über', href: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-300 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <a href="/" className="text-xl font-bold text-gray-900">
          Leitfaden
        </a>
        <div className="hidden lg:flex gap-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-900 hover:text-indigo-500"
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
        <div className="lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

