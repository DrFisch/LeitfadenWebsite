'use client';

import { useState } from 'react';

interface TabItem {
  id: string;
  title: string;
  points: string[];
}

interface TabsProps {
  items: TabItem[];
}

export default function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tab Header */}
      <div className="flex border-b">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex-1 py-2 px-4 text-center ${
              activeTab === item.id
                ? 'border-indigo-500 text-indigo-600 font-bold'
                : 'text-gray-500'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 bg-white rounded-lg shadow">
        {items
          .filter((item) => item.id === activeTab)
          .map((item) => (
            <ul key={item.id} className="list-disc pl-5 text-gray-700 space-y-2">
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ))}
      </div>
    </div>
  );
}
