import Link from 'next/link';

interface HeroProps {
  title: string;
  description: string;
  backgroundImage: string;
  buttons: { text: string; href: string; style: string }[];
  overlayOpacity?: number; // Opazität für das Blurry Overlay
  boxOpacity?: number; // Opazität für die Blurry Box
  small?: boolean; // Neue Prop für kleinere Hero-Section
}

export default function Hero({
  title,
  description,
  backgroundImage,
  buttons,
  overlayOpacity = 1, // Standardwert für Overlay-Opazität
  boxOpacity = 4, // Standardwert für Box-Opazität
  small = false, // Standardwert: Nicht klein
}: HeroProps) {
  return (
    <section
      className={`relative bg-cover text-stone-50 ${
        small ? 'pt-20 pb-10' : 'pt-20 pb-10'
      }`} // Dynamische Höhe
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Blurry Overlay */}
      <div
        className={`absolute inset-0 z-10 ${overlayOpacity > 0 ? 'backdrop-blur-sm' : ''}`}
        style={
          overlayOpacity > 0
            ? { backgroundColor: `rgba(0,0,0, ${overlayOpacity / 100})` }
            : undefined
        }
      ></div>

      <div className="container mx-auto text-center relative">
        {/* Blurry Box */}
        <div
          className={`relative z-10 rounded-lg ${
            small ? 'p-8' : 'p-8'
          } ${boxOpacity > 0 ? 'backdrop-blur-sm' : ''}`} // Dynamische Padding
          style={
            boxOpacity > 0
              ? { backgroundColor: `rgba(255, 255, 255, ${boxOpacity / 1000})` }
              : undefined
          }
        >
          <h1
            className={`${
              small ? 'text-3xl' : 'text-5xl'
            } font-bold mb-6 drop-shadow-lg`} // Dynamische Schriftgröße
          >
            {title}
          </h1>
          <p
            className={`${
              small ? 'text-lg' : 'text-lg'
            } mb-8 drop-shadow-md`} // Dynamische Beschreibung
          >
            {description}
          </p>
          <div className="space-x-4">
            {buttons.map((button, index) => (
              <Link key={index} href={button.href}>
                <button
                  className={`${button.style} px-6 py-3 rounded-md shadow-lg transition`}
                >
                  {button.text}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu blur-3xl"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          backgroundImage: 'linear-gradient(to right, #ff80b5, #9089fc)',
          opacity: 0.3,
        }}
      />
    </section>
  );
}
