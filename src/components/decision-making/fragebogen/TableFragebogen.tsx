'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


type QuestionType = 'dropdown' | 'checkbox';

export interface GeneralQuestion {
  id: string;
  question: string;
  info?: string;
  weight: number;
}

export interface SpecificQuestion {
  id: string;
  question: string;
  type: QuestionType;
  options: string[];
  weights: number[];
}

interface QuestionsTableProps {
  generalQuestions: GeneralQuestion[];
  specificQuestions: SpecificQuestion[];
}

export default function QuestionsTable({ generalQuestions, specificQuestions }: QuestionsTableProps) {
  const [generalAnswers, setGeneralAnswers] = useState<{ [key: string]: string }>({});
  const [specificAnswers, setSpecificAnswers] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const answerLabels: { [key: string]: string } = {
    voll: 'Trifft voll zu',
    zu: 'Trifft zu',
    mittel: 'Mittel',
    wenig: 'Trifft wenig zu',
    'gar-nicht': 'Trifft gar nicht zu',
    'keine-antwort': 'Keine Antwort',
  };

  const handleGeneralAnswerChange = (questionId: string, value: string) => {
    setGeneralAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSpecificAnswerChange = (questionId: string, value: string) => {
    setSpecificAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleEvaluation = () => {
    router.push(
      `/decision-making/fragebogen/auswertung?generalAnswers=${encodeURIComponent(JSON.stringify(generalAnswers))}&specificAnswers=${encodeURIComponent(JSON.stringify(specificAnswers))}`
    );
  };

  return (
    <div className="space-y-8">
      {/* Allgemeine Fragen */}
      <div className="overflow-x-auto">
        <h2 className="text-lg font-bold mb-4 border-b-2 border-gray-600">Allgemeine Fragen</h2>
        <table className="min-w-full border-collapse border border-gray-200 bg-gray-50 shadow-md rounded-lg">
        <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Frage</th>
              {Object.keys(answerLabels).map((option) => (
                <th key={option} className="border border-gray-200 px-4 py-2 text-center">
                  {answerLabels[option]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {generalQuestions.map((q) => (
              <tr key={q.id}>
                <td className="border border-gray-200 px-4 py-2">{q.question}</td>
                {['voll', 'zu', 'mittel', 'wenig', 'gar-nicht', 'keine-antwort'].map((option) => (
                  <td key={option} className="border border-gray-200 px-4 py-2 text-center">
                    <input
                      type="radio"
                      name={q.id}
                      value={option}
                      onChange={(e) => handleGeneralAnswerChange(q.id, e.target.value)}
                      checked={generalAnswers[q.id] === option}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Spezifische Fragen */}
      <div>
        <h2 className="text-lg font-bold mb-4 border-b-2 border-gray-600">Spezifische Fragen</h2>
        {specificQuestions.map((q) => (
          <div key={q.id} className="mb-4">
            <h3 className="text-lg font-bold text-gray-700">{q.question}</h3>
            <select
              value={specificAnswers[q.id] || ''}
              onChange={(e) => {
                const selectedIndex = e.target.selectedIndex - 1;
                if (selectedIndex >= 0) {
                  const selectedWeight = q.weights[selectedIndex];
                  handleSpecificAnswerChange(q.id, selectedWeight.toString());
                }
              }}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>
                Wählen Sie eine Option
              </option>
              {q.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Ergebnisse */}
      <div className="flex justify-end">
        <button
          onClick={handleEvaluation}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Ergebnisse anzeigen
        </button>
      </div>
    </div>
  );
}
