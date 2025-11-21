export const drawLetters = () => {
  // Implement this method for wave 1
  // !!!! Can refactor while loop and do a swap and pop to improve time complexity
  const letterPool = createLetterPool();
  const selectedIndex = [];
  const pickedLetters = [];
  const numTilesAllowed = 10;
  for (let i = 0; i < numTilesAllowed; i++) {
    let randIndex = randomMaxInclusive(0, letterPool.length - 1);
    while (selectedIndex.includes(randIndex)) {
      randIndex = randomMaxInclusive(0, letterPool.length - 1);
    };
    selectedIndex.push(randIndex);
    const randomLetter = letterPool[randIndex];
    pickedLetters.push(randomLetter);

  }
  return pickedLetters;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const wordLetterFreq = {};
  const handLetterFreq = {};

  for (let letter of input.toUpperCase()) {
    if (!lettersInHand.includes(letter)) {
      return false;
    } else {
      wordLetterFreq[letter] = (wordLetterFreq[letter] ?? 0) + 1;
    };
  };

  for (let letter of lettersInHand) {
    handLetterFreq[letter] = (handLetterFreq[letter] ?? 0) + 1;
  };

  for (let letter of input.toUpperCase()) {
    if (wordLetterFreq[letter] > handLetterFreq[letter]) {
      return false;
    }
  };

  return true;
};



export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

const createLetterPool = () => {
  const letterFrequencies = {
    A: 9, N: 6,
    B: 2, O: 8,
    C: 2, P: 2,
    D: 4, Q: 1,
    E: 12, R: 6,
    F: 2, S: 4,
    G: 3, T: 6,
    I: 9, V: 2,
    J: 1, W: 2,
    K: 1, X: 1,
    L: 4, Y: 2,
    M: 2, Z: 1
  };
  const letterPool = [];
  for (const [key, value] of Object.entries(letterFrequencies)) {
    const letterDuplicate = Array(value).fill(key);
    letterPool.push(...letterDuplicate);
  }
  return letterPool;
};

function randomMaxInclusive(min, max) {
  return Math.floor((Math.random()) * (max - min + 1)) + min;
}