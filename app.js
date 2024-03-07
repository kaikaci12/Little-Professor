function chooseLevel(level) {
  while (isNaN(level) || level > 3 || level < 0) {
    level = Number(prompt("Level: "));
  }
  return level;
}

const levelPrompt = chooseLevel(prompt("Level: "));

function generateRandomNumber(level) {
  let x;
  let y;
}
