
import { CogIcon, DevicePhoneMobileIcon, AcademicCapIcon, ShieldCheckIcon, UserGroupIcon, ServerIcon } from '@heroicons/react/24/outline';

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

export const steps  = [
  {
    id: 'step1',
    title: 'Planung der Migration',
    icon: AcademicCapIcon,
    description: 'In der Planungsphase wird der Grundstein für eine erfolgreiche Migration gelegt. Ein klarer Projektplan, ein kompetentes Projektteam und eine detaillierte Risikoanalyse sind unerlässlich. Ziel ist es, alle relevanten Stakeholder einzubinden und die Migrationsziele klar zu definieren.',
    reference: 'Kapitel 6.1 und 7.5.1 in der Diplomarbeit',
    content: [
      {
        text: 'Projektteam zusammenstellen: Ein interdisziplinäres Team mit IT-Fachleuten, Entscheidern und Vertretern der Fachabteilungen bilden.',
        tooltip: 'Ein vielseitiges Team bringt technisches Know-how und praxisnahe Anforderungen zusammen.',
      },
      {
        text: 'Migrationsziele festlegen: Festlegen, welche Systeme, Daten und Anwendungen migriert werden sollen.',
        tooltip: 'Klare Ziele helfen dabei, die Prioritäten und Erfolgskriterien der Migration zu definieren.',
      },
      {
        text: 'Detaillierten Migrationsplan erstellen: Zeitrahmen, Budget, Meilensteine und Verantwortlichkeiten definieren.',
        tooltip: 'Ein detaillierter Plan minimiert Verzögerungen und Ressourcenverschwendung.',
      },
      {
        text: 'Risikoanalyse durchführen: Identifizierung potenzieller Risiken wie Kompatibilitätsprobleme oder Datenverluste.',
        tooltip: 'Ein strukturiertes Risikomanagement hilft, kritische Probleme frühzeitig zu entschärfen.',
      },
      {
        text: 'Kommunikationsstrategie entwickeln: Regelmäßige Updates und Workshops für alle beteiligten Abteilungen einplanen.',
        tooltip: 'Eine offene Kommunikation sorgt für Transparenz und reduziert Widerstand gegen Veränderungen.',
      },
    ],
    huerden: [
      'huerde1',
      'huerde2',
      'huerde15',
      'huerde16',
      'huerde25',
    ],
  },
  {
    id: 'step2',
    title: 'Vorbereitung der Infrastruktur',
    icon: ServerIcon,
    description:
      'In der Vorbereitungsphase wird die technische Grundlage für die erfolgreiche Migration geschaffen. Ziel ist es, die gesamte IT-Infrastruktur sorgfältig zu analysieren, notwendige Anpassungen vorzunehmen und die Datenmigration vorzubereiten. Dies umfasst die Prüfung der Hardwarekompatibilität, die Anpassung von Netzwerkdiensten, die Implementierung von Backup-Lösungen sowie die Planung der Datenübertragung. Eine detaillierte Bestandsaufnahme aller Systeme und Peripheriegeräte stellt sicher, dass die Migration ohne größere Unterbrechungen durchgeführt werden kann. Zusätzlich müssen potenzielle Inkompatibilitäten erkannt und durch gezielte Lösungen behoben werden. Diese Phase ist entscheidend, um Ausfälle und Datenverluste im späteren Verlauf zu vermeiden und die Leistungsfähigkeit der IT-Umgebung unter Linux zu gewährleisten.',
    reference: 'Kapitel 6.3, 6.4 und 7.3 in der Diplomarbeit',
    content: [
      {
        text: 'Hardware-Kompatibilität sicherstellen: Erstellung von Hardwarekompatibilitätslisten (HCLs) zur Identifizierung Linux-kompatibler Geräte und Austausch veralteter oder inkompatibler Hardware.',
        tooltip:
          'HCLs sind Listen, die Geräte auf ihre Kompatibilität mit Linux prüfen und helfen, Investitionsentscheidungen fundiert zu treffen.',
      },
      {
        text: 'Netzwerkdienste anpassen: Konfiguration von Netzwerkkomponenten wie DNS-, DHCP- und Directory-Services für die Linux-Integration.',
        tooltip:
          'Die Anpassung der Netzwerkdienste ist erforderlich, um die reibungslose Kommunikation und Verwaltung der Linux-Systeme sicherzustellen.',
      },
      {
        text: 'Backup- und Recovery-Lösungen implementieren: Einsatz plattformübergreifender Open-Source-Tools wie Bacula oder Amanda zur Datensicherung.',
        tooltip:
          'Robuste Backup-Tools sind notwendig, um Datenverlust während der Migration zu verhindern und die Wiederherstellung zu ermöglichen.',
      },
      {
        text: 'Überwachungssysteme einrichten: Implementierung von Monitoring-Tools wie Nagios oder Zabbix zur kontinuierlichen Überwachung der IT-Infrastruktur.',
        tooltip:
          'Monitoring hilft, Engpässe und Fehler frühzeitig zu erkennen und die Stabilität der Systeme zu gewährleisten.',
      },
      {
        text: 'Datenmigration planen: Erstellung eines schrittweisen Migrationsplans zur Übertragung von Daten und Systemen, inklusive Testmigrationen.',
        tooltip:
          'Ein strukturierter Migrationsplan minimiert das Risiko von Datenverlusten und ermöglicht die schrittweise Validierung der Datenintegrität.',
      },
      {
        text: 'Peripheriegeräte evaluieren: Prüfung der Kompatibilität von Druckern, Scannern und anderen Geräten mit Linux-Treibern.',
        tooltip:
          'Die rechtzeitige Identifikation von inkompatiblen Peripheriegeräten ermöglicht den gezielten Austausch oder die Anpassung durch Treiberlösungen.',
      },
      {
        text: 'Hardware-Abstraktionslayer einsetzen: Nutzung von HALs zur Unterstützung älterer Geräte, die keine nativen Linux-Treiber haben.',
        tooltip:
          'HALs bieten eine Zwischenebene zwischen Hardware und Betriebssystem, um auch ältere oder spezialisierte Geräte weiter zu verwenden.',
      },
      {
        text: 'Energieeffizienz prüfen: Optimierung der Hardware-Konfiguration, um die Energieeffizienz der Infrastruktur zu steigern.',
        tooltip:
          'Durch Anpassungen der Systemeinstellungen kann der Energieverbrauch reduziert und die langfristigen Betriebskosten gesenkt werden.',
      },
      {
        text: 'Sicherheitsmaßnahmen vorbereiten: Implementierung von Sicherheitslösungen wie Firewalls, SELinux oder AppArmor zur Härtung der Infrastruktur.',
        tooltip:
          'Sicherheitsmaßnahmen verhindern potenzielle Bedrohungen und sichern die IT-Systeme vor unbefugtem Zugriff.',
      },
    ],
    huerden: [
      'huerde3',  // Hardware-Kompatibilität
      'huerde4',  // Datenverlust bei Migration
      'huerde10', // Inkompatibilität von Peripheriegeräten
      'huerde11', // Hoher Aufwand für Bestandsaufnahme der Hardware
      'huerde13', // Fehlende Kompatibilität bestehender Monitoring-Tools
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
    description:
      'Die Testphase ist ein entscheidender Schritt, um die Migration zu validieren und potenzielle Fehlerquellen frühzeitig zu identifizieren. Durch den gezielten Einsatz von Pilotprojekten in weniger kritischen Abteilungen können Erfahrungen gesammelt und Schwachstellen erkannt werden, bevor die vollständige Migration durchgeführt wird. Diese Phase ermöglicht es, technische, organisatorische und personelle Herausforderungen zu analysieren und geeignete Lösungen zu entwickeln. Ergebnisse aus der Testphase bilden die Grundlage für eine strukturierte und risikominimierte Planung der Hauptmigration, während Schulungsbedarfe, Backup-Anpassungen und Optimierungspotenziale ermittelt werden.',
    reference: 'Kapitel 7.1.4 in der Diplomarbeit',
    content: [
      {
        text: 'Pilotprojekte starten: Identifizieren Sie weniger kritische Abteilungen oder Aufgabenbereiche und führen Sie dort eine Testmigration durch.',
        tooltip:
          'Pilotprojekte ermöglichen es, den Migrationsprozess unter realen Bedingungen zu testen, ohne den gesamten Betrieb zu gefährden.',
      },
      {
        text: 'Technische Herausforderungen evaluieren: Überprüfen Sie Kompatibilität von Fachanwendungen, Hardware und Datenbanken während der Pilotphase.',
        tooltip:
          'Die Pilotphase zeigt auf, ob bestehende Anwendungen und Hardware unter der neuen Umgebung zuverlässig funktionieren.',
      },
      {
        text: 'Backup- und Recovery-Prozesse validieren: Testen Sie die Datensicherung und Wiederherstellung unter Linux, um die Datenintegrität sicherzustellen.',
        tooltip:
          'Backup-Tests sind essenziell, um sicherzustellen, dass im Ernstfall keine Daten verloren gehen.',
      },
      {
        text: 'Probleme und Schwachstellen identifizieren: Dokumentieren Sie auftretende Schwierigkeiten wie Treiberprobleme, Kompatibilitätslücken oder Benutzerakzeptanz.',
        tooltip:
          'Ein strukturiertes Feedback hilft, technische und organisatorische Schwachstellen zu beheben.',
      },
      {
        text: 'Schulungsbedarf ermitteln: Analysieren Sie, welche Schulungen für IT-Teams und Mitarbeiter notwendig sind, um die Migration erfolgreich umzusetzen.',
        tooltip:
          'Frühzeitige Identifikation von Schulungsbedarf stellt sicher, dass alle Beteiligten vorbereitet sind.',
      },
      {
        text: 'Benutzerakzeptanz messen: Führen Sie Umfragen oder Feedbackrunden durch, um die Akzeptanz der neuen Systeme zu evaluieren.',
        tooltip:
          'Die Akzeptanz der Benutzer ist entscheidend für den langfristigen Erfolg der Migration.',
      },
      {
        text: 'Evaluierung der Ergebnisse: Analysieren Sie die gesammelten Daten aus der Pilotphase und erstellen Sie einen umfassenden Bericht.',
        tooltip:
          'Ein detaillierter Evaluationsbericht hilft, fundierte Entscheidungen für die Hauptmigration zu treffen.',
      },
      {
        text: 'Optimierungsmaßnahmen ableiten: Erarbeiten Sie konkrete Verbesserungen, um den Migrationsprozess effizienter zu gestalten.',
        tooltip:
          'Die Erfahrungen aus der Pilotphase ermöglichen es, die Migrationsstrategie gezielt anzupassen.',
      },
      {
        text: 'Risikomanagement anpassen: Identifizieren Sie Risiken aus der Pilotphase und entwickeln Sie gezielte Gegenmaßnahmen.',
        tooltip:
          'Eine angepasste Risikobewertung hilft, die Stabilität der Hauptmigration sicherzustellen.',
      },
    ],
    huerden: [
      'huerde1',  // Unklare Verantwortlichkeiten
      'huerde4',  // Datenverlust bei Migration
      'huerde12', // Anpassung oder Ersatz von Backup- und Recovery-Lösungen
      'huerde14', // Schulungsbedarf für neue Backup- und Monitoring-Systeme
    ],
  },
  
  {
    id: 'step4',
    title: 'Durchführung der Migration',
    icon: CogIcon,
    description:
      'Die schrittweise Durchführung der Migration stellt sicher, dass der Übergang reibungslos und risikoarm abläuft. Beginnen Sie mit weniger kritischen Abteilungen oder Anwendungen, um mögliche Probleme frühzeitig zu erkennen und gezielt zu beheben. Ein besonderer Fokus liegt auf der Umstellung von Fachanwendungen, der Integration von Open-Source-Alternativen und der kontinuierlichen Sicherstellung der Datenintegrität. Durch eine strukturierte und abgestimmte Vorgehensweise können Betriebsunterbrechungen minimiert, technische Hürden überwunden und die Akzeptanz der neuen Umgebung schrittweise erhöht werden.',
    reference: 'Kapitel 7.2.1 und 7.8 in der Diplomarbeit',
    content: [
      {
        text: 'Schrittweise Migration: Beginnen Sie die Umstellung mit weniger kritischen Abteilungen und weiten Sie den Prozess schrittweise auf die gesamte Organisation aus.',
        tooltip:
          'Ein stufenweiser Ansatz reduziert das Risiko größerer Ausfälle und erlaubt eine kontinuierliche Optimierung des Migrationsprozesses.',
      },
      {
        text: 'Integration von Fachanwendungen: Passen Sie spezialisierte Fachanwendungen an oder nutzen Sie Kompatibilitätslösungen wie WINE oder virtuelle Maschinen.',
        tooltip:
          'Kompatibilitätslösungen ermöglichen den Betrieb von Anwendungen, die ursprünglich nicht für Linux entwickelt wurden.',
      },
      {
        text: 'Datenintegrität sicherstellen: Überprüfen Sie während des Migrationsprozesses regelmäßig, ob Daten vollständig und konsistent übertragen werden.',
        tooltip:
          'Datenverluste oder Inkonsistenzen können zu Ausfällen oder Fehlfunktionen führen – regelmäßige Validierung ist daher unerlässlich.',
      },
      {
        text: 'Implementierung von Open-Source-Alternativen: Führen Sie Open-Source-Software wie LibreOffice oder OpenOffice als Ersatz für proprietäre Lösungen ein.',
        tooltip:
          'Die Einführung von Open-Source-Tools reduziert langfristig Lizenzkosten und fördert digitale Souveränität.',
      },
      {
        text: 'Migration von E-Mail- und Kalenderdiensten: Ersetzen Sie Exchange-Server durch Open-Source-Lösungen wie Postfix oder Zimbra und validieren Sie die Integration.',
        tooltip:
          'Ein reibungsloser E-Mail- und Kalenderbetrieb ist entscheidend für die Kommunikation und Zusammenarbeit im Unternehmen.',
      },
      {
        text: 'Schulung der IT-Teams während der Migration: Begleiten Sie die Durchführung durch fortlaufende Schulungsmaßnahmen für IT-Personal und Anwender.',
        tooltip:
          'Gut geschulte IT-Teams können Probleme schneller erkennen und beheben, wodurch der Migrationsprozess beschleunigt wird.',
      },
      {
        text: 'Testen der neuen Umgebung: Validieren Sie nach jedem Migrationsschritt die Stabilität, Performance und Kompatibilität der Systeme.',
        tooltip:
          'Durch gezielte Tests stellen Sie sicher, dass alle Systeme unter der neuen Umgebung zuverlässig funktionieren.',
      },
      {
        text: 'Backup-Strategien anwenden: Führen Sie regelmäßige Backups während des gesamten Migrationsprozesses durch.',
        tooltip:
          'Backups sind essenziell, um bei Problemen während der Migration jederzeit auf die ursprünglichen Daten zurückgreifen zu können.',
      },
      {
        text: 'Problemanalyse und Fehlerbehebung: Identifizieren und dokumentieren Sie auftretende Probleme, um diese gezielt zu lösen und zukünftige Fehler zu vermeiden.',
        tooltip:
          'Eine kontinuierliche Fehleranalyse hilft, den Migrationsprozess effizienter zu gestalten und Störungen zu minimieren.',
      },
      {
        text: 'Kommunikation mit den Mitarbeitenden: Informieren Sie die betroffenen Abteilungen frühzeitig über die Umstellung und den aktuellen Stand der Migration.',
        tooltip:
          'Transparente Kommunikation trägt zur Akzeptanz der Migration bei und stellt sicher, dass alle Beteiligten vorbereitet sind.',
      },
    ],
    huerden: [
      'huerde2',  // Fehlende Risikobewertung
      'huerde3',  // Hardware-Kompatibilität
      'huerde4',  // Datenverlust bei Migration
      'huerde6',  // Komplexität der bestehenden IT-Infrastruktur
      'huerde7',  // Inkompatibilität mit Microsoft Active Directory
      'huerde8',  // Fehlendes Wissen über neue Tools und Konzepte
      'huerde9',  // Anpassung der Sicherheitssysteme und Protokolle
      'huerde12', // Risiko von Datenverlust und Konsistenzproblemen
      'huerde33', // Migration von Exchange-Servern
    ],
  },
  
  {
    id: 'step5',
    title: 'Schulung und Unterstützung',
    icon: UserGroupIcon,
    description:
      'Eine umfassende Schulung und der Aufbau effektiver Support-Strukturen sind entscheidend für den Erfolg der Migration. Mitarbeiterschulungen sorgen dafür, dass Anwender die neuen Systeme verstehen und produktiv einsetzen können. Gleichzeitig hilft die Einrichtung eines internen Support-Teams, Probleme schnell zu lösen und die Umstellung reibungslos zu gestalten. Der Fokus liegt auf der Einführung der neuen Software, der Gewöhnung an Benutzeroberflächen sowie der Anpassung bestehender Arbeitsprozesse an Open-Source-Lösungen. Durch gezielte Schulungsprogramme und kontinuierlichen Support wird die Akzeptanz der neuen Systeme gefördert und mögliche Widerstände minimiert.',
    reference: 'Kapitel 6.6.1 und 7.6.1 in der Diplomarbeit',
    content: [
      {
        text: 'Bedarfsanalyse für Schulungen: Identifizieren Sie den Schulungsbedarf aller Mitarbeitenden und IT-Teams durch Umfragen und Feedbackrunden.',
        tooltip:
          'Eine gezielte Bedarfsanalyse ermöglicht maßgeschneiderte Schulungsprogramme, die den spezifischen Anforderungen gerecht werden.',
      },
      {
        text: 'Einführungskurse für Mitarbeitende: Schulen Sie grundlegende Funktionen der neuen Systeme und Anwendungen, um die Produktivität schnell wiederherzustellen.',
        tooltip:
          'Einführungskurse helfen den Mitarbeitenden, sich sicher und kompetent in der neuen Umgebung zu bewegen.',
      },
      {
        text: 'Spezialisierte Schulungen für IT-Teams: Fortgeschrittene Schulungen zu Linux-Administration, Netzwerkkonfiguration und Sicherheit.',
        tooltip:
          'IT-Teams müssen die neuen Systeme administrieren und auftretende Probleme eigenständig beheben können.',
      },
      {
        text: 'Umgewöhnung an Benutzeroberflächen: Gewöhnen Sie Mitarbeitende schrittweise an neue Benutzeroberflächen wie Linux-Desktops oder Open-Source-Office-Tools.',
        tooltip:
          'Interaktive Workshops und Tutorials erleichtern die Eingewöhnung und fördern die Akzeptanz neuer Benutzeroberflächen.',
      },
      {
        text: 'Anpassung von Arbeitsprozessen: Überprüfen Sie bestehende Arbeitsabläufe und passen Sie diese an die neuen Systeme und Softwarelösungen an.',
        tooltip:
          'Eine enge Zusammenarbeit mit den Fachabteilungen ist notwendig, um die Arbeitsprozesse effizient zu gestalten.',
      },
      {
        text: 'Support-Strukturen aufbauen: Richten Sie ein internes Support-Team ein, das als erste Anlaufstelle für Fragen und Probleme dient.',
        tooltip:
          'Ein zuverlässiges Support-Team reduziert Ausfallzeiten und unterstützt die Mitarbeitenden während der Umstellungsphase.',
      },
      {
        text: 'Erstellung von Schulungsmaterialien: Entwickeln Sie benutzerfreundliche Handbücher, Video-Tutorials und FAQ-Seiten zur kontinuierlichen Unterstützung.',
        tooltip:
          'Schulungsmaterialien ermöglichen es Mitarbeitenden, sich jederzeit selbstständig weiterzubilden.',
      },
      
      {
        text: 'Feedbackmechanismen einführen: Sammeln Sie regelmäßig Feedback zu Schulungsmaßnahmen und Support, um diese kontinuierlich zu verbessern.',
        tooltip:
          'Feedback ermöglicht die Identifikation von Schwachstellen und die Optimierung des Schulungsangebots.',
      },
      {
        text: 'Langfristige Weiterbildungsangebote: Etablieren Sie langfristige Schulungs- und Weiterbildungsmaßnahmen zur Vertiefung des Wissens.',
        tooltip:
          'Regelmäßige Weiterbildungen halten IT-Teams und Mitarbeitende auf dem neuesten Stand.',
      },
    ],
    huerden: [
      'huerde1',  // Unklare Verantwortlichkeiten
      'huerde5',  // Fehlende Unterstützung durch Softwarehersteller
      'huerde14', // Schulungsbedarf für neue Backup- und Monitoring-Systeme
      'huerde25', // Mangel an Linux-Erfahrung in IT-Teams
      'huerde26', // Umgewöhnung an neue Programme und Benutzeroberflächen
      'huerde28', // Ersatz oder Anpassung von Standardprogrammen
      'huerde30', // Anpassung von Arbeitsprozessen an neue Software
      'huerde34', // Inkompatibilität proprietärer Office-Formate
    ],
  },
  
  {
    id: 'step6',
    title: 'Sicherstellung der Sicherheit',
    icon: ShieldCheckIcon,
    description:
      'Die Sicherheit der IT-Infrastruktur ist ein zentraler Aspekt der Migration auf Linux. Neben der Implementierung eines Härtungskonzepts müssen regelmäßige Sicherheitsupdates und Patches gewährleistet werden, um Schwachstellen zu schließen. Ergänzt wird dies durch kontinuierliche Audits und Penetrationstests, um Sicherheitslücken frühzeitig zu erkennen und zu beheben. Die Einhaltung von Sicherheitsstandards wie der DSGVO und ISO 27001 spielt eine wesentliche Rolle, um sowohl technische als auch rechtliche Anforderungen zu erfüllen. Durch gezielte Maßnahmen wie Firewalls, Zugriffskontrollen und Sicherheitsrichtlinien wird die Integrität und Stabilität der Systeme langfristig sichergestellt.',
    reference: 'Kapitel 6.7 und 7.7 in der Diplomarbeit',
    content: [
      {
        text: 'Systemhärtung durchführen: Entwicklung und Implementierung eines umfassenden Härtungskonzepts für alle Linux-Server und -Clients.',
        tooltip:
          'Systemhärtung reduziert die Angriffsfläche, indem unnötige Dienste deaktiviert, Sicherheitsmodule wie SELinux oder AppArmor eingesetzt und Standardzugänge gesichert werden.',
      },
      {
        text: 'Einsatz von Firewalls und Sicherheitsmodulen: Konfigurieren Sie Firewalls wie iptables oder nftables und setzen Sie Sicherheitsmodule wie SELinux oder AppArmor ein.',
        tooltip:
          'Firewalls und Sicherheitsmodule schränken den Zugriff auf Systemressourcen ein und schützen vor unbefugtem Zugriff.',
      },
      {
        text: 'Patch-Management implementieren: Etablieren Sie ein zuverlässiges System für regelmäßige Sicherheitsupdates und Patches.',
        tooltip:
          'Tools wie unattended-upgrades (Debian/Ubuntu) oder yum-cron (RHEL/CentOS) helfen, Sicherheitslücken automatisiert zu schließen.',
      },
      {
        text: 'Backup- und Recovery-Systeme einrichten: Implementieren Sie zuverlässige Backup-Lösungen wie Bacula oder Duplicity, um Datenverluste zu verhindern.',
        tooltip:
          'Regelmäßige Backups gewährleisten, dass Daten im Ernstfall wiederhergestellt werden können.',
      },
      {
        text: 'Regelmäßige Sicherheitsaudits: Führen Sie kontinuierliche Sicherheitsüberprüfungen der Systeme und Netzwerke durch.',
        tooltip:
          'Sicherheitsaudits und Tools wie Lynis helfen, Schwachstellen zu identifizieren und zu beheben.',
      },
      {
        text: 'Penetrationstests durchführen: Simulieren Sie realistische Angriffe, um die Robustheit Ihrer Systeme zu prüfen.',
        tooltip:
          'Penetrationstests decken Sicherheitslücken auf, die bei herkömmlichen Audits unentdeckt bleiben.',
      },
      {
        text: 'Einhaltung von Sicherheitsstandards sicherstellen: Passen Sie die Sicherheitskonfigurationen an Vorgaben wie DSGVO und ISO 27001 an.',
        tooltip:
          'Die Einhaltung von Sicherheitsstandards stellt sicher, dass rechtliche und branchenspezifische Anforderungen erfüllt werden.',
      },
      {
        text: 'Systemstabilität überwachen: Nutzen Sie Monitoring-Tools wie Zabbix oder Nagios zur kontinuierlichen Überwachung von Systemleistung und Sicherheit.',
        tooltip:
          'Monitoring hilft, Systeminstabilitäten frühzeitig zu erkennen und zu beheben, bevor sie zu Ausfällen führen.',
      },
      {
        text: 'Benutzer- und Rechteverwaltung implementieren: Stellen Sie sicher, dass Benutzer nur die notwendigen Zugriffsrechte erhalten.',
        tooltip:
          'Minimale Rechtevergabe nach dem „Least Privilege“-Prinzip erhöht die Systemsicherheit erheblich.',
      },
      {
        text: 'Protokollierung und Incident Response planen: Konfigurieren Sie Log-Management-Systeme und etablieren Sie einen Plan zur Reaktion auf Sicherheitsvorfälle.',
        tooltip:
          'Tools wie rsyslog oder Graylog helfen bei der Protokollierung und schnellen Erkennung von Sicherheitsvorfällen.',
      },
    ],
    huerden: [
      'huerde4',  // Datenverlust bei Migration
      'huerde3',  // Hardware-Kompatibilität
      'huerde9',  // Anpassung der Sicherheitssysteme und Protokolle
      'huerde17', // Sicherstellung der Systemstabilität
      'huerde31', // Einhaltung von Sicherheitsrichtlinien und Standards
      'huerde32', // Herausforderungen im Patch-Management
    ],
  },
  
  ];