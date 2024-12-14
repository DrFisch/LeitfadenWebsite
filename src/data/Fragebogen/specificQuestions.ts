import { SpecificQuestion } from '@/components/decision-making/fragebogen/TableFragebogen';

export const specificQuestions: SpecificQuestion[]= [
    {
      id: 'sq1',
      question: 'Wie viele Fachverfahren werden derzeit in Ihrer Behörde verwendet?',
      type: 'dropdown',
      options: ['Weniger als 5', '5 bis 10', '11 bis 20', 'Mehr als 20'],
    },
    {
      id: 'sq2',
      question: 'Wie hoch ist der Anteil der proprietären Software in Ihrer Behörde?',
      type: 'dropdown',
      options: ['0-25%', '26-50%', '51-75%', '76-100%'],
    },
    {
      id: 'sq3',
      question: 'Welche Linux-Distributionen sind Ihnen bereits bekannt?',
      type: 'checkbox',
      options: ['Ubuntu', 'Debian', 'Fedora', 'SUSE', 'Andere'],
    },
    {
      id: 'sq4',
      question: 'Wie bewerten Sie den technischen Support durch bestehende IT-Dienstleister?',
      type: 'dropdown',
      options: ['Sehr gut', 'Gut', 'Mittelmäßig', 'Schlecht', 'Nicht vorhanden'],
    },
    {
      id: 'sq5',
      question: 'Wie viele Mitarbeiter sind in der IT-Abteilung Ihrer Behörde beschäftigt?',
      type: 'dropdown',
      options: ['Weniger als 5', '5 bis 10', '11 bis 20', 'Mehr als 20'],
    },
    {
      id: 'sq6',
      question: 'Gibt es Pläne für eine zentrale Verwaltung der IT-Systeme?',
      type: 'dropdown',
      options: ['Ja, bereits in Umsetzung', 'Ja, in Planung', 'Nein, nicht geplant'],
    },
    {
      id: 'sq7',
      question: 'Wie viele Server betreiben Sie in Ihrer Behörde?',
      type: 'dropdown',
      options: ['1 bis 5', '6 bis 20', '21 bis 50', 'Mehr als 50'],
    },
    {
      id: 'sq8',
      question: 'Welche Tools nutzen Sie zur Virtualisierung?',
      type: 'checkbox',
      options: ['VMware', 'Hyper-V', 'KVM', 'Docker', 'Keine'],
    },
    {
      id: 'sq9',
      question: 'Wie schätzen Sie die Akzeptanz der Mitarbeiter gegenüber neuen Technologien ein?',
      type: 'dropdown',
      options: ['Sehr hoch', 'Hoch', 'Mittel', 'Niedrig', 'Sehr niedrig'],
    },
    {
      id: 'sq10',
      question: 'Wie viele IT-Dienstleister arbeiten derzeit mit Ihrer Behörde zusammen?',
      type: 'dropdown',
      options: ['1 bis 3', '4 bis 10', '11 bis 20', 'Mehr als 20'],
    },
  ];
  