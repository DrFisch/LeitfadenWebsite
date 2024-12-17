'use client';

import { useState } from 'react';
import { steps } from '@/data/migration-guide/steps';
import { huerden, Challenge } from '@/data/migration-guide/huerden';

export default function MigrationGuide() {
  const [activeStep, setActiveStep] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <main className="min-h-[82vh] bg-gray-50">
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Schritt-für-Schritt Migrationsleitfaden
        </h2>

        {/* Fortschrittsbalken */}
        <div className="relative w-full bg-gray-200 rounded-full h-4 mb-10">
          <div
            className="absolute top-0 left-0 bg-indigo-500 h-4 rounded-full transition-all"
            style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`p-4 text-center rounded-lg transition ${
                activeStep === index
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-100'
              }`}
            >
              <div className="flex flex-col items-center">
                <step.icon className="h-8 w-8 mb-2" />
                <span className="text-sm font-medium ">{step.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Inhalt */}
        <div className="bg-white rounded-lg shadow-md p-6 relative">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4 border-b-2 border-gray-500">{steps[activeStep].title}</h2>
          <p className="text-gray-700 mb-6">{steps[activeStep].description}</p>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-400">Ablauf</h3>

          <ul className="list-disc list-inside text-gray-600 space-y-4">
            {steps[activeStep].content.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>

          {/* Technische Herausforderungen - Accordion */}
          <div className="mt-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-gray-400  pt-4">
          Technische Herausforderungen</h3>
            <div className="space-y-2">
              {steps[activeStep].huerden?.map((huerdeId) => {
                const challenge = huerden.find((h) => h.id === huerdeId);
                return (
                  challenge && (
                    <div key={challenge.id} className="border border-gray-200 rounded-lg shadow-sm">
                      <h2>
                        <button
                          onClick={() => toggleAccordion(challenge.id)}
                          className="flex justify-between items-center w-full px-4 py-4 bg-blue-100 hover:bg-indigo-200 text-gray-700 font-medium rounded-t-lg transition"
                        >
                          <span className="">{challenge.title}</span>
                          <svg
                            className={`w-5 h-5 transform ${
                              openAccordion === challenge.id ? 'rotate-180' : 'rotate-0'
                            } transition-transform text-indigo-700`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </h2>
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          openAccordion === challenge.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-5 bg-white rounded-b-lg">
                          <h4 className="text-lg font-bold text-gray-800 mb-2">Beschreibung</h4>
                          <p className="text-gray-600 mb-4">{challenge.description}</p>
                          
                          <h4 className="text-lg font-bold text-gray-800 mb-2 mt-4">Lösung</h4>
                          <p className="text-gray-600 mb-4">{challenge.solution}</p>
                          
                          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">Verweis</h4>
                          <p className="text-sm text-gray-500">{challenge.solutionreference}</p>
                        </div>

                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
