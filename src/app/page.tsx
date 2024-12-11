import Hero from '../components/Hero';
import Features from '../components/Features';

export default function HomePage() {
  return (
    <main className="bg-inherit text-gray-900 flex-grow">
      
      <Hero
        title="Leitfaden zur Linux-Migration"
        description="Willkommen! Diese Website dient als Leitfaden für Behörden, um die Migration von Windows auf Linux effizient und erfolgreich umzusetzen."
        backgroundImage="/wp2.jpg"
        buttons={[
          { text: 'Entscheidungshilfe', href: '/decision-making', style: 'bg-blue-500 hover:bg-blue-600' },
          { text: 'Zum Leitfaden', href: '/migration-guide', style: 'bg-blue-700 hover:bg-blue-900' },
        ]}
      />

      <Features />
    </main>
  );
}