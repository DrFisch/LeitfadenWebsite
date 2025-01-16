import { AcademicCapIcon, ShieldExclamationIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function FutureFeatures() {
  return (
    <section className="min-h-[82vh] container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Ausblick auf zukünftige Funktionen</h2>
      <p className="text-gray-700 text-center mb-10">
        Diese Seite ist ein Prototyp, der Module für die Entscheidungsfindung zur Migration auf Linux und eine Schritt-für-Schritt Anleitung zur Migration auf Linux bietet. In einer
        zukünftigen Version könnten die folgenden Features integriert werden, um die Funktionalitäten zu erweitern.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bewertung und Evaluation */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-yellow-100">
          <ChartBarIcon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Bewertung und Evaluation</h3>
          <p className="text-gray-700">
            Ein Modul zur Analyse des Erfolgs der Migration mit Metriken wie Kostenreduktion, Effizienzsteigerung und Nutzerzufriedenheit.
          </p>
        </div>

        {/* Risikoanalyse */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-red-100">
          <ShieldExclamationIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Risikoanalyse</h3>
          <p className="text-gray-700">
            Ein Tool zur Bewertung und Minimierung potenzieller Risiken einer Migration durch dynamische Risiko-Scores und Empfehlungen.
          </p>
        </div>

        {/* Wiki */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-green-100">
          <AcademicCapIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Wiki</h3>
          <p className="text-gray-700">
            Ein erweitertes Wissensmodul mit detaillierten Informationen zu Open-Source-Software und Linux-Migrationen.
          </p>
        </div>

        {/* Anpassung der mobilen Ansicht */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-blue-100">
          <DevicePhoneMobileIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Anpassung der mobilen Ansicht</h3>
          <p className="text-gray-700">
            Verbesserte Darstellung und Navigation für mobile Geräte, um eine optimale Benutzererfahrung zu gewährleisten.
          </p>
        </div>
      </div>
    </section>
  );
}
