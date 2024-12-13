'use client';

import { useState } from 'react';

interface Question {
  id: string;
  question: string;
}

interface QuestionnaireTableProps {
  questions: Question[];
}

export default function QuestionnaireTable({ questions }: QuestionnaireTableProps) {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200 bg-gray-50 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Frage</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Trifft voll zu</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Trifft zu</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Mittel</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Trifft wenig zu</th>
            <th className="border border-gray-200 px-4 py-2 text-center">Trifft gar nicht zu</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q) => (
            <tr key={q.id}>
              <td className="border border-gray-200 px-4 py-2">{q.question}</td>
              {['voll', 'zu', 'mittel', 'wenig', 'gar-nicht'].map((option) => (
                <td key={option} className="border border-gray-200 px-4 py-2 text-center">
                  <input
                    type="radio"
                    name={q.id}
                    value={option}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    checked={answers[q.id] === option}
                    className="focus:ring-blue-500 text-blue-600"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
      <button
        onClick={() => console.log('Ergebnisse:', answers)}
        className="mt-4 px-6 py-2 bg-blue-500 text-white right-0 rounded-lg hover:bg-blue-600"
      >
        Ergebnisse anzeigen
      </button>
    </div>
    </div>
  );
}
