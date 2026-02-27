"use client";

import Image from "next/image";
import { useMap } from "../context/MapContext";

export default function DisplayMap() {
  const { currentMap } = useMap();

  return (
    <div className="relative min-h-screen">
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <Image
          src={currentMap.imagePath}
          alt={currentMap.id}
          width={296}
          height={296}
          className="w-25 md:w-50 h-auto"
        />
      </div>
    </div>
  );
}
