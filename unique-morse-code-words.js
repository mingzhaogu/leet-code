// International Morse Code defines a standard encoding
// where each letter is mapped to a series of dots and dashes, as follows:
// "a" maps to ".-",
// "b" maps to "-...",
// "c" maps to "-.-.", and so on.
//
// For convenience, the full table for the 26 letters
// of the English alphabet is given below:
// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written
// as a concatenation of the Morse code of each letter.
//
// For example, "cab" can be written as "-.-.-....-",
// (which is the concatenation "-.-." + "-..." + ".-").
// We'll call such a concatenation, the transformation of a word.
//
// Return the number of different transformations among all words we have.

const letters = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
};

var uniqueMorseRepresentations = function(words) {
  let combos = new Set();

  for (let i = 0; i < words.length; i++) {
    let code = "";

    for (let j = 0; j < words[i].length; j++) {
      code += letters[words[i][j]];
    }

    combos.add(code);
  }

  return combos.size;
};
