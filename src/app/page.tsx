import Hero from '../components/Hero';
import Features from '../components/Features';

export default function HomePage() {
  return (
    <main className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />
    </main>
  );
}