// ------------------
// ----- SET UP -----
// ------------------

const Heaps = require('./heap.js');
const HeapNode = Heaps.HeapNode;
const Heap = Heaps.Heap;

function Person(id) {
  this.id = id;
}

function Bicycle(id) {
  this.id = id;
}

const p1 = new Person('A');
const p2 = new Person('B');
const p3 = new Person('C');
const personObjs = [p1, p2, p3];

const b1 = new Bicycle('a');
const b2 = new Bicycle('b');
const b3 = new Bicycle('c');
const bicycleObjs = [b1, b2, b3];

// c - - A -
// - - a - -
// C - - - -
// - - - - B
// - - - - b
// - - - - -

const part1 = [
  [b3, null, null, p1, null],
  [null, null, b1, null, null],
  [p3, null, null, null, null],
  [null, null, null, null, p2],
  [null, null, null, null, b2],
  [null, null, null, null, null]
];

// c - - A -
// - - a - -
// - - - - -
// - - - - B
// - - C - b
// - - - - -

const part2 = [
  [b3, null, null, p1, null],
  [null, null, b1, null, null],
  [null, null, null, null, null],
  [null, null, null, null, p2],
  [null, null, p3, null, b2],
  [null, null, null, null, null]
];

// ----- ASSUMPTIONS -----
// - all bikeIds and personIds exist => no need to check for invalidity
// - bikeIds and personIds don't clash
// - whenever our data changes, we are the ones inputting/changing data
  // > we should rerun the setup functions whenever there is a change
  //    in people/bicycles/positions

let peoplePositions = {};
let bicyclePositions = {};

const setupObjects = function(grid) {
  peoplePositions = {};
  bicyclePositions = {};

  grid.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      const current = grid[rowIdx][colIdx];
      if (current instanceof Person) {
        peoplePositions[current.id] = [rowIdx, colIdx];
      } else if (current instanceof Bicycle) {
        bicyclePositions[current.id] = [rowIdx, colIdx];
      }
    });
  });
};

// time complexity: O(xy), where x = # of rows in grid, y = # of columns in grid
// space complexity: O(p+b), where p = # of people, b = # of bikes

// ----- TEST -----
setupObjects(part1);
console.log(peoplePositions);
  // { A: [ 0, 3 ], C: [ 2, 0 ], B: [ 3, 4 ] }
console.log(bicyclePositions);
  // { c: [ 0, 0 ], a: [ 1, 2 ], b: [ 4, 4 ] }
// ----- TEST -----


// ------------------
// ----- PART 1 -----
// ------------------

const distanceByPos = function(personPos, bikePos) {
  return (Math.abs(personPos[0] - bikePos[0]) +
    Math.abs(personPos[1] - bikePos[1]));
};

// time complexity: O(1) - accessing specific indices is constant time
// space complexity: O(1) - not using additional space

  // ----- TEST -----
  console.log(distanceByPos([0, 0], [5, 5])); // 10
  console.log(distanceByPos([4, 2], [4, 2])); // 0
  console.log(distanceByPos([-1, 6], [7, 8])); // 10
  // ----- TEST -----


const distanceById = function(personId, bikeId) {
  const personPos = peoplePositions[personId];
  const bikePos = bicyclePositions[bikeId];

  return distanceByPos(personPos, bikePos);
};

// time complexity: O(1) - accessing specific indices is constant time
// space complexity: O(1) - only using 1 additional stack level

  // ----- TEST -----
  console.log(distanceById('A', 'a')); // 2
  console.log(distanceById('B', 'b')); // 1
  console.log(distanceById('C', 'c')); // 2
  // ----- TEST -----


const distanceByObj = function(person, bike) {
  return distanceById(person.id, bike.id);
};

// time complexity: O(1) - calling another function
// space complexity: O(1) - using additional stack level

// ------------------
// ----- PART 2 -----
// ------------------

// ----- TEST -----
setupObjects(part2);
console.log(peoplePositions);
  // { A: [ 0, 3 ], B: [ 3, 4 ], C: [ 4, 2 ] }
console.log(bicyclePositions);
  // { c: [ 0, 0 ], a: [ 1, 2 ], b: [ 4, 4 ] }
// ----- TEST -----

let mapOfDistances = new Heap();

const setupDistances = function(people, bicycles) {
  people.forEach((person) => {
    bicycles.forEach((bike) => {
      const distance = distanceByObj(person, bike);
      const node = new HeapNode(person.id, bike.id, distance);

      mapOfDistances.push(node);
    });
  });

  return mapOfDistances;
};

// time complexity: O(pb), where p = # of people, b = # of bikes
// space complexity: O(pb), where p = # of people, b = # of bikes
  // > creating a new node for every person x bike combination
  // > heap size is pb

// ----- TEST -----
console.log(setupDistances(personObjs, bicycleObjs));
  // returns: Heap {
  //   store: [
  //     HeapNode { person: 'B', bike: 'b', distance: 1 },
  //     HeapNode { person: 'A', bike: 'a', distance: 2 },
  //     HeapNode { person: 'C', bike: 'b', distance: 2 },
  //     HeapNode { person: 'A', bike: 'c', distance: 3 },
  //     HeapNode { person: 'C', bike: 'a', distance: 3 },
  //     HeapNode { person: 'B', bike: 'a', distance: 4 },
  //     HeapNode { person: 'A', bike: 'b', distance: 5 },
  //     HeapNode { person: 'C', bike: 'c', distance: 6 },
  //     HeapNode { person: 'B', bike: 'c', distance: 7 }
  //   ]
  // }
// ----- TEST -----

const findPairs = function(distanceMap) {
  const pairs = {
    bike: {},
    person: {}
  };

  while (distanceMap.count() > 0) {
    const current = distanceMap.extract();

    if (!pairs.person[current.person] && !pairs.bike[current.bike]) {
      pairs.person[current.person] = current.bike;
      pairs.bike[current.bike] = current.person;
    }
  }

  return pairs;
};

// time complexity: O(pb), where p = # of people, b = # of bikes
  // > pb is the size of the heap we are extracting from
// space complexity: O(min(b, p)), where p = # of people, b = # of bikes

// ----- TEST -----
console.log(findPairs(mapOfDistances));
  // {
  //   bike: { b: 'B', c: 'C', a: 'A' },
  //   person: { B: 'b', C: 'c', A: 'a' }
  // }
// ----- TEST -----
