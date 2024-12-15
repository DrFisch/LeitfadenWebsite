'use client';

import { useEffect, useState } from 'react';
import Auswertung from '@/components/decision-making/fragebogen/auswertung/Auswertung';

export default function AuswertungPage() {
  const [generalAnswers, setGeneralAnswers] = useState<{ [key: string]: string }>({});
  const [specificAnswers, setSpecificAnswers] = useState<{ [key: string]: string[] | string }>({});
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    const generalAnswersParam = query.get('generalAnswers');
    const specificAnswersParam = query.get('specificAnswers');
    const scoreParam = query.get('score');

    if (generalAnswersParam) setGeneralAnswers(JSON.parse(decodeURIComponent(generalAnswersParam)));
    if (specificAnswersParam) setSpecificAnswers(JSON.parse(decodeURIComponent(specificAnswersParam)));
    if (scoreParam) setScore(parseInt(scoreParam, 10));
  }, []);

  return (
    <main className="min-h-screen bg-inherit ">
      <Auswertung generalAnswers={generalAnswers} specificAnswers={specificAnswers} score={score} />
    </main>);
}
