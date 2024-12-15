'use client';

import React from 'react';
import { generalQuestions } from '@/data/Fragebogen/generalQuestions';

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
  specificAnswers: { [key: string]: string[] | string };
  score: number | null;
}

const Auswertung: React.FC<AuswertungProps> = ({ generalAnswers, specificAnswers, score }) => {
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
              <th className="border border-gray-200 px-4 py-2 text-center">Übereinstimmung</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Erklärung</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(generalAnswers).map(([id, answer]) => {
              const question = generalQuestions.find((q) => q.id === id);

              if (!question) return null;

              const maxPoints = question.weight * 5;
              const answerPoints: Record<
                'voll' | 'zu' | 'mittel' | 'wenig' | 'gar-nicht' | 'keine-antwort',
                number
              > = {
                voll: maxPoints,
                zu: question.weight * 4,
                mittel: question.weight * 3,
                wenig: question.weight * 2,
                'gar-nicht': question.weight * 1,
                'keine-antwort': 0,
              };

              // Sicherstellen, dass der Key zum Typ passt
              const points = answerPoints[answer as keyof typeof answerPoints] || 0;

              const percentage = Math.round((points / maxPoints) * 100);

              // Set background color based on percentage
              const bgColor =
                percentage > 75
                  ? 'bg-green-200 text-green-800'
                  : percentage > 40
                  ? 'bg-yellow-200 text-yellow-800'
                  : 'bg-red-200 text-red-800';

              return (
                <tr key={id}>
                  <td className="border border-gray-200 px-4 py-2">{question.question}</td>
                  <td className="border border-gray-200 px-4 py-2 text-center">{answerMapping[answer] || 'Unbekannte Antwort'}</td>
                  <td
                    className={`border border-gray-200 px-4 py-2 text-center font-bold ${bgColor}`}
                  >
                    {percentage}%
                  </td>
                  <td className="border border-gray-200 px-4 py-2">{question.info || 'Keine Erklärung verfügbar'}</td>
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
};

export default Auswertung;
