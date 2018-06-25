// Initially, there is a Robot at position (0, 0).
// Given a sequence of its moves, judge if this robot makes a circle,
// which means it moves back to the original place.
//
// The move sequence is represented by a string.
// And each move is represent by a character.
// The valid robot moves are R (Right), L (Left), U (Up) and D (down).
// The output should be true or false representing whether the robot makes a circle.

// Example 1:
  // Input: "UD"
  // Output: true

// Example 2:
  // Input: "LL"
  // Output: false

var judgeCircle = function(moves) {
  const change = {
    "U": 1,
    "D": -1,
    "L": -1,
    "R": 1,
  };

  let v = 0;
  let h = 0;

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    if (move === "U" || move === "D") {
      v += change[move];
    } else if (move === "L" || move === "R") {
      h += change[move];
    }
  }

  return v === 0 && h === 0;
};
