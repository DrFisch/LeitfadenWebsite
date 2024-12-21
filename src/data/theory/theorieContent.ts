export const theorySections = [
  {
    id: 'section-1',
    title: '1. Finanzen und Wirtschaftlichkeit',
    generalInfo:
      'Eine fundierte Bewertung der Kosten und wirtschaftlichen Aspekte ist entscheidend für eine erfolgreiche Migration. Langfristige Einsparungen können die Anfangsinvestitionen rechtfertigen.',
    subSections: [
      {
        id: 'sub-1-1',
        title: 'Lizenz- und Wartungskosten',
        generalExplanation:
          'Dieser Punkt beleuchtet die finanziellen Vorteile, die durch den Wegfall von Lizenz- und Wartungskosten entstehen können, aber auch mögliche Anfangsinvestitionen, die berücksichtigt werden müssen.',
        factorsFor: [
          'Keine Abhängigkeit mehr von Lizenzgebühren für Betriebssysteme und Office-Pakete.',
        ],
        factorsAgainst: [
          'Zusätzliche Kosten durch anfängliche Umstellung (Schulung, Migration).',
        ],
        improvements: [
          'Reduktion der Fixkosten.',
          'Langfristige Einsparungen durch den Einsatz freier Software.',
        ],
      },
      {
        id: 'sub-1-2',
        title: 'Kosten für neue Hardware',
        generalExplanation:
          'Hier wird untersucht, wie Linux die Lebensdauer bestehender Hardware verlängern kann und welche Investitionen bei inkompatibler Hardware notwendig sind.',
        factorsFor: [
          'Ressourcenschonende Linux-Distributionen verlängern die Lebensdauer bestehender Hardware.',
        ],
        factorsAgainst: [
          'Eventuell müssen ältere Geräte ausgetauscht werden, wenn sie inkompatibel sind.',
        ],
        improvements: [
          'Weniger Hardware-Neuanschaffungen.',
          'Nachhaltiger IT-Betrieb.',
        ],
      },
      {
        id: 'sub-1-3',
        title: 'Wettbewerbsfähigkeit',
        generalExplanation:
          'Dieser Punkt zeigt auf, wie Open-Source-Lösungen lokale Anbieter stärken können, aber auch, welche Herausforderungen dies mit sich bringt.',
        factorsFor: ['Open-Source-Lösungen fördern lokale Dienstleister und Anbieter.'],
        factorsAgainst: [
          'Mangel an spezialisierten Anbietern für Linux-Support in der Region.',
        ],
        improvements: [
          'Schaffung eines lokalen IT-Ökosystems durch Open-Source-Expertise.',
        ],
      },
    ],
  },
  {
    id: 'section-2',
    title: '2. Technische Infrastruktur',
    generalInfo:
      'Die technische Infrastruktur ist ein zentraler Faktor für die Machbarkeit einer Migration. Kompatibilität und Effizienz müssen sichergestellt sein.',
    subSections: [
      {
        id: 'sub-2-1',
        title: 'Netzwerk und Serverbetrieb',
        generalExplanation:
          'Hier erfahren Sie, warum Linux für Serverbetriebssysteme geeignet ist und welche Herausforderungen es bei bestehenden Netzwerkdiensten geben könnte.',
        factorsFor: [
          'Linux ist ein bewährtes Server-Betriebssystem mit hoher Stabilität und Flexibilität.',
        ],
        factorsAgainst: [
          'Mögliche Kompatibilitätsprobleme mit bestehenden Netzwerkdiensten.',
        ],
        improvements: [
          'Zuverlässigere IT-Infrastruktur.',
          'Bessere Anpassungsfähigkeit.',
        ],
      },
      {
        id: 'sub-2-2',
        title: 'Virtualisierung',
        generalExplanation:
          'Dieser Abschnitt beschreibt die Möglichkeiten der Virtualisierung unter Linux und die Anforderungen, die mit der Einführung solcher Lösungen verbunden sind.',
        factorsFor: ['Linux bietet zahlreiche Open-Source-Tools für Virtualisierung (z. B. KVM, Docker).'],
        factorsAgainst: [
          'Einführung von Virtualisierungslösungen erfordert Expertise.',
        ],
        improvements: [
          'Effizientere Nutzung von Serverressourcen.',
          'Bessere Skalierbarkeit.',
        ],
      },
      {
        id: 'sub-2-3',
        title: 'Integration in bestehende Systeme',
        generalExplanation:
          'Dieser Punkt beleuchtet, wie offene Standards die Integration erleichtern können und welche Anpassungen dafür nötig sind.',
        factorsFor: [
          'Einsatz offener Schnittstellen ermöglicht bessere Integration in bestehende IT-Strukturen.',
        ],
        factorsAgainst: [
          'Anpassungen bestehender Systeme an offene Standards können aufwändig sein.',
        ],
        improvements: [
          'Vereinfachter Datenaustausch.',
          'Langfristige Vereinheitlichung der IT-Systeme.',
        ],
      },
    ],
  },
  {
    id: 'section-3',
    title: '3. Prozesse und Arbeitsabläufe',
    generalInfo:
      'Effiziente Prozesse und Arbeitsabläufe können durch Automatisierung und offene Standards verbessert werden.',
    subSections: [
      {
        id: 'sub-3-1',
        title: 'Dokumentenmanagement',
        generalExplanation:
          'Dieser Abschnitt erklärt, wie der Einsatz offener Formate das Dokumentenmanagement verbessern kann und welche Herausforderungen dabei auftreten.',
        factorsFor: [
          'Verwendung offener Dateiformate (z. B. ODF) ermöglicht langfristige Lesbarkeit und Interoperabilität.',
        ],
        factorsAgainst: [
          'Übergang von proprietären Formaten (z. B. DOCX) auf offene Formate kann Probleme verursachen.',
        ],
        improvements: [
          'Reduktion von Abhängigkeiten.',
          'Höhere Kompatibilität mit anderen Behörden und Partnern.',
        ],
      },
      {
        id: 'sub-3-2',
        title: 'Fachverfahren',
        generalExplanation:
          'Hier wird untersucht, wie plattformunabhängige Fachverfahren entwickelt werden können und welche Vorteile dies bietet.',
        factorsFor: ['Möglichkeit zur Entwicklung plattformunabhängiger Fachverfahren.'],
        factorsAgainst: [
          'Vorhandene Fachverfahren sind oft stark auf Windows ausgerichtet.',
        ],
        improvements: [
          'Zukunftssichere Fachverfahren, die mit offenen Plattformen arbeiten.',
        ],
      },
      {
        id: 'sub-3-3',
        title: 'Automatisierung',
        generalExplanation:
          'Dieser Abschnitt beleuchtet, wie Automatisierung mit Linux zu effizienteren Arbeitsabläufen führen kann.',
        factorsFor: [
          'Linux bietet zahlreiche Tools zur Automatisierung von Prozessen (z. B. Shell-Skripte, Ansible).',
        ],
        factorsAgainst: [
          'IT-Teams benötigen zusätzliche Kenntnisse zur Automatisierung.',
        ],
        improvements: [
          'Effizientere Prozesse.',
          'Geringere Fehleranfälligkeit durch Automatisierung.',
        ],
      },
    ],
  },
  {
    id: 'section-4',
    title: '4. Menschliche Ressourcen',
    generalInfo:
      'Die Mitarbeiterakzeptanz und IT-Kompetenzen spielen eine wichtige Rolle bei der Einführung von Linux.',
    subSections: [
      {
        id: 'sub-4-1',
        title: 'IT-Kompetenzen',
        generalExplanation:
          'Dieser Punkt untersucht, wie durch Schulungen die IT-Kompetenz für Linux gestärkt werden kann.',
        factorsFor: ['Förderung von Know-how im Umgang mit Open-Source-Technologien.'],
        factorsAgainst: ['Mangelnde Linux-Kenntnisse im bestehenden IT-Team.'],
        improvements: [
          'Aufbau von Expertise.',
          'Steigerung der digitalen Kompetenzen.',
        ],
      },
      {
        id: 'sub-4-2',
        title: 'Akzeptanz der Mitarbeiter',
        generalExplanation:
          'Hier wird untersucht, wie die Akzeptanz der Mitarbeiter durch angepasste Arbeitsumgebungen erhöht werden kann.',
        factorsFor: [
          'Mitarbeiter können von individuell angepassten Arbeitsumgebungen profitieren.',
        ],
        factorsAgainst: [
          'Widerstand gegen Veränderung und ungewohnte Arbeitsoberflächen.',
        ],
        improvements: [
          'Erhöhung der Zufriedenheit durch modernisierte IT.',
        ],
      },
    ],
  },
  {
    id: 'section-5',
    title: '5. Rechtliche und strategische Überlegungen',
    generalInfo:
      'Rechtliche und strategische Überlegungen bestimmen die langfristige Ausrichtung der IT-Strategie.',
    subSections: [
      {
        id: 'sub-5-1',
        title: 'Digitale Souveränität',
        generalExplanation:
          'Dieser Abschnitt beschreibt, wie Linux die digitale Souveränität einer Behörde stärken kann.',
        factorsFor: ['Mehr Kontrolle über die IT-Infrastruktur und Unabhängigkeit von ausländischen Anbietern.'],
        factorsAgainst: [
          'Mangel an etablierten Open-Source-Alternativen für alle Fachbereiche.',
        ],
        improvements: [
          'Stärkere Kontrolle und Datenschutzkonformität.',
        ],
      },
      {
        id: 'sub-5-2',
        title: 'Datenschutz',
        generalExplanation:
          'Hier wird untersucht, wie Linux dazu beitragen kann, Datenschutzrichtlinien besser einzuhalten.',
        factorsFor: [
          'Bessere Einhaltung von Datenschutzrichtlinien durch quelloffene Software.',
        ],
        factorsAgainst: [
          'Komplexität bei der Anpassung bestehender Datenschutzprozesse.',
        ],
        improvements: [
          'Sichere Datenverarbeitung.',
          'Reduktion von Datenschutzrisiken.',
        ],
      },
      {
        id: 'sub-5-3',
        title: 'Langfristige Planung',
        generalExplanation:
          'Dieser Abschnitt beleuchtet, wie Linux eine nachhaltige und zukunftssichere IT-Strategie ermöglichen kann.',
        factorsFor: ['Migration ermöglicht strategische Planung über Jahrzehnte hinweg.'],
        factorsAgainst: [
          'Hoher Aufwand für eine langfristige Umstellung.',
        ],
        improvements: [
          'Nachhaltige und zukunftssichere IT-Infrastruktur.',
        ],
      },
    ],
  },
];