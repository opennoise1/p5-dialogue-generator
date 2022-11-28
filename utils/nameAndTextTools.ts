const findRandomNumbers = (name: string) => {
  let random;
  let secondRandom;
  let thirdRandom;

  // Edge case: If name is just whitespace, we won't enter the loop so it doesn't run infinitely
  if (name.trim()) {
    // Choose a random character from the name.
    // If the character chosen is a blank space, choose again
    do {
      random = Math.floor(Math.random() * name.length);
    } while (name[random] === ' ');


    if (name.length >= 8) {
      // Pick a new random number to make sure it's on the left side of the name
      // That way we can ensure there's a nice balance to where the boxes are
      // and make sure the first random number comes before the second random number
      if (random > Math.floor(name.length / 2)) {
        while (name[random] === ' ' || random > Math.floor(name.length / 2)) {
          random = Math.floor(Math.random() * name.length);
        }
      }

      // Likewise, ensure the second random number is on the right half of the name
      // and at least a few numbers away from the first random number
      do {
        secondRandom = Math.floor(Math.random() * name.length);
      } while (name[secondRandom] === ' ' || secondRandom < Math.floor(name.length / 2) || Math.abs(secondRandom - random) <= 2);

      if (name.length >= 16) {
          if (random > (Math.floor((name.length / 3) - 1))) {
            while (name[random] === ' ' || random > Math.floor(name.length / 3)) {
              random = Math.floor(Math.random() * name.length);
            }
          }
          
          if (secondRandom > (2 * (Math.floor((name.length / 3) - 1)))) {
            while (name[secondRandom] === ' ' || secondRandom < Math.floor(name.length / 3) || secondRandom > (2 * (Math.floor(name.length / 3))) || Math.abs(secondRandom - random) <= 2) {
              secondRandom = Math.floor(Math.random() * name.length);
            }
          }
    
          do {
            thirdRandom = Math.floor(Math.random() * name.length);
          } while (name[thirdRandom] === ' ' || thirdRandom < (2 * Math.floor(name.length / 3)) || Math.abs(thirdRandom - secondRandom) <= 2);
        }
    } 

    return [random, secondRandom, thirdRandom];
  } else { 
    return [null, null, null]; 
  }
};

const findTextCoords = {
  // boxType: x, y (top row), y (middle row), y (bottom row)
  main: [500, 373, 403, 433],
  dancing: [440, 403, 433, 463],
  noPortrait: [470, 353, 383, 413],
  strikers: [450, 383, 413, 443],
}

export { findRandomNumbers, findTextCoords };