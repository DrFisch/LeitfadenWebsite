'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

interface AccordionItem {
  id: string;
  title: string;
  points: string[];
}

interface AccordionListProps {
  items: AccordionItem[];
}

export default function AccordionList({ items }: AccordionListProps) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item) => (
        <Disclosure key={item.id}>
          {({ open }) => (
            <div>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>{item.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-indigo-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                <ul className="list-disc pl-5">
                  {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
