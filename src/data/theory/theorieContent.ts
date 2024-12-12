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
