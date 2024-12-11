import Link from 'next/link';

export default function DecisionMaking() {
  return (
    <main className=" text-gray-900 min-h-[81vh] py-12">
      <section className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Entscheidungsfindung</h1>
        <p className="text-lg mb-8">
          Willkommen auf der Entscheidungsfindungs-Seite! Hier erhalten Sie Unterstützung bei der Beurteilung, ob eine Migration auf Linux für Ihre Behörde sinnvoll ist. 
          Sie können sich zunächst mit den theoretischen Grundlagen vertraut machen oder direkt den interaktiven Fragebogen ausfüllen.
        </p>
        <div className="space-x-6">
          {/* Button zur Theorie */}
          <Link href="/decision-making/theory">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition">
              Theorie anzeigen
            </button>
          </Link>
          {/* Button zum Fragebogen */}
          <Link href="/decision-making/quiz">
            <button className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition">
              Zum Fragebogen
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
