interface GridItem {
    id: string;
    title: string;
    points: string[];
  }
  
  interface GridProps {
    items: GridItem[];
  }
  
  export default function Grid({ items }: GridProps) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold text-indigo-600 mb-3">{item.title}</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  