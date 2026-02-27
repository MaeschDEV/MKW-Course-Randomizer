"use client";

import { getCurrentMap } from "../logic/mapManager";

const mapTitle = () => {
  const map = getCurrentMap();

  return (
    <>
      <div className="relative min-h-screen">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 pt-10 flex items-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
            {map.titleKey}
          </h1>
        </div>
      </div>
    </>
  );
};

export default mapTitle;
