"use client";

import { useMap } from "../context/MapContext";

export default function NextMapButton() {
  const { nextMap } = useMap();

  return (
    <div className="relative min-h-screen">
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 pb-10 flex items-center justify-center">
        <button
          onClick={nextMap}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg 
                     transition-all duration-200 ease-in-out hover:scale-110
                     shadow-lg hover:shadow-xl active:scale-95"
        >
          Nächste!
        </button>
      </div>
    </div>
  );
}
