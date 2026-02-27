import { Nunito } from "next/font/google";

import Background from "./components/background";
import Title from "./components/title";
import ClientMapWrapper from "./components/ClientMapWrapper";
import DisplayMap from "./components/displayMap";
import MapTitle from "./components/mapTitle";
import NextMapButton from "./components/nextMapButton";

const nunito = Nunito({ weight: "700" });

export default function Homepage() {
  return (
    <div className={nunito.className}>
      <Background image_path="/background.png" />
      <Title image_path="/mkw_logo.png" title="Randomizer" />
      
      {/* Client-only Wrapper für Map-Komponenten (verhindert Hydration-Fehler) */}
      <ClientMapWrapper>
        <DisplayMap />
        <MapTitle />
        <NextMapButton />
      </ClientMapWrapper>
    </div>
  );
}