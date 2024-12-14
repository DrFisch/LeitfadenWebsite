import { SpecificQuestion } from '@/components/decision-making/fragebogen/TableFragebogen';

export const specificQuestions: SpecificQuestion[]= [
  {
    id: 'sq1',
    question: 'Wie viele Fachverfahren werden derzeit in Ihrer Behörde verwendet?',
    type: 'dropdown',
    options: ['Weniger als 5', '5 bis 10', '11 bis 20', 'Mehr als 20'],
    weights: [4, 3, 2, 1], // Weniger Fachverfahren unterstützen die Migration stärker
  },
  {
    id: 'sq2',
    question: 'Wie hoch ist der Anteil der proprietären Software in Ihrer Behörde?',
    type: 'dropdown',
    options: ['0-25%', '26-50%', '51-75%', '76-100%'],
    weights: [4, 3, 2, 1], // Weniger proprietäre Software spricht stärker für die Migration
  },
  // {
  //   id: 'sq3',
  //   question: 'Welche Linux-Distributionen sind Ihnen bereits bekannt?',
  //   type: 'checkbox',
  //   options: ['Ubuntu', 'Debian', 'Fedora', 'SUSE', 'Andere'],
  //   weights: [1, 1, 1, 1, 1], // Jede bekannte Distribution ist ein positiver Punkt
  // },
  {
    id: 'sq4',
    question: 'Wie bewerten Sie den technischen Support durch bestehende IT-Dienstleister?',
    type: 'dropdown',
    options: ['Sehr gut', 'Gut', 'Mittelmäßig', 'Schlecht', 'Nicht vorhanden'],
    weights: [1, 2, 3, 4, 5], // Schlechter Support macht die Migration einfacher, da es weniger Bindung gibt
  },
  {
    id: 'sq5',
    question: 'Wie viele Mitarbeiter sind in der IT-Abteilung Ihrer Behörde beschäftigt?',
    type: 'dropdown',
    options: ['Weniger als 5', '5 bis 10', '11 bis 20', 'Mehr als 20'],
    weights: [1, 2, 3, 4], // Größere IT-Teams können die Migration besser unterstützen
  },
  {
    id: 'sq6',
    question: 'Gibt es Pläne für eine zentrale Verwaltung der IT-Systeme?',
    type: 'dropdown',
    options: ['Ja, bereits in Umsetzung', 'Ja, in Planung', 'Nein, nicht geplant'],
    weights: [4, 3, 1], // Zentralisierte Verwaltung erleichtert die Migration
  },
  {
    id: 'sq7',
    question: 'Wie viele Server betreiben Sie in Ihrer Behörde?',
    type: 'dropdown',
    options: ['1 bis 5', '6 bis 20', '21 bis 50', 'Mehr als 50'],
    weights: [4, 3, 2, 1], // Weniger Server bedeuten geringeren Migrationsaufwand
  },
  // {
  //   id: 'sq8',
  //   question: 'Welche Tools nutzen Sie zur Virtualisierung?',
  //   type: 'checkbox',
  //   options: ['VMware', 'Hyper-V', 'KVM', 'Docker', 'Keine'],
  //   weights: [1, 1, 2, 2, 0], // Open-Source-Tools wie KVM und Docker unterstützen die Migration stärker
  // },
  {
    id: 'sq9',
    question: 'Wie schätzen Sie die Akzeptanz der Mitarbeiter gegenüber neuen Technologien ein?',
    type: 'dropdown',
    options: ['Sehr hoch', 'Hoch', 'Mittel', 'Niedrig', 'Sehr niedrig'],
    weights: [4, 3, 2, 1, 0], // Hohe Akzeptanz der Mitarbeiter erleichtert die Migration
  },
  {
    id: 'sq10',
    question: 'Wie viele IT-Dienstleister arbeiten derzeit mit Ihrer Behörde zusammen?',
    type: 'dropdown',
    options: ['1 bis 3', '4 bis 10', '11 bis 20', 'Mehr als 20'],
    weights: [4, 3, 2, 1], // Weniger Dienstleister vereinfachen die Migrationskoordination
  },
];