import Link from 'next/link';

interface ModuleDescriptionProps {
  title: string;
  description: string;
  modules: {
    id: string;
    title: string;
    description: string;
    href: string;
    green?:boolean;
    icon: React.ElementType; // Icon-Komponente
  }[];
}

export default function ModuleDescription({ title, description, modules }: ModuleDescriptionProps) {
  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <p className="text-lg text-gray-700 text-center mb-10">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Linke Spalte */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-y-4">
        {modules.map((module, index) => (
          <Link href={module.href} key={index}>
            <div
                className={`bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                  module.green ? 'hover:bg-green-100' : 'hover:bg-indigo-100'
                } cursor-pointer`}
              >
              <module.icon className={`h-12 w-12  mb-4 mx-auto ${module.green? 'text-green-500' : 'text-indigo-500'}`} />
              <h3 className="text-xl font-bold text-center">{module.title}</h3>
            </div>
          </Link>
        ))}
      </div>

        {/* Rechte Spalte */}
        <div className="col-span-1 md:col-span-2 bg-gray-50 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Details zu den Modulen</h3>
          <p className="text-gray-700">
            Entdecken Sie die theoretischen Grundlagen zur Linux-Migration oder beantworten Sie unseren interaktiven
            Fragebogen, um herauszufinden, ob Ihre Behörde für die Migration geeignet ist.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600">
            <li>Theorie: Detaillierte Grundlagen und Nutzenbewertung</li>
            <li>Fragebogen: Interaktive Bewertung Ihrer Behörde</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Wählen Sie links ein Modul aus, um weitere Informationen zu erhalten.
          </p>
        </div>
      </div>
    </section>
  );
}
