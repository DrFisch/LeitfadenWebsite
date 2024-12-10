import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative bg-cover text-white py-20"
      style={{ backgroundImage: "url('/wp2.jpg')" }}
    >
{/* Blurry Overlay */}
<div className="absolute inset-0 z-10 backdrop-blur-sm bg-white/1"></div>

      <div className="container mx-auto text-center relative">
        {/* Blurry Box */}
        <div className="relative z-10 backdrop-blur-sm bg-white/4 rounded-lg p-8">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
            Leitfaden zur Linux-Migration
          </h1>
          <p className="text-lg mb-8 drop-shadow-md">
            Willkommen! Diese Website dient als Leitfaden für Behörden, um die Migration von Windows auf Linux effizient
            und erfolgreich umzusetzen.
          </p>
          <div className="space-x-4">
            <Link href="/decision-making">
              <button className="bg-blue-500  px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition">
                Entscheidungshilfe
              </button>
            </Link>
            <Link href="/migration-guide">
              <button className="bg-blue-700  px-6 py-3 rounded-md shadow-lg hover:bg-blue-900 transition">
                Zum Leitfaden
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu blur-3xl"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          backgroundImage: 'linear-gradient(to right, #ff80b5, #9089fc)',
          opacity: 0.3,
        }}
      />
    </section>
  );
}
