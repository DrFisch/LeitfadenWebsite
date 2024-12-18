'use client'

import { useState } from 'react';
import { huerden } from '@/data/migration-guide/huerden';

export default function MultiLevelTabs() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [activeHuerde, setActiveHuerde] = useState<string | null>(null);

  const chapters: number[] = Array.from(new Set(huerden.map((huerde) => huerde.chapter))).filter(Boolean) as number[];
  const huerdenByChapter = activeChapter
    ? huerden.filter((huerde) => huerde.chapter === activeChapter)
    : [];

  const activeHuerdeDetails = huerden.find((huerde) => huerde.id === activeHuerde);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Technische Hürden</h1>

      {/* Tabs für Kapitel */}
      <div className="flex space-x-4 border-b border-gray-200 mb-4">
        {chapters.map((chapter) => (
          <button
            key={chapter}
            onClick={() => {
              setActiveChapter(chapter);
              setActiveHuerde(null); // Reset active Hürde
            }}
            className={`py-2 px-4 ${
              activeChapter === chapter
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-600'
            }`}
          >
            Kapitel {chapter}
          </button>
        ))}
      </div>

      {/* Zweite Ebene: Tabs für Hürden */}
      {activeChapter && (
        <>
          <div className="flex space-x-4 border-b border-gray-200 mb-4">
            {huerdenByChapter.map((huerde) => (
              <button
                key={huerde.id}
                onClick={() => setActiveHuerde(huerde.id)}
                className={`py-2 px-4 ${
                  activeHuerde === huerde.id
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-600'
                }`}
              >
                {huerde.title}
              </button>
            ))}
          </div>

          {/* Anzeige der Hürde */}
          {activeHuerde && activeHuerdeDetails && (
            <div className="mt-4 p-4 border border-gray-200 rounded-lg">
              <h2 className="text-xl font-bold">{activeHuerdeDetails.title}</h2>
              <p className="mt-2">{activeHuerdeDetails.description}</p>
              <h3 className="text-lg font-bold mt-4">Lösung</h3>
              <p>{activeHuerdeDetails.solution}</p>
              <p className="text-sm text-gray-600 mt-4">
                Referenz: {activeHuerdeDetails.solutionreference}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
