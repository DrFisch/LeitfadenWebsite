import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  solution: string;
  reference: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  solution,
  reference,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-lg rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <h3 className="text-xl font-semibold mb-2">Lösung</h3>
        <p className="text-gray-600 mb-4">{solution}</p>
        <p className="text-sm text-gray-500">
          Verweis: <span className="text-indigo-500">{reference}</span>
        </p>
        <button
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          onClick={onClose}
        >
          Schließen
        </button>
      </div>
    </div>
  );
}
