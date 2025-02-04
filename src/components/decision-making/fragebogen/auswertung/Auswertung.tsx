'use client';

import React from 'react';
import { generalQuestions } from '@/data/Fragebogen/generalQuestions';
import { specificQuestions } from '@/data/Fragebogen/specificQuestions';

const answerMapping: { [key: string]: string } = {
  voll: 'Trifft voll zu',
  zu: 'Trifft zu',
  mittel: 'Mittel',
  wenig: 'Trifft wenig zu',
  'gar-nicht': 'Trifft gar nicht zu',
  'keine-antwort': 'Keine Antwort',
};

interface AuswertungProps {
  generalAnswers: { [key: string]: string };
  specificAnswers: { [key: string]: string | string[] };
}

const Auswertung: React.FC<AuswertungProps> = ({ generalAnswers, specificAnswers }) => {
  let erreichtePunkte = 0;
  let möglichePunkte = 0;

  // brechnung allgemeinen Fragen
  Object.entries(generalAnswers).forEach(([id, answer]) => {
    const question = generalQuestions.find((q) => q.id === id);
    if (!question || answer === 'keine-antwort') return;

    const maxPoints = question.weight * 5;
    möglichePunkte += maxPoints;

    const answerPoints: Record<'voll' | 'zu' | 'mittel' | 'wenig' | 'gar-nicht', number> = {
      voll: maxPoints,
      zu: question.weight * 4,
      mittel: question.weight * 3,
      wenig: question.weight * 2,
      'gar-nicht': question.weight * 1,
    };

    erreichtePunkte += answerPoints[answer as keyof typeof answerPoints] || 0;
  });

  // berechnung der spezifischen Fragen
  specificQuestions.forEach((q) => {
    const weight = specificAnswers[q.id];
    if (weight) {
      if (typeof weight === 'string') {
        erreichtePunkte += parseInt(weight, 10);
      }
      möglichePunkte += Math.max(...q.weights);
    }
  });

  const prozent = möglichePunkte > 0 ? Math.round((erreichtePunkte / möglichePunkte) * 100) : 0;

  const resultBgColor =
    prozent > 75
      ? 'bg-green-100 text-green-800'
      : prozent > 40
      ? 'bg-yellow-200 text-yellow-800'
      : 'bg-red-200 text-red-800';

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Auswertung</h1>

      {/* Gesamtpunktzahl */}
      <div className={`mb-8 p-4 rounded-lg shadow-md ${resultBgColor}`}>
        <h2 className="text-2xl font-semibold">Ergebnis</h2>
        <p className="text-lg mt-2">
          Ihre Punktzahl: <span className="font-bold">{erreichtePunkte}</span> von{' '}
          <span className="font-bold">{möglichePunkte}</span> möglichen Punkten
        </p>
        <p className="text-lg mt-2">
          Übereinstimmung: <span className="font-bold">{prozent}%</span> –{' '}
          {prozent > 75
            ? 'Eine Migration bietet sich stark an.'
            : prozent > 40
            ? 'Eine Migration könnte in Betracht gezogen werden.'
            : 'Eine Migration ist derzeit weniger sinnvoll.'}
        </p>
      </div>

      {/* Allgemeine Fragen */}
<div className="mb-8">
  <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600">Allgemeine Fragen</h2>
  <table className="min-w-full border-collapse border border-gray-200 bg-gray-50 shadow-md rounded-lg">
    <thead>
      <tr>
        <th className="border border-gray-200 px-4 py-2 text-left w-1/3">Frage</th>
        <th className="border border-gray-200 px-4 py-2 text-center w-1/6">Antwort</th>
        <th className="border border-gray-200 px-4 py-2 text-center w-1/6">Übereinstimmung</th>
        <th className="border border-gray-200 px-4 py-2 text-left w-1/3">Erklärung</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(generalAnswers).map(([id, answer]) => {
        const question = generalQuestions.find((q) => q.id === id);

        if (!question) return null;

        const maxPoints = question.weight * 5;
        const answerPoints: Record<'voll' | 'zu' | 'mittel' | 'wenig' | 'gar-nicht', number> = {
          voll: maxPoints,
          zu: question.weight * 4,
          mittel: question.weight * 3,
          wenig: question.weight * 2,
          'gar-nicht': question.weight * 1,
        };

        const points = answer === 'keine-antwort' ? null : answerPoints[answer as keyof typeof answerPoints];
        const percentage = points !== null ? Math.round((points / maxPoints) * 100) : null;

        const bgColor =
          percentage !== null
            ? percentage > 75
              ? 'bg-green-200 text-green-800'
              : percentage > 40
              ? 'bg-yellow-200 text-yellow-800'
              : 'bg-red-200 text-red-800'
            : 'bg-gray-200 text-gray-600';

        return (
          <tr key={id}>
            <td className="border border-gray-200 px-4 py-2">{question.question}</td>
            <td className="border border-gray-200 px-4 py-2 text-center">{answerMapping[answer]}</td>
            <td
              className={`border border-gray-200 px-4 py-2 text-center font-bold ${bgColor}`}
            >
              {points === null ? 'Keine Antwort' : `${percentage}%`}
            </td>
            <td className="border border-gray-200 px-4 py-2">{question.info || 'Keine Erklärung verfügbar'}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

{/* Spezifische Fragen */}
<div>
  <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600">Spezifische Fragen</h2>
  <table className="min-w-full border-collapse border border-gray-200 bg-gray-50 shadow-md rounded-lg">
    <thead>
      <tr>
        <th className="border border-gray-200 px-4 py-2 text-left w-1/3">Frage</th>
        <th className="border border-gray-200 px-4 py-2 text-center w-1/6">Antwort</th>
        <th className="border border-gray-200 px-4 py-2 text-center w-1/6">Übereinstimmung</th>
        <th className="border border-gray-200 px-4 py-2 text-left w-1/3">Erklärung</th>
      </tr>
    </thead>
    <tbody>
      {specificQuestions.map((q) => {
        const weight = specificAnswers[q.id];
        const maxWeight = Math.max(...q.weights);
        const percentage =
          weight && typeof weight === 'string'
            ? Math.round((parseInt(weight, 10) / maxWeight) * 100)
            : null;

        const bgColor =
          percentage !== null
            ? percentage > 75
              ? 'bg-green-200 text-green-800'
              : percentage > 40
              ? 'bg-yellow-200 text-yellow-800'
              : 'bg-red-200 text-red-800'
            : 'bg-gray-200 text-gray-600';

        const index = q.weights.findIndex((w) => w.toString() === weight);

        // Erklärung zur Frage basierend auf der ID
        const explanationMap: { [key: string]: string } = {
          sq1: 'Weniger Fachverfahren unterstützen die Migration, da weniger geprüft oder angepasst werden muss.',
          sq2: 'Ein niedriger Anteil proprietärer Software erleichtert die Migration.',
          sq4: 'Schlechter Support macht die Migration einfacher, da weniger Bindung besteht.',
          sq5: 'Größere IT-Teams können die Migration besser unterstützen.',
          sq6: 'Zentralisierte Verwaltung erleichtert die Migration.',
          sq7: 'Weniger Server bedeuten geringeren Migrationsaufwand.',
          sq9: 'Hohe Akzeptanz der Mitarbeiter erleichtert die Migration.',
          sq10: 'Weniger Dienstleister vereinfachen die Migrationskoordination.',
        };

        return (
          <tr key={q.id}>
            <td className="border border-gray-200 px-4 py-2">{q.question}</td>
            <td className="border border-gray-200 px-4 py-2 text-center">{q.options[index] || 'Keine Antwort'}</td>
            <td
              className={`border border-gray-200 px-4 py-2 text-center font-bold ${bgColor}`}
            >
              {percentage === null ? 'Keine Antwort' : `${percentage}%`}
            </td>
            <td className="border border-gray-200 px-4 py-2">{explanationMap[q.id]}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Auswertung;
