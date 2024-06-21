function searchInsert(nums: number[], target: number): number {
  const isMatch = nums.indexOf(target);

  if (isMatch !== -1) {
    return isMatch;
  } else {
    nums.push(target);
    nums.sort((a, b) => a - b);
    return nums.indexOf(target);
  }
}

searchInsert([1, 3, 5, 6], 2);
