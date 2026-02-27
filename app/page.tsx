import Background from "./components/background";
import Title from "./components/title";
import DisplayMap from "./components/displayMap";
import NextMapButton from "./components/nextMapButton";
import MapTitle from "./components/mapTitle";

import { Nunito } from "next/font/google";

const nunito = Nunito({ weight: "700" });

const Homepage = () => {
  return (
    <>
      <div className={nunito.className}>
        <Background image_path="/background.png" />
        <Title image_path="/mkw_logo.png" title="Randomizer" />
        <DisplayMap />
        <MapTitle />
        <NextMapButton />
      </div>
    </>
  );
};

export default Homepage;
