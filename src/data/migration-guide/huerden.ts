export interface Challenge {
    id: string;
    title: string;
    description: string;
    solution: string;
    reference: string;
  }
  
  export const huerden: Challenge[] = [
    {
      id: 'huerde1',
      title: 'Unklare Verantwortlichkeiten',
      description: 'In der Planungsphase können Verantwortlichkeiten zwischen Abteilungen unklar sein.',
      solution: 'Definieren Sie klare Verantwortlichkeiten und rollenbasierte Aufgaben im Projektplan.',
      reference: 'Kapitel 6.1 in der Diplomarbeit',
    },
    {
      id: 'huerde2',
      title: 'Fehlende Risikobewertung',
      description: 'Häufig wird die Bedeutung eines Risikomanagements unterschätzt.',
      solution: 'Entwickeln Sie eine Risikomatrix und erstellen Sie Gegenmaßnahmen für identifizierte Risiken.',
      reference: 'Kapitel 7.5.1 in der Diplomarbeit',
    },
    {
      id: 'huerde3',
      title: 'Hardware-Kompatibilität',
      description: 'Veraltete Hardware kann die Migration behindern.',
      solution: 'Erstellen Sie eine Liste kompatibler Geräte und tauschen Sie nicht unterstützte Hardware aus.',
      reference: 'Kapitel 6.3.1 in der Diplomarbeit',
    },
    {
      id: 'huerde4',
      title: 'Datenverlust bei Migration',
      description: 'Ohne klare Planung besteht das Risiko von Datenverlust.',
      solution: 'Erstellen Sie Backup-Pläne und testen Sie die Datenmigration vor der Umsetzung.',
      reference: 'Kapitel 7.5.3 in der Diplomarbeit',
    },
    // Weitere Hürden hier
  ];