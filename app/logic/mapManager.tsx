import { getShuffledMaps } from "./randomize";

interface MKWMap {
  id: string;
  imagePath: string;
  titleKey: string;
}

let shuffledMaps: MKWMap[] = getShuffledMaps();
let currentIndex: number = 0;

export function getCurrentMap(): MKWMap {
  return shuffledMaps[currentIndex];
}

export function getNextMap(): MKWMap {
  const map = shuffledMaps[currentIndex];
  currentIndex++;

  if (currentIndex >= shuffledMaps.length) {
    shuffledMaps = getShuffledMaps();
    currentIndex = 0;
  }

  return map;
}