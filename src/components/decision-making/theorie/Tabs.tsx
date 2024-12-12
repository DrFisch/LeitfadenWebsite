'use client';

import { useState } from 'react';

interface SubSection {
  id: string;
  title: string;
  factorsFor: string[];
  factorsAgainst: string[];
  improvements: string[];
}

interface TabItem {
  id: string;
  title: string;
  generalInfo: string; // Allgemeine Informationen zu diesem Tab
  subSections: SubSection[]; // Die einzelnen Unterpunkte
}

interface TabsProps {
  items: TabItem[];
}

export default function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  return (
    <div className="md:flex">
      {/* Tab-Leiste */}
      <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className={`inline-flex items-center px-4 py-3 rounded-lg w-full text-left transition-transform duration-200 ${
                activeTab === item.id
                  ? 'bg-blue-400 text-black font-medium'
                  : 'bg-white hover:bg-blue-200 text-gray-800 font-medium'
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab-Inhalte */}
      <div className="p-6 bg-gray-50 text-gray-500 rounded-lg w-full space-y-8">
        {items
          .filter((item) => item.id === activeTab)
          .map((item) => (
            <div key={item.id}>
              {/* Allgemeine Informationen */}
              <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.generalInfo}</p>
              </div>

              {/* Subsections */}
              {item.subSections.map((subSection) => (
                <div key={subSection.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <h4 className="text-md font-semibold text-gray-800 mb-2">{subSection.title}</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-2">
                    <li>
                      <span className="font-semibold text-blue-600">Migration sinnvoll wenn:</span>
                      <ul className="list-disc list-inside ml-5">
                        {subSection.factorsFor.map((factor, index) => (
                          <li key={index}>{factor}</li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <span className="font-semibold text-red-600">Migration weniger sinnvoll wenn:</span>
                      <ul className="list-disc list-inside ml-5">
                        {subSection.factorsAgainst.map((factor, index) => (
                          <li key={index}>{factor}</li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <span className="font-semibold text-green-600">Verbesserungen durch Migration:</span>
                      <ul className="list-disc list-inside ml-5">
                        {subSection.improvements.map((improvement, index) => (
                          <li key={index}>{improvement}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
