"use client";

import { useState } from "react";
import { huerden } from "@/data/migration-guide/huerden";

export default function SidebarTree() {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const [selectedHuerde, setSelectedHuerde] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>("intro"); // "intro" als Standard für die Einführung

  // Kapitel mit Beschreibungen
  const chapters = [
    { number: 2, description: "Software-Kompatibilität" },
    { number: 3, description: "Integration in Infrastruktur" },
    { number: 4, description: "Hardware-Kompatibilität" },
    { number: 5, description: "Datenmigration" },
    { number: 6, description: "Mangel an Linux-Erfahrung" },
    { number: 7, description: "Sicherheitsanforderungen" },
    { number: 8, description: "Bürosoftware" },
  ];

  const selectedHuerdeDetails = huerden.find((huerde) => huerde.id === selectedHuerde);

  const toggleChapter = (chapter: number) => {
    setExpandedChapter(expandedChapter === chapter ? null : chapter);
    setActiveTab(null); // Zurücksetzen, wenn ein Kapitel geöffnet wird
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg border-r border-gray-200 p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-6">Kapitelübersicht</h2>

        {/* Einführung Tab */}
        <div className="mb-4">
          <button
            onClick={() => {
              setActiveTab("intro");
              setExpandedChapter(null); // Alle Kapitel schließen
              setSelectedHuerde(null); // Hürde zurücksetzen
            }}
            className={`w-full text-left px-4 py-2 text-lg font-bold ${
              activeTab === "intro" ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
            } rounded-md`}
          >
            Einführung
          </button>
        </div>

        {/* Kapitel */}
        {chapters.map((chapter) => (
          <div key={chapter.number} className="mb-4">
            {/* Kapitel Button */}
            <button
              onClick={() => {
                toggleChapter(chapter.number);
                setActiveTab(null); // Einführung deaktivieren
              }}
              className={`w-full flex items-center justify-between px-4 py-2 text-base font-bold ${
                expandedChapter === chapter.number ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
              } rounded-md`}
              
            >
              Kapitel 6.{chapter.number} - {chapter.description}
              <span
                className={`transform transition-transform ${
                  expandedChapter === chapter.number ? "rotate-90" : ""
                }`}
              >
                ▶
              </span>
            </button>

            {/* Hürden innerhalb des Kapitels */}
            {expandedChapter === chapter.number && (
              <div className="mt-2 space-y-1">
                {huerden
                  .filter((huerde) => huerde.chapter === chapter.number)
                  .map((huerde) => (
                    <button
                      key={huerde.id}
                      onClick={() => setSelectedHuerde(huerde.id)}
                      className={`w-full text-left px-4 py-2 border-l-2 ${
                        selectedHuerde === huerde.id
                          ? "bg-blue-50 border-blue-500 text-blue-600"
                          : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      } rounded-md`}
                    >
                      {huerde.title}
                    </button>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Content Bereich */}
      <div className="w-3/4 p-8">
        {/* Einführung anzeigen */}
        {activeTab === "intro" && (
          <div>
            <h1 className="text-2xl font-bold">Einführung</h1>
            <p className="mt-4 text-gray-700">
              Hier werden die technischen Hürden und Lösungsansätze aus der Studienarbeit dargestellt. Die Kapitel
              wurden bewusst nach ihrer ursprünglichen Nummerierung in der Studienarbeit benannt, um eine direkte
              Zuordnung zu erleichtern.
            </p>
            <p className="mt-4 text-gray-700">
              Jedes Kapitel verweist dabei auf die jeweilige technische Hürde (Kapitel 6) und den zugehörigen
              Lösungsansatz (Kapitel 7). Zum Beispiel steht Kapitel <strong>6.2</strong> in dieser Übersicht für die
              technische Hürde <strong>6.2</strong> und den Lösungsansatz aus Kapitel <strong>7.2</strong>.
            </p>
          </div>
        )}

        {/* Hürden anzeigen */}
        {!activeTab && selectedHuerdeDetails && (
          <div>
            <h1 className="text-2xl font-bold">{selectedHuerdeDetails.title}</h1>
            <p className="mt-4 text-gray-700">{selectedHuerdeDetails.description}</p>
            <p className="text-sm text-gray-500 mt-4">Referenz: {selectedHuerdeDetails.reference}</p>
            <h2 className="text-xl font-bold mt-6">Lösung</h2>
            <p className="mt-2 text-gray-600">{selectedHuerdeDetails.solution}</p>
            <p className="text-sm text-gray-500 mt-4">Referenz: {selectedHuerdeDetails.solutionreference}</p>
          </div>
        )}

        {/* Begrüßung anzeigen, wenn nichts ausgewählt */}
        {!activeTab && !selectedHuerdeDetails && (
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Willkommen!</h1>
            <p className="mt-4 text-gray-600">
              Wähle ein Kapitel oder die Einführung aus der Sidebar, um Details anzuzeigen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
