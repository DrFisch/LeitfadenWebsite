import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo auf der linken Seite */}
        <div className="flex items-center space-x-3">
          <Image
            src="/haw2.png" // Pfad zu deinem Logo
            alt="Logo"
            width={100} // Größe des Logos
            height={40}
            className="w-22 h-19"
          />
        </div>
        {/* Copyright auf der rechten Seite */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-sm">
          <p>© 2024 Leitfaden zur Migration auf Linux. Lukas Sponsel (VInf, ZBFS)</p>
          
        </div>
      </div>
    </footer>
  );
}
