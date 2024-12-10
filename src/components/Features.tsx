export default function Features() {
    return (
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Was finden Sie auf dieser Seite?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Entscheidungsfindung</h3>
            <p>
              Helfen Sie Ihrer Behörde, die Notwendigkeit und den Nutzen einer Linux-Migration zu bewerten.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Schritt-für-Schritt-Leitfaden</h3>
            <p>Erfahren Sie, wie Sie die Migration strategisch und effizient umsetzen.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Wiki</h3>
            <p>Finden Sie detaillierte Erklärungen und Hintergrundinformationen zu Open Source und Linux.</p>
          </div>
        </div>
      </section>
    );
  }
  