"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import mapItems from "../lib/maps";

// Type Definition
interface MKWMap {
  id: string;
  imagePath: string;
  titleKey: string;
}

interface MapContextType {
  currentMap: MKWMap;
  nextMap: () => void;
}

// Fisher-Yates Shuffle
function shuffle<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Context
const MapContext = createContext<MapContextType | null>(null);

// Provider Component
export function MapProvider({ children }: { children: ReactNode }) {
  const [shuffledMaps, setShuffledMaps] = useState<MKWMap[]>(() => shuffle(mapItems));
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMap = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      
      // Wenn alle Maps durch sind, neu mischen
      if (newIndex >= shuffledMaps.length) {
        setShuffledMaps(shuffle(mapItems));
        return 0;
      }
      
      return newIndex;
    });
  }, [shuffledMaps.length]);

  const currentMap = shuffledMaps[currentIndex];

  return (
    <MapContext.Provider value={{ currentMap, nextMap }}>
      {children}
    </MapContext.Provider>
  );
}

// Custom Hook
export function useMap() {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
}