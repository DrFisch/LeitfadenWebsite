"use client";

import { useState } from 'react';
import { theorySections } from '@/data/theory/theorieContent';

export default function TheoryPage() {
  const [expandedTab, setExpandedTab] = useState<string | null>(null);
  const [activeSubSection, setActiveSubSection] = useState<string | null>(null);

  const toggleTab = (tabId: string) => {
    setExpandedTab(expandedTab === tabId ? null : tabId);
    setActiveSubSection(null); // Reset active subsection
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg border-r border-gray-200 p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-6">Theorie: Entscheidungsfindung</h2>

        {/* Theorie-Tabs */}
        {theorySections.map((section) => (
          <div key={section.id} className="mb-4">
            {/* Tab-Button */}
            <button
              onClick={() => toggleTab(section.id)}
              className={`w-full flex items-center justify-between px-4 py-2 text-lg font-bold ${
                expandedTab === section.id ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              } rounded-md`}
            >
              {section.title}
              <span
                className={`transform transition-transform ${
                  expandedTab === section.id ? 'rotate-90' : ''
                }`}
              >
                ▶
              </span>
            </button>

            {/* Subsections */}
            {expandedTab === section.id && (
              <div className="mt-2 space-y-1">
                {section.subSections.map((subSection) => (
                  <button
                    key={subSection.id}
                    onClick={() => setActiveSubSection(subSection.id)}
                    className={`w-full text-left px-4 py-2 border-l-2 ${
                      activeSubSection === subSection.id
                        ? 'bg-blue-50 border-blue-500 text-blue-600'
                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    } rounded-md`}
                  >
                    {subSection.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Content Bereich */}
      <div className="w-3/4 p-8">
        {/* Inhalte anzeigen */}
        {activeSubSection ? (
          theorySections
            .flatMap((section) => section.subSections)
            .filter((subSection) => subSection.id === activeSubSection)
            .map((subSection) => (
              <div key={subSection.id}>
                <h1 className="text-2xl font-bold mb-4">{subSection.title}</h1>

                {/* Inhalte als Tabelle */}
                <table className="table-auto w-full text-left text-gray-700 border-collapse mb-6">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 border-b font-semibold text-blue-600"></th>
                      <th className="p-3 border-b font-semibold text-gray-800">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Faktoren für Migration */}
                    <tr className="hover:bg-blue-50">
                      <td className="p-3 border-b text-blue-600">Migration sinnvoll wenn</td>
                      <td className="p-3 border-b">
                        <ul className="list-disc list-inside">
                          {subSection.factorsFor.map((factor, index) => (
                            <li key={index} className="mb-1">{factor}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    {/* Faktoren gegen Migration */}
                    <tr className="hover:bg-red-50">
                      <td className="p-3 border-b text-red-600">Migration weniger sinnvoll wenn</td>
                      <td className="p-3 border-b">
                        <ul className="list-disc list-inside">
                          {subSection.factorsAgainst.map((factor, index) => (
                            <li key={index} className="mb-1">{factor}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                    {/* Verbesserungen */}
                    <tr className="hover:bg-green-50">
                      <td className="p-3 text-green-600">Verbesserungen durch Migration</td>
                      <td className="p-3">
                        <ul className="list-disc list-inside">
                          {subSection.improvements.map((improvement, index) => (
                            <li key={index} className="mb-1">{improvement}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Willkommen!</h1>
            <p className="mt-4 text-gray-600">
              Wähle eine Theorie-Kategorie und eine Untersektion aus der Sidebar, um Details anzuzeigen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
