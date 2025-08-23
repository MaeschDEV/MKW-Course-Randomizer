function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * 30);
  window.location.href = `result.html?index=${randomIndex}`;
}
