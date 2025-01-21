import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 py-4 rounded-t-xl">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-3">
          <Image
            src="/haw2.png" 
            alt="Logo"
            width={80} 
            height={40}
            className="w-19 h-15"
          />
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center text-sm">
          <p>© 2024 Leitfaden zur Migration auf Linux. Lukas Sponsel (VInf, ZBFS)</p>
          
        </div>
      </div>
    </footer>
  );
}
