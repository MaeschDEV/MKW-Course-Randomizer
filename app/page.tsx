import Background from "./components/background";
import Title from "./components/title";

import { Nunito } from "next/font/google";

const nunito = Nunito({ weight: "700" });

const Homepage = () => {
  return (
    <>
      <div className={nunito.className}>
        <Background image_path="/background.png" />
        <Title image_path="/mkw_logo.png" title="Randomizer" />
      </div>
    </>
  );
};

export default Homepage;
