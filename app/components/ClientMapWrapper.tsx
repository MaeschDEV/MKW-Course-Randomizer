"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface MapContentProps {
  children: ReactNode;
}

// Dynamischer Import des MapProviders ohne SSR
const MapProviderClient = dynamic(
  () => import("../context/MapContext").then((mod) => mod.MapProvider),
  {
    ssr: false,
    loading: () => (
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 pt-10">
        <div className="w-[296px] h-[296px] bg-gray-700/50 animate-pulse rounded-lg" />
      </div>
    ),
  }
);

/**
 * Client-only Wrapper der den MapProvider erst auf dem Client rendert.
 * Verhindert Hydration-Mismatches durch Math.random() beim Shuffle.
 */
export default function ClientMapWrapper({ children }: MapContentProps) {
  return <MapProviderClient>{children}</MapProviderClient>;
}