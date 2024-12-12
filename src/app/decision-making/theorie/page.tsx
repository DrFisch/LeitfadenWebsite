import { theorySections } from '@/data/theory/theorieContent';
import Tabs from '@/components/decision-making/theorie/Tabs';

export default function TheoryPage() {
  return (
    <main className="min-h-[82vh] bg-inherit py-12">
      <section className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Theorie: Entscheidungsfindung</h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Erfahren Sie die theoretischen Grundlagen zur Prüfung der Machbarkeit und Nutzenbewertung einer Migration auf Linux.
        </p>
        <Tabs items={theorySections} />
        
      </section>
    </main>
  );
}
