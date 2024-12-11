import Hero from '../components/Hero';
import Features from '../components/Features';

export default function HomePage() {
  return (
    <main className="bg-inherit text-gray-900 flex-grow">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />
    </main>
  );
}