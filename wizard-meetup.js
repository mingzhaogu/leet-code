// There are 10 people at a wizard meetup.
// Each wizard has levels 0 - 9 (the index of the input) and
// knows a few other wizards there.
// Your job is to find the cheapest way for wizard 0 to meet wizard 9.
// Introductions have a cost that equals the square of the difference in levels.

// Goal: Level 0 wizard wants to meet level 9 using the fewest possible magic points.
// Cost: square of difference of levels
// The index of the array represents the level (0-9)
// the value is an array with the index of the other people each person knows.
// Note that relationships are one directional (e.g. 2 can introduce you to 3 but not vice versa)

const relationships = [
  [1, 2, 3],      // wizard 0 knows 1, 2, 3
  [8, 6, 4],      // wizard 1 knows 8, 6, 4
  [7, 8, 3],      // wizard 2 knows 7, 8, 3
  [8, 1],         // wizard 3 knows 8, 1
  [6],            // wizard 4 knows 6
  [8, 7],         // wizard 5 knows 8, 7
  [9, 4],         // wizard 6 knows 9, 4
  [4, 6],         // wizard 7 knows 4, 6
  [1],            // wizard 8 knows 1
  [1, 4],         // wizard 9 knows 1, 4
];

var wizardMeetup = function(wizards) {
  
};

console.log(wizardMeetup(relationships));
