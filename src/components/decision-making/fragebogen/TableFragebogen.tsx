'use client';

import { useState } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

type QuestionType = 'dropdown' | 'checkbox';

interface GeneralQuestion {
  id: string;
  question: string;
  info?: string;
}

export interface SpecificQuestion {
  id: string;
  question: string;
  type: QuestionType;
  options: string[];
}

interface QuestionnaireTableProps {
  generalQuestions: GeneralQuestion[];
  specificQuestions: SpecificQuestion[];
}

export default function QuestionnaireTable({ generalQuestions, specificQuestions }: QuestionnaireTableProps) {
  const [generalAnswers, setGeneralAnswers] = useState<{ [key: string]: string }>({});
  const [specificAnswers, setSpecificAnswers] = useState<{ [key: string]: string[] | string }>({});

  const handleGeneralAnswerChange = (questionId: string, value: string) => {
    setGeneralAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSpecificAnswerChange = (questionId: string, value: string | string[]) => {
    setSpecificAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Allgemeine Fragen */}
      <div className="overflow-x-auto">
        <h2 className="text-lg font-bold mb-4">Allgemeine Fragen</h2>
        <table className="min-w-full border-collapse border border-gray-200 bg-gray-50 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Frage</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Trifft voll zu</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Trifft zu</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Mittel</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Trifft wenig zu</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Trifft gar nicht zu</th>
              <th className="border border-gray-200 px-4 py-2 text-center">Keine Antwort</th>
            </tr>
          </thead>
          <tbody>
            {generalQuestions.map((q) => (
              <tr key={q.id}>
                <td className="border border-gray-200 px-4 py-2 flex items-center space-x-2">
                  <span>{q.question}</span>
                  {q.info && (
                    <div className="relative group">
                      <QuestionMarkCircleIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
                      <div className="absolute left-0 z-10 hidden w-64 px-4 py-2 text-sm text-white bg-black rounded-lg shadow-lg group-hover:block">
                        {q.info}
                      </div>
                    </div>
                  )}
                </td>
                {['voll', 'zu', 'mittel', 'wenig', 'gar-nicht', 'keine-antwort'].map((option) => (
                  <td key={option} className="border border-gray-200 px-4 py-2 text-center">
                    <input
                      type="radio"
                      name={q.id}
                      value={option}
                      onChange={(e) => handleGeneralAnswerChange(q.id, e.target.value)}
                      checked={generalAnswers[q.id] === option}
                      className="focus:ring-blue-500 text-blue-600"
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
        <h2 className="text-lg font-bold mb-4">Spezifische Fragen</h2>
        {specificQuestions.map((q) => (
          <div key={q.id} className="mb-4">
            <h3 className="text-md font-semibold text-gray-700">{q.question}</h3>
            {q.type === 'dropdown' ? (
              <select
                value={specificAnswers[q.id] || ''}
                onChange={(e) => handleSpecificAnswerChange(q.id, e.target.value)}
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
            ) : (
              <div className="mt-2 space-y-2">
                {q.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={option}
                      onChange={(e) => {
                        const currentValues = specificAnswers[q.id] || [];
                        const newValues = e.target.checked
                          ? [...(currentValues as string[]), option]
                          : (currentValues as string[]).filter((val) => val !== option);
                        handleSpecificAnswerChange(q.id, newValues);
                      }}
                      checked={(specificAnswers[q.id] || []).includes(option)}
                      className="focus:ring-blue-500 text-blue-600"
                    />
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Ergebnisse */}
      <div className="flex justify-end">
        <button
          onClick={() => console.log('Allgemeine Antworten:', generalAnswers, 'Spezifische Antworten:', specificAnswers)}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Ergebnisse anzeigen
        </button>
      </div>
    </div>
  );
}
