import { Challenge } from './huerden';
import { CogIcon, DevicePhoneMobileIcon, AcademicCapIcon, ShieldCheckIcon, UserGroupIcon, ServerIcon,QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export type IconType = typeof CogIcon;

export interface Step {
    id: string;
    title: string;
    icon: IconType;
    description: string;
    reference: string;
    content: {
      text: string;
      tooltip?: string;
    }[];
    huerden: string[]; // IDs der Hürden
  }

export const steps = [
    {
      id: 'step1',
      title: 'Planung der Migration',
      icon: AcademicCapIcon,
      description: 'Definieren Sie den Ablauf der Migration und stellen Sie ein Projektteam zusammen.',
      reference: 'Kapitel 6.1 und 7.5.1 in der Diplomarbeit',
      content: [
        {
          text: 'Projektteam zusammenstellen: Interdisziplinäres Team mit IT-Fachleuten und Vertretern der Fachabteilungen.',
          tooltip: 'Ein gut zusammengestelltes Team kann potenzielle Probleme frühzeitig identifizieren und lösen.',
          
        },
        {
          text: 'Migrationsplan entwickeln: Zeitplan, Budget und Verantwortlichkeiten definieren.',
          tooltip: 'Ein detaillierter Plan minimiert Verzögerungen und Überschreitungen des Budgets.',
        },
        {
          text: 'Risikomanagement: Identifikation potenzieller Risiken und Gegenmaßnahmen.',
          tooltip: 'Risikomanagement hilft, unerwartete Probleme während der Migration zu bewältigen.',
          
        },
      ],
      huerden: [
        'huerde1', // Unklare Verantwortlichkeiten
      'huerde2', // Fehlende Risikobewertung
      'huerde15',// Hoher Planungsaufwand für Integration
      'huerde16', //Hohe Kosten und Zeitaufwand
      'huerde25', //Mangel an Linux-Erfahrung in IT-Teams
      ],
    },
    {
      id: 'step2',
      title: 'Vorbereitung der Infrastruktur',
      icon: ServerIcon,
      description: 'Passen Sie Ihre Infrastruktur an und planen Sie die Datenmigration.',
      reference: 'Kapitel 6.3, 6.4 und 7.3 in der Diplomarbeit',
      content: [
        {
          text: 'Hardware-Kompatibilität sicherstellen: Einsatz von Hardwarekompatibilitätslisten und ggf. Austausch alter Geräte.',
          tooltip: 'Hardwarekompatibilitätslisten helfen, inkompatible Geräte zu identifizieren.',
        },
        {
          text: 'IT-Infrastruktur anpassen: Netzwerkdienste, Backup-Systeme und Überwachungswerkzeuge auf Linux abstimmen.',
          tooltip: 'Eine abgestimmte Infrastruktur stellt sicher, dass alle Dienste nahtlos funktionieren.',
        },
        {
          text: 'Datenmigration planen: Entwicklung eines detaillierten Plans für die Übertragung von Daten und Systemen.',
          tooltip: 'Ein guter Migrationsplan reduziert das Risiko von Datenverlust.',
          
        },
      ],
      huerden: [
        'huerde3', // Hardware-Kompatibilität
      'huerde4', // Datenverlust bei Migration
      'huerde10', // Inkompatibilität von Peripheriegeräten
      'huerde11', //Hoher Aufwand für Bestandsaufnahme der Hardware
      'huerde13', //Fehlende Kompatibilität bestehender Monitoring-Tools
      'huerde18', // Fehlende Unterstützung durch Linux-Treiber
      'huerde19', // Notwendigkeit von Hardware-Upgrades
      'huerde20', // Schwierigkeiten bei der Übertragung bestehender Datenbestände
      'huerde21', // Inkompatibilität von Dateiformaten und -strukturen

    ],
    },
    {
      id: 'step3',
      title: 'Testphase und Pilotprojekte',
      icon: DevicePhoneMobileIcon,
      description: 'Testen Sie die Migration in Pilotprojekten und sammeln Sie wertvolle Erfahrungen.',
      reference: 'Kapitel 7.1.4 in der Diplomarbeit',
      content: [
        {
          text: 'Pilotprojekte starten: Auswahl weniger kritischer Abteilungen oder Aufgabenbereiche für Testmigrationen.',
          tooltip: 'Pilotprojekte minimieren das Risiko größerer Ausfälle während der Migration.',
        },
        {
          text: 'Erfahrungen sammeln: Probleme und Schwachstellen identifizieren und beheben.',
          tooltip: 'Eine gründliche Analyse der Testphase hilft, wiederkehrende Fehler zu vermeiden.',
        },
        {
          text: 'Evaluierung: Ergebnisse der Testphase analysieren und Migration planen.',
          tooltip: 'Auswertungen ermöglichen eine fundierte Planung für die Hauptmigration.',
          
        },
      ],
      huerden: [
        'huerde1', // Unklare Verantwortlichkeiten
      'huerde4', // Datenverlust bei Migration
      'huerde12', //Anpassung oder Ersatz von Backup- und Recovery-Lösungen
      'huerde14', // Schulungsbedarf für neue Backup- und Monitoring-Systeme
      
      ],
    },
    {
      id: 'step4',
      title: 'Durchführung der Migration',
      icon: CogIcon,
      description: 'Führen Sie die Migration schrittweise in der gesamten Organisation durch.',
      reference: 'Kapitel 7.2.1 und 7.8 in der Diplomarbeit',
      content: [
        {
          text: 'Schrittweise Migration: Beginnen mit weniger kritischen Abteilungen, anschließend auf gesamte Organisation ausweiten.',
          tooltip: 'Eine schrittweise Durchführung reduziert die Auswirkungen auf den Betrieb.',
        },
        {
          text: 'Umstellung von Fachanwendungen: Einsatz von Kompatibilitätslösungen oder Anpassung von Software.',
          tooltip: 'Kompatibilitätslösungen wie WINE oder Anpassungen sind oft notwendig.',
        },
        {
          text: 'Open-Source-Alternativen einführen: OpenOffice, LibreOffice und andere Lösungen implementieren.',
          tooltip: 'Die Einführung von Open-Source-Software reduziert Lizenzkosten.',
          
        },
      ],
      huerden: [
        'huerde2', // Fehlende Risikobewertung
      'huerde3', // Hardware-Kompatibilität
      'huerde4', // Datenverlust bei Migration
      'huerde6', // Komplexität der bestehenden IT-Infrastruktur
      'huerde7', // Inkompatibilität mit Microsoft Active Directory
      'huerde8', // Fehlendes Wissen über neue Tools und Konzepte
      'huerde9', // Anpassung der Sicherheitssysteme und Protokolle
      'huerde12', //Risiko von Datenverlust und Konsistenzproblemen
    ],
    },
    {
      id: 'step5',
      title: 'Schulung und Unterstützung',
      icon: UserGroupIcon,
      description: 'Schulen Sie Ihre Mitarbeiter und bauen Sie Support-Strukturen auf.',
      reference: 'Kapitel 6.6.1 und 7.6.1 in der Diplomarbeit',
      content: [
        {
          text: 'Mitarbeiterschulungen: Einführungskurse und fortlaufende Unterstützung.',
          tooltip: 'Gut geschulte Mitarbeiter können effizienter mit den neuen Systemen arbeiten.',
        },
        {
          text: 'Support-Strukturen aufbauen: Einrichtung eines internen Support-Teams für Fragen und Probleme.',
          tooltip: 'Ein Support-Team ist essenziell, um den Übergang zu erleichtern.',
          
        },
      ],
      huerden: [
        'huerde1', // Unklare Verantwortlichkeiten
      'huerde5', // Fehlende Unterstützung durch Softwarehersteller
      'huerde14', //Schulungsbedarf für neue Backup- und Monitoring-Systeme
      'huerde25', // Mangel an Linux-Erfahrung in IT-Teams
      'huerde26', // Umgewöhnung an neue Programme und Benutzeroberflächen
      'huerde28', //Ersatz oder Anpassung von Standardprogrammen
      'huerde30', //Anpassung von Arbeitsprozessen an neue Software
    ],
    },
    {
      id: 'step6',
      title: 'Sicherstellung der Sicherheit',
      icon: ShieldCheckIcon,
      description: 'Härten Sie Ihr System und stellen Sie regelmäßige Updates sicher.',
      reference: 'Kapitel 6.7 und 7.7 in der Diplomarbeit',
      content: [
        {
          text: 'Systemhärtung: Entwicklung und Implementierung eines Härtungskonzepts.',
          tooltip: 'Ein Härtungskonzept minimiert Sicherheitslücken.',
        },
        {
          text: 'Patch-Management: Sicherstellung regelmäßiger Updates und Patches.',
          tooltip: 'Regelmäßige Patches sind entscheidend, um Schwachstellen zu schließen.',
        },
        {
          text: 'Sicherheitsaudits: Regelmäßige Überprüfung der Systeme auf Schwachstellen.',
          tooltip: 'Audits garantieren, dass die Systeme den Sicherheitsanforderungen entsprechen.',
          
        },
      ],
      huerden: [
        'huerde4', // Datenverlust bei Migration
        'huerde3', // Hardware-Kompatibilität
        'huerde9', //Anpassung der Sicherheitssysteme und Protokolle
        'huerde17', //Sicherstellung der Systemstabilität
      ],
    },
  ];