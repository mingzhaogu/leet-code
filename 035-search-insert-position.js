// Given a sorted array and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.

// Example 1:
//   Input: [1,3,5,6], 5
//   Output: 2
//
// Example 2:
//   Input: [1,3,5,6], 2
//   Output: 1
//
// Example 3:
//   Input: [1,3,5,6], 7
//   Output: 4
//
// Example 4:
//   Input: [1,3,5,6], 0
//   Output: 0

var searchInsert = function(nums, target) {
  if (nums[0] > target || nums.length < 1) return 0;
  if (nums[nums.length - 1] < target) return nums.length;

  const mid = Math.floor(nums.length / 2);

  if (nums[mid] === target) return mid;
  else if (nums[mid] > target) return searchInsert(nums.slice(0, mid), target);
  else return searchInsert(nums.slice(mid + 1), target) + (mid + 1);
};
