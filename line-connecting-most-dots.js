// Imagine a scatterplot -- given a list of coordinates,
// find the slope and y-intercept of the line that connects the most dots.

const c = [
  [0, 0],
  [1, 0],
  [2, 5],
  [4, 2],
  [9, 8],
  [3, 6],
  [5, 2],

];

var calcLine = function(c1, c2) {
  let slope; let int;
  if(c1[0] === c2[0]) {
    slope = Infinity;
    int = c1[0];
  } else {
    slope = (c2[1] - c1[1]) / (c2[0] - c1[0]);
    int = c1[1] - (c1[0] * c1[0]);
  }

  return [slope, int];
};

var findLine = function(coords) {
  const seenLines = {};
  let maxDots = 0;
  let resLine;

  for (let i = 0; i < coords.length; i++) {
    for (let j = i + 1; j < coords.length; j++) {
      const line = calcLine(coords[i], coords[j]);
      if(!seenLines[line]) seenLines[line] = new Set();

      seenLines[line].add(coords[i]);
      seenLines[line].add(coords[j]);

      if(seenLines[line].size > maxDots) {
        maxDots = seenLines[line].size;
        resLine = line;
      }
    }
  }

  return ({
    slope: resLine[0],
    intercept: resLine[1],
    dots: maxDots
  });
};
