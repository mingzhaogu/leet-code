// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// Example 1:
  // Input: nums = [4,5,6,7,0,1,2], target = 0
  // Output: 4
//
// Example 2:
  // Input: nums = [4,5,6,7,0,1,2], target = 3
  // Output: -1

var search = function(nums, target) {
  if (nums.length === 0) return -1;

  const midIdx = Math.floor((nums.length) / 2);
  const left = nums[0];
  const right = nums[midIdx];
  if (left === target) return 0;
  if (right === target) return midIdx;

  const between = function(min, max, num) {
    return (num > min && num < max);
  };

  const takeLeft = function() {
    if ((left < right) && between(left, right, target)) {
      return true;
    } else if ((right < left) && !between(right, left, target)) {
      return true;
    } else {
      return false;
    }
  };

  let nextRec;
  if (takeLeft) {
    nextRec = search(nums.slice(0, midIdx), target);

    if (nextRec === -1) return -1;
    else return nextRec;
  } else {
    nextRec = search(nums.slice(0, midIdx), target);

    if (nextRec === -1) return -1;
    else return nextRec;
  }

  // if (left < right) {
  //   if (target > left && target < right) {
  //     nextRec = search(nums.slice(0, midIdx), target);
  //
  //     if (nextRec === -1) return -1;
  //     else return nextRec;
  //   } else {
  //     nextRec = search(nums.slice(midIdx + 1), target);
  //
  //     if (nextRec === -1) return -1;
  //     else return midIdx + 1 + nextRec;
  //   }
  // } else {
  //   if (target > right && target < left) {
  //     nextRec = search(nums.slice(midIdx + 1), target);
  //
  //     if (nextRec === -1) return -1;
  //     else return midIdx + 1 + nextRec;
  //   } else {
  //     nextRec = search(nums.slice(0, midIdx), target);
  //
  //     if (nextRec === -1) return -1;
  //     else return nextRec;
  //   }
  // }
};
