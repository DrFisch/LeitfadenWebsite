'use client';

import { useState } from 'react';
import Modal from '@/components/migration-guide/leitfaden/HuerdenModal';
import { steps } from '@/data/migration-guide/steps';
import { huerden, Challenge } from '@/data/migration-guide/huerden';

export default function MigrationGuide() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);

  const handleOpenModal = (challenge: Challenge) => {
    setSelectedChallenge(challenge);
  };

  const handleCloseModal = () => {
    setSelectedChallenge(null);
  };

  return (
    <main className="min-h-[82vh]">
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Schritt-für-Schritt Migrationsleitfaden</h2>

        {/* Fortschrittsbalken */}
        <div className="w-full bg-gray-400 rounded-full h-4 mb-8">
          <div
            className="bg-indigo-500 h-4 rounded-full"
            style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`py-2 px-4 rounded-lg ${
                activeStep === index
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {step.title}
            </button>
          ))}
        </div>

        {/* Inhalt */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6 relative">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">{steps[activeStep].title}</h2>
          <p className="text-gray-700 mb-6">{steps[activeStep].description}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-4">
            {steps[activeStep].content.map((item, index) => (
              <li key={index} className="relative group">
                <span>{item.text}</span>
                {item.tooltip && (
                  <span className="ml-2 text-sm text-indigo-500 cursor-pointer">
                    ❔
                    <div className="absolute left-full ml-2 w-64 bg-gray-700 text-white text-sm p-2 rounded hidden group-hover:block">
                      {item.tooltip}
                    </div>
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Technische Herausforderungen */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Technische Herausforderungen</h3>
            <ul className="space-y-4">
              {steps[activeStep].huerden?.map((huerdeId) => {
                const challenge = huerden.find((h) => h.id === huerdeId); // Verknüpfe mit den Hürden
                return (
                  challenge && (
                    <li key={challenge.id} className="flex justify-between items-center">
                      <span className="text-gray-700">{challenge.title}</span>
                      <span
                        className="text-sm text-indigo-500 hover:underline cursor-pointer"
                        onClick={() => handleOpenModal(challenge)}
                      >
                        Mehr erfahren
                      </span>
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedChallenge && (
        <Modal
          isOpen={!!selectedChallenge}
          onClose={handleCloseModal}
          title={selectedChallenge.title}
          description={selectedChallenge.description}
          solution={selectedChallenge.solution}
          reference={selectedChallenge.reference}
        />
      )}
    </main>
  );
}
