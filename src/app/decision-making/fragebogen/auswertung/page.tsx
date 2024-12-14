'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { generalQuestions } from '@/data/Fragebogen/generalQuestions';

const answerMapping: { [key: string]: string } = {
  voll: 'Trifft voll zu',
  zu: 'Trifft zu',
  mittel: 'Mittel',
  wenig: 'Trifft wenig zu',
  'gar-nicht': 'Trifft gar nicht zu',
  'keine-antwort': 'Keine Antwort',
};

export default function AuswertungPage() {
  const searchParams = useSearchParams();
  const [generalAnswers, setGeneralAnswers] = useState<{ [key: string]: string }>({});
  const [specificAnswers, setSpecificAnswers] = useState<{ [key: string]: string[] | string }>({});
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    // Extrahiere die Daten aus den Query-Parametern
    const generalAnswersParam = searchParams.get('generalAnswers');
    const specificAnswersParam = searchParams.get('specificAnswers');
    const scoreParam = searchParams.get('score');

    if (generalAnswersParam) {
      setGeneralAnswers(JSON.parse(decodeURIComponent(generalAnswersParam)));
    }

    if (specificAnswersParam) {
      setSpecificAnswers(JSON.parse(decodeURIComponent(specificAnswersParam)));
    }

    if (scoreParam) {
      setScore(parseInt(scoreParam, 10));
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Auswertung</h1>

      {/* Gesamtpunktzahl */}
      {score !== null && (
        <div className="mb-8 p-4 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-800">Gesamtpunktzahl</h2>
          <p className="text-lg mt-2">
            Ihre Punktzahl: <span className="font-bold">{score}</span>
          </p>
        </div>
      )}

      {/* Allgemeine Antworten */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600">Allgemeine Fragen</h2>
        <table className="min-w-full border-collapse border border-gray-200 bg-gray-50 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Frage</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Antwort</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Punkte</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Erklärung</th>
            </tr>
          </thead>
          <tbody>
  {Object.entries(generalAnswers).map(([id, answer]) => {
    const question = generalQuestions.find((q) => q.id === id); // Suche die Frage anhand der ID
    return (
      <tr key={id}>
        <td className="border border-gray-200 px-4 py-2">
          {question?.question || 'Frage nicht gefunden'}
        </td>
        <td className="border border-gray-200 px-4 py-2 text-center">
          {answerMapping[answer] || 'Unbekannte Antwort'}
        </td>
        <td className="border border-gray-200 px-4 py-2 text-center">
        {question ? (
            (() => {
            const maxPoints = question.weight * 5; // Maximale Punktzahl für die Frage
            const answerMapping: Record<'voll' | 'zu' | 'mittel' | 'wenig' | 'gar-nicht' | 'keine-antwort', number> = {
                voll: maxPoints,
                zu: question.weight * 4,
                mittel: question.weight * 3,
                wenig: question.weight * 2,
                'gar-nicht': question.weight * 1,
                'keine-antwort': 0,
            };

            const points = answerMapping[answer as keyof typeof answerMapping] ?? 'Wert unbekannt'; // Sicherer Zugriff
            return `${points}/${maxPoints}`;
            })()
        ) : (
            'Frage nicht definiert'
        )}
        </td>
        <td className="border border-gray-200 px-4 py-2">
          {question?.info || 'Keine Erklärung verfügbar'}
        </td>
      </tr>
    );
  })}
</tbody>

        </table>
      </div>

      {/* Spezifische Antworten */}
      <div>
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600">Spezifische Fragen</h2>
        <p>Die spezifischen Antworten werden hier noch nicht angezeigt, sind aber verfügbar.</p>
        <pre className="bg-gray-100 p-4 rounded-lg shadow-md text-sm">
          {JSON.stringify(specificAnswers, null, 2)}
        </pre>
      </div>
    </div>
  );
}
