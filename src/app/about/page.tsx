import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-[82vh] py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Über dieses Projekt</h1>
        <p className="text-gray-600 mb-6">
          Dies ist der praktische Teil der Hausarbeit im Fach Verwaltungsinformatik. Diese Arbeit wird im Januar 2025 abgegeben. Die Webseite dient als praktischer Teil der Arbeit und wird in der Arbeit beschrieben.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Autor</h2>
          <p className="text-gray-600">
            Der Autor dieser Arbeit und Website ist Verwaltungsinformatik-Anwärter Lukas Sponsel (ZBFS).
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Theoretischer Hintergrund</h2>
          <p className="text-gray-600">
            Der Theorie-Teil der geschriebenen Arbeit basiert auf einer umfassenden Analyse von Quellen. Ziel war es, fundiertes Wissen über die Herausforderungen und Schritte zur Migration auf Linux zu gewinnen.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Zweck der Website</h2>
          <p className="text-gray-600">
            Diese Website soll Behörden dabei helfen, eine tscheidung darüber zu treffen, ob eine Migration auf Linux möglich ist, und liefert eine klare Anleitung für die Umsetzung der Migration.
          </p>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Diese Webseite besteht aus dem Leitfaden zur Migration und dem Modul zur Entscheidungsfindung. Die Inhalte wurden auf Basis des theoretischen Wissens erstellt, welche im schriftlichen Teil der Arbeit ausgearbeitet wurden. Ziel war es, eine praktische Anwendung für die Theorie zu finden und einen direkten Nutzen für Behörden zu schaffen.
          </p>
        </div>

        
      </div>
    </div>
  );
}
