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
                <div key={subSection.id} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                {/* Titel der Subsection */}
                <h4 className="text-lg font-bold text-gray-800 flex items-center mb-4">
                  {/* Optionales Icon */}
                  <svg
                    className="w-6 h-6 text-blue-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-6-15.53"
                    />
                  </svg>
                  {subSection.title}
                </h4>
              
                {/* Content als Tabelle */}
                <table className="table-auto w-full text-left text-gray-700 border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 border-b font-semibold text-blue-600">Aspekt</th>
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
              ))}
            </div>
          ))}
      </div>
    </div>
  );
}
