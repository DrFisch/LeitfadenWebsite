import QuestionsTable from '@/components/decision-making/fragebogen/TableFragebogen';
import { generalQuestions } from '@/data/Fragebogen/generalQuestions';
import { specificQuestions } from '@/data/Fragebogen/specificQuestions';

export default function QuestionnairePage() {
  return (
    <main className="min-h-screen bg-inherit py-12">
      <section className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Fragebogen: Migration auf Linux</h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Beantworten Sie die folgenden Fragen, um eine Einschätzung zu erhalten, ob eine Migration auf Linux für Ihre
          Behörde sinnvoll ist.
        </p>
        <QuestionsTable generalQuestions={generalQuestions} specificQuestions={specificQuestions} />
      </section>
    </main>
  );
}
