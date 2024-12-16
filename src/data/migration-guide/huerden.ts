export interface Challenge {
    id: string;
    title: string;
    description: string;
    solution: string;
    reference: string;
  }
  
  export const huerden: Challenge[] = [
    // 6.2
    {
      id: 'huerde1',
      title: 'Kompatibilitätsprobleme mit Fachanwendungen',
      description: 'Viele spezialisierte Fachverfahren wurden ausschließlich für Windows entwickelt und sind nicht nativ mit Linux kompatibel. Diese Abhängigkeiten können essenzielle Arbeitsprozesse beeinträchtigen.',
      solution: 'PLACEHOLDER',
      reference: 'Kapitel 6.2 in der Studienarbeit',
    },
    {
      id: 'huerde2',
      title: 'Abhängigkeiten von spezifischen Schnittstellen und Bibliotheken',
      description: 'Fachverfahren nutzen oft Windows-spezifische Schnittstellen oder Bibliotheken, die schwer zu ersetzen sind und eine vollständige Analyse der Softwarelandschaft erfordern.',
      solution: 'PLACEHOLDER',
      reference: 'Kapitel 6.2 in der Studienarbeit',
    },
    {
      id: 'huerde3',
      title: 'Integration von Drittanbieter-Software',
      description: 'Software von externen Anbietern ist oft nicht für Linux zertifiziert oder unterstützt, was die Planbarkeit und Durchführung der Migration erschwert.',
      solution: 'PLACEHOLDER',
      reference: 'Kapitel 6.2 in der Studienarbeit',
    },
    {
      id: 'huerde4',
      title: 'Sicherstellung der Datenintegrität',
      description: 'Bei Migrationen auf Linux müssen bestehende Verknüpfungen zwischen Anwendungen und Datenbanken angepasst werden, um Datenverluste oder Inkonsistenzen zu vermeiden.',
      solution: 'PLACEHOLDER',
      reference: 'Kapitel 6.2 in der Studienarbeit',
    },
    {
      id: 'huerde5',
      title: 'Fehlende Unterstützung durch Softwarehersteller',
      description: 'Externe Anbieter sind möglicherweise nicht bereit, ihre Software für Linux zu adaptieren, oder es fehlen wichtige Funktionen in der Linux-Version.',
      solution: 'PLACEHOLDER',
      reference: 'Kapitel 6.2 in der Studienarbeit',
    },
    // 6.3
    {
      id: 'huerde6',
      title: 'Komplexität und Planungsaufwand bei der Integration der IT-Infrastruktur',
      description:
        'Die IT-Infrastruktur in der öffentlichen Verwaltung ist über Jahre gewachsen und umfasst zahlreiche unterschiedliche Komponenten. Die Integration erfordert eine detaillierte Evaluierung und Anpassung technischer sowie organisatorischer Abläufe, was komplex und zeitaufwändig ist.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.3 und 6.3.4 in der Studienarbeit',
    }
,    
    {
      id: 'huerde7',
      title: 'Inkompatibilität mit Microsoft Active Directory',
      description:
        'Viele Verwaltungsnetzwerke nutzen Active Directory für die Benutzer- und Rechteverwaltung. Linux-Systeme sind häufig nicht direkt kompatibel, was umfangreiche Anpassungen und neue Konzepte erfordert.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.3.1 in der Studienarbeit',
    },
    
    {
      id: 'huerde9',
      title: 'Anpassung der Sicherheitssysteme und Protokolle',
      description:
        'Die bestehenden Sicherheitssysteme und Protokolle müssen überprüft und angepasst werden, um die notwendigen Standards auch nach der Umstellung einzuhalten.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.3.1 in der Studienarbeit',
    },
    {
      id: 'huerde10',
      title: 'Inkompatibilität und Evaluierungsaufwand bei Peripheriegeräten',
      description:
        'Viele ältere Peripheriegeräte wie Drucker oder Scanner werden nicht von Linux-Treibern unterstützt. Eine detaillierte Bestandsaufnahme der vorhandenen Hardware ist notwendig, um die Kompatibilität zu prüfen, was zeit- und ressourcenintensiv ist.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.3.2 in der Studienarbeit',
    }
    ,
    {
      id: 'huerde12',
      title: 'Anpassung oder Ersatz von Backup- und Recovery-Lösungen',
      description:
        'Datensicherungs- und Wiederherstellungslösungen, die auf Windows optimiert sind, müssen für Linux angepasst oder ersetzt werden.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.3.3 in der Studienarbeit',
    },
    {
      id: 'huerde12',
      title: 'Fehlende Kompatibilität von Backup- und Monitoring-Systemen',
      description:
        'Bestehende Backup- und Monitoring-Lösungen sind häufig auf Windows optimiert und nicht mit Linux kompatibel. Sie müssen entweder angepasst oder durch neue Systeme ersetzt werden.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.3.3 in der Studienarbeit',
    }
,    
{
  id: 'huerde14',
  title: 'Schulungsbedarf für neue Tools und Konzepte',
  description:
    'IT-Mitarbeiter müssen geschult werden, um neue Tools und Konzepte für Backup, Monitoring und Sicherheit effizient nutzen zu können.',
  solution: 'Platzhalter für Lösung.',
  reference: 'Kapitel 6.3.1 und 6.3.3 in der Studienarbeit',
}
,
    
    {
      id: 'huerde16',
      title: 'Hohe Kosten und Zeitaufwand',
      description:
        'Die Anpassung oder der Austausch vorhandener Systeme führt zu erheblichen Kosten und Zeitaufwand.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.3.4 in der Studienarbeit',
    },
    {
      id: 'huerde17',
      title: 'Sicherstellung der Systemstabilität',
      description:
        'Es muss gewährleistet werden, dass alle Systeme stabil laufen und die Nutzer keine Einschränkungen in ihrer täglichen Arbeit erfahren.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.3.4 in der Studienarbeit',
    },
    // 6.4
    {
      id: 'huerde18',
      title: 'Fehlende Unterstützung durch Linux-Treiber',
      description:
        'Viele ältere oder spezialisierte Hardware-Komponenten werden nicht von Linux-Treibern unterstützt, was zu Funktionseinschränkungen und einer eingeschränkten Nutzung führen kann.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.4 in der Studienarbeit',
    },
    {
      id: 'huerde19',
      title: 'Notwendigkeit von Hardware-Upgrades',
      description:
        'Um eine reibungslose Funktion der IT-Systeme zu gewährleisten, können Hardware-Upgrades notwendig sein. Diese Maßnahmen können jedoch hohe Kosten verursachen und den finanziellen Vorteil von Open-Source-Software schmälern.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.4 in der Studienarbeit',
    },
    // 6.5
    {
      id: 'huerde20',
      title: 'Schwierigkeiten bei der Übertragung bestehender Datenbestände',
      description: 
        'Die Migration umfangreicher und vielfältiger Datenbestände von proprietären Systemen auf Linux-Systeme erfordert Anpassungen und Konvertierungen, um Kompatibilität sicherzustellen.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.5 in der Studienarbeit',
    },
    {
      id: 'huerde21',
      title: 'Inkompatibilität von Dateiformaten und -strukturen',
      description: 
        'Proprietäre Dateiformate und -strukturen erfordern aufwendige Konvertierungen, die zeitaufwändig und fehleranfällig sind, was das Risiko von Datenverlust erhöht.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.5 in der Studienarbeit',
    },
    {
      id: 'huerde22',
      title: 'Risiko von Datenverlust und Konsistenzproblemen',
      description: 
        'Während der Migration können Fehler auftreten, die Datenverlust oder Inkonsistenzen verursachen. Umfassende Tests und Backups sind erforderlich, um diese Risiken zu minimieren.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.5 in der Studienarbeit',
    },
    // 6.6
    {
      id: 'huerde25',
      title: 'Mangel an Linux-Erfahrung in IT-Teams',
      description:
        'IT-Mitarbeiter sind häufig mit proprietären Systemen vertraut, haben jedoch wenig Erfahrung in der Administration von Linux-Systemen. Dies führt zu einem hohen Schulungsbedarf.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.6.1 in der Studienarbeit',
    },
    {
      id: 'huerde26',
      title: 'Umgewöhnung an neue Programme und Benutzeroberflächen',
      description:
        'Mitarbeiter, die jahrelang mit proprietären Betriebssystemen gearbeitet haben, müssen sich an die Bedienung und Struktur von Linux-Benutzeroberflächen sowie an neue Programme gewöhnen. Dies kann anfänglich die Produktivität beeinträchtigen.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.6.1 und 6.6.2 in der Studienarbeit',
    },
    {
      id: 'huerde28',
      title: 'Ersatz oder Anpassung von Standardprogrammen',
      description:
        'Proprietäre Standardprogramme wie MS Office sind nicht ohne Weiteres durch Open-Source-Alternativen ersetzbar. Unterschiede in Funktionen und Bedienoberflächen können anfänglich die Produktivität beeinträchtigen.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.6.2 in der Studienarbeit',
    },
    {
      id: 'huerde30',
      title: 'Anpassung von Arbeitsprozessen an neue Software',
      description:
        'Bisherige Arbeitsprozesse müssen überprüft und angepasst werden, um mit den neuen Open-Source-Lösungen kompatibel zu sein.',
      solution: 'Platzhalter für Lösung.',
      reference: 'Kapitel 6.6.2 in der Studienarbeit',
    },
    // 6.7
  ];