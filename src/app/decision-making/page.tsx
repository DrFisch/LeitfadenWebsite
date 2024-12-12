'use client';

import { BookOpenIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline'; // Beispiel-Icons
import ModuleDescription from '@/components/decision-making/Features';
import Hero from '@/components/Hero';
import Link from 'next/link';

export default function DecisionMakingPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Entscheidungsfindung zur Linux-Migration"
        description="Dieses Modul hilft Ihrer Behörde, fundierte Entscheidungen zu treffen, indem es Machbarkeit, Nutzen und Herausforderungen einer Migration auf Linux umfassend beleuchtet."
        backgroundImage="/decision-making-bg.png"
        buttons={[
          { text: 'Theorie lesen', href: '/decision-making/theory', style: 'bg-green-500 hover:bg-green-600 ' },
          { text: 'Fragebogen starten', href: '/decision-making/quiz', style: 'bg-indigo-500 hover:bg-indigo-600 ' },
        ]}
        overlayOpacity={10}
        boxOpacity={0}
        small={true} // Kleinere Hero-Section aktivieren
      />


      <ModuleDescription
        title="Modulbeschreibung"
        description="Dieses Modul unterstützt Behörden dabei, eine fundierte Entscheidung über die Migration auf Linux zu treffen. Es umfasst eine detaillierte theoretische Einführung sowie einen interaktiven Fragebogen, um individuelle Gegebenheiten zu bewerten."
        modules={[
          {
            title: 'Theorie',
            description:
              'Lesen Sie die theoretischen Grundlagen und bewerten Sie Machbarkeit, Nutzen und Risiken der Migration.',
            href: '/decision-making/theory',
            buttonLabel: 'Theorie lesen',
            buttonStyle: 'bg-green-500 hover:bg-green-600 hidden', // Sichtbarer Button
            icon: BookOpenIcon, // Passendes Icon
          },
          {
            title: 'Fragebogen',
            description:
              'Beantworten Sie einen interaktiven Fragebogen, um zu sehen, ob eine Migration für Ihre Behörde geeignet ist.',
            href: '/decision-making/quiz',
            buttonLabel: 'Fragebogen starten',
            buttonStyle: 'bg-blue-500 hover:bg-blue-600 hidden', // Sichtbarer Button
            icon: ClipboardDocumentListIcon, // Passendes Icon
          },
        ]}
      />

    </>
  );
}
