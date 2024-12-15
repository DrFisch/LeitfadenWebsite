'use client';

import { useEffect, useState } from 'react';
import Auswertung from '@/components/decision-making/fragebogen/auswertung/Auswertung';

export default function AuswertungPage() {
  const [generalAnswers, setGeneralAnswers] = useState<{ [key: string]: string }>({});
  const [specificAnswers, setSpecificAnswers] = useState<{ [key: string]: string[] | string }>({});
  

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
  
    const generalAnswersParam = query.get('generalAnswers');
    const specificAnswersParam = query.get('specificAnswers');
  
    if (generalAnswersParam) setGeneralAnswers(JSON.parse(decodeURIComponent(generalAnswersParam)));
    
    if (specificAnswersParam) {
      const parsedSpecificAnswers = JSON.parse(decodeURIComponent(specificAnswersParam));
      const formattedSpecificAnswers: { [key: string]: string } = Object.keys(parsedSpecificAnswers).reduce(
        (acc, key) => {
          acc[key] = Array.isArray(parsedSpecificAnswers[key])
            ? parsedSpecificAnswers[key].join(', ') // Konvertiere string[] zu string
            : parsedSpecificAnswers[key];
          return acc;
        },
        {} as { [key: string]: string }
      );
      setSpecificAnswers(formattedSpecificAnswers);
    }
  }, []);
  

  return (
    <main className="min-h-screen bg-inherit ">
      <Auswertung generalAnswers={generalAnswers} specificAnswers={specificAnswers}  />
    </main>);
}
