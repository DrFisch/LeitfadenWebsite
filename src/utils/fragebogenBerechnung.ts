import { GeneralQuestion, SpecificQuestion } from '@/components/decision-making/fragebogen/TableFragebogen';

interface GeneralAnswers {
  [key: string]: string; // Antwort-ID -> Antwort-Wert ('voll', 'zu', etc.)
}

interface SpecificAnswers {
  [key: string]: string[] | string; // Antwort-ID -> Antwort-Wert(e)
}

export function berechneScore(
  generalQuestions: GeneralQuestion[],
  specificQuestions: SpecificQuestion[],
  generalAnswers: GeneralAnswers,
  specificAnswers: SpecificAnswers
): number {
  let score = 0;

  // Allgemeine Fragen bewerten
  generalQuestions.forEach((question) => {
    const answer = generalAnswers[question.id];
    const weight = question.weight;

    // Zuordnung von Gewichtungen für allgemeine Antworten
    const answerWeights: { [key: string]: number } = {
      'voll': 5,
      'zu': 4,
      'mittel': 3,
      'wenig': 2,
      'gar-nicht': 1,
      'keine-antwort': 0,
    };

    score += (answerWeights[answer] || 0) * weight;
  });

  // Spezifische Fragen bewerten
  specificQuestions.forEach((question) => {
    const answer = specificAnswers[question.id];

    if (question.type === 'dropdown') {
      const selectedIndex = question.options.indexOf(answer as string);
      if (selectedIndex >= 0 && question.weights) {
        score += question.weights[selectedIndex];
      }
    }

    if (question.type === 'checkbox') {
      const selectedAnswers = answer as string[];
      selectedAnswers?.forEach((selectedOption) => {
        const selectedIndex = question.options.indexOf(selectedOption);
        if (selectedIndex >= 0 && question.weights) {
          score += question.weights[selectedIndex];
        }
      });
    }
  });

  return score;
}
