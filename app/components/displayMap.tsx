"use client";

import Image from "next/image";
import { getCurrentMap } from "../logic/mapManager";

const DisplayMap = () => {
  const map = getCurrentMap();

  return (
    <>
      <div className="relative min-h-screen">
        <div className="fixed top-1/4 left-1/2 -translate-x-1/2 pt-10 flex items-center">
          <Image
            src={map.imagePath}
            alt={map.id}
            width={296}
            height={296}
            className="w-25 md:w-50 h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default DisplayMap;
