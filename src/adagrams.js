export const drawLetters = () => {
  // Implement this method for wave 1
    const letterPool = createLetterPool();

};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

const createLetterPool = () => {
  const letterFrequencies = {
    A : 9,	N : 6,
    B : 2,	O : 8,
    C : 2,	P : 2,
    D : 4,	Q : 1,
    E : 12,	R : 6,
    F : 2,	S : 4,
    G : 3,	T : 6,
    I : 9,	V : 2,
    J : 1,	W : 2,
    K : 1,	X : 1,
    L : 4,	Y : 2,
    M : 2,	Z : 1
  };
  const letterPool = [];
  for (const [key, value] of Object.entries(letterFrequencies)) {
    const letterDuplicate = Array(value).fill(key);
    letterPool.push(...letterDuplicate);
  }
  return letterPool;
};
