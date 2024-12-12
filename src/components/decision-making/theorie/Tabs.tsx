'use client';

import { useState } from 'react';

interface TabItem {
  id: string;
  title: string;
  points: string[]; // Array mit Strings für den Inhalt
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
                  ? 'bg-blue-400  text-black  font-medium'
                  : 'bg-white hover:bg-blue-200 text-gray-800 font-medium'
              }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab-Inhalte */}
      <div className="p-6 bg-gray-50 text-gray-500 rounded-lg w-full">
        {items
          .filter((item) => item.id === activeTab)
          .map((item) => (
            <div key={item.id}>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{item.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
