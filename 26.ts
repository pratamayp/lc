function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let unique = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[unique] = nums[i];
      unique++;
    }
  }

  return unique;
}

removeDuplicates([1, 1, 2]);
