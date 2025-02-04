import { AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Features() {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Was finden Sie auf dieser Seite?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Feature1 */}
        <Link href="/decision-making">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-indigo-100">
            <AcademicCapIcon className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Entscheidungshilfe</h3>
            <p className="text-gray-700">
              Helfen Sie Ihrer Behörde, die Notwendigkeit und den Nutzen einer Linux-Migration zu bewerten.
            </p>
          </div>
        </Link>
        {/* Feature2 leitfaden */}
        <Link href="/migration-guide">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-blue-100">
            <CheckCircleIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Schritt-für-Schritt-Leitfaden</h3>
            <p className="text-gray-700">
              Erfahren Sie, wie Sie die Migration strategisch und effizient umsetzen.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}