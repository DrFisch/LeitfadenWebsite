import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Leitfaden zur Linux-Migration</h1>
          <p className="text-lg mb-6">
            Willkommen! Diese Website dient als Leitfaden für Behörden, um die Migration von Windows auf Linux effizient und erfolgreich umzusetzen.
          </p>
          <div className="space-x-4">
            <Link href="/decision-making">
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Entscheidungsfindung starten
              </button>
            </Link>
            <Link href="/migration-guide">
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                Zum Leitfaden
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Was finden Sie auf dieser Seite?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Entscheidungsfindung</h3>
            <p>Helfen Sie Ihrer Behörde, die Notwendigkeit und den Nutzen einer Linux-Migration zu bewerten.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Schritt-für-Schritt-Leitfaden</h3>
            <p>Erfahren Sie, wie Sie die Migration strategisch und effizient umsetzen.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Wiki</h3>
            <p>Finden Sie detaillierte Erklärungen und Hintergrundinformationen zu Open Source und Linux.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
