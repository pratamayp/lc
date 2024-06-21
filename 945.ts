function minIncrementForUnique1(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let numTracker = 0;
  let minIncrement = 0;

  for (const num of nums) {
    numTracker = Math.max(numTracker, num);
    minIncrement += numTracker - num;
    numTracker++;
  }
  return minIncrement;
}

function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let moves = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      let incr = nums[i - 1] - nums[i] + 1;
      nums[i] += incr;
      moves += incr;
    }
  }
  return moves;
}

minIncrementForUnique([1, 2, 2]);
minIncrementForUnique1([1, 2, 2]);
