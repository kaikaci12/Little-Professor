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
  if (level == 1) {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } else if (level == 2) {
    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
  } else if (level == 3) {
    x = Math.floor(Math.random() * 1000);
    y = Math.floor(Math.random() * 1000);
  }

  return {
    x: x,
    y: y,
    sum: x + y,
  };
}

function askingQuestion() {
  let correctAnswers = 0;
  for (let i = 0; i < 10; i++) {
    const { x, y, sum } = generateRandomNumber(levelPrompt);
    let userAnswer = parseInt(prompt(`${x} + ${y} = `));
  }
}
// console.log(askingQuestion());
