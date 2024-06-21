function removeElement(nums: number[], val: number): number {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
}

removeElement([3, 2, 2, 3], 2);
