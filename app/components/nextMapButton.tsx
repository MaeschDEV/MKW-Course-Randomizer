"use client";

import { getNextMap } from "../logic/mapManager";

const NextMapButton = () => {
  const handleClick = () => {
    getNextMap();
    // Force re-render - du brauchst hier eventuell noch State-Management
    // um die DisplayMap-Komponente zu aktualisieren
    window.location.reload(); // Temporäre Lösung
  };

  return (
    <>
      <div className="relative min-h-screen">
        <div className="fixed bottom-1/3 left-1/2 -translate-x-1/2 pt-10 flex items-center">
          <button
            onClick={handleClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg 
                       transition-transform duration-200 ease-in-out hover:scale-110
                       shadow-lg hover:shadow-xl"
          >
            Nächste!
          </button>
        </div>
      </div>
    </>
  );
};

export default NextMapButton;