import mapItems from "../lib/maps";

function shuffle<T>(arr: T[]): T[] {
  // Erstelle eine Kopie des Arrays, um das Original nicht zu mutieren
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

export function getShuffledMaps() {
  return shuffle(mapItems);
}
