import { GeneralQuestion } from '@/components/decision-making/fragebogen/TableFragebogen';

export const generalQuestions: GeneralQuestion[] = [
  {
    id: 'q1',
    question: 'Hat Ihre Behörde wenige bestehende Verträge mit proprietären Anbietern?',
    info: 'Wenige oder auslaufende Verträge mit proprietären Anbietern ermöglichen eine reibungslosere Migration.',
    weight: 3, // Beispielgewicht
  },
  {
    id: 'q2',
    question: 'Ist die vorhandene Hardware kompatibel mit Linux?',
    info: 'Wenn Ihre Hardware Linux-kompatibel ist, reduzieren sich die Kosten und der Aufwand der Migration erheblich.',
    weight: 4, // Beispielgewicht
  },
  {
    id: 'q3',
    question: 'Verfügen Ihre Mitarbeiter über grundlegende IT-Kenntnisse?',
    info: 'Mitarbeiter mit IT-Kenntnissen können schneller auf neue Systeme geschult werden.',
    weight: 3, // Beispielgewicht
  },
  {
    id: 'q4',
    question: 'Nutzen Sie bereits Open-Source-Software in Ihrer Behörde?',
    info: 'Die Nutzung von Open-Source-Software ist ein guter Indikator für die Bereitschaft Ihrer Behörde zur Migration.',
    weight: 2, // Beispielgewicht
  },
  {
    id: 'q5',
    question: 'Gibt es strategische Ziele für eine IT-Modernisierung?',
    info: 'Klare strategische Ziele fördern die Planung und Umsetzung einer erfolgreichen Migration.',
    weight: 3, // Beispielgewicht
  },
  {
    id: 'q6',
    question: 'Sind Ihre aktuellen IT-Systeme modular aufgebaut?',
    info: 'Modulare Systeme sind einfacher in eine Linux-Umgebung zu integrieren.',
    weight: 4, // Beispielgewicht
  },
  {
    id: 'q7',
    question: 'Hat Ihre Behörde eine klare Strategie für die Schulung von Mitarbeitern?',
    info: 'Ein Trainingsplan kann den Widerstand gegenüber neuen Technologien minimieren.',
    weight: 3, // Beispielgewicht
  },
  {
    id: 'q8',
    question: 'Gibt es in Ihrer Behörde Interesse an der Förderung digitaler Souveränität?',
    info: 'Digitale Souveränität stärkt die Kontrolle über Ihre IT-Infrastruktur und Daten.',
    weight: 4, // Beispielgewicht
  },
  {
    id: 'q9',
    question: 'Sind Ihre derzeitigen IT-Prozesse stark standardisiert?',
    info: 'Standardisierte Prozesse erleichtern die Anpassung an eine neue Umgebung.',
    weight: 2, // Beispielgewicht
  },
  {
    id: 'q10',
    question: 'Ist Ihre Behörde bereit, in Schulungen und Beratung zu investieren?',
    info: 'Investitionen in Schulungen und Beratung können den Erfolg einer Migration erheblich steigern.',
    weight: 1, // Beispielgewicht
  },
];
