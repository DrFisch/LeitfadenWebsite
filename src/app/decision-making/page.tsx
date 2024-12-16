'use client';

import { AcademicCapIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import ModuleDescription from '@/components/decision-making/Features';

export default function DecisionMakingPage() {

  const rightContent = {
    title: 'Details zu den Modulen',
    paragraphs: [
      'Entdecken Sie die theoretischen Grundlagen zur Linux-Migration oder beantworten Sie unseren interaktiven Fragebogen, um herauszufinden, ob Ihre Behörde für die Migration geeignet ist.',
    ],
    list: [
      'Theorie: Detaillierte Grundlagen und Nutzenbewertung',
      'Fragebogen: Interaktive Bewertung Ihrer Behörde',
      
      
    ],
    footer: 'Wählen Sie links ein Modul aus, um weitere Informationen zu erhalten.',
  };

  return (
    <main className='min-h-[82vh]'>
      <ModuleDescription
        title="Entscheidungsfindung zur Linux-Migration"
        description="Dieses Modul hilft Ihrer Behörde, fundierte Entscheidungen zu treffen, indem es Machbarkeit, Nutzen und Herausforderungen einer Migration auf Linux umfassend beleuchtet."
        modules={[
          {
            id: 'theory',
            title: 'Theorie',
            description:
              'Lesen Sie die theoretischen Grundlagen und bewerten Sie Machbarkeit, Nutzen und Risiken der Migration.',
            href: '/decision-making/theorie',
            green: true,
            icon: AcademicCapIcon,
          },
          {
            id: 'quiz',
            title: 'Fragebogen',
            description:
              'Beantworten Sie einen interaktiven Fragebogen, um zu sehen, ob eine Migration für Ihre Behörde geeignet ist.',
            href: '/decision-making/fragebogen',
            icon: ClipboardDocumentListIcon,
          },
        ]}
        rightContent= {
          rightContent
        }
      />
    </main>
  );
}
