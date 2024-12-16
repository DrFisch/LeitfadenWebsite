'use client';

import { useState } from 'react';
import Modal from '@/components/migration-guide/leitfaden/HuerdenModal';
import { steps } from '@/data/migration-guide/steps';
import { huerden, Challenge } from '@/data/migration-guide/huerden';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

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
                <span className="text-sm font-medium">{step.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Inhalt */}
        <div className="bg-gray-50 rounded-lg shadow-md p-6 relative">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">{steps[activeStep].title}</h2>
          <p className="text-gray-700 mb-6">{steps[activeStep].description}</p>
          <h3 className="text-xl font-bold mb-4">Ablauf</h3>

          <ul className="list-disc list-inside text-gray-600 space-y-4">
            {steps[activeStep].content.map((item, index) => (
              <li key={index} className="relative">
                <span>{item.text}</span>
                {item.tooltip && (
                  <div className="relative inline-block group ml-2">
                    <QuestionMarkCircleIcon
                      className="h-5 w-5 text-indigo-500 cursor-pointer"
                    />
                    <div className="absolute left-6 top-0 w-64 bg-gray-700 text-white text-sm p-2 rounded hidden group-hover:block z-10">
                      {item.tooltip}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Technische Herausforderungen */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Technische Herausforderungen</h3>
            <ul className="list-disc list-inside space-y-4">
              {steps[activeStep].huerden?.map((huerdeId) => {
                const challenge = huerden.find((h) => h.id === huerdeId); // Verknüpfe mit den Hürden
                return (
                  challenge && (
                    <li key={challenge.id} className="relative">
                      <span className="text-gray-700">{challenge.title}</span>
                      <span
                        className="text-sm text-indigo-500 hover:underline cursor-pointer ml-2"
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
