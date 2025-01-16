'use client';

import { AcademicCapIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import ModuleDescription from '@/components/decision-making/Features';

export default function GuideOverviewPage() {
  const modules = [
    // {
    //     id: 'risk-analysis',
    //     title: 'Risikoanalyse',
    //     description: 'Identifizieren und minimieren Sie potenzielle Risiken der Migration.',
    //     href: '/migration-guide/risikoanalyse',
    //     icon: ClipboardDocumentIcon,
    //     green: true,
    //   },
      {
        id: 'technische-huerden',
        title: 'Technische Hürden und Lösungsansätze',
        description: 'Hier werden die vielen technischen Schwierigkeiten einer Migration aufgezeigt und potenzielle Lösungsansätze genannt.',
        href: '/migration-guide/technische-huerden-theorie',
        icon: ClipboardDocumentIcon, // HandRaisedIcon
        green: true,
      },
    {
      id: 'steps',
      title: 'Schritte zur Migration',
      description: 'Praktische Schritt-für-Schritt-Anleitung.',
      href: '/migration-guide/leitfaden',
      icon: AcademicCapIcon,
    },
    
  ];

  const rightContent = {
    title: 'Über den Leitfaden',
    paragraphs: [
      'Der Leitfaden bietet eine umfassende Schritt-für-Schritt-Anleitung für Behörden, die von Windows zu Linux migrieren möchten. Dabei basiert die Anleitung auf den fundierten Erkenntnissen, die in der Studienarbeit detailliert untersucht wurden.',
      'Das Ziel des Leitfadens ist es, Behörden dabei zu unterstützen, den Wechsel strategisch zu planen, technische Herausforderungen zu bewältigen und alle Schritte systematisch umzusetzen. Jede Phase der Migration wird praxisorientiert beschrieben, um mögliche Risiken zu minimieren und den Erfolg zu sichern.',
    ],
    list: [
      
      'Technische Hürden und Lösungsansätze: Erklärung der möglichen Hürden und Lösungsansätze',
      'Schritte zur Migration: Schritt-für-Schritt Anleitung zur Migration auf Linux',
    ],
    footer: 'Wählen Sie links ein Modul aus, um fortzufahren.',
  };

  return (
    <main className='min-h-[82vh]'>
        <ModuleDescription
      title="Leitfaden: Migration von Windows zu Linux"
      description="Dieser Leitfaden unterstützt Behörden bei der Planung und Durchführung einer Migration von Windows zu Linux. Die Module basieren auf fundierten Erkenntnissen aus der Studienarbeit und bieten sowohl theoretische Grundlagen als auch praktische Schritte."
      modules={modules}
      rightContent={rightContent}
    />
    </main>
    
  );
}
