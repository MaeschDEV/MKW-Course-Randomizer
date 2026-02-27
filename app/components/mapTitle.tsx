"use client";

import { useMap } from "../context/MapContext";

export default function MapTitle() {
  const { currentMap } = useMap();

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-5xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          {currentMap.titleKey}
        </h1>
      </div>
    </div>
  );
}