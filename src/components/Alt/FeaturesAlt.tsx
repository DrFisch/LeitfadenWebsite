import Link from 'next/link';


interface ModuleDescriptionProps {
  title: string;
  description: string;
  
  modules: {
    title: string;
    description: string;
    href: string;
    buttonLabel: string;
    buttonStyle: string;
    icon: React.ElementType; // Icon-Komponente
  }[];
}

export default function ModuleDescription({
  title,
  description,
  modules,
}: ModuleDescriptionProps) {
  return (
    <section className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <p className="text-lg text-gray-700 text-center mb-10">{description}</p>

      {/* Links zu den Unterseiten */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {modules.map((module, index) => (
          <Link href={module.href} key={index}>
          <div
            
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:bg-indigo-100"
          >
            <module.icon className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{module.title}</h3>
            <p className="text-gray-600 mb-6">{module.description}</p>
            
              <button
                className={`${module.buttonStyle} text-white px-6 py-3 rounded-md shadow hover:bg-opacity-90`}
              >
                {module.buttonLabel}
              </button>
            
          </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
